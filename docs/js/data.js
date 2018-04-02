var stadiums = {
   "COS" : {
      "code" : "COS",
      "timezone" : "Europe/Samara",
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "city" : "Samara"
   },
   "KAZ" : {
      "name" : "Kazan Arena",
      "city" : "Kazan",
      "code" : "KAZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "NIZ" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "NIZ",
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium"
   },
   "KRE" : {
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "code" : "KRE"
   },
   "CEN" : {
      "utcoffset" : "5",
      "timezone" : "Asia/Yekaterinburg",
      "code" : "CEN",
      "city" : "Yekaterinburg",
      "name" : "Central Stadium"
   },
   "LUZ" : {
      "code" : "LUZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Luzhniki Stadium",
      "city" : "Moscow"
   },
   "KAL" : {
      "city" : "Kaliningrad",
      "name" : "Kaliningrad Stadium",
      "timezone" : "Europe/Kaliningrad",
      "code" : "KAL",
      "utcoffset" : "2"
   },
   "OTK" : {
      "timezone" : "Europe/Moscow",
      "code" : "OTK",
      "utcoffset" : "3",
      "city" : "Moscow",
      "name" : "Otkritie Arena"
   },
   "MOR" : {
      "timezone" : "Europe/Moscow",
      "code" : "MOR",
      "utcoffset" : "3",
      "city" : "Saransk",
      "name" : "Mordovia Arena"
   },
   "VOL" : {
      "timezone" : "Europe/Volgograd",
      "code" : "VOL",
      "utcoffset" : "3",
      "city" : "Volgograd",
      "name" : "Volgograd Arena"
   },
   "ROS" : {
      "timezone" : "Europe/Moscow",
      "code" : "ROS",
      "utcoffset" : "3",
      "city" : "Rostov-on-Don",
      "name" : "Rostov Arena"
   },
   "FIS" : {
      "timezone" : "Europe/Moscow",
      "utcoffset" : "4",
      "code" : "FIS",
      "city" : "Sochi",
      "name" : "Fisht Olympic Stadium"
   }
}
;

