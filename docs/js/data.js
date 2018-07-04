var stadiums = {
   "LUZ" : {
      "city" : "Moscow",
      "name" : "Luzhniki Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "code" : "LUZ"
   },
   "MOR" : {
      "city" : "Saransk",
      "code" : "MOR",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "name" : "Mordovia Arena"
   },
   "KRE" : {
      "code" : "KRE",
      "name" : "Krestovsky Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "city" : "Saint Petersburg"
   },
   "FIS" : {
      "code" : "FIS",
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow",
      "name" : "Fisht Olympic Stadium",
      "city" : "Sochi"
   },
   "VOL" : {
      "city" : "Volgograd",
      "utcoffset" : "3",
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "code" : "VOL"
   },
   "CEN" : {
      "city" : "Yekaterinburg",
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   "KAL" : {
      "timezone" : "Europe/Kaliningrad",
      "utcoffset" : "2",
      "name" : "Kaliningrad Stadium",
      "code" : "KAL",
      "city" : "Kaliningrad"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "code" : "ROS",
      "timezone" : "Europe/Moscow",
      "name" : "Rostov Arena",
      "utcoffset" : "3"
   },
   "OTK" : {
      "city" : "Moscow",
      "code" : "OTK",
      "timezone" : "Europe/Moscow",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   "KAZ" : {
      "city" : "Kazan",
      "code" : "KAZ",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "name" : "Kazan Arena"
   },
   "COS" : {
      "city" : "Samara",
      "utcoffset" : "4",
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "code" : "COS"
   },
   "NIZ" : {
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Nizhny Novgorod Stadium",
      "code" : "NIZ",
      "city" : "Nizhny Novgorod"
   }
}
;

var games = [
   {
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "team1" : "Russia",
      "description" : "Group A",
      "result" : null,
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00",
      "team2" : "Saudi Arabia"
   },
   {
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "stadium" : "CEN",
      "team1" : "Egypt",
      "description" : "Group A",
      "result" : null,
      "group" : "Group A",
      "date" : "2018-06-15T12:00:00",
      "team2" : "Uruguay"
   },
   {
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "stadium" : "KRE",
      "description" : "Group B",
      "team1" : "Morocco",
      "result" : null,
      "group" : "Group B",
      "team2" : "Iran",
      "date" : "2018-06-15T15:00:00"
   },
   {
      "stadium" : "FIS",
      "team1" : "Portugal",
      "description" : "Group B",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00",
      "team2" : "Spain",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-16T10:00:00",
      "team2" : "Australia",
      "group" : "Group C",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "team1" : "France",
      "description" : "Group C",
      "stadium" : "KAZ"
   },
   {
      "date" : "2018-06-16T13:00:00",
      "team2" : "Iceland",
      "group" : "Group D",
      "result" : null,
      "team1" : "Argentina",
      "description" : "Group D",
      "stadium" : "OTK",
      "class" : "round-group-d stadium-otk team-argentina team-iceland"
   },
   {
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "stadium" : "MOR",
      "description" : "Group C",
      "team1" : "Peru",
      "result" : null,
      "group" : "Group C",
      "team2" : "Denmark",
      "date" : "2018-06-16T16:00:00"
   },
   {
      "description" : "Group D",
      "team1" : "Croatia",
      "stadium" : "KAL",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "team2" : "Nigeria",
      "date" : "2018-06-16T19:00:00",
      "group" : "Group D",
      "result" : null
   },
   {
      "team1" : "Costa Rica",
      "description" : "Group E",
      "stadium" : "COS",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "date" : "2018-06-17T12:00:00",
      "team2" : "Serbia",
      "group" : "Group E",
      "result" : null
   },
   {
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "team1" : "Germany",
      "description" : "Group F",
      "stadium" : "LUZ",
      "result" : null,
      "date" : "2018-06-17T15:00:00",
      "team2" : "Mexico",
      "group" : "Group F"
   },
   {
      "stadium" : "ROS",
      "team1" : "Brazil",
      "description" : "Group E",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "group" : "Group E",
      "date" : "2018-06-17T18:00:00",
      "team2" : "Switzerland",
      "result" : null
   },
   {
      "description" : "Group F",
      "team1" : "Sweden",
      "stadium" : "NIZ",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "team2" : "Korea Republic",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "result" : null
   },
   {
      "group" : "Group G",
      "team2" : "Panama",
      "date" : "2018-06-18T15:00:00",
      "result" : null,
      "stadium" : "FIS",
      "description" : "Group G",
      "team1" : "Belgium",
      "class" : "round-group-g stadium-fis team-belgium team-panama"
   },
   {
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "description" : "Group G",
      "team1" : "Tunisia",
      "stadium" : "VOL",
      "result" : null,
      "team2" : "England",
      "date" : "2018-06-18T18:00:00",
      "group" : "Group G"
   },
   {
      "result" : null,
      "group" : "Group H",
      "team2" : "Japan",
      "date" : "2018-06-19T12:00:00",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "stadium" : "MOR",
      "description" : "Group H",
      "team1" : "Colombia"
   },
   {
      "group" : "Group H",
      "team2" : "Senegal",
      "date" : "2018-06-19T15:00:00",
      "result" : null,
      "stadium" : "OTK",
      "description" : "Group H",
      "team1" : "Poland",
      "class" : "round-group-h stadium-otk team-poland team-senegal"
   },
   {
      "team2" : "Egypt",
      "date" : "2018-06-19T18:00:00",
      "group" : "Group A",
      "result" : null,
      "description" : "Group A",
      "team1" : "Russia",
      "stadium" : "KRE",
      "class" : "round-group-a stadium-kre team-russia team-egypt"
   },
   {
      "result" : null,
      "date" : "2018-06-20T12:00:00",
      "team2" : "Morocco",
      "group" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "team1" : "Portugal",
      "description" : "Group B",
      "stadium" : "LUZ"
   },
   {
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "description" : "Group A",
      "team1" : "Uruguay",
      "stadium" : "ROS",
      "result" : null,
      "team2" : "Saudi Arabia",
      "date" : "2018-06-20T15:00:00",
      "group" : "Group A"
   },
   {
      "stadium" : "KAZ",
      "team1" : "Iran",
      "description" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "group" : "Group B",
      "date" : "2018-06-20T18:00:00",
      "team2" : "Spain",
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-21T12:00:00",
      "team2" : "Australia",
      "group" : "Group C",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "team1" : "Denmark",
      "description" : "Group C",
      "stadium" : "COS"
   },
   {
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "group" : "Group C",
      "result" : null,
      "description" : "Group C",
      "team1" : "France",
      "stadium" : "CEN",
      "class" : "round-group-c stadium-cen team-france team-peru"
   },
   {
      "team2" : "Croatia",
      "date" : "2018-06-21T18:00:00",
      "group" : "Group D",
      "result" : null,
      "description" : "Group D",
      "team1" : "Argentina",
      "stadium" : "NIZ",
      "class" : "round-group-d stadium-niz team-argentina team-croatia"
   },
   {
      "description" : "Group E",
      "team1" : "Brazil",
      "stadium" : "KRE",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "team2" : "Costa Rica",
      "date" : "2018-06-22T12:00:00",
      "group" : "Group E",
      "result" : null
   },
   {
      "result" : null,
      "group" : "Group D",
      "team2" : "Iceland",
      "date" : "2018-06-22T15:00:00",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "stadium" : "VOL",
      "description" : "Group D",
      "team1" : "Nigeria"
   },
   {
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "team1" : "Serbia",
      "description" : "Group E",
      "stadium" : "KAL",
      "result" : null,
      "date" : "2018-06-22T18:00:00",
      "team2" : "Switzerland",
      "group" : "Group E"
   },
   {
      "stadium" : "OTK",
      "team1" : "Belgium",
      "description" : "Group G",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "group" : "Group G",
      "date" : "2018-06-23T12:00:00",
      "team2" : "Tunisia",
      "result" : null
   },
   {
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "stadium" : "ROS",
      "result" : null,
      "team2" : "Mexico",
      "date" : "2018-06-23T15:00:00",
      "group" : "Group F"
   },
   {
      "result" : null,
      "group" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "team2" : "Sweden",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "stadium" : "FIS",
      "team1" : "Germany",
      "description" : "Group F"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "team2" : "Panama",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "England",
      "description" : "Group G",
      "class" : "round-group-g stadium-niz team-england team-panama"
   },
   {
      "date" : "2018-06-24T15:00:00",
      "team2" : "Senegal",
      "group" : "Group H",
      "result" : null,
      "team1" : "Japan",
      "description" : "Group H",
      "stadium" : "CEN",
      "class" : "round-group-h stadium-cen team-japan team-senegal"
   },
   {
      "result" : null,
      "date" : "2018-06-24T18:00:00",
      "team2" : "Colombia",
      "group" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team1" : "Poland",
      "description" : "Group H",
      "stadium" : "KAZ"
   },
   {
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team1" : "Uruguay",
      "description" : "Group A",
      "stadium" : "COS",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "team2" : "Russia",
      "group" : "Group A"
   },
   {
      "team2" : "Egypt",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "result" : null,
      "description" : "Group A",
      "team1" : "Saudi Arabia",
      "stadium" : "VOL",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt"
   },
   {
      "description" : "Group B",
      "team1" : "Iran",
      "stadium" : "MOR",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "team2" : "Portugal",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "result" : null
   },
   {
      "group" : "Group B",
      "team2" : "Morocco",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "stadium" : "KAL",
      "description" : "Group B",
      "team1" : "Spain",
      "class" : "round-group-b stadium-kal team-spain team-morocco"
   },
   {
      "stadium" : "LUZ",
      "team1" : "Denmark",
      "description" : "Group C",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "group" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "team2" : "France",
      "result" : null
   },
   {
      "stadium" : "FIS",
      "description" : "Group C",
      "team1" : "Australia",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "group" : "Group C",
      "team2" : "Peru",
      "date" : "2018-06-26T14:00:00",
      "result" : null
   },
   {
      "date" : "2018-06-26T18:00:00",
      "team2" : "Argentina",
      "group" : "Group D",
      "result" : null,
      "team1" : "Nigeria",
      "description" : "Group D",
      "stadium" : "KRE",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina"
   },
   {
      "result" : null,
      "team2" : "Croatia",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "description" : "Group D",
      "team1" : "Iceland",
      "stadium" : "ROS"
   },
   {
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "stadium" : "CEN",
      "team1" : "Mexico",
      "description" : "Group F",
      "result" : null,
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "team2" : "Sweden"
   },
   {
      "group" : "Group F",
      "team2" : "Germany",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "stadium" : "KAZ",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany"
   },
   {
      "result" : null,
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "team2" : "Brazil",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "stadium" : "OTK",
      "team1" : "Serbia",
      "description" : "Group E"
   },
   {
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team1" : "Switzerland",
      "description" : "Group E",
      "stadium" : "NIZ",
      "result" : null,
      "date" : "2018-06-27T18:00:00",
      "team2" : "Costa Rica",
      "group" : "Group E"
   },
   {
      "stadium" : "VOL",
      "team1" : "Japan",
      "description" : "Group H",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "team2" : "Poland",
      "result" : null
   },
   {
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "description" : "Group H",
      "team1" : "Senegal",
      "stadium" : "COS",
      "result" : null,
      "team2" : "Colombia",
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H"
   },
   {
      "result" : null,
      "group" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "stadium" : "MOR",
      "team1" : "Panama",
      "description" : "Group G"
   },
   {
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "team2" : "Belgium",
      "group" : "Group G",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "team1" : "England",
      "description" : "Group G",
      "stadium" : "KAL"
   },
   {
      "description" : "Round of 16",
      "team1" : "France",
      "stadium" : "KAZ",
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "team2" : "Argentina",
      "date" : "2018-06-30T14:00:00",
      "group" : null,
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-06-30T18:00:00",
      "team2" : "Portugal",
      "group" : null,
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "team1" : "Uruguay",
      "description" : "Round of 16",
      "stadium" : "FIS"
   },
   {
      "group" : null,
      "team2" : "Russia",
      "date" : "2018-07-01T14:00:00",
      "result" : null,
      "stadium" : "LUZ",
      "description" : "Round of 16",
      "team1" : "Spain",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia"
   },
   {
      "result" : null,
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "team2" : "Denmark",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "stadium" : "NIZ",
      "team1" : "Croatia",
      "description" : "Round of 16"
   },
   {
      "description" : "Round of 16",
      "team1" : "Brazil",
      "stadium" : "COS",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "team2" : "Mexico",
      "date" : "2018-07-02T14:00:00",
      "group" : null,
      "result" : null
   },
   {
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "stadium" : "ROS",
      "team1" : "Belgium",
      "description" : "Round of 16",
      "result" : null,
      "group" : null,
      "date" : "2018-07-02T18:00:00",
      "team2" : "Japan"
   },
   {
      "result" : null,
      "team2" : "Switzerland",
      "date" : "2018-07-03T14:00:00",
      "group" : null,
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "description" : "Round of 16",
      "team1" : "Sweden",
      "stadium" : "KRE"
   },
   {
      "team2" : "England",
      "date" : "2018-07-03T18:00:00",
      "group" : null,
      "result" : null,
      "description" : "Round of 16",
      "team1" : "Colombia",
      "stadium" : "OTK",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england"
   },
   {
      "result" : null,
      "date" : "2018-07-06T14:00:00",
      "team2" : "France",
      "group" : null,
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "team1" : "Uruguay",
      "description" : "Quarter Finals",
      "stadium" : "NIZ"
   },
   {
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium-be-announced",
      "stadium" : "KAZ",
      "team1" : "Brazil",
      "description" : "Quarter Finals",
      "result" : null,
      "group" : null,
      "date" : "2018-07-06T18:00:00",
      "team2" : "Belgium be announced"
   },
   {
      "result" : null,
      "group" : null,
      "date" : "2018-07-07T14:00:00",
      "team2" : "England",
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "stadium" : "COS",
      "team1" : "Sweden",
      "description" : "Quarter Finals"
   },
   {
      "stadium" : "FIS",
      "description" : "Quarter Finals",
      "team1" : "Russia",
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "group" : null,
      "team2" : "Croatia",
      "date" : "2018-07-07T18:00:00",
      "result" : null
   },
   {
      "date" : "2018-07-10T18:00:00",
      "team2" : "To be announced",
      "group" : null,
      "result" : null,
      "team1" : "To be announced",
      "description" : "Semi Finals",
      "stadium" : "KRE",
      "class" : "round-semi-finals stadium-kre"
   },
   {
      "group" : null,
      "date" : "2018-07-11T18:00:00",
      "team2" : "To be announced",
      "result" : null,
      "stadium" : "LUZ",
      "team1" : "To be announced",
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-luz"
   },
   {
      "team1" : "To be announced",
      "description" : "Finals",
      "stadium" : "KRE",
      "class" : "round-finals stadium-kre",
      "date" : "2018-07-14T14:00:00",
      "team2" : "To be announced",
      "group" : null,
      "result" : null
   },
   {
      "class" : "round-finals stadium-luz",
      "stadium" : "LUZ",
      "description" : "Finals",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "team2" : "To be announced",
      "date" : "2018-07-15T15:00:00"
   }
]
;

