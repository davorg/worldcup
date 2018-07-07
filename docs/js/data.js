var stadiums = {
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "code" : "KAL",
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "code" : "LUZ",
      "city" : "Moscow",
      "name" : "Luzhniki Stadium"
   },
   "KRE" : {
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "code" : "KRE",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow"
   },
   "NIZ" : {
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium",
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "COS" : {
      "utcoffset" : "4",
      "timezone" : "Europe/Samara",
      "code" : "COS",
      "city" : "Samara",
      "name" : "Cosmos Arena"
   },
   "OTK" : {
      "city" : "Moscow",
      "name" : "Otkritie Arena",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "OTK"
   },
   "VOL" : {
      "code" : "VOL",
      "utcoffset" : "3",
      "timezone" : "Europe/Volgograd",
      "city" : "Volgograd",
      "name" : "Volgograd Arena"
   },
   "FIS" : {
      "code" : "FIS",
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow",
      "name" : "Fisht Olympic Stadium",
      "city" : "Sochi"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "name" : "Rostov Arena",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "ROS"
   },
   "MOR" : {
      "name" : "Mordovia Arena",
      "city" : "Saransk",
      "code" : "MOR",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow"
   },
   "KAZ" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "city" : "Kazan"
   },
   "CEN" : {
      "name" : "Central Stadium",
      "city" : "Yekaterinburg",
      "utcoffset" : "5",
      "timezone" : "Asia/Yekaterinburg",
      "code" : "CEN"
   }
}
;

