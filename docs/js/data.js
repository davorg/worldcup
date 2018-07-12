var stadiums = {
   "VOL" : {
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "utcoffset" : "3",
      "code" : "VOL"
   },
   "NIZ" : {
      "city" : "Nizhny Novgorod",
      "timezone" : "Europe/Moscow",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3",
      "code" : "NIZ"
   },
   "MOR" : {
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "name" : "Mordovia Arena",
      "utcoffset" : "3",
      "code" : "MOR"
   },
   "KRE" : {
      "city" : "Saint Petersburg",
      "timezone" : "Europe/Moscow",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3",
      "code" : "KRE"
   },
   "FIS" : {
      "city" : "Sochi",
      "timezone" : "Europe/Moscow",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "code" : "FIS"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "timezone" : "Europe/Moscow",
      "name" : "Rostov Arena",
      "utcoffset" : "3",
      "code" : "ROS"
   },
   "OTK" : {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "name" : "Otkritie Arena",
      "utcoffset" : "3",
      "code" : "OTK"
   },
   "CEN" : {
      "city" : "Yekaterinburg",
      "timezone" : "Asia/Yekaterinburg",
      "name" : "Central Stadium",
      "utcoffset" : "5",
      "code" : "CEN"
   },
   "COS" : {
      "city" : "Samara",
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "utcoffset" : "4",
      "code" : "COS"
   },
   "KAL" : {
      "city" : "Kaliningrad",
      "timezone" : "Europe/Kaliningrad",
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "code" : "KAL"
   },
   "KAZ" : {
      "city" : "Kazan",
      "timezone" : "Europe/Moscow",
      "name" : "Kazan Arena",
      "utcoffset" : "3",
      "code" : "KAZ"
   },
   "LUZ" : {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "code" : "LUZ"
   }
}
;