var games = [
   {
      "result" : null,
      "team1" : "Russia",
      "team2" : "Saudi Arabia",
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00",
      "description" : "Group A",
      "stadium" : "LUZ"
   },
   {
      "date" : "2018-06-15T12:00:00",
      "group" : "Group A",
      "stadium" : "CEN",
      "description" : "Group A",
      "result" : null,
      "team1" : "Egypt",
      "team2" : "Uruguay"
   },
   {
      "date" : "2018-06-15T15:00:00",
      "group" : "Group B",
      "stadium" : "KRE",
      "description" : "Group B",
      "result" : null,
      "team1" : "Morocco",
      "team2" : "Iran"
   },
   {
      "team1" : "Portugal",
      "team2" : "Spain",
      "result" : null,
      "stadium" : "FIS",
      "description" : "Group B",
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00"
   },
   {
      "stadium" : "KAZ",
      "description" : "Group C",
      "date" : "2018-06-16T10:00:00",
      "group" : "Group C",
      "team2" : "Australia",
      "team1" : "France",
      "result" : null
   },
   {
      "stadium" : "OTK",
      "description" : "Group D",
      "group" : "Group D",
      "date" : "2018-06-16T13:00:00",
      "team1" : "Argentina",
      "team2" : "Iceland",
      "result" : null
   },
   {
      "description" : "Group C",
      "stadium" : "MOR",
      "date" : "2018-06-16T16:00:00",
      "group" : "Group C",
      "team2" : "Denmark",
      "team1" : "Peru",
      "result" : null
   },
   {
      "description" : "Group D",
      "stadium" : "KAL",
      "group" : "Group D",
      "date" : "2018-06-16T19:00:00",
      "team1" : "Croatia",
      "team2" : "Nigeria",
      "result" : null
   },
   {
      "description" : "Group E",
      "stadium" : "COS",
      "date" : "2018-06-17T12:00:00",
      "group" : "Group E",
      "team1" : "Costa Rica",
      "team2" : "Serbia",
      "result" : null
   },
   {
      "stadium" : "LUZ",
      "description" : "Group F",
      "date" : "2018-06-17T15:00:00",
      "group" : "Group F",
      "team2" : "Mexico",
      "team1" : "Germany",
      "result" : null
   },
   {
      "result" : null,
      "team2" : "Switzerland",
      "team1" : "Brazil",
      "date" : "2018-06-17T18:00:00",
      "group" : "Group E",
      "description" : "Group E",
      "stadium" : "ROS"
   },
   {
      "description" : "Group F",
      "stadium" : "NIZ",
      "group" : "Group F",
      "date" : "2018-06-18T12:00:00",
      "team1" : "Sweden",
      "team2" : "Korea Republic",
      "result" : null
   },
   {
      "stadium" : "FIS",
      "description" : "Group G",
      "group" : "Group G",
      "date" : "2018-06-18T15:00:00",
      "team1" : "Belgium",
      "team2" : "Panama",
      "result" : null
   },
   {
      "date" : "2018-06-18T18:00:00",
      "group" : "Group G",
      "description" : "Group G",
      "stadium" : "VOL",
      "result" : null,
      "team1" : "Tunisia",
      "team2" : "England"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-19T12:00:00",
      "description" : "Group H",
      "stadium" : "MOR",
      "result" : null,
      "team1" : "Colombia",
      "team2" : "Japan"
   },
   {
      "team2" : "Senegal",
      "team1" : "Poland",
      "result" : null,
      "stadium" : "OTK",
      "description" : "Group H",
      "group" : "Group H",
      "date" : "2018-06-19T15:00:00"
   },
   {
      "group" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "description" : "Group A",
      "stadium" : "KRE",
      "result" : null,
      "team1" : "Russia",
      "team2" : "Egypt"
   },
   {
      "result" : null,
      "team1" : "Portugal",
      "team2" : "Morocco",
      "group" : "Group B",
      "date" : "2018-06-20T12:00:00",
      "stadium" : "LUZ",
      "description" : "Group B"
   },
   {
      "team1" : "Uruguay",
      "team2" : "Saudi Arabia",
      "result" : null,
      "description" : "Group A",
      "stadium" : "ROS",
      "date" : "2018-06-20T15:00:00",
      "group" : "Group A"
   },
   {
      "result" : null,
      "team2" : "Spain",
      "team1" : "Iran",
      "date" : "2018-06-20T18:00:00",
      "group" : "Group B",
      "stadium" : "KAZ",
      "description" : "Group B"
   },
   {
      "result" : null,
      "team1" : "Denmark",
      "team2" : "Australia",
      "group" : "Group C",
      "date" : "2018-06-21T12:00:00",
      "stadium" : "COS",
      "description" : "Group C"
   },
   {
      "result" : null,
      "team1" : "France",
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "group" : "Group C",
      "description" : "Group C",
      "stadium" : "CEN"
   },
   {
      "group" : "Group D",
      "date" : "2018-06-21T18:00:00",
      "description" : "Group D",
      "stadium" : "NIZ",
      "result" : null,
      "team1" : "Argentina",
      "team2" : "Croatia"
   },
   {
      "group" : "Group E",
      "date" : "2018-06-22T12:00:00",
      "stadium" : "KRE",
      "description" : "Group E",
      "result" : null,
      "team2" : "Costa Rica",
      "team1" : "Brazil"
   },
   {
      "team2" : "Iceland",
      "team1" : "Nigeria",
      "result" : null,
      "stadium" : "VOL",
      "description" : "Group D",
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D"
   },
   {
      "team1" : "Serbia",
      "team2" : "Switzerland",
      "result" : null,
      "description" : "Group E",
      "stadium" : "KAL",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00"
   },
   {
      "description" : "Group G",
      "stadium" : "OTK",
      "group" : "Group G",
      "date" : "2018-06-23T12:00:00",
      "team2" : "Tunisia",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "group" : "Group F",
      "date" : "2018-06-23T15:00:00",
      "stadium" : "ROS",
      "description" : "Group F",
      "result" : null,
      "team1" : "Korea Republic",
      "team2" : "Mexico"
   },
   {
      "result" : null,
      "team2" : "Sweden",
      "team1" : "Germany",
      "group" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "stadium" : "FIS",
      "description" : "Group F"
   },
   {
      "result" : null,
      "team2" : "Panama",
      "team1" : "England",
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "stadium" : "NIZ",
      "description" : "Group G"
   },
   {
      "result" : null,
      "team1" : "Japan",
      "team2" : "Senegal",
      "group" : "Group H",
      "date" : "2018-06-24T15:00:00",
      "stadium" : "CEN",
      "description" : "Group H"
   },
   {
      "result" : null,
      "team1" : "Poland",
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00",
      "group" : "Group H",
      "description" : "Group H",
      "stadium" : "KAZ"
   },
   {
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "description" : "Group A",
      "stadium" : "COS",
      "result" : null,
      "team2" : "Russia",
      "team1" : "Uruguay"
   },
   {
      "stadium" : "VOL",
      "description" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "team1" : "Saudi Arabia",
      "team2" : "Egypt",
      "result" : null
   },
   {
      "stadium" : "MOR",
      "description" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "team1" : "Iran",
      "team2" : "Portugal",
      "result" : null
   },
   {
      "team1" : "Spain",
      "team2" : "Morocco",
      "result" : null,
      "stadium" : "KAL",
      "description" : "Group B",
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00"
   },
   {
      "stadium" : "LUZ",
      "description" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "team2" : "France",
      "team1" : "Denmark",
      "result" : null
   },
   {
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "stadium" : "FIS",
      "description" : "Group C",
      "result" : null,
      "team1" : "Australia",
      "team2" : "Peru"
   },
   {
      "team2" : "Argentina",
      "team1" : "Nigeria",
      "result" : null,
      "description" : "Group D",
      "stadium" : "KRE",
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00"
   },
   {
      "result" : null,
      "team1" : "Iceland",
      "team2" : "Croatia",
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "stadium" : "ROS"
   },
   {
      "team1" : "Mexico",
      "team2" : "Sweden",
      "result" : null,
      "description" : "Group F",
      "stadium" : "CEN",
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00"
   },
   {
      "result" : null,
      "team2" : "Germany",
      "team1" : "Korea Republic",
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "stadium" : "KAZ",
      "description" : "Group F"
   },
   {
      "team2" : "Brazil",
      "team1" : "Serbia",
      "result" : null,
      "description" : "Group E",
      "stadium" : "OTK",
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E"
   },
   {
      "team1" : "Switzerland",
      "team2" : "Costa Rica",
      "result" : null,
      "description" : "Group E",
      "stadium" : "NIZ",
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "stadium" : "VOL",
      "description" : "Group H",
      "result" : null,
      "team1" : "Japan",
      "team2" : "Poland"
   },
   {
      "team1" : "Senegal",
      "team2" : "Colombia",
      "result" : null,
      "description" : "Group H",
      "stadium" : "COS",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G",
      "stadium" : "MOR",
      "result" : null,
      "team1" : "Panama",
      "team2" : "Tunisia"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "stadium" : "KAL",
      "description" : "Group G",
      "result" : null,
      "team2" : "Belgium",
      "team1" : "England"
   },
   {
      "team1" : "Winner Group A",
      "team2" : "Runner-up Group B\t",
      "result" : null,
      "description" : "Round of 16",
      "stadium" : "FIS",
      "date" : "2018-06-30T18:00:00",
      "group" : null
   },
   {
      "stadium" : "KAZ",
      "description" : "Round of 16",
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "team1" : "Winner Group C",
      "team2" : "Runner-up Group D",
      "result" : null
   },
   {
      "result" : null,
      "team1" : "Winner Group B",
      "team2" : "Runner-up Group A\t",
      "date" : "2018-07-01T14:00:00",
      "group" : null,
      "description" : "Round of 16",
      "stadium" : "LUZ"
   },
   {
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "stadium" : "NIZ",
      "description" : "Round of 16",
      "result" : null,
      "team2" : "Runner-up Group C",
      "team1" : "Winner Group D"
   },
   {
      "stadium" : "COS",
      "description" : "Round of 16",
      "group" : null,
      "date" : "2018-07-02T14:00:00",
      "team1" : "Winner Group E",
      "team2" : "Runner-up Group F",
      "result" : null
   },
   {
      "team1" : "Winner Group G",
      "team2" : "Runner-up Group H",
      "result" : null,
      "description" : "Round of 16",
      "stadium" : "ROS",
      "date" : "2018-07-02T18:00:00",
      "group" : null
   },
   {
      "team1" : "Winner Group F",
      "team2" : "Runner-up Group E",
      "result" : null,
      "description" : "Round of 16",
      "stadium" : "KRE",
      "date" : "2018-07-03T14:00:00",
      "group" : null
   },
   {
      "team2" : "Runner-up Group G",
      "team1" : "Winner Group H",
      "result" : null,
      "stadium" : "OTK",
      "description" : "Round of 16",
      "group" : null,
      "date" : "2018-07-03T18:00:00"
   },
   {
      "result" : null,
      "team2" : "To be announced",
      "team1" : "To be announced",
      "date" : "2018-07-06T14:00:00",
      "group" : null,
      "stadium" : "NIZ",
      "description" : "Quarter Finals"
   },
   {
      "group" : null,
      "date" : "2018-07-06T18:00:00",
      "description" : "Quarter Finals",
      "stadium" : "KAZ",
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced"
   },
   {
      "group" : null,
      "date" : "2018-07-07T14:00:00",
      "description" : "Quarter Finals",
      "stadium" : "COS",
      "result" : null,
      "team2" : "To be announced",
      "team1" : "To be announced"
   },
   {
      "stadium" : "FIS",
      "description" : "Quarter Finals",
      "date" : "2018-07-07T18:00:00",
      "group" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "result" : null
   },
   {
      "team2" : "To be announced",
      "team1" : "To be announced",
      "result" : null,
      "stadium" : "KRE",
      "description" : "Semi Finals",
      "group" : null,
      "date" : "2018-07-10T18:00:00"
   },
   {
      "team2" : "To be announced",
      "team1" : "To be announced",
      "result" : null,
      "stadium" : "LUZ",
      "description" : "Semi Finals",
      "group" : null,
      "date" : "2018-07-11T18:00:00"
   },
   {
      "team1" : "To be announced",
      "team2" : "To be announced",
      "result" : null,
      "stadium" : "KRE",
      "description" : "Finals",
      "group" : null,
      "date" : "2018-07-14T14:00:00"
   },
   {
      "team1" : "To be announced",
      "team2" : "To be announced",
      "result" : null,
      "description" : "Finals",
      "stadium" : "LUZ",
      "date" : "2018-07-15T15:00:00",
      "group" : null
   }
]
;

