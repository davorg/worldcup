var stadiums = {
   "VOL" : {
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "utcoffset" : "3",
      "city" : "Volgograd",
      "code" : "VOL"
   },
   "LUZ" : {
      "name" : "Luzhniki Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "city" : "Moscow",
      "code" : "LUZ"
   },
   "KRE" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "code" : "KRE"
   },
   "NIZ" : {
      "name" : "Nizhny Novgorod Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "city" : "Nizhny Novgorod",
      "code" : "NIZ"
   },
   "OTK" : {
      "code" : "OTK",
      "name" : "Otkritie Arena",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "city" : "Moscow"
   },
   "MOR" : {
      "code" : "MOR",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Mordovia Arena"
   },
   "KAL" : {
      "timezone" : "Europe/Kaliningrad",
      "utcoffset" : "2",
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "code" : "KAL"
   },
   "COS" : {
      "code" : "COS",
      "name" : "Cosmos Arena",
      "timezone" : "Europe/Samara",
      "utcoffset" : "4",
      "city" : "Samara"
   },
   "FIS" : {
      "code" : "FIS",
      "timezone" : "Europe/Moscow",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "city" : "Sochi"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Rostov Arena",
      "code" : "ROS"
   },
   "CEN" : {
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "city" : "Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   "KAZ" : {
      "timezone" : "Europe/Moscow",
      "city" : "Kazan",
      "utcoffset" : "3",
      "name" : "Kazan Arena",
      "code" : "KAZ"
   }
}
;

