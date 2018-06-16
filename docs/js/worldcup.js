$(document).ready(function() {
  var yourtimezone = moment.tz.guess();
  $('#yourtimezone').html(yourtimezone);

  for (i = 0; i < games.length; i++) {
    var stadium = stadiums_lookup[games[i].stadium];
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
      games:    games
    });
    $('#list').html(rendered);
  });

  var select = $('select#round');
  $.each(rounds, function(i, r) {
    select.append(new Option(r.name, r.class, true, true));
  });
  select.val('');

  select = $('select#team');
  $.each(teams, function(i, r) {
    select.append(new Option(r.name, r.class, true, true));
  });
  select.val('');

  select = $('select#stadium');
  $.each(stadiums, function(i, r) {
    select.append(new Option(r.name, r.code.toLowerCase(), true, true));
  });
  select.val('');

  $('.filter').change(function(e) {
    e.preventDefault();
    var round_sel   = $('select#round').val();
    var team_sel    = $('select#team').val();
    var stadium_sel = $('select#stadium').val();
    var sel_class = '';
    if (round_sel) {
      sel_class = '.round-' + round_sel;
    }
    if (team_sel) {
      sel_class = sel_class + '.team-' + team_sel;
    }
    if (stadium_sel) {
      sel_class = sel_class + '.stadium-' + stadium_sel;
    }
    if (sel_class) {
      console.log('Showing ' + sel_class);
      $('game').hide(400);
      console.log($(sel_class));
      $(sel_class).show(400);
    } else {
      console.log('Showing everything');
      $('game').show(400);
    }
  });
});
