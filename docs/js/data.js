var stadiums = {
   "KRE" : {
      "code" : "KRE",
      "timezone" : "Europe/Moscow",
      "name" : "Krestovsky Stadium",
      "city" : "Saint Petersburg",
      "utcoffset" : "3"
   },
   "VOL" : {
      "utcoffset" : "3",
      "city" : "Volgograd",
      "name" : "Volgograd Arena",
      "timezone" : "Europe/Volgograd",
      "code" : "VOL"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "name" : "Luzhniki Stadium",
      "code" : "LUZ",
      "city" : "Moscow",
      "utcoffset" : "3"
   },
   "KAZ" : {
      "utcoffset" : "3",
      "city" : "Kazan",
      "code" : "KAZ",
      "timezone" : "Europe/Moscow",
      "name" : "Kazan Arena"
   },
   "ROS" : {
      "code" : "ROS",
      "timezone" : "Europe/Moscow",
      "name" : "Rostov Arena",
      "city" : "Rostov-on-Don",
      "utcoffset" : "3"
   },
   "OTK" : {
      "utcoffset" : "3",
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "name" : "Otkritie Arena",
      "code" : "OTK"
   },
   "MOR" : {
      "utcoffset" : "3",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "code" : "MOR",
      "name" : "Mordovia Arena"
   },
   "KAL" : {
      "code" : "KAL",
      "timezone" : "Europe/Kaliningrad",
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "utcoffset" : "2"
   },
   "COS" : {
      "utcoffset" : "4",
      "code" : "COS",
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "city" : "Samara"
   },
   "FIS" : {
      "city" : "Sochi",
      "timezone" : "Europe/Moscow",
      "code" : "FIS",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4"
   },
   "NIZ" : {
      "utcoffset" : "3",
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "name" : "Nizhny Novgorod Stadium",
      "city" : "Nizhny Novgorod"
   },
   "CEN" : {
      "utcoffset" : "5",
      "city" : "Yekaterinburg",
      "name" : "Central Stadium",
      "timezone" : "Asia/Yekaterinburg",
      "code" : "CEN"
   }
}
;

