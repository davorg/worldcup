var stadiums = {
   "AUS" : {
      "city" : "Sydney",
      "code" : "AUS",
      "name" : "Stadium Australia",
      "timezone" : "Australia/Sydney",
      "utcoffset" : "10"
   },
   "EDE" : {
      "city" : "Auckland",
      "code" : "EDE",
      "name" : "Eden Park",
      "timezone" : "Pacific/Auckland",
      "utcoffset" : "12"
   },
   "FOR" : {
      "city" : "Dunedin",
      "code" : "FOR",
      "name" : "Forsyth Barr Stadium",
      "timezone" : "Pacific/Auckland",
      "utcoffset" : "12"
   },
   "HIN" : {
      "city" : "Adelaide",
      "code" : "HIN",
      "name" : "Hindmarsh Stadium",
      "timezone" : "Australia/Adelaide",
      "utcoffset" : "9.5"
   },
   "LP" : {
      "city" : "Brisbane",
      "code" : "LP",
      "name" : "Lang Park",
      "timezone" : "Australia/Sydney",
      "utcoffset" : "10"
   },
   "MEL" : {
      "city" : "Melbourne",
      "code" : "MEL",
      "name" : "Melbourne Rectangular Stadium",
      "timezone" : "Australia/Melbourne",
      "utcoffset" : "10"
   },
   "PER" : {
      "city" : "Perth",
      "code" : "PER",
      "name" : "Perth Rectangular Stadium",
      "timezone" : "Australia/Perth",
      "utcoffset" : "8"
   },
   "SYD" : {
      "city" : "Sydney",
      "code" : "SYD",
      "name" : "Sydney Football Stadium",
      "timezone" : "Australia/Sydney",
      "utcoffset" : "10"
   },
   "WAI" : {
      "city" : "Hamilton",
      "code" : "WAI",
      "name" : "Waikato Stadium",
      "timezone" : "Pacific/Auckland",
      "utcoffset" : "12"
   },
   "WEL" : {
      "city" : "Wellington",
      "code" : "WEL",
      "name" : "Wellington Regional Stadium",
      "timezone" : "Pacific/Auckland",
      "utcoffset" : "12"
   }
}
;

