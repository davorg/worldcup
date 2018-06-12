$(document).ready(function() {
  var yourtimezone = moment.tz.guess();
  $('#yourtimezone').html(yourtimezone);

  for (i = 0; i < games.length; i++) {
    var stadium = stadiums[games[i].stadium];
    games[i].stadium = stadium.name;
    games[i].city = stadium.city;
    var time = moment.tz(games[i].date, 'UTC');
    games[i].timeutc = time.format('llll');
    games[i].timestadium = time.clone().tz(stadium.timezone).format('llll');
    games[i].timeuser = time.clone().tz(yourtimezone).format('llll');
  }

  $.get('templates.html', function(templates) {
    var template = $(templates).filter('#games-template').html();
    var rendered = Mustache.render(template, {
      teams:    teams,
      games:    games,
      stadiums: stadiums
    });
    $('#list').html(rendered);
  });
});
