var stadiums = {
   "VOL" : {
      "name" : "Volgograd Arena",
      "code" : "VOL",
      "utcoffset" : "3",
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd"
   },
   "FIS" : {
      "code" : "FIS",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "city" : "Sochi",
      "timezone" : "Europe/Moscow"
   },
   "KAZ" : {
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "timezone" : "Europe/Moscow",
      "city" : "Kazan",
      "utcoffset" : "3"
   },
   "COS" : {
      "utcoffset" : "4",
      "timezone" : "Europe/Samara",
      "city" : "Samara",
      "code" : "COS",
      "name" : "Cosmos Arena"
   },
   "MOR" : {
      "name" : "Mordovia Arena",
      "code" : "MOR",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Saransk"
   },
   "LUZ" : {
      "code" : "LUZ",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Moscow"
   },
   "NIZ" : {
      "code" : "NIZ",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Nizhny Novgorod"
   },
   "OTK" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "code" : "OTK",
      "name" : "Otkritie Arena"
   },
   "CEN" : {
      "code" : "CEN",
      "name" : "Central Stadium",
      "timezone" : "Asia/Yekaterinburg",
      "city" : "Yekaterinburg",
      "utcoffset" : "5"
   },
   "KRE" : {
      "name" : "Krestovsky Stadium",
      "code" : "KRE",
      "city" : "Saint Petersburg",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "ROS" : {
      "utcoffset" : "3",
      "city" : "Rostov-on-Don",
      "timezone" : "Europe/Moscow",
      "code" : "ROS",
      "name" : "Rostov Arena"
   },
   "KAL" : {
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "city" : "Kaliningrad",
      "code" : "KAL",
      "name" : "Kaliningrad Stadium"
   }
}
;