var games = [
   {
      "team2" : "Saudi Arabia",
      "date" : "2018-06-14T15:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "team1" : "Russia",
      "result" : null
   },
   {
      "team2" : "Uruguay",
      "date" : "2018-06-15T12:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "stadium" : "CEN",
      "team1" : "Egypt",
      "result" : null
   },
   {
      "team2" : "Iran",
      "date" : "2018-06-15T15:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "stadium" : "KRE",
      "team1" : "Morocco",
      "result" : null
   },
   {
      "team2" : "Spain",
      "date" : "2018-06-15T18:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "stadium" : "FIS",
      "team1" : "Portugal",
      "result" : null
   },
   {
      "team2" : "Australia",
      "date" : "2018-06-16T10:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "team1" : "France",
      "result" : null
   },
   {
      "team2" : "Iceland",
      "date" : "2018-06-16T13:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "stadium" : "OTK",
      "team1" : "Argentina",
      "result" : null
   },
   {
      "team2" : "Denmark",
      "date" : "2018-06-16T16:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "stadium" : "MOR",
      "team1" : "Peru",
      "result" : null
   },
   {
      "team2" : "Nigeria",
      "date" : "2018-06-16T19:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "stadium" : "KAL",
      "team1" : "Croatia",
      "result" : null
   },
   {
      "team2" : "Serbia",
      "date" : "2018-06-17T12:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "stadium" : "COS",
      "team1" : "Costa Rica",
      "result" : null
   },
   {
      "team2" : "Mexico",
      "date" : "2018-06-17T15:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "stadium" : "LUZ",
      "team1" : "Germany",
      "result" : null
   },
   {
      "team2" : "Switzerland",
      "date" : "2018-06-17T18:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "stadium" : "ROS",
      "team1" : "Brazil",
      "result" : null
   },
   {
      "team2" : "Korea Republic",
      "date" : "2018-06-18T12:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "stadium" : "NIZ",
      "team1" : "Sweden",
      "result" : null
   },
   {
      "team2" : "Panama",
      "date" : "2018-06-18T15:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "stadium" : "FIS",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "team2" : "England",
      "date" : "2018-06-18T18:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "stadium" : "VOL",
      "team1" : "Tunisia",
      "result" : null
   },
   {
      "team2" : "Japan",
      "date" : "2018-06-19T12:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "stadium" : "MOR",
      "team1" : "Colombia",
      "result" : null
   },
   {
      "team2" : "Senegal",
      "date" : "2018-06-19T15:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "stadium" : "OTK",
      "team1" : "Poland",
      "result" : null
   },
   {
      "team2" : "Egypt",
      "date" : "2018-06-19T18:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "stadium" : "KRE",
      "team1" : "Russia",
      "result" : null
   },
   {
      "team2" : "Morocco",
      "date" : "2018-06-20T12:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "stadium" : "LUZ",
      "team1" : "Portugal",
      "result" : null
   },
   {
      "team2" : "Saudi Arabia",
      "date" : "2018-06-20T15:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "stadium" : "ROS",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "team2" : "Spain",
      "date" : "2018-06-20T18:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "stadium" : "KAZ",
      "team1" : "Iran",
      "result" : null
   },
   {
      "team2" : "Australia",
      "date" : "2018-06-21T12:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "stadium" : "COS",
      "team1" : "Denmark",
      "result" : null
   },
   {
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "stadium" : "CEN",
      "team1" : "France",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "date" : "2018-06-21T18:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "stadium" : "NIZ",
      "team1" : "Argentina",
      "result" : null
   },
   {
      "team2" : "Costa Rica",
      "date" : "2018-06-22T12:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "stadium" : "KRE",
      "team1" : "Brazil",
      "result" : null
   },
   {
      "team2" : "Iceland",
      "date" : "2018-06-22T15:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "stadium" : "VOL",
      "team1" : "Nigeria",
      "result" : null
   },
   {
      "team2" : "Switzerland",
      "date" : "2018-06-22T18:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "stadium" : "KAL",
      "team1" : "Serbia",
      "result" : null
   },
   {
      "team2" : "Tunisia",
      "date" : "2018-06-23T12:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "stadium" : "OTK",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "team2" : "Mexico",
      "date" : "2018-06-23T15:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "stadium" : "ROS",
      "team1" : "Korea Republic",
      "result" : null
   },
   {
      "team2" : "Sweden",
      "date" : "2018-06-23T18:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "stadium" : "FIS",
      "team1" : "Germany",
      "result" : null
   },
   {
      "team2" : "Panama",
      "date" : "2018-06-24T12:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "stadium" : "NIZ",
      "team1" : "England",
      "result" : null
   },
   {
      "team2" : "Senegal",
      "date" : "2018-06-24T15:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "stadium" : "CEN",
      "team1" : "Japan",
      "result" : null
   },
   {
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "stadium" : "KAZ",
      "team1" : "Poland",
      "result" : null
   },
   {
      "team2" : "Russia",
      "date" : "2018-06-25T14:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "stadium" : "COS",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "team2" : "Egypt",
      "date" : "2018-06-25T14:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "stadium" : "VOL",
      "team1" : "Saudi Arabia",
      "result" : null
   },
   {
      "team2" : "Portugal",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "stadium" : "MOR",
      "team1" : "Iran",
      "result" : null
   },
   {
      "team2" : "Morocco",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "stadium" : "KAL",
      "team1" : "Spain",
      "result" : null
   },
   {
      "team2" : "France",
      "date" : "2018-06-26T14:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "stadium" : "LUZ",
      "team1" : "Denmark",
      "result" : null
   },
   {
      "team2" : "Peru",
      "date" : "2018-06-26T14:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "stadium" : "FIS",
      "team1" : "Australia",
      "result" : null
   },
   {
      "team2" : "Argentina",
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "stadium" : "KRE",
      "team1" : "Nigeria",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "group" : "Group D",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "stadium" : "ROS",
      "team1" : "Iceland",
      "result" : null
   },
   {
      "team2" : "Sweden",
      "date" : "2018-06-27T14:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "stadium" : "CEN",
      "team1" : "Mexico",
      "result" : null
   },
   {
      "team2" : "Germany",
      "date" : "2018-06-27T14:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "stadium" : "KAZ",
      "team1" : "Korea Republic",
      "result" : null
   },
   {
      "team2" : "Brazil",
      "date" : "2018-06-27T18:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "stadium" : "OTK",
      "team1" : "Serbia",
      "result" : null
   },
   {
      "team2" : "Costa Rica",
      "date" : "2018-06-27T18:00:00",
      "description" : "Group E",
      "group" : "Group E",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "stadium" : "NIZ",
      "team1" : "Switzerland",
      "result" : null
   },
   {
      "team2" : "Poland",
      "date" : "2018-06-28T14:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "stadium" : "VOL",
      "team1" : "Japan",
      "result" : null
   },
   {
      "team2" : "Colombia",
      "date" : "2018-06-28T14:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "stadium" : "COS",
      "team1" : "Senegal",
      "result" : null
   },
   {
      "team2" : "Tunisia",
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "stadium" : "MOR",
      "team1" : "Panama",
      "result" : null
   },
   {
      "team2" : "Belgium",
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "stadium" : "KAL",
      "team1" : "England",
      "result" : null
   },
   {
      "team2" : "Argentina",
      "date" : "2018-06-30T14:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "stadium" : "KAZ",
      "team1" : "France",
      "result" : null
   },
   {
      "team2" : "Portugal",
      "date" : "2018-06-30T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "stadium" : "FIS",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "team2" : "Russia",
      "date" : "2018-07-01T14:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "stadium" : "LUZ",
      "team1" : "Spain",
      "result" : null
   },
   {
      "team2" : "Denmark",
      "date" : "2018-07-01T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "stadium" : "NIZ",
      "team1" : "Croatia",
      "result" : null
   },
   {
      "team2" : "Mexico",
      "date" : "2018-07-02T14:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "stadium" : "COS",
      "team1" : "Brazil",
      "result" : null
   },
   {
      "team2" : "Japan",
      "date" : "2018-07-02T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "stadium" : "ROS",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "team2" : "Switzerland",
      "date" : "2018-07-03T14:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "stadium" : "KRE",
      "team1" : "Sweden",
      "result" : null
   },
   {
      "team2" : "England",
      "date" : "2018-07-03T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "stadium" : "OTK",
      "team1" : "Colombia",
      "result" : null
   },
   {
      "team2" : "France",
      "date" : "2018-07-06T14:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "stadium" : "NIZ",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "team2" : "Belgium",
      "date" : "2018-07-06T18:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "stadium" : "KAZ",
      "team1" : "Brazil",
      "result" : null
   },
   {
      "team2" : "England",
      "date" : "2018-07-07T14:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "stadium" : "COS",
      "team1" : "Sweden",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "date" : "2018-07-07T18:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "stadium" : "FIS",
      "team1" : "Russia",
      "result" : null
   },
   {
      "team2" : "Belgium",
      "date" : "2018-07-10T18:00:00",
      "description" : "Semi Finals",
      "group" : null,
      "class" : "round-semi-finals stadium-kre team-france team-belgium",
      "stadium" : "KRE",
      "team1" : "France",
      "result" : null
   },
   {
      "team2" : "England",
      "date" : "2018-07-11T18:00:00",
      "description" : "Semi Finals",
      "group" : null,
      "class" : "round-semi-finals stadium-luz team-croatia team-england",
      "stadium" : "LUZ",
      "team1" : "Croatia",
      "result" : null
   },
   {
      "team2" : "England",
      "date" : "2018-07-14T14:00:00",
      "description" : "Finals",
      "group" : null,
      "class" : "round-finals stadium-kre team-belgium team-england",
      "stadium" : "KRE",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "date" : "2018-07-15T15:00:00",
      "description" : "Finals",
      "group" : null,
      "class" : "round-finals stadium-luz team-france team-croatia",
      "stadium" : "LUZ",
      "team1" : "France",
      "result" : null
   }
]
;