var games = [
   {
      "team1" : "Russia",
      "result" : null,
      "stadium" : "LUZ",
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00",
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "description" : "Group A"
   },
   {
      "team1" : "Egypt",
      "result" : null,
      "group" : "Group A",
      "stadium" : "CEN",
      "team2" : "Uruguay",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "date" : "2018-06-15T12:00:00",
      "description" : "Group A"
   },
   {
      "date" : "2018-06-15T15:00:00",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "team2" : "Iran",
      "description" : "Group B",
      "result" : null,
      "team1" : "Morocco",
      "stadium" : "KRE",
      "group" : "Group B"
   },
   {
      "result" : null,
      "team1" : "Portugal",
      "group" : "Group B",
      "stadium" : "FIS",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "team2" : "Spain",
      "date" : "2018-06-15T18:00:00",
      "description" : "Group B"
   },
   {
      "description" : "Group C",
      "date" : "2018-06-16T10:00:00",
      "team2" : "Australia",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "group" : "Group C",
      "team1" : "France",
      "result" : null
   },
   {
      "date" : "2018-06-16T13:00:00",
      "team2" : "Iceland",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "description" : "Group D",
      "team1" : "Argentina",
      "result" : null,
      "stadium" : "OTK",
      "group" : "Group D"
   },
   {
      "description" : "Group C",
      "date" : "2018-06-16T16:00:00",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "team2" : "Denmark",
      "stadium" : "MOR",
      "group" : "Group C",
      "result" : null,
      "team1" : "Peru"
   },
   {
      "result" : null,
      "team1" : "Croatia",
      "group" : "Group D",
      "stadium" : "KAL",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "team2" : "Nigeria",
      "date" : "2018-06-16T19:00:00",
      "description" : "Group D"
   },
   {
      "description" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "team2" : "Serbia",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "stadium" : "COS",
      "group" : "Group E",
      "team1" : "Costa Rica",
      "result" : null
   },
   {
      "group" : "Group F",
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Germany",
      "description" : "Group F",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "team2" : "Mexico",
      "date" : "2018-06-17T15:00:00"
   },
   {
      "team1" : "Brazil",
      "result" : null,
      "group" : "Group E",
      "stadium" : "ROS",
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "date" : "2018-06-17T18:00:00",
      "description" : "Group E"
   },
   {
      "description" : "Group F",
      "team2" : "Korea Republic",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "stadium" : "NIZ",
      "team1" : "Sweden",
      "result" : null
   },
   {
      "team2" : "Panama",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "date" : "2018-06-18T15:00:00",
      "description" : "Group G",
      "team1" : "Belgium",
      "result" : null,
      "group" : "Group G",
      "stadium" : "FIS"
   },
   {
      "date" : "2018-06-18T18:00:00",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "team2" : "England",
      "description" : "Group G",
      "result" : null,
      "team1" : "Tunisia",
      "stadium" : "VOL",
      "group" : "Group G"
   },
   {
      "stadium" : "MOR",
      "group" : "Group H",
      "result" : null,
      "team1" : "Colombia",
      "description" : "Group H",
      "date" : "2018-06-19T12:00:00",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "team2" : "Japan"
   },
   {
      "date" : "2018-06-19T15:00:00",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "team2" : "Senegal",
      "description" : "Group H",
      "result" : null,
      "team1" : "Poland",
      "stadium" : "OTK",
      "group" : "Group H"
   },
   {
      "stadium" : "KRE",
      "group" : "Group A",
      "result" : null,
      "team1" : "Russia",
      "description" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "team2" : "Egypt"
   },
   {
      "team1" : "Portugal",
      "result" : null,
      "group" : "Group B",
      "stadium" : "LUZ",
      "team2" : "Morocco",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "date" : "2018-06-20T12:00:00",
      "description" : "Group B"
   },
   {
      "description" : "Group A",
      "date" : "2018-06-20T15:00:00",
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "stadium" : "ROS",
      "group" : "Group A",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "group" : "Group B",
      "stadium" : "KAZ",
      "result" : null,
      "team1" : "Iran",
      "description" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "team2" : "Spain",
      "date" : "2018-06-20T18:00:00"
   },
   {
      "description" : "Group C",
      "date" : "2018-06-21T12:00:00",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "team2" : "Australia",
      "stadium" : "COS",
      "group" : "Group C",
      "result" : null,
      "team1" : "Denmark"
   },
   {
      "result" : null,
      "team1" : "France",
      "stadium" : "CEN",
      "group" : "Group C",
      "date" : "2018-06-21T15:00:00",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team2" : "Peru",
      "description" : "Group C"
   },
   {
      "result" : null,
      "team1" : "Argentina",
      "stadium" : "NIZ",
      "group" : "Group D",
      "date" : "2018-06-21T18:00:00",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "team2" : "Croatia",
      "description" : "Group D"
   },
   {
      "stadium" : "KRE",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil",
      "description" : "Group E",
      "date" : "2018-06-22T12:00:00",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "team2" : "Costa Rica"
   },
   {
      "description" : "Group D",
      "team2" : "Iceland",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D",
      "stadium" : "VOL",
      "team1" : "Nigeria",
      "result" : null
   },
   {
      "team1" : "Serbia",
      "result" : null,
      "stadium" : "KAL",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "description" : "Group E"
   },
   {
      "team1" : "Belgium",
      "result" : null,
      "stadium" : "OTK",
      "group" : "Group G",
      "date" : "2018-06-23T12:00:00",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "description" : "Group G"
   },
   {
      "team1" : "Korea Republic",
      "result" : null,
      "stadium" : "ROS",
      "group" : "Group F",
      "date" : "2018-06-23T15:00:00",
      "team2" : "Mexico",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "description" : "Group F"
   },
   {
      "description" : "Group F",
      "team2" : "Sweden",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "date" : "2018-06-23T18:00:00",
      "group" : "Group F",
      "stadium" : "FIS",
      "team1" : "Germany",
      "result" : null
   },
   {
      "stadium" : "NIZ",
      "group" : "Group G",
      "result" : null,
      "team1" : "England",
      "description" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "team2" : "Panama"
   },
   {
      "date" : "2018-06-24T15:00:00",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "team2" : "Senegal",
      "description" : "Group H",
      "result" : null,
      "team1" : "Japan",
      "stadium" : "CEN",
      "group" : "Group H"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00",
      "group" : "Group H",
      "stadium" : "KAZ",
      "result" : null,
      "team1" : "Poland"
   },
   {
      "description" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "stadium" : "COS",
      "group" : "Group A",
      "result" : null,
      "team1" : "Uruguay"
   },
   {
      "description" : "Group A",
      "team2" : "Egypt",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "stadium" : "VOL",
      "team1" : "Saudi Arabia",
      "result" : null
   },
   {
      "description" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "team2" : "Portugal",
      "stadium" : "MOR",
      "group" : "Group B",
      "result" : null,
      "team1" : "Iran"
   },
   {
      "team1" : "Spain",
      "result" : null,
      "group" : "Group B",
      "stadium" : "KAL",
      "team2" : "Morocco",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B"
   },
   {
      "description" : "Group C",
      "team2" : "France",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "stadium" : "LUZ",
      "team1" : "Denmark",
      "result" : null
   },
   {
      "team2" : "Peru",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "date" : "2018-06-26T14:00:00",
      "description" : "Group C",
      "team1" : "Australia",
      "result" : null,
      "group" : "Group C",
      "stadium" : "FIS"
   },
   {
      "stadium" : "KRE",
      "group" : "Group D",
      "team1" : "Nigeria",
      "result" : null,
      "description" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "team2" : "Argentina",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina"
   },
   {
      "stadium" : "ROS",
      "group" : "Group D",
      "team1" : "Iceland",
      "result" : null,
      "description" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "team2" : "Croatia",
      "class" : "round-group-d stadium-ros team-iceland team-croatia"
   },
   {
      "group" : "Group F",
      "stadium" : "CEN",
      "result" : null,
      "team1" : "Mexico",
      "description" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "team2" : "Sweden",
      "date" : "2018-06-27T14:00:00"
   },
   {
      "date" : "2018-06-27T14:00:00",
      "team2" : "Germany",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "result" : null,
      "stadium" : "KAZ",
      "group" : "Group F"
   },
   {
      "description" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "team2" : "Brazil",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "stadium" : "OTK",
      "group" : "Group E",
      "team1" : "Serbia",
      "result" : null
   },
   {
      "date" : "2018-06-27T18:00:00",
      "team2" : "Costa Rica",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "description" : "Group E",
      "team1" : "Switzerland",
      "result" : null,
      "stadium" : "NIZ",
      "group" : "Group E"
   },
   {
      "result" : null,
      "team1" : "Japan",
      "stadium" : "VOL",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "team2" : "Poland",
      "description" : "Group H"
   },
   {
      "group" : "Group H",
      "stadium" : "COS",
      "result" : null,
      "team1" : "Senegal",
      "description" : "Group H",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "team2" : "Colombia",
      "date" : "2018-06-28T14:00:00"
   },
   {
      "result" : null,
      "team1" : "Panama",
      "group" : "Group G",
      "stadium" : "MOR",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "team2" : "Tunisia",
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G"
   },
   {
      "description" : "Group G",
      "team2" : "Belgium",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "stadium" : "KAL",
      "team1" : "England",
      "result" : null
   },
   {
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "team2" : "Argentina",
      "date" : "2018-06-30T14:00:00",
      "description" : "Round of 16",
      "result" : null,
      "team1" : "France",
      "group" : null,
      "stadium" : "KAZ"
   },
   {
      "team1" : "Uruguay",
      "result" : null,
      "stadium" : "FIS",
      "group" : null,
      "date" : "2018-06-30T18:00:00",
      "team2" : "Portugal",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "description" : "Round of 16"
   },
   {
      "team1" : "Spain",
      "result" : null,
      "stadium" : "LUZ",
      "group" : null,
      "date" : "2018-07-01T14:00:00",
      "team2" : "Russia",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "description" : "Round of 16"
   },
   {
      "date" : "2018-07-01T18:00:00",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "team2" : "Denmark",
      "description" : "Round of 16",
      "result" : null,
      "team1" : "Croatia",
      "stadium" : "NIZ",
      "group" : null
   },
   {
      "date" : "2018-07-02T14:00:00",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "team2" : "Mexico",
      "description" : "Round of 16",
      "result" : null,
      "team1" : "Brazil",
      "stadium" : "COS",
      "group" : null
   },
   {
      "team2" : "Japan",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "date" : "2018-07-02T18:00:00",
      "description" : "Round of 16",
      "team1" : "Belgium",
      "result" : null,
      "group" : null,
      "stadium" : "ROS"
   },
   {
      "description" : "Round of 16",
      "date" : "2018-07-03T14:00:00",
      "team2" : "Switzerland",
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "stadium" : "KRE",
      "group" : null,
      "team1" : "Sweden",
      "result" : null
   },
   {
      "team1" : "Colombia",
      "result" : null,
      "stadium" : "OTK",
      "group" : null,
      "date" : "2018-07-03T18:00:00",
      "team2" : "England",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "description" : "Round of 16"
   },
   {
      "team1" : "Uruguay",
      "result" : null,
      "stadium" : "NIZ",
      "group" : null,
      "date" : "2018-07-06T14:00:00",
      "team2" : "France",
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "description" : "Quarter Finals"
   },
   {
      "team2" : "Belgium",
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "date" : "2018-07-06T18:00:00",
      "description" : "Quarter Finals",
      "team1" : "Brazil",
      "result" : null,
      "group" : null,
      "stadium" : "KAZ"
   },
   {
      "result" : null,
      "team1" : "Sweden",
      "group" : null,
      "stadium" : "COS",
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "team2" : "England",
      "date" : "2018-07-07T14:00:00",
      "description" : "Quarter Finals"
   },
   {
      "stadium" : "FIS",
      "group" : null,
      "result" : null,
      "team1" : "Russia",
      "description" : "Quarter Finals",
      "date" : "2018-07-07T18:00:00",
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "team2" : "Croatia"
   },
   {
      "date" : "2018-07-10T18:00:00",
      "team2" : "Belgium",
      "class" : "round-semi-finals stadium-kre team-france team-belgium",
      "description" : "Semi Finals",
      "team1" : "France",
      "result" : null,
      "stadium" : "KRE",
      "group" : null
   },
   {
      "team2" : "England",
      "class" : "round-semi-finals stadium-luz team-england",
      "date" : "2018-07-11T18:00:00",
      "description" : "Semi Finals",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "stadium" : "LUZ"
   },
   {
      "description" : "Finals",
      "team2" : "To be announced",
      "class" : "round-finals stadium-kre",
      "date" : "2018-07-14T14:00:00",
      "group" : null,
      "stadium" : "KRE",
      "team1" : "To be announced",
      "result" : null
   },
   {
      "description" : "Finals",
      "class" : "round-finals stadium-luz",
      "team2" : "To be announced",
      "date" : "2018-07-15T15:00:00",
      "group" : null,
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "To be announced"
   }
]
;