var games = [
   {
      "team1" : "Russia",
      "group" : "Group A",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "team2" : "Saudi Arabia",
      "description" : "Group A",
      "stadium" : "LUZ",
      "result" : null,
      "date" : "2018-06-14T15:00:00"
   },
   {
      "team1" : "Egypt",
      "group" : "Group A",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "team2" : "Uruguay",
      "description" : "Group A",
      "stadium" : "CEN",
      "result" : null,
      "date" : "2018-06-15T12:00:00"
   },
   {
      "team1" : "Morocco",
      "group" : "Group B",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "team2" : "Iran",
      "stadium" : "KRE",
      "description" : "Group B",
      "date" : "2018-06-15T15:00:00",
      "result" : null
   },
   {
      "team2" : "Spain",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "group" : "Group B",
      "team1" : "Portugal",
      "date" : "2018-06-15T18:00:00",
      "result" : null,
      "stadium" : "FIS",
      "description" : "Group B"
   },
   {
      "group" : "Group C",
      "team1" : "France",
      "team2" : "Australia",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "result" : null,
      "date" : "2018-06-16T10:00:00",
      "description" : "Group C",
      "stadium" : "KAZ"
   },
   {
      "team1" : "Argentina",
      "group" : "Group D",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "team2" : "Iceland",
      "stadium" : "OTK",
      "description" : "Group D",
      "date" : "2018-06-16T13:00:00",
      "result" : null
   },
   {
      "team2" : "Denmark",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "group" : "Group C",
      "team1" : "Peru",
      "date" : "2018-06-16T16:00:00",
      "result" : null,
      "stadium" : "MOR",
      "description" : "Group C"
   },
   {
      "team1" : "Croatia",
      "group" : "Group D",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "team2" : "Nigeria",
      "description" : "Group D",
      "stadium" : "KAL",
      "result" : null,
      "date" : "2018-06-16T19:00:00"
   },
   {
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "team2" : "Serbia",
      "team1" : "Costa Rica",
      "group" : "Group E",
      "stadium" : "COS",
      "description" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "result" : null
   },
   {
      "date" : "2018-06-17T15:00:00",
      "result" : null,
      "stadium" : "LUZ",
      "description" : "Group F",
      "group" : "Group F",
      "team1" : "Germany",
      "team2" : "Mexico",
      "class" : "round-group-f stadium-luz team-germany team-mexico"
   },
   {
      "stadium" : "ROS",
      "description" : "Group E",
      "date" : "2018-06-17T18:00:00",
      "result" : null,
      "team1" : "Brazil",
      "group" : "Group E",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "team2" : "Switzerland"
   },
   {
      "team1" : "Sweden",
      "group" : "Group F",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "team2" : "Korea Republic",
      "description" : "Group F",
      "stadium" : "NIZ",
      "result" : null,
      "date" : "2018-06-18T12:00:00"
   },
   {
      "date" : "2018-06-18T15:00:00",
      "result" : null,
      "stadium" : "FIS",
      "description" : "Group G",
      "team2" : "Panama",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "group" : "Group G",
      "team1" : "Belgium"
   },
   {
      "team2" : "England",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "group" : "Group G",
      "team1" : "Tunisia",
      "date" : "2018-06-18T18:00:00",
      "result" : null,
      "stadium" : "VOL",
      "description" : "Group G"
   },
   {
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "team2" : "Japan",
      "team1" : "Colombia",
      "group" : "Group H",
      "description" : "Group H",
      "stadium" : "MOR",
      "result" : null,
      "date" : "2018-06-19T12:00:00"
   },
   {
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "team2" : "Senegal",
      "team1" : "Poland",
      "group" : "Group H",
      "stadium" : "OTK",
      "description" : "Group H",
      "date" : "2018-06-19T15:00:00",
      "result" : null
   },
   {
      "team1" : "Russia",
      "group" : "Group A",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "team2" : "Egypt",
      "stadium" : "KRE",
      "description" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "result" : null
   },
   {
      "stadium" : "LUZ",
      "description" : "Group B",
      "date" : "2018-06-20T12:00:00",
      "result" : null,
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "team2" : "Morocco",
      "team1" : "Portugal",
      "group" : "Group B"
   },
   {
      "date" : "2018-06-20T15:00:00",
      "result" : null,
      "stadium" : "ROS",
      "description" : "Group A",
      "group" : "Group A",
      "team1" : "Uruguay",
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia"
   },
   {
      "result" : null,
      "date" : "2018-06-20T18:00:00",
      "description" : "Group B",
      "stadium" : "KAZ",
      "team2" : "Spain",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "group" : "Group B",
      "team1" : "Iran"
   },
   {
      "description" : "Group C",
      "stadium" : "COS",
      "result" : null,
      "date" : "2018-06-21T12:00:00",
      "team1" : "Denmark",
      "group" : "Group C",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "team2" : "Australia"
   },
   {
      "description" : "Group C",
      "stadium" : "CEN",
      "result" : null,
      "date" : "2018-06-21T15:00:00",
      "team1" : "France",
      "group" : "Group C",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team2" : "Peru"
   },
   {
      "stadium" : "NIZ",
      "description" : "Group D",
      "date" : "2018-06-21T18:00:00",
      "result" : null,
      "team1" : "Argentina",
      "group" : "Group D",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "team2" : "Croatia"
   },
   {
      "team2" : "Costa Rica",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "group" : "Group E",
      "team1" : "Brazil",
      "date" : "2018-06-22T12:00:00",
      "result" : null,
      "stadium" : "KRE",
      "description" : "Group E"
   },
   {
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "team2" : "Iceland",
      "team1" : "Nigeria",
      "group" : "Group D",
      "description" : "Group D",
      "stadium" : "VOL",
      "result" : null,
      "date" : "2018-06-22T15:00:00"
   },
   {
      "description" : "Group E",
      "stadium" : "KAL",
      "result" : null,
      "date" : "2018-06-22T18:00:00",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "team2" : "Switzerland",
      "team1" : "Serbia",
      "group" : "Group E"
   },
   {
      "stadium" : "OTK",
      "description" : "Group G",
      "date" : "2018-06-23T12:00:00",
      "result" : null,
      "team1" : "Belgium",
      "group" : "Group G",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "team2" : "Tunisia"
   },
   {
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "team2" : "Mexico",
      "team1" : "Korea Republic",
      "group" : "Group F",
      "stadium" : "ROS",
      "description" : "Group F",
      "date" : "2018-06-23T15:00:00",
      "result" : null
   },
   {
      "team1" : "Germany",
      "group" : "Group F",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "team2" : "Sweden",
      "stadium" : "FIS",
      "description" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "result" : null
   },
   {
      "description" : "Group G",
      "stadium" : "NIZ",
      "result" : null,
      "date" : "2018-06-24T12:00:00",
      "team1" : "England",
      "group" : "Group G",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "team2" : "Panama"
   },
   {
      "description" : "Group H",
      "stadium" : "CEN",
      "result" : null,
      "date" : "2018-06-24T15:00:00",
      "team1" : "Japan",
      "group" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "team2" : "Senegal"
   },
   {
      "result" : null,
      "date" : "2018-06-24T18:00:00",
      "description" : "Group H",
      "stadium" : "KAZ",
      "group" : "Group H",
      "team1" : "Poland",
      "team2" : "Colombia",
      "class" : "round-group-h stadium-kaz team-poland team-colombia"
   },
   {
      "description" : "Group A",
      "stadium" : "COS",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "team1" : "Uruguay",
      "group" : "Group A"
   },
   {
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "team2" : "Egypt",
      "team1" : "Saudi Arabia",
      "group" : "Group A",
      "stadium" : "VOL",
      "description" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "stadium" : "MOR",
      "team2" : "Portugal",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "group" : "Group B",
      "team1" : "Iran"
   },
   {
      "group" : "Group B",
      "team1" : "Spain",
      "team2" : "Morocco",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "stadium" : "KAL",
      "description" : "Group B"
   },
   {
      "stadium" : "LUZ",
      "description" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "result" : null,
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "team2" : "France",
      "team1" : "Denmark",
      "group" : "Group C"
   },
   {
      "description" : "Group C",
      "stadium" : "FIS",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "team1" : "Australia",
      "group" : "Group C",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "team2" : "Peru"
   },
   {
      "result" : null,
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "stadium" : "KRE",
      "team2" : "Argentina",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "group" : "Group D",
      "team1" : "Nigeria"
   },
   {
      "result" : null,
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "stadium" : "ROS",
      "team2" : "Croatia",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "group" : "Group D",
      "team1" : "Iceland"
   },
   {
      "team2" : "Sweden",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "group" : "Group F",
      "team1" : "Mexico",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "stadium" : "CEN",
      "description" : "Group F"
   },
   {
      "team2" : "Germany",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "stadium" : "KAZ",
      "description" : "Group F"
   },
   {
      "team1" : "Serbia",
      "group" : "Group E",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "team2" : "Brazil",
      "stadium" : "OTK",
      "description" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "result" : null
   },
   {
      "team1" : "Switzerland",
      "group" : "Group E",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team2" : "Costa Rica",
      "description" : "Group E",
      "stadium" : "NIZ",
      "result" : null,
      "date" : "2018-06-27T18:00:00"
   },
   {
      "team2" : "Poland",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "group" : "Group H",
      "team1" : "Japan",
      "date" : "2018-06-28T14:00:00",
      "result" : null,
      "stadium" : "VOL",
      "description" : "Group H"
   },
   {
      "stadium" : "COS",
      "description" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "result" : null,
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "team2" : "Colombia",
      "team1" : "Senegal",
      "group" : "Group H"
   },
   {
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G",
      "stadium" : "MOR",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "group" : "Group G",
      "team1" : "Panama"
   },
   {
      "description" : "Group G",
      "stadium" : "KAL",
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "team2" : "Belgium",
      "team1" : "England",
      "group" : "Group G"
   },
   {
      "team2" : "Portugal",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "group" : null,
      "team1" : "Uruguay",
      "date" : "2018-06-30T18:00:00",
      "result" : null,
      "stadium" : "FIS",
      "description" : "Round of 16"
   },
   {
      "stadium" : "KAZ",
      "description" : "Round of 16",
      "date" : "2018-06-30T18:00:00",
      "result" : null,
      "team1" : "France",
      "group" : null,
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "team2" : "Argentina"
   },
   {
      "team2" : "Russia",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "group" : null,
      "team1" : "Spain",
      "result" : null,
      "date" : "2018-07-01T14:00:00",
      "description" : "Round of 16",
      "stadium" : "LUZ"
   },
   {
      "team2" : "Denmark",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "group" : null,
      "team1" : "Croatia",
      "date" : "2018-07-01T18:00:00",
      "result" : null,
      "stadium" : "NIZ",
      "description" : "Round of 16"
   },
   {
      "description" : "Round of 16",
      "stadium" : "COS",
      "result" : null,
      "date" : "2018-07-02T14:00:00",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "team2" : "Mexico",
      "team1" : "Brazil",
      "group" : null
   },
   {
      "date" : "2018-07-02T18:00:00",
      "result" : null,
      "stadium" : "ROS",
      "description" : "Round of 16",
      "team2" : "Runner-up Group H",
      "class" : "round-round-of-16 stadium-ros",
      "group" : null,
      "team1" : "Winner Group G"
   },
   {
      "description" : "Round of 16",
      "stadium" : "KRE",
      "result" : null,
      "date" : "2018-07-03T14:00:00",
      "team1" : "Sweden",
      "group" : null,
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "team2" : "Switzerland"
   },
   {
      "stadium" : "OTK",
      "description" : "Round of 16",
      "date" : "2018-07-03T18:00:00",
      "result" : null,
      "class" : "round-round-of-16 stadium-otk",
      "team2" : "Runner-up Group G",
      "team1" : "Winner Group H",
      "group" : null
   },
   {
      "result" : null,
      "date" : "2018-07-06T14:00:00",
      "description" : "Quarter Finals",
      "stadium" : "NIZ",
      "group" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "class" : "round-quarter-finals stadium-niz"
   },
   {
      "team1" : "To be announced",
      "group" : null,
      "class" : "round-quarter-finals stadium-kaz",
      "team2" : "To be announced",
      "description" : "Quarter Finals",
      "stadium" : "KAZ",
      "result" : null,
      "date" : "2018-07-06T18:00:00"
   },
   {
      "group" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "class" : "round-quarter-finals stadium-cos",
      "date" : "2018-07-07T14:00:00",
      "result" : null,
      "stadium" : "COS",
      "description" : "Quarter Finals"
   },
   {
      "stadium" : "FIS",
      "description" : "Quarter Finals",
      "date" : "2018-07-07T18:00:00",
      "result" : null,
      "class" : "round-quarter-finals stadium-fis",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "group" : null
   },
   {
      "group" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "class" : "round-semi-finals stadium-kre",
      "date" : "2018-07-10T18:00:00",
      "result" : null,
      "stadium" : "KRE",
      "description" : "Semi Finals"
   },
   {
      "stadium" : "LUZ",
      "description" : "Semi Finals",
      "date" : "2018-07-11T18:00:00",
      "result" : null,
      "class" : "round-semi-finals stadium-luz",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "group" : null
   },
   {
      "class" : "round-finals stadium-kre",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "group" : null,
      "stadium" : "KRE",
      "description" : "Finals",
      "date" : "2018-07-14T14:00:00",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-07-15T15:00:00",
      "description" : "Finals",
      "stadium" : "LUZ",
      "team2" : "To be announced",
      "class" : "round-finals stadium-luz",
      "group" : null,
      "team1" : "To be announced"
   }
]
;

