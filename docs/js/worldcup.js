$(document).ready(function() {
  var yourtimezone = moment.tz.guess();
  $('#yourtimezone').html(yourtimezone);
  var now = moment();

  for (i = 0; i < games.length; i++) {
    var stadium = stadiums[games[i].stadium];
    var time = moment.tz(games[i].date, 'UTC');
    games[i].class = games[i].class + ' ' + game_class(now, games[i]);
    games[i].stadium = stadium.name;
    games[i].city = stadium.city;
    games[i].timeutc = time.format('llll');
    games[i].timestadium = time.clone().tz(stadium.timezone).format('llll');
    games[i].timeuser = time.clone().tz(yourtimezone).format('llll');
  }

  $.get('templates.html', function(templates) {
    var template = $(templates).filter('#games-template').html();
    var rendered = Mustache.render(template, {
      games:    games,
      stadiums: stadiums
    });
    $('#list').html(rendered);
  });
  console.log($('.past'));
  $('.past').hide(400);
});

function game_class(now, a_game) {
  var game_start = moment.tz(a_game.date, 'UTC');
  var game_end   = game_start.clone().add(105, 'minutes');

  if (game_end < now) {
    return 'past';
  }
  if (game_start <= now && now <= game_end) {
    return 'present';
  }
  return 'future';
}
