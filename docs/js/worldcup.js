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

function setCookie(key, value, expiry) {
  let expires = new Date();
  expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
  // console.log('Setting ' + key + ' to ' + value);
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  let name = key + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      // console.log('Getting ' + key + ' as ' + c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showHide(show) {
  if (show) {
    $('.past').show(400);
  } else {
    $('.past').hide(400);
  }
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
    let showpast = getCookie('showpast') == 0 ? false : true;
    // console.log('showpast is ' + showpast);
    $('#showpast').prop('checked', showpast);
    showHide(showpast);
  });

  $('#showpast').click(function() {
    setCookie('showpast', (this.checked ? 1 : 0), 30);
    showHide(this.checked);
  });
});
