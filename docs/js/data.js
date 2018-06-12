var stadiums = [
   {
      "city" : "Yekaterinburg",
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   {
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "city" : "Samara",
      "timezone" : "Europe/Samara",
      "code" : "COS"
   },
   {
      "utcoffset" : "4",
      "name" : "Fisht Olympic Stadium",
      "city" : "Sochi",
      "code" : "FIS",
      "timezone" : "Europe/Moscow"
   },
   {
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "city" : "Kaliningrad",
      "code" : "KAL",
      "timezone" : "Europe/Kaliningrad"
   },
   {
      "city" : "Kazan",
      "timezone" : "Europe/Moscow",
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "utcoffset" : "3"
   },
   {
      "utcoffset" : "3",
      "name" : "Krestovsky Stadium",
      "code" : "KRE",
      "timezone" : "Europe/Moscow",
      "city" : "Saint Petersburg"
   },
   {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "code" : "LUZ",
      "utcoffset" : "3",
      "name" : "Luzhniki Stadium"
   },
   {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "timezone" : "Europe/Moscow",
      "code" : "MOR",
      "city" : "Saransk"
   },
   {
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3"
   },
   {
      "code" : "OTK",
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   {
      "code" : "ROS",
      "timezone" : "Europe/Moscow",
      "city" : "Rostov-on-Don",
      "utcoffset" : "3",
      "name" : "Rostov Arena"
   },
   {
      "utcoffset" : "3",
      "name" : "Volgograd Arena",
      "city" : "Volgograd",
      "code" : "VOL",
      "timezone" : "Europe/Volgograd"
   }
]
;

var stadiums_lookup = {
   "NIZ" : {
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3"
   },
   "MOR" : {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "timezone" : "Europe/Moscow",
      "code" : "MOR",
      "city" : "Saransk"
   },
   "OTK" : {
      "code" : "OTK",
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "city" : "Kaliningrad",
      "code" : "KAL",
      "timezone" : "Europe/Kaliningrad"
   },
   "FIS" : {
      "utcoffset" : "4",
      "name" : "Fisht Olympic Stadium",
      "city" : "Sochi",
      "code" : "FIS",
      "timezone" : "Europe/Moscow"
   },
   "LUZ" : {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "code" : "LUZ",
      "utcoffset" : "3",
      "name" : "Luzhniki Stadium"
   },
   "KAZ" : {
      "city" : "Kazan",
      "timezone" : "Europe/Moscow",
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "utcoffset" : "3"
   },
   "CEN" : {
      "city" : "Yekaterinburg",
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   "KRE" : {
      "utcoffset" : "3",
      "name" : "Krestovsky Stadium",
      "code" : "KRE",
      "timezone" : "Europe/Moscow",
      "city" : "Saint Petersburg"
   },
   "COS" : {
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "city" : "Samara",
      "timezone" : "Europe/Samara",
      "code" : "COS"
   },
   "VOL" : {
      "utcoffset" : "3",
      "name" : "Volgograd Arena",
      "city" : "Volgograd",
      "code" : "VOL",
      "timezone" : "Europe/Volgograd"
   },
   "ROS" : {
      "code" : "ROS",
      "timezone" : "Europe/Moscow",
      "city" : "Rostov-on-Don",
      "utcoffset" : "3",
      "name" : "Rostov Arena"
   }
}
;

var rounds = [
   {
      "class" : "group-a",
      "name" : "Group A"
   },
   {
      "class" : "group-b",
      "name" : "Group B"
   },
   {
      "class" : "group-c",
      "name" : "Group C"
   },
   {
      "name" : "Group D",
      "class" : "group-d"
   },
   {
      "class" : "group-e",
      "name" : "Group E"
   },
   {
      "class" : "group-f",
      "name" : "Group F"
   },
   {
      "name" : "Group G",
      "class" : "group-g"
   },
   {
      "name" : "Group H",
      "class" : "group-h"
   },
   {
      "name" : "Round of 16",
      "class" : "round-of-16"
   },
   {
      "class" : "quarter-finals",
      "name" : "Quarter Finals"
   },
   {
      "class" : "semi-finals",
      "name" : "Semi Finals"
   },
   {
      "name" : "Finals",
      "class" : "finals"
   }
]
;

var games = [
   {
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "result" : null,
      "stadium" : "LUZ",
      "team1" : "Russia",
      "description" : "Group A",
      "team2" : "Saudi Arabia",
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00"
   },
   {
      "description" : "Group A",
      "team2" : "Uruguay",
      "team1" : "Egypt",
      "stadium" : "CEN",
      "result" : null,
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "date" : "2018-06-15T12:00:00",
      "group" : "Group A"
   },
   {
      "team1" : "Morocco",
      "description" : "Group B",
      "team2" : "Iran",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "result" : null,
      "stadium" : "KRE",
      "group" : "Group B",
      "date" : "2018-06-15T15:00:00"
   },
   {
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "result" : null,
      "stadium" : "FIS",
      "team1" : "Portugal",
      "description" : "Group B",
      "team2" : "Spain",
      "date" : "2018-06-15T18:00:00",
      "group" : "Group B"
   },
   {
      "date" : "2018-06-16T10:00:00",
      "group" : "Group C",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "result" : null,
      "team1" : "France",
      "description" : "Group C",
      "team2" : "Australia"
   },
   {
      "result" : null,
      "stadium" : "OTK",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "description" : "Group D",
      "team2" : "Iceland",
      "team1" : "Argentina",
      "group" : "Group D",
      "date" : "2018-06-16T13:00:00"
   },
   {
      "date" : "2018-06-16T16:00:00",
      "group" : "Group C",
      "description" : "Group C",
      "team2" : "Denmark",
      "team1" : "Peru",
      "result" : null,
      "stadium" : "MOR",
      "class" : "round-group-c stadium-mor team-peru team-denmark"
   },
   {
      "result" : null,
      "stadium" : "KAL",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "description" : "Group D",
      "team2" : "Nigeria",
      "team1" : "Croatia",
      "group" : "Group D",
      "date" : "2018-06-16T19:00:00"
   },
   {
      "date" : "2018-06-17T12:00:00",
      "group" : "Group E",
      "result" : null,
      "stadium" : "COS",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "description" : "Group E",
      "team2" : "Serbia",
      "team1" : "Costa Rica"
   },
   {
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Germany",
      "team2" : "Mexico",
      "description" : "Group F",
      "group" : "Group F",
      "date" : "2018-06-17T15:00:00"
   },
   {
      "date" : "2018-06-17T18:00:00",
      "group" : "Group E",
      "team1" : "Brazil",
      "team2" : "Switzerland",
      "description" : "Group E",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "result" : null,
      "stadium" : "ROS"
   },
   {
      "result" : null,
      "stadium" : "NIZ",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "team2" : "Korea Republic",
      "description" : "Group F",
      "team1" : "Sweden",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F"
   },
   {
      "team1" : "Belgium",
      "description" : "Group G",
      "team2" : "Panama",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "stadium" : "FIS",
      "result" : null,
      "date" : "2018-06-18T15:00:00",
      "group" : "Group G"
   },
   {
      "date" : "2018-06-18T18:00:00",
      "group" : "Group G",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "result" : null,
      "stadium" : "VOL",
      "team1" : "Tunisia",
      "team2" : "England",
      "description" : "Group G"
   },
   {
      "team1" : "Colombia",
      "team2" : "Japan",
      "description" : "Group H",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "result" : null,
      "stadium" : "MOR",
      "group" : "Group H",
      "date" : "2018-06-19T12:00:00"
   },
   {
      "date" : "2018-06-19T15:00:00",
      "group" : "Group H",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "stadium" : "OTK",
      "result" : null,
      "team1" : "Poland",
      "team2" : "Senegal",
      "description" : "Group H"
   },
   {
      "group" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "team1" : "Russia",
      "description" : "Group A",
      "team2" : "Egypt",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "result" : null,
      "stadium" : "KRE"
   },
   {
      "description" : "Group B",
      "team2" : "Morocco",
      "team1" : "Portugal",
      "stadium" : "LUZ",
      "result" : null,
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "group" : "Group B",
      "date" : "2018-06-20T12:00:00"
   },
   {
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "result" : null,
      "stadium" : "ROS",
      "team1" : "Uruguay",
      "team2" : "Saudi Arabia",
      "description" : "Group A",
      "group" : "Group A",
      "date" : "2018-06-20T15:00:00"
   },
   {
      "date" : "2018-06-20T18:00:00",
      "group" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "result" : null,
      "stadium" : "KAZ",
      "team1" : "Iran",
      "description" : "Group B",
      "team2" : "Spain"
   },
   {
      "date" : "2018-06-21T12:00:00",
      "group" : "Group C",
      "description" : "Group C",
      "team2" : "Australia",
      "team1" : "Denmark",
      "stadium" : "COS",
      "result" : null,
      "class" : "round-group-c stadium-cos team-denmark team-australia"
   },
   {
      "date" : "2018-06-21T15:00:00",
      "group" : "Group C",
      "result" : null,
      "stadium" : "CEN",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "description" : "Group C",
      "team2" : "Peru",
      "team1" : "France"
   },
   {
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "Argentina",
      "team2" : "Croatia",
      "description" : "Group D",
      "group" : "Group D",
      "date" : "2018-06-21T18:00:00"
   },
   {
      "date" : "2018-06-22T12:00:00",
      "group" : "Group E",
      "description" : "Group E",
      "team2" : "Costa Rica",
      "team1" : "Brazil",
      "result" : null,
      "stadium" : "KRE",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica"
   },
   {
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "result" : null,
      "stadium" : "VOL",
      "team1" : "Nigeria",
      "team2" : "Iceland",
      "description" : "Group D",
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D"
   },
   {
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "team1" : "Serbia",
      "team2" : "Switzerland",
      "description" : "Group E",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "result" : null,
      "stadium" : "KAL"
   },
   {
      "date" : "2018-06-23T12:00:00",
      "group" : "Group G",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "result" : null,
      "stadium" : "OTK",
      "team1" : "Belgium",
      "team2" : "Tunisia",
      "description" : "Group G"
   },
   {
      "description" : "Group F",
      "team2" : "Mexico",
      "team1" : "Korea Republic",
      "result" : null,
      "stadium" : "ROS",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "group" : "Group F",
      "date" : "2018-06-23T15:00:00"
   },
   {
      "result" : null,
      "stadium" : "FIS",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "description" : "Group F",
      "team2" : "Sweden",
      "team1" : "Germany",
      "group" : "Group F",
      "date" : "2018-06-23T18:00:00"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "England",
      "team2" : "Panama",
      "description" : "Group G"
   },
   {
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "result" : null,
      "stadium" : "CEN",
      "team1" : "Japan",
      "description" : "Group H",
      "team2" : "Senegal",
      "group" : "Group H",
      "date" : "2018-06-24T15:00:00"
   },
   {
      "result" : null,
      "stadium" : "KAZ",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team2" : "Colombia",
      "description" : "Group H",
      "team1" : "Poland",
      "group" : "Group H",
      "date" : "2018-06-24T18:00:00"
   },
   {
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "result" : null,
      "stadium" : "COS",
      "team1" : "Uruguay",
      "description" : "Group A",
      "team2" : "Russia",
      "group" : "Group A",
      "date" : "2018-06-25T14:00:00"
   },
   {
      "group" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "team1" : "Saudi Arabia",
      "team2" : "Egypt",
      "description" : "Group A",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "stadium" : "VOL",
      "result" : null
   },
   {
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "team2" : "Portugal",
      "team1" : "Iran",
      "result" : null,
      "stadium" : "MOR",
      "class" : "round-group-b stadium-mor team-iran team-portugal"
   },
   {
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "team2" : "Morocco",
      "description" : "Group B",
      "team1" : "Spain",
      "result" : null,
      "stadium" : "KAL",
      "class" : "round-group-b stadium-kal team-spain team-morocco"
   },
   {
      "team1" : "Denmark",
      "team2" : "France",
      "description" : "Group C",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "stadium" : "LUZ",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C"
   },
   {
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "description" : "Group C",
      "team2" : "Peru",
      "team1" : "Australia",
      "result" : null,
      "stadium" : "FIS",
      "class" : "round-group-c stadium-fis team-australia team-peru"
   },
   {
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "result" : null,
      "stadium" : "KRE",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "team2" : "Argentina",
      "description" : "Group D",
      "team1" : "Nigeria"
   },
   {
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "result" : null,
      "stadium" : "ROS",
      "team1" : "Iceland",
      "description" : "Group D",
      "team2" : "Croatia",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D"
   },
   {
      "team2" : "Sweden",
      "description" : "Group F",
      "team1" : "Mexico",
      "result" : null,
      "stadium" : "CEN",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F"
   },
   {
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "result" : null,
      "stadium" : "KAZ",
      "team1" : "Korea Republic",
      "team2" : "Germany",
      "description" : "Group F"
   },
   {
      "team1" : "Serbia",
      "team2" : "Brazil",
      "description" : "Group E",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "result" : null,
      "stadium" : "OTK",
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "result" : null,
      "stadium" : "NIZ",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "description" : "Group E",
      "team2" : "Costa Rica",
      "team1" : "Switzerland"
   },
   {
      "stadium" : "VOL",
      "result" : null,
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "team2" : "Poland",
      "description" : "Group H",
      "team1" : "Japan",
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H"
   },
   {
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H",
      "team1" : "Senegal",
      "description" : "Group H",
      "team2" : "Colombia",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "result" : null,
      "stadium" : "COS"
   },
   {
      "team1" : "Panama",
      "team2" : "Tunisia",
      "description" : "Group G",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "result" : null,
      "stadium" : "MOR",
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G"
   },
   {
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "result" : null,
      "stadium" : "KAL",
      "team1" : "England",
      "description" : "Group G",
      "team2" : "Belgium"
   },
   {
      "team1" : "Winner Group A",
      "team2" : "Runner-up Group B\t",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-fis",
      "result" : null,
      "stadium" : "FIS",
      "date" : "2018-06-30T18:00:00",
      "group" : null
   },
   {
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "description" : "Round of 16",
      "team2" : "Runner-up Group D",
      "team1" : "Winner Group C",
      "stadium" : "KAZ",
      "result" : null,
      "class" : "round-round-of-16 stadium-kaz"
   },
   {
      "group" : null,
      "date" : "2018-07-01T14:00:00",
      "result" : null,
      "stadium" : "LUZ",
      "class" : "round-round-of-16 stadium-luz",
      "team2" : "Runner-up Group A\t",
      "description" : "Round of 16",
      "team1" : "Winner Group B"
   },
   {
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "description" : "Round of 16",
      "team2" : "Runner-up Group C",
      "team1" : "Winner Group D",
      "result" : null,
      "stadium" : "NIZ",
      "class" : "round-round-of-16 stadium-niz"
   },
   {
      "date" : "2018-07-02T14:00:00",
      "group" : null,
      "class" : "round-round-of-16 stadium-cos",
      "result" : null,
      "stadium" : "COS",
      "team1" : "Winner Group E",
      "description" : "Round of 16",
      "team2" : "Runner-up Group F"
   },
   {
      "date" : "2018-07-02T18:00:00",
      "group" : null,
      "class" : "round-round-of-16 stadium-ros",
      "result" : null,
      "stadium" : "ROS",
      "team1" : "Winner Group G",
      "team2" : "Runner-up Group H",
      "description" : "Round of 16"
   },
   {
      "group" : null,
      "date" : "2018-07-03T14:00:00",
      "team2" : "Runner-up Group E",
      "description" : "Round of 16",
      "team1" : "Winner Group F",
      "result" : null,
      "stadium" : "KRE",
      "class" : "round-round-of-16 stadium-kre"
   },
   {
      "group" : null,
      "date" : "2018-07-03T18:00:00",
      "result" : null,
      "stadium" : "OTK",
      "class" : "round-round-of-16 stadium-otk",
      "team2" : "Runner-up Group G",
      "description" : "Round of 16",
      "team1" : "Winner Group H"
   },
   {
      "class" : "round-quarter-finals stadium-niz",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "team2" : "To be announced",
      "group" : null,
      "date" : "2018-07-06T14:00:00"
   },
   {
      "group" : null,
      "date" : "2018-07-06T18:00:00",
      "class" : "round-quarter-finals stadium-kaz",
      "result" : null,
      "stadium" : "KAZ",
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "team2" : "To be announced"
   },
   {
      "group" : null,
      "date" : "2018-07-07T14:00:00",
      "class" : "round-quarter-finals stadium-cos",
      "stadium" : "COS",
      "result" : null,
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "team2" : "To be announced"
   },
   {
      "class" : "round-quarter-finals stadium-fis",
      "stadium" : "FIS",
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "description" : "Quarter Finals",
      "group" : null,
      "date" : "2018-07-07T18:00:00"
   },
   {
      "date" : "2018-07-10T18:00:00",
      "group" : null,
      "class" : "round-semi-finals stadium-kre",
      "result" : null,
      "stadium" : "KRE",
      "team1" : "To be announced",
      "description" : "Semi Finals",
      "team2" : "To be announced"
   },
   {
      "group" : null,
      "date" : "2018-07-11T18:00:00",
      "result" : null,
      "stadium" : "LUZ",
      "class" : "round-semi-finals stadium-luz",
      "description" : "Semi Finals",
      "team2" : "To be announced",
      "team1" : "To be announced"
   },
   {
      "date" : "2018-07-14T14:00:00",
      "group" : null,
      "team1" : "To be announced",
      "description" : "Finals",
      "team2" : "To be announced",
      "class" : "round-finals stadium-kre",
      "stadium" : "KRE",
      "result" : null
   },
   {
      "date" : "2018-07-15T15:00:00",
      "group" : null,
      "result" : null,
      "stadium" : "LUZ",
      "class" : "round-finals stadium-luz",
      "team2" : "To be announced",
      "description" : "Finals",
      "team1" : "To be announced"
   }
]
;

var teams = [
   {
      "class" : "argentina",
      "name" : "Argentina"
   },
   {
      "class" : "australia",
      "name" : "Australia"
   },
   {
      "class" : "belgium",
      "name" : "Belgium"
   },
   {
      "class" : "brazil",
      "name" : "Brazil"
   },
   {
      "name" : "Colombia",
      "class" : "colombia"
   },
   {
      "class" : "costa-rica",
      "name" : "Costa Rica"
   },
   {
      "name" : "Croatia",
      "class" : "croatia"
   },
   {
      "name" : "Denmark",
      "class" : "denmark"
   },
   {
      "class" : "egypt",
      "name" : "Egypt"
   },
   {
      "name" : "England",
      "class" : "england"
   },
   {
      "class" : "france",
      "name" : "France"
   },
   {
      "class" : "germany",
      "name" : "Germany"
   },
   {
      "class" : "iceland",
      "name" : "Iceland"
   },
   {
      "name" : "Iran",
      "class" : "iran"
   },
   {
      "name" : "Japan",
      "class" : "japan"
   },
   {
      "name" : "Korea Republic",
      "class" : "korea-republic"
   },
   {
      "class" : "mexico",
      "name" : "Mexico"
   },
   {
      "class" : "morocco",
      "name" : "Morocco"
   },
   {
      "name" : "Nigeria",
      "class" : "nigeria"
   },
   {
      "class" : "panama",
      "name" : "Panama"
   },
   {
      "class" : "peru",
      "name" : "Peru"
   },
   {
      "name" : "Poland",
      "class" : "poland"
   },
   {
      "name" : "Portugal",
      "class" : "portugal"
   },
   {
      "name" : "Russia",
      "class" : "russia"
   },
   {
      "class" : "saudi-arabia",
      "name" : "Saudi Arabia"
   },
   {
      "class" : "senegal",
      "name" : "Senegal"
   },
   {
      "name" : "Serbia",
      "class" : "serbia"
   },
   {
      "name" : "Spain",
      "class" : "spain"
   },
   {
      "name" : "Sweden",
      "class" : "sweden"
   },
   {
      "name" : "Switzerland",
      "class" : "switzerland"
   },
   {
      "class" : "tunisia",
      "name" : "Tunisia"
   },
   {
      "name" : "Uruguay",
      "class" : "uruguay"
   }
]
;