var games = [
   {
      "description" : "Group A",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00",
      "result" : null,
      "team1" : "Russia",
      "team2" : "Saudi Arabia"
   },
   {
      "team2" : "Uruguay",
      "result" : null,
      "team1" : "Egypt",
      "date" : "2018-06-15T12:00:00",
      "group" : "Group A",
      "stadium" : "CEN",
      "description" : "Group A",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay"
   },
   {
      "team2" : "Iran",
      "result" : null,
      "team1" : "Morocco",
      "stadium" : "KRE",
      "date" : "2018-06-15T15:00:00",
      "group" : "Group B",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "description" : "Group B"
   },
   {
      "team1" : "Portugal",
      "result" : null,
      "team2" : "Spain",
      "stadium" : "FIS",
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "description" : "Group B"
   },
   {
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "description" : "Group C",
      "group" : "Group C",
      "date" : "2018-06-16T10:00:00",
      "stadium" : "KAZ",
      "team2" : "Australia",
      "team1" : "France",
      "result" : null
   },
   {
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "description" : "Group D",
      "date" : "2018-06-16T13:00:00",
      "group" : "Group D",
      "stadium" : "OTK",
      "team2" : "Iceland",
      "result" : null,
      "team1" : "Argentina"
   },
   {
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "description" : "Group C",
      "stadium" : "MOR",
      "group" : "Group C",
      "date" : "2018-06-16T16:00:00",
      "team2" : "Denmark",
      "team1" : "Peru",
      "result" : null
   },
   {
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "description" : "Group D",
      "team2" : "Nigeria",
      "result" : null,
      "team1" : "Croatia",
      "stadium" : "KAL",
      "group" : "Group D",
      "date" : "2018-06-16T19:00:00"
   },
   {
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "description" : "Group E",
      "team2" : "Serbia",
      "result" : null,
      "team1" : "Costa Rica",
      "stadium" : "COS",
      "date" : "2018-06-17T12:00:00",
      "group" : "Group E"
   },
   {
      "team2" : "Mexico",
      "result" : null,
      "team1" : "Germany",
      "group" : "Group F",
      "date" : "2018-06-17T15:00:00",
      "stadium" : "LUZ",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "description" : "Group F"
   },
   {
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "description" : "Group E",
      "stadium" : "ROS",
      "date" : "2018-06-17T18:00:00",
      "group" : "Group E",
      "team2" : "Switzerland",
      "result" : null,
      "team1" : "Brazil"
   },
   {
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "description" : "Group F",
      "team2" : "Korea Republic",
      "result" : null,
      "team1" : "Sweden",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "stadium" : "NIZ"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-18T15:00:00",
      "stadium" : "FIS",
      "team2" : "Panama",
      "team1" : "Belgium",
      "result" : null,
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "description" : "Group G"
   },
   {
      "stadium" : "VOL",
      "date" : "2018-06-18T18:00:00",
      "group" : "Group G",
      "team2" : "England",
      "result" : null,
      "team1" : "Tunisia",
      "description" : "Group G",
      "class" : "round-group-g stadium-vol team-tunisia team-england"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "stadium" : "MOR",
      "date" : "2018-06-19T12:00:00",
      "group" : "Group H",
      "team2" : "Japan",
      "result" : null,
      "team1" : "Colombia"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "team2" : "Senegal",
      "team1" : "Poland",
      "result" : null,
      "stadium" : "OTK",
      "date" : "2018-06-19T15:00:00",
      "group" : "Group H"
   },
   {
      "stadium" : "KRE",
      "group" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "team2" : "Egypt",
      "result" : null,
      "team1" : "Russia",
      "description" : "Group A",
      "class" : "round-group-a stadium-kre team-russia team-egypt"
   },
   {
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "description" : "Group B",
      "team2" : "Morocco",
      "result" : null,
      "team1" : "Portugal",
      "stadium" : "LUZ",
      "date" : "2018-06-20T12:00:00",
      "group" : "Group B"
   },
   {
      "stadium" : "ROS",
      "group" : "Group A",
      "date" : "2018-06-20T15:00:00",
      "team2" : "Saudi Arabia",
      "team1" : "Uruguay",
      "result" : null,
      "description" : "Group A",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia"
   },
   {
      "result" : null,
      "team1" : "Iran",
      "team2" : "Spain",
      "stadium" : "KAZ",
      "group" : "Group B",
      "date" : "2018-06-20T18:00:00",
      "description" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain"
   },
   {
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "description" : "Group C",
      "team1" : "Denmark",
      "result" : null,
      "team2" : "Australia",
      "date" : "2018-06-21T12:00:00",
      "group" : "Group C",
      "stadium" : "COS"
   },
   {
      "team2" : "Peru",
      "result" : null,
      "team1" : "France",
      "group" : "Group C",
      "date" : "2018-06-21T15:00:00",
      "stadium" : "CEN",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "description" : "Group C"
   },
   {
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "description" : "Group D",
      "result" : null,
      "team1" : "Argentina",
      "team2" : "Croatia",
      "date" : "2018-06-21T18:00:00",
      "group" : "Group D",
      "stadium" : "NIZ"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "team1" : "Brazil",
      "result" : null,
      "team2" : "Costa Rica",
      "group" : "Group E",
      "date" : "2018-06-22T12:00:00",
      "stadium" : "KRE"
   },
   {
      "group" : "Group D",
      "date" : "2018-06-22T15:00:00",
      "stadium" : "VOL",
      "team1" : "Nigeria",
      "result" : null,
      "team2" : "Iceland",
      "description" : "Group D",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "stadium" : "KAL",
      "result" : null,
      "team1" : "Serbia",
      "team2" : "Switzerland"
   },
   {
      "stadium" : "OTK",
      "date" : "2018-06-23T12:00:00",
      "group" : "Group G",
      "team2" : "Tunisia",
      "team1" : "Belgium",
      "result" : null,
      "description" : "Group G",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia"
   },
   {
      "description" : "Group F",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "stadium" : "ROS",
      "date" : "2018-06-23T15:00:00",
      "group" : "Group F",
      "team2" : "Mexico",
      "result" : null,
      "team1" : "Korea Republic"
   },
   {
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "description" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "group" : "Group F",
      "stadium" : "FIS",
      "team1" : "Germany",
      "result" : null,
      "team2" : "Sweden"
   },
   {
      "class" : "round-group-g stadium-niz team-england team-panama",
      "description" : "Group G",
      "team1" : "England",
      "result" : null,
      "team2" : "Panama",
      "stadium" : "NIZ",
      "date" : "2018-06-24T12:00:00",
      "group" : "Group G"
   },
   {
      "team2" : "Senegal",
      "team1" : "Japan",
      "result" : null,
      "group" : "Group H",
      "date" : "2018-06-24T15:00:00",
      "stadium" : "CEN",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "description" : "Group H"
   },
   {
      "stadium" : "KAZ",
      "group" : "Group H",
      "date" : "2018-06-24T18:00:00",
      "result" : null,
      "team1" : "Poland",
      "team2" : "Colombia",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "description" : "Group H"
   },
   {
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "description" : "Group A",
      "team2" : "Russia",
      "team1" : "Uruguay",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "stadium" : "COS"
   },
   {
      "result" : null,
      "team1" : "Saudi Arabia",
      "team2" : "Egypt",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "stadium" : "VOL",
      "description" : "Group A",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt"
   },
   {
      "stadium" : "MOR",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "team1" : "Iran",
      "result" : null,
      "team2" : "Portugal",
      "description" : "Group B",
      "class" : "round-group-b stadium-mor team-iran team-portugal"
   },
   {
      "result" : null,
      "team1" : "Spain",
      "team2" : "Morocco",
      "stadium" : "KAL",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "description" : "Group B",
      "class" : "round-group-b stadium-kal team-spain team-morocco"
   },
   {
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "description" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Denmark",
      "team2" : "France"
   },
   {
      "group" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "stadium" : "FIS",
      "team2" : "Peru",
      "result" : null,
      "team1" : "Australia",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "description" : "Group C"
   },
   {
      "description" : "Group D",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "team1" : "Nigeria",
      "result" : null,
      "team2" : "Argentina",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D",
      "stadium" : "KRE"
   },
   {
      "team2" : "Croatia",
      "result" : null,
      "team1" : "Iceland",
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "stadium" : "ROS",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "description" : "Group D"
   },
   {
      "stadium" : "CEN",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "team2" : "Sweden",
      "team1" : "Mexico",
      "result" : null,
      "description" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden"
   },
   {
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "description" : "Group F",
      "stadium" : "KAZ",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "team2" : "Germany",
      "result" : null,
      "team1" : "Korea Republic"
   },
   {
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "description" : "Group E",
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "stadium" : "OTK",
      "result" : null,
      "team1" : "Serbia",
      "team2" : "Brazil"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team1" : "Switzerland",
      "result" : null,
      "team2" : "Costa Rica",
      "stadium" : "NIZ",
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E"
   },
   {
      "stadium" : "VOL",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "team2" : "Poland",
      "team1" : "Japan",
      "result" : null,
      "description" : "Group H",
      "class" : "round-group-h stadium-vol team-japan team-poland"
   },
   {
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "description" : "Group H",
      "team2" : "Colombia",
      "result" : null,
      "team1" : "Senegal",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "stadium" : "COS"
   },
   {
      "description" : "Group G",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "stadium" : "MOR",
      "team2" : "Tunisia",
      "result" : null,
      "team1" : "Panama"
   },
   {
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "stadium" : "KAL",
      "team1" : "England",
      "result" : null,
      "team2" : "Belgium",
      "description" : "Group G",
      "class" : "round-group-g stadium-kal team-england team-belgium"
   },
   {
      "team2" : "Argentina",
      "result" : null,
      "team1" : "France",
      "stadium" : "KAZ",
      "group" : null,
      "date" : "2018-06-30T14:00:00",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina"
   },
   {
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "description" : "Round of 16",
      "stadium" : "FIS",
      "group" : null,
      "date" : "2018-06-30T18:00:00",
      "team2" : "Portugal",
      "team1" : "Uruguay",
      "result" : null
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "team2" : "Russia",
      "team1" : "Spain",
      "result" : null,
      "stadium" : "LUZ",
      "group" : null,
      "date" : "2018-07-01T14:00:00"
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "stadium" : "NIZ",
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "team2" : "Denmark",
      "result" : null,
      "team1" : "Croatia"
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "stadium" : "COS",
      "date" : "2018-07-02T14:00:00",
      "group" : null,
      "result" : null,
      "team1" : "Brazil",
      "team2" : "Mexico"
   },
   {
      "team2" : "Japan",
      "result" : null,
      "team1" : "Belgium",
      "stadium" : "ROS",
      "group" : null,
      "date" : "2018-07-02T18:00:00",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "description" : "Round of 16"
   },
   {
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "description" : "Round of 16",
      "team1" : "Sweden",
      "result" : null,
      "team2" : "Switzerland",
      "stadium" : "KRE",
      "date" : "2018-07-03T14:00:00",
      "group" : null
   },
   {
      "team1" : "Colombia",
      "result" : null,
      "team2" : "England",
      "group" : null,
      "date" : "2018-07-03T10:00:00",
      "stadium" : "OTK",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england"
   },
   {
      "group" : null,
      "date" : "2018-07-06T14:00:00",
      "stadium" : "NIZ",
      "team2" : "France",
      "result" : null,
      "team1" : "Uruguay",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france"
   },
   {
      "stadium" : "KAZ",
      "date" : "2018-07-06T18:00:00",
      "group" : null,
      "team2" : "To be announced",
      "result" : null,
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-kaz"
   },
   {
      "stadium" : "COS",
      "group" : null,
      "date" : "2018-07-07T14:00:00",
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-cos"
   },
   {
      "class" : "round-quarter-finals stadium-fis",
      "description" : "Quarter Finals",
      "date" : "2018-07-07T18:00:00",
      "group" : null,
      "stadium" : "FIS",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "result" : null
   },
   {
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "group" : null,
      "date" : "2018-07-10T18:00:00",
      "stadium" : "KRE",
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-kre"
   },
   {
      "class" : "round-semi-finals stadium-luz",
      "description" : "Semi Finals",
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "group" : null,
      "date" : "2018-07-11T18:00:00"
   },
   {
      "class" : "round-finals stadium-kre",
      "description" : "Finals",
      "stadium" : "KRE",
      "group" : null,
      "date" : "2018-07-14T14:00:00",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "result" : null
   },
   {
      "description" : "Finals",
      "class" : "round-finals stadium-luz",
      "date" : "2018-07-15T15:00:00",
      "group" : null,
      "stadium" : "LUZ",
      "team2" : "To be announced",
      "result" : null,
      "team1" : "To be announced"
   }
]
;