var games = [
   {
      "date" : "2018-06-14T15:00:00",
      "team2" : "Saudi Arabia",
      "result" : null,
      "group" : "Group A",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "description" : "Group A",
      "stadium" : "LUZ",
      "team1" : "Russia"
   },
   {
      "result" : null,
      "team2" : "Uruguay",
      "date" : "2018-06-15T12:00:00",
      "team1" : "Egypt",
      "description" : "Group A",
      "stadium" : "CEN",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "group" : "Group A"
   },
   {
      "date" : "2018-06-15T15:00:00",
      "team2" : "Iran",
      "result" : null,
      "group" : "Group B",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "description" : "Group B",
      "stadium" : "KRE",
      "team1" : "Morocco"
   },
   {
      "result" : null,
      "team2" : "Spain",
      "date" : "2018-06-15T18:00:00",
      "team1" : "Portugal",
      "stadium" : "FIS",
      "description" : "Group B",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "group" : "Group B"
   },
   {
      "date" : "2018-06-16T10:00:00",
      "team2" : "Australia",
      "result" : null,
      "group" : "Group C",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "description" : "Group C",
      "team1" : "France"
   },
   {
      "team2" : "Iceland",
      "date" : "2018-06-16T13:00:00",
      "result" : null,
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "group" : "Group D",
      "team1" : "Argentina",
      "stadium" : "OTK",
      "description" : "Group D"
   },
   {
      "result" : null,
      "team2" : "Denmark",
      "date" : "2018-06-16T16:00:00",
      "team1" : "Peru",
      "description" : "Group C",
      "stadium" : "MOR",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "group" : "Group C"
   },
   {
      "result" : null,
      "team2" : "Nigeria",
      "date" : "2018-06-16T19:00:00",
      "team1" : "Croatia",
      "description" : "Group D",
      "stadium" : "KAL",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "group" : "Group D"
   },
   {
      "team2" : "Serbia",
      "date" : "2018-06-17T12:00:00",
      "result" : null,
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "group" : "Group E",
      "team1" : "Costa Rica",
      "stadium" : "COS",
      "description" : "Group E"
   },
   {
      "result" : null,
      "date" : "2018-06-17T15:00:00",
      "team2" : "Mexico",
      "stadium" : "LUZ",
      "description" : "Group F",
      "team1" : "Germany",
      "group" : "Group F",
      "class" : "round-group-f stadium-luz team-germany team-mexico"
   },
   {
      "team2" : "Switzerland",
      "date" : "2018-06-17T18:00:00",
      "result" : null,
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "group" : "Group E",
      "team1" : "Brazil",
      "description" : "Group E",
      "stadium" : "ROS"
   },
   {
      "result" : null,
      "team2" : "Korea Republic",
      "date" : "2018-06-18T12:00:00",
      "team1" : "Sweden",
      "description" : "Group F",
      "stadium" : "NIZ",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "group" : "Group F"
   },
   {
      "description" : "Group G",
      "stadium" : "FIS",
      "team1" : "Belgium",
      "group" : "Group G",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "result" : null,
      "date" : "2018-06-18T15:00:00",
      "team2" : "Panama"
   },
   {
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "group" : "Group G",
      "team1" : "Tunisia",
      "description" : "Group G",
      "stadium" : "VOL",
      "team2" : "England",
      "date" : "2018-06-18T18:00:00",
      "result" : null
   },
   {
      "description" : "Group H",
      "stadium" : "MOR",
      "team1" : "Colombia",
      "group" : "Group H",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "result" : null,
      "date" : "2018-06-19T12:00:00",
      "team2" : "Japan"
   },
   {
      "team2" : "Senegal",
      "date" : "2018-06-19T15:00:00",
      "result" : null,
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "group" : "Group H",
      "team1" : "Poland",
      "description" : "Group H",
      "stadium" : "OTK"
   },
   {
      "description" : "Group A",
      "stadium" : "KRE",
      "team1" : "Russia",
      "group" : "Group A",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "result" : null,
      "date" : "2018-06-19T18:00:00",
      "team2" : "Egypt"
   },
   {
      "date" : "2018-06-20T12:00:00",
      "team2" : "Morocco",
      "result" : null,
      "group" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "description" : "Group B",
      "stadium" : "LUZ",
      "team1" : "Portugal"
   },
   {
      "date" : "2018-06-20T15:00:00",
      "team2" : "Saudi Arabia",
      "result" : null,
      "group" : "Group A",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "stadium" : "ROS",
      "description" : "Group A",
      "team1" : "Uruguay"
   },
   {
      "group" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "stadium" : "KAZ",
      "description" : "Group B",
      "team1" : "Iran",
      "date" : "2018-06-20T18:00:00",
      "team2" : "Spain",
      "result" : null
   },
   {
      "team2" : "Australia",
      "date" : "2018-06-21T12:00:00",
      "result" : null,
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "group" : "Group C",
      "team1" : "Denmark",
      "stadium" : "COS",
      "description" : "Group C"
   },
   {
      "class" : "round-group-c stadium-cen team-france team-peru",
      "group" : "Group C",
      "team1" : "France",
      "stadium" : "CEN",
      "description" : "Group C",
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "result" : null
   },
   {
      "group" : "Group D",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "description" : "Group D",
      "stadium" : "NIZ",
      "team1" : "Argentina",
      "date" : "2018-06-21T18:00:00",
      "team2" : "Croatia",
      "result" : null
   },
   {
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "group" : "Group E",
      "team1" : "Brazil",
      "description" : "Group E",
      "stadium" : "KRE",
      "team2" : "Costa Rica",
      "date" : "2018-06-22T12:00:00",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-22T15:00:00",
      "team2" : "Iceland",
      "stadium" : "VOL",
      "description" : "Group D",
      "team1" : "Nigeria",
      "group" : "Group D",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland"
   },
   {
      "date" : "2018-06-22T18:00:00",
      "team2" : "Switzerland",
      "result" : null,
      "group" : "Group E",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "stadium" : "KAL",
      "description" : "Group E",
      "team1" : "Serbia"
   },
   {
      "team1" : "Belgium",
      "description" : "Group G",
      "stadium" : "OTK",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "group" : "Group G",
      "result" : null,
      "team2" : "Tunisia",
      "date" : "2018-06-23T12:00:00"
   },
   {
      "result" : null,
      "date" : "2018-06-23T15:00:00",
      "team2" : "Mexico",
      "description" : "Group F",
      "stadium" : "ROS",
      "team1" : "Korea Republic",
      "group" : "Group F",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico"
   },
   {
      "result" : null,
      "date" : "2018-06-23T18:00:00",
      "team2" : "Sweden",
      "description" : "Group F",
      "stadium" : "FIS",
      "team1" : "Germany",
      "group" : "Group F",
      "class" : "round-group-f stadium-fis team-germany team-sweden"
   },
   {
      "team2" : "Panama",
      "date" : "2018-06-24T12:00:00",
      "result" : null,
      "class" : "round-group-g stadium-niz team-england team-panama",
      "group" : "Group G",
      "team1" : "England",
      "description" : "Group G",
      "stadium" : "NIZ"
   },
   {
      "result" : null,
      "team2" : "Senegal",
      "date" : "2018-06-24T15:00:00",
      "team1" : "Japan",
      "stadium" : "CEN",
      "description" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "group" : "Group H"
   },
   {
      "result" : null,
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00",
      "team1" : "Poland",
      "description" : "Group H",
      "stadium" : "KAZ",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "group" : "Group H"
   },
   {
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "group" : "Group A",
      "team1" : "Uruguay",
      "description" : "Group A",
      "stadium" : "COS",
      "team2" : "Russia",
      "date" : "2018-06-25T14:00:00",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "team2" : "Egypt",
      "stadium" : "VOL",
      "description" : "Group A",
      "team1" : "Saudi Arabia",
      "group" : "Group A",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt"
   },
   {
      "result" : null,
      "team2" : "Portugal",
      "date" : "2018-06-25T18:00:00",
      "team1" : "Iran",
      "stadium" : "MOR",
      "description" : "Group B",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "group" : "Group B"
   },
   {
      "team2" : "Morocco",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "group" : "Group B",
      "team1" : "Spain",
      "description" : "Group B",
      "stadium" : "KAL"
   },
   {
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "group" : "Group C",
      "team1" : "Denmark",
      "stadium" : "LUZ",
      "description" : "Group C",
      "team2" : "France",
      "date" : "2018-06-26T14:00:00",
      "result" : null
   },
   {
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "group" : "Group C",
      "team1" : "Australia",
      "description" : "Group C",
      "stadium" : "FIS",
      "team2" : "Peru",
      "date" : "2018-06-26T14:00:00",
      "result" : null
   },
   {
      "date" : "2018-06-26T18:00:00",
      "team2" : "Argentina",
      "result" : null,
      "group" : "Group D",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "stadium" : "KRE",
      "description" : "Group D",
      "team1" : "Nigeria"
   },
   {
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "group" : "Group D",
      "team1" : "Iceland",
      "stadium" : "ROS",
      "description" : "Group D",
      "team2" : "Croatia",
      "date" : "2018-06-26T18:00:00",
      "result" : null
   },
   {
      "team2" : "Sweden",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "group" : "Group F",
      "team1" : "Mexico",
      "stadium" : "CEN",
      "description" : "Group F"
   },
   {
      "team2" : "Germany",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "stadium" : "KAZ",
      "description" : "Group F"
   },
   {
      "team2" : "Brazil",
      "date" : "2018-06-27T18:00:00",
      "result" : null,
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "group" : "Group E",
      "team1" : "Serbia",
      "stadium" : "OTK",
      "description" : "Group E"
   },
   {
      "team1" : "Switzerland",
      "description" : "Group E",
      "stadium" : "NIZ",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "group" : "Group E",
      "result" : null,
      "team2" : "Costa Rica",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "result" : null,
      "team2" : "Poland",
      "date" : "2018-06-28T14:00:00",
      "team1" : "Japan",
      "stadium" : "VOL",
      "description" : "Group H",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "group" : "Group H"
   },
   {
      "group" : "Group H",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "description" : "Group H",
      "stadium" : "COS",
      "team1" : "Senegal",
      "date" : "2018-06-28T14:00:00",
      "team2" : "Colombia",
      "result" : null
   },
   {
      "date" : "2018-06-28T18:00:00",
      "team2" : "Tunisia",
      "result" : null,
      "group" : "Group G",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "stadium" : "MOR",
      "description" : "Group G",
      "team1" : "Panama"
   },
   {
      "stadium" : "KAL",
      "description" : "Group G",
      "team1" : "England",
      "group" : "Group G",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "team2" : "Belgium"
   },
   {
      "team2" : "Argentina",
      "date" : "2018-06-30T14:00:00",
      "result" : null,
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "group" : null,
      "team1" : "France",
      "description" : "Round of 16",
      "stadium" : "KAZ"
   },
   {
      "team1" : "Uruguay",
      "description" : "Round of 16",
      "stadium" : "FIS",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "group" : null,
      "result" : null,
      "team2" : "Portugal",
      "date" : "2018-06-30T18:00:00"
   },
   {
      "stadium" : "LUZ",
      "description" : "Round of 16",
      "team1" : "Spain",
      "group" : null,
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "result" : null,
      "date" : "2018-07-01T14:00:00",
      "team2" : "Russia"
   },
   {
      "team1" : "Croatia",
      "stadium" : "NIZ",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "group" : null,
      "result" : null,
      "team2" : "Denmark",
      "date" : "2018-07-01T18:00:00"
   },
   {
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "group" : null,
      "team1" : "Brazil",
      "description" : "Round of 16",
      "stadium" : "COS",
      "team2" : "Mexico",
      "date" : "2018-07-02T14:00:00",
      "result" : null
   },
   {
      "team1" : "Belgium",
      "description" : "Round of 16",
      "stadium" : "ROS",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "group" : null,
      "result" : null,
      "team2" : "Japan",
      "date" : "2018-07-02T18:00:00"
   },
   {
      "date" : "2018-07-03T14:00:00",
      "team2" : "Switzerland",
      "result" : null,
      "group" : null,
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "stadium" : "KRE",
      "description" : "Round of 16",
      "team1" : "Sweden"
   },
   {
      "date" : "2018-07-03T18:00:00",
      "team2" : "England",
      "result" : null,
      "group" : null,
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "stadium" : "OTK",
      "description" : "Round of 16",
      "team1" : "Colombia"
   },
   {
      "result" : null,
      "date" : "2018-07-06T14:00:00",
      "team2" : "France",
      "description" : "Quarter Finals",
      "stadium" : "NIZ",
      "team1" : "Uruguay",
      "group" : null,
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france"
   },
   {
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "group" : null,
      "team1" : "Brazil",
      "stadium" : "KAZ",
      "description" : "Quarter Finals",
      "team2" : "Belgium",
      "date" : "2018-07-06T18:00:00",
      "result" : null
   },
   {
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "group" : null,
      "team1" : "Sweden",
      "description" : "Quarter Finals",
      "stadium" : "COS",
      "team2" : "England",
      "date" : "2018-07-07T14:00:00",
      "result" : null
   },
   {
      "stadium" : "FIS",
      "description" : "Quarter Finals",
      "team1" : "Russia",
      "group" : null,
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "result" : null,
      "date" : "2018-07-07T18:00:00",
      "team2" : "Croatia"
   },
   {
      "result" : null,
      "team2" : "Belgium",
      "date" : "2018-07-10T18:00:00",
      "team1" : "France",
      "description" : "Semi Finals",
      "stadium" : "KRE",
      "class" : "round-semi-finals stadium-kre team-france team-belgium",
      "group" : null
   },
   {
      "result" : null,
      "date" : "2018-07-11T18:00:00",
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "description" : "Semi Finals",
      "team1" : "To be announced",
      "group" : null,
      "class" : "round-semi-finals stadium-luz"
   },
   {
      "team1" : "To be announced",
      "description" : "Finals",
      "stadium" : "KRE",
      "class" : "round-finals stadium-kre",
      "group" : null,
      "result" : null,
      "team2" : "To be announced",
      "date" : "2018-07-14T14:00:00"
   },
   {
      "result" : null,
      "date" : "2018-07-15T15:00:00",
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "description" : "Finals",
      "team1" : "To be announced",
      "group" : null,
      "class" : "round-finals stadium-luz"
   }
]
;

