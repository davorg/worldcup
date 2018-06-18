function gameClass(now, aGame) {
  var gameStart = moment.tz(aGame.date, 'UTC');
  var gameEnd   = gameStart.clone().add(105, 'minutes');

  if (gameEnd < now) {
    return 'past';
  }
  if (gameStart <= now && now <= gameEnd) {
    return 'present';
  }

  return 'future';
}

$(document).ready(function() {
  var now;
  var stadium;
  var time;
  var template;
  var rendered;
  var yourtimezone;

  yourtimezone = moment.tz.guess();
  $('#yourtimezone').html(yourtimezone);
  now = moment();

  for (i = 0; i < games.length; i++) {
    stadium = stadiums[games[i].stadium];
    time = moment.tz(games[i].date, 'UTC');
    games[i].class = games[i].class + ' ' + gameClass(now, games[i]);
    games[i].stadium = stadium.name;
    games[i].city = stadium.city;
    games[i].timeutc = time.format('llll');
    games[i].timestadium = time.clone().tz(stadium.timezone).format('llll');
    games[i].timeuser = time.clone().tz(yourtimezone).format('llll');
  }

  $.get('templates.html', function(templates) {
    template = $(templates).filter('#games-template').html();
    rendered = Mustache.render(template, {
      games:    games,
      stadiums: stadiums
    });
    $('#list').html(rendered);
    // console.log($('.past'));
    $('.past').hide(400);
  });
});