var games = [
   {
      "class" : "round-group-a stadium-ede team-new-zealand team-norway",
      "date" : "2023-07-20T19:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "New Zealand",
      "team2" : "Norway"
   },
   {
      "class" : "round-group-b stadium-aus team-australia team-republic-of-ireland",
      "date" : "2023-07-20T20:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "AUS",
      "team1" : "Australia",
      "team2" : "Republic of Ireland"
   },
   {
      "class" : "round-group-b stadium-mel team-nigeria team-canada",
      "date" : "2023-07-21T12:30:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Nigeria",
      "team2" : "Canada"
   },
   {
      "class" : "round-group-a stadium-for team-phillippines team-switzerland",
      "date" : "2023-07-21T17:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Phillippines",
      "team2" : "Switzerland"
   },
   {
      "class" : "round-group-c stadium-wel team-spain team-costa-rica",
      "date" : "2023-07-21T19:30:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Spain",
      "team2" : "Costa Rica"
   },
   {
      "class" : "round-group-e stadium-ede team-united-states team-vietnam",
      "date" : "2023-07-22T13:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "United States",
      "team2" : "Vietnam"
   },
   {
      "class" : "round-group-c stadium-wai team-zambia team-japan",
      "date" : "2023-07-22T19:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "WAI",
      "team1" : "Zambia",
      "team2" : "Japan"
   },
   {
      "class" : "round-group-d stadium-lp team-england team-haiti",
      "date" : "2023-07-22T19:30:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "LP",
      "team1" : "England",
      "team2" : "Haiti"
   },
   {
      "class" : "round-group-e stadium-for team-netherlands team-portugual",
      "date" : "2023-07-22T19:30:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Netherlands",
      "team2" : "Portugual"
   },
   {
      "class" : "round-group-d stadium-per team-denmark team-china",
      "date" : "2023-07-22T20:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "PER",
      "team1" : "Denmark",
      "team2" : "China"
   },
   {
      "class" : "round-group-g stadium-wel team-sweden team-south-africa",
      "date" : "2023-07-23T17:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Sweden",
      "team2" : "South Africa"
   },
   {
      "class" : "round-group-f stadium-syd team-france team-jamaica",
      "date" : "2023-07-23T20:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "SYD",
      "team1" : "France",
      "team2" : "Jamaica"
   },
   {
      "class" : "round-group-g stadium-ede team-italy team-argentina",
      "date" : "2023-07-24T18:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Italy",
      "team2" : "Argentina"
   },
   {
      "class" : "round-group-h stadium-mel team-germany team-morocco",
      "date" : "2023-07-24T18:30:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Germany",
      "team2" : "Morocco"
   },
   {
      "class" : "round-group-f stadium-hin team-brazil team-panama",
      "date" : "2023-07-24T20:30:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "HIN",
      "team1" : "Brazil",
      "team2" : "Panama"
   },
   {
      "class" : "round-group-h stadium-syd team-columbia team-south-korea",
      "date" : "2023-07-25T12:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "SYD",
      "team1" : "Columbia",
      "team2" : "South Korea"
   },
   {
      "class" : "round-group-a stadium-wel team-new-zealand team-phillipines",
      "date" : "2023-07-25T17:30:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "New Zealand",
      "team2" : "Phillipines"
   },
   {
      "class" : "round-group-a stadium-wai team-switzerland team-norway",
      "date" : "2023-07-25T20:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "WAI",
      "team1" : "Switzerland",
      "team2" : "Norway"
   },
   {
      "class" : "round-group-c stadium-for team-japan team-costa-rica",
      "date" : "2023-07-26T17:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Japan",
      "team2" : "Costa Rica"
   },
   {
      "class" : "round-group-c stadium-ede team-spain team-zambia",
      "date" : "2023-07-26T19:30:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Spain",
      "team2" : "Zambia"
   },
   {
      "class" : "round-group-b stadium-per team-canada team-republic-of-ireland",
      "date" : "2023-07-26T20:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "PER",
      "team1" : "Canada",
      "team2" : "Republic of Ireland"
   },
   {
      "class" : "round-group-e stadium-wel team-united-states team-netherlands",
      "date" : "2023-07-27T13:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "United States",
      "team2" : "Netherlands"
   },
   {
      "class" : "round-group-e stadium-wai team-portugual team-vietnam",
      "date" : "2023-07-27T19:30:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "WAI",
      "team1" : "Portugual",
      "team2" : "Vietnam"
   },
   {
      "class" : "round-group-b stadium-lp team-australia team-nigeria",
      "date" : "2023-07-27T20:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "LP",
      "team1" : "Australia",
      "team2" : "Nigeria"
   },
   {
      "class" : "round-group-g stadium-for team-argentina team-south-africa",
      "date" : "2023-07-28T12:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Argentina",
      "team2" : "South Africa"
   },
   {
      "class" : "round-group-d stadium-syd team-england team-denmark",
      "date" : "2023-07-28T18:30:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "SYD",
      "team1" : "England",
      "team2" : "Denmark"
   },
   {
      "class" : "round-group-d stadium-hin team-china team-haiti",
      "date" : "2023-07-28T20:30:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "HIN",
      "team1" : "China",
      "team2" : "Haiti"
   },
   {
      "class" : "round-group-g stadium-wel team-sweden team-italy",
      "date" : "2023-07-29T19:30:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Sweden",
      "team2" : "Italy"
   },
   {
      "class" : "round-group-f stadium-lp team-france team-brazil",
      "date" : "2023-07-29T20:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "LP",
      "team1" : "France",
      "team2" : "Brazil"
   },
   {
      "class" : "round-group-f stadium-per team-panama team-jamaica",
      "date" : "2023-07-29T20:30:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "PER",
      "team1" : "Panama",
      "team2" : "Jamaica"
   },
   {
      "class" : "round-group-h stadium-hin team-south-koria team-morocco",
      "date" : "2023-07-30T14:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "HIN",
      "team1" : "South Koria",
      "team2" : "Morocco"
   },
   {
      "class" : "round-group-a stadium-for team-switzerland team-new-zealand",
      "date" : "2023-07-30T19:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Switzerland",
      "team2" : "New Zealand"
   },
   {
      "class" : "round-group-a stadium-ede team-norway team-phillipines",
      "date" : "2023-07-30T19:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Norway",
      "team2" : "Phillipines"
   },
   {
      "class" : "round-group-h stadium-syd team-germany team-colombia",
      "date" : "2023-07-30T19:30:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "SYD",
      "team1" : "Germany",
      "team2" : "Colombia"
   },
   {
      "class" : "round-group-c stadium-wel team-japan team-spain",
      "date" : "2023-07-31T19:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Japan",
      "team2" : "Spain"
   },
   {
      "class" : "round-group-c stadium-wai team-costa-rica team-zambia",
      "date" : "2023-07-31T19:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "WAI",
      "team1" : "Costa Rica",
      "team2" : "Zambia"
   },
   {
      "class" : "round-group-b stadium-mel team-canada team-australia",
      "date" : "2023-07-31T20:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Canada",
      "team2" : "Australia"
   },
   {
      "class" : "round-group-b stadium-lp team-republic-of-ireland team-nigeria",
      "date" : "2023-07-31T20:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "LP",
      "team1" : "Republic of Ireland",
      "team2" : "Nigeria"
   },
   {
      "class" : "round-group-d stadium-per team-haiti team-denmark",
      "date" : "2023-08-01T19:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "PER",
      "team1" : "Haiti",
      "team2" : "Denmark"
   },
   {
      "class" : "round-group-e stadium-ede team-portugual team-united-states",
      "date" : "2023-08-01T19:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Portugual",
      "team2" : "United States"
   },
   {
      "class" : "round-group-e stadium-for team-vietnam team-netherlands",
      "date" : "2023-08-01T19:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "FOR",
      "team1" : "Vietnam",
      "team2" : "Netherlands"
   },
   {
      "class" : "round-group-d stadium-hin team-china team-england",
      "date" : "2023-08-01T20:30:00",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "HIN",
      "team1" : "China",
      "team2" : "England"
   },
   {
      "class" : "round-group-g stadium-wai team-argentina team-sweden",
      "date" : "2023-08-02T19:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "WAI",
      "team1" : "Argentina",
      "team2" : "Sweden"
   },
   {
      "class" : "round-group-g stadium-wel team-south-africa team-italy",
      "date" : "2023-08-02T19:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "WEL",
      "team1" : "South Africa",
      "team2" : "Italy"
   },
   {
      "class" : "round-group-f stadium-syd team-panama team-france",
      "date" : "2023-08-02T20:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "SYD",
      "team1" : "Panama",
      "team2" : "France"
   },
   {
      "class" : "round-group-f stadium-mel team-jamaica team-brazil",
      "date" : "2023-08-02T20:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Jamaica",
      "team2" : "Brazil"
   },
   {
      "class" : "round-group-h stadium-per team-morocco team-colombia",
      "date" : "2023-08-03T18:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "PER",
      "team1" : "Morocco",
      "team2" : "Colombia"
   },
   {
      "class" : "round-group-h stadium-lp team-south-korea team-germany",
      "date" : "2023-08-03T20:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "LP",
      "team1" : "South Korea",
      "team2" : "Germany"
   },
   {
      "class" : "round-round-of-16 stadium-ede",
      "date" : "2023-08-05T17:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Winner Group A",
      "team2" : "Runner-up Group C"
   },
   {
      "class" : "round-round-of-16 stadium-wel",
      "date" : "2023-08-05T20:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Winner Group C",
      "team2" : "Runner-up Group A"
   },
   {
      "class" : "round-round-of-16 stadium-syd",
      "date" : "2023-08-06T13:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "SYD",
      "team1" : "Winner Group E",
      "team2" : "Runner-up Group G"
   },
   {
      "class" : "round-round-of-16 stadium-mel",
      "date" : "2023-08-06T19:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Winner Group G",
      "team2" : "Runner-up Group E"
   },
   {
      "class" : "round-round-of-16 stadium-lp",
      "date" : "2023-08-07T17:30:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "LP",
      "team1" : "Winner Group D",
      "team2" : "Runner-up Group B"
   },
   {
      "class" : "round-round-of-16 stadium-aus",
      "date" : "2023-08-07T20:30:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "AUS",
      "team1" : "Winner Group B",
      "team2" : "Runner-up Group D"
   },
   {
      "class" : "round-round-of-16 stadium-mel",
      "date" : "2023-08-08T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "MEL",
      "team1" : "Winner Group H",
      "team2" : "Runner-up Group F"
   },
   {
      "class" : "round-round-of-16 stadium-hin",
      "date" : "2023-08-08T20:30:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "HIN",
      "team1" : "Winner Group F",
      "team2" : "Runner-up Group H"
   },
   {
      "class" : "round-quarter-finals stadium-wel",
      "date" : "2023-08-11T13:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "result" : null,
      "stadium" : "WEL",
      "team1" : "Winner Match 49",
      "team2" : "Winner Match 51"
   },
   {
      "class" : "round-quarter-finals stadium-ede",
      "date" : "2023-08-11T19:30:00",
      "description" : "Quarter Finals",
      "group" : null,
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Winner Match 50",
      "team2" : "Winner Match 52"
   },
   {
      "class" : "round-quarter-finals stadium-lp",
      "date" : "2023-08-12T17:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "result" : null,
      "stadium" : "LP",
      "team1" : "Winner Match 53",
      "team2" : "Winner Match 55"
   },
   {
      "class" : "round-quarter-finals stadium-aus",
      "date" : "2023-08-12T20:30:00",
      "description" : "Quarter Finals",
      "group" : null,
      "result" : null,
      "stadium" : "AUS",
      "team1" : "Winner Match 54",
      "team2" : "Winner Match 56"
   },
   {
      "class" : "round-semi-finals stadium-ede",
      "date" : "2023-08-15T20:00:00",
      "description" : "Semi Finals",
      "group" : null,
      "result" : null,
      "stadium" : "EDE",
      "team1" : "Winner QF1",
      "team2" : "Winner QF2"
   },
   {
      "class" : "round-semi-finals stadium-aus",
      "date" : "2023-08-16T20:00:00",
      "description" : "Semi Finals",
      "group" : null,
      "result" : null,
      "stadium" : "AUS",
      "team1" : "Winner QF3",
      "team2" : "Winner QF4"
   },
   {
      "class" : "round-finals stadium-lp team-loser-sf1 team-loser-sf2",
      "date" : "2023-08-19T18:00:00",
      "description" : "Finals",
      "group" : null,
      "result" : null,
      "stadium" : "LP",
      "team1" : "Loser SF1",
      "team2" : "Loser SF2"
   },
   {
      "class" : "round-finals stadium-aus",
      "date" : "2023-08-20T20:00:00",
      "description" : "Finals",
      "group" : null,
      "result" : null,
      "stadium" : "AUS",
      "team1" : "Winner SF1",
      "team2" : "Winner SF2"
   }
]
;

