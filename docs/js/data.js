var stadiums = {
   "FIS" : {
      "code" : "FIS",
      "timezone" : "Europe/Moscow",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "city" : "Sochi"
   },
   "KAZ" : {
      "utcoffset" : "3",
      "name" : "Kazan Arena",
      "timezone" : "Europe/Moscow",
      "city" : "Kazan",
      "code" : "KAZ"
   },
   "KRE" : {
      "city" : "Saint Petersburg",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Krestovsky Stadium",
      "code" : "KRE"
   },
   "VOL" : {
      "code" : "VOL",
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "utcoffset" : "3"
   },
   "KAL" : {
      "code" : "KAL",
      "city" : "Kaliningrad",
      "timezone" : "Europe/Kaliningrad",
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2"
   },
   "OTK" : {
      "name" : "Otkritie Arena",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "code" : "OTK"
   },
   "MOR" : {
      "code" : "MOR",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "name" : "Mordovia Arena",
      "utcoffset" : "3"
   },
   "NIZ" : {
      "code" : "NIZ",
      "city" : "Nizhny Novgorod",
      "timezone" : "Europe/Moscow",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3"
   },
   "ROS" : {
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Rostov Arena",
      "city" : "Rostov-on-Don",
      "code" : "ROS"
   },
   "COS" : {
      "city" : "Samara",
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "timezone" : "Europe/Samara",
      "code" : "COS"
   },
   "CEN" : {
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium",
      "city" : "Yekaterinburg",
      "code" : "CEN"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "city" : "Moscow",
      "code" : "LUZ"
   }
}
;

var games = [
   {
      "group" : "Group A",
      "team2" : "Saudi Arabia",
      "team1" : "Russia",
      "result" : null,
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "date" : "2018-06-14T15:00:00",
      "description" : "Group A"
   },
   {
      "date" : "2018-06-15T12:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "team2" : "Uruguay",
      "result" : null,
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "team1" : "Egypt",
      "stadium" : "CEN"
   },
   {
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "result" : null,
      "team1" : "Morocco",
      "stadium" : "KRE",
      "group" : "Group B",
      "team2" : "Iran",
      "description" : "Group B",
      "date" : "2018-06-15T15:00:00"
   },
   {
      "team2" : "Spain",
      "group" : "Group B",
      "stadium" : "FIS",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "result" : null,
      "team1" : "Portugal",
      "date" : "2018-06-15T18:00:00",
      "description" : "Group B"
   },
   {
      "group" : "Group C",
      "team2" : "Australia",
      "team1" : "France",
      "result" : null,
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "date" : "2018-06-16T10:00:00",
      "description" : "Group C"
   },
   {
      "stadium" : "OTK",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "team1" : "Argentina",
      "result" : null,
      "team2" : "Iceland",
      "group" : "Group D",
      "description" : "Group D",
      "date" : "2018-06-16T13:00:00"
   },
   {
      "date" : "2018-06-16T16:00:00",
      "description" : "Group C",
      "group" : "Group C",
      "team2" : "Denmark",
      "result" : null,
      "team1" : "Peru",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "stadium" : "MOR"
   },
   {
      "description" : "Group D",
      "date" : "2018-06-16T19:00:00",
      "result" : null,
      "team1" : "Croatia",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "stadium" : "KAL",
      "group" : "Group D",
      "team2" : "Nigeria"
   },
   {
      "description" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "result" : null,
      "team1" : "Costa Rica",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "stadium" : "COS",
      "group" : "Group E",
      "team2" : "Serbia"
   },
   {
      "description" : "Group F",
      "date" : "2018-06-17T15:00:00",
      "stadium" : "LUZ",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "result" : null,
      "team1" : "Germany",
      "team2" : "Mexico",
      "group" : "Group F"
   },
   {
      "team2" : "Switzerland",
      "group" : "Group E",
      "stadium" : "ROS",
      "team1" : "Brazil",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "result" : null,
      "date" : "2018-06-17T18:00:00",
      "description" : "Group E"
   },
   {
      "date" : "2018-06-18T12:00:00",
      "description" : "Group F",
      "team2" : "Korea Republic",
      "group" : "Group F",
      "stadium" : "NIZ",
      "result" : null,
      "team1" : "Sweden",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic"
   },
   {
      "stadium" : "FIS",
      "team1" : "Belgium",
      "result" : null,
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "team2" : "Panama",
      "group" : "Group G",
      "description" : "Group G",
      "date" : "2018-06-18T15:00:00"
   },
   {
      "result" : null,
      "team1" : "Tunisia",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "stadium" : "VOL",
      "group" : "Group G",
      "team2" : "England",
      "description" : "Group G",
      "date" : "2018-06-18T18:00:00"
   },
   {
      "team2" : "Japan",
      "group" : "Group H",
      "stadium" : "MOR",
      "result" : null,
      "team1" : "Colombia",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "date" : "2018-06-19T12:00:00",
      "description" : "Group H"
   },
   {
      "description" : "Group H",
      "date" : "2018-06-19T15:00:00",
      "stadium" : "OTK",
      "team1" : "Poland",
      "result" : null,
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "team2" : "Senegal",
      "group" : "Group H"
   },
   {
      "team2" : "Egypt",
      "group" : "Group A",
      "stadium" : "KRE",
      "result" : null,
      "team1" : "Russia",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "date" : "2018-06-19T18:00:00",
      "description" : "Group A"
   },
   {
      "team2" : "Morocco",
      "group" : "Group B",
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Portugal",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "date" : "2018-06-20T12:00:00",
      "description" : "Group B"
   },
   {
      "date" : "2018-06-20T15:00:00",
      "description" : "Group A",
      "team2" : "Saudi Arabia",
      "group" : "Group A",
      "stadium" : "ROS",
      "result" : null,
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "team1" : "Uruguay"
   },
   {
      "group" : "Group B",
      "team2" : "Spain",
      "result" : null,
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "team1" : "Iran",
      "stadium" : "KAZ",
      "date" : "2018-06-20T18:00:00",
      "description" : "Group B"
   },
   {
      "group" : "Group C",
      "team2" : "Australia",
      "result" : null,
      "team1" : "Denmark",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "stadium" : "COS",
      "date" : "2018-06-21T12:00:00",
      "description" : "Group C"
   },
   {
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team1" : "France",
      "result" : null,
      "stadium" : "CEN",
      "group" : "Group C",
      "team2" : "Peru",
      "description" : "Group C",
      "date" : "2018-06-21T15:00:00"
   },
   {
      "stadium" : "NIZ",
      "team1" : "Argentina",
      "result" : null,
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "team2" : "Croatia",
      "group" : "Group D",
      "description" : "Group D",
      "date" : "2018-06-21T18:00:00"
   },
   {
      "group" : "Group E",
      "team2" : "Costa Rica",
      "team1" : "Brazil",
      "result" : null,
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "stadium" : "KRE",
      "date" : "2018-06-22T12:00:00",
      "description" : "Group E"
   },
   {
      "description" : "Group D",
      "date" : "2018-06-22T15:00:00",
      "stadium" : "VOL",
      "result" : null,
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "team1" : "Nigeria",
      "team2" : "Iceland",
      "group" : "Group D"
   },
   {
      "team2" : "Switzerland",
      "group" : "Group E",
      "stadium" : "KAL",
      "team1" : "Serbia",
      "result" : null,
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "date" : "2018-06-22T18:00:00",
      "description" : "Group E"
   },
   {
      "date" : "2018-06-23T12:00:00",
      "description" : "Group G",
      "team2" : "Tunisia",
      "group" : "Group G",
      "stadium" : "OTK",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "team1" : "Belgium",
      "result" : null
   },
   {
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "result" : null,
      "team1" : "Korea Republic",
      "stadium" : "ROS",
      "group" : "Group F",
      "team2" : "Mexico",
      "description" : "Group F",
      "date" : "2018-06-23T15:00:00"
   },
   {
      "description" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "result" : null,
      "team1" : "Germany",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "stadium" : "FIS",
      "group" : "Group F",
      "team2" : "Sweden"
   },
   {
      "team2" : "Panama",
      "group" : "Group G",
      "stadium" : "NIZ",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "team1" : "England",
      "result" : null,
      "date" : "2018-06-24T12:00:00",
      "description" : "Group G"
   },
   {
      "team2" : "Senegal",
      "group" : "Group H",
      "stadium" : "CEN",
      "result" : null,
      "team1" : "Japan",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "date" : "2018-06-24T15:00:00",
      "description" : "Group H"
   },
   {
      "date" : "2018-06-24T18:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "team2" : "Colombia",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team1" : "Poland",
      "result" : null,
      "stadium" : "KAZ"
   },
   {
      "stadium" : "COS",
      "team1" : "Uruguay",
      "result" : null,
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "group" : "Group A",
      "description" : "Group A",
      "date" : "2018-06-25T14:00:00"
   },
   {
      "description" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "stadium" : "VOL",
      "team1" : "Saudi Arabia",
      "result" : null,
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "team2" : "Egypt",
      "group" : "Group A"
   },
   {
      "team2" : "Portugal",
      "group" : "Group B",
      "stadium" : "MOR",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "team1" : "Iran",
      "result" : null,
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B"
   },
   {
      "description" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "team1" : "Spain",
      "stadium" : "KAL",
      "group" : "Group B",
      "team2" : "Morocco"
   },
   {
      "description" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "stadium" : "LUZ",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "team1" : "Denmark",
      "result" : null,
      "team2" : "France",
      "group" : "Group C"
   },
   {
      "description" : "Group C",
      "date" : "2018-06-26T14:00:00",
      "result" : null,
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "team1" : "Australia",
      "stadium" : "FIS",
      "group" : "Group C",
      "team2" : "Peru"
   },
   {
      "description" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "stadium" : "KRE",
      "team1" : "Nigeria",
      "result" : null,
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "team2" : "Argentina",
      "group" : "Group D"
   },
   {
      "date" : "2018-06-26T18:00:00",
      "description" : "Group D",
      "team2" : "Croatia",
      "group" : "Group D",
      "stadium" : "ROS",
      "result" : null,
      "team1" : "Iceland",
      "class" : "round-group-d stadium-ros team-iceland team-croatia"
   },
   {
      "description" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "result" : null,
      "team1" : "Mexico",
      "stadium" : "CEN",
      "group" : "Group F",
      "team2" : "Sweden"
   },
   {
      "date" : "2018-06-27T14:00:00",
      "description" : "Group F",
      "group" : "Group F",
      "team2" : "Germany",
      "team1" : "Korea Republic",
      "result" : null,
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "stadium" : "KAZ"
   },
   {
      "date" : "2018-06-27T18:00:00",
      "description" : "Group E",
      "team2" : "Brazil",
      "group" : "Group E",
      "stadium" : "OTK",
      "team1" : "Serbia",
      "result" : null,
      "class" : "round-group-e stadium-otk team-serbia team-brazil"
   },
   {
      "description" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "stadium" : "NIZ",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team1" : "Switzerland",
      "result" : null,
      "team2" : "Costa Rica",
      "group" : "Group E"
   },
   {
      "date" : "2018-06-28T14:00:00",
      "description" : "Group H",
      "team2" : "Poland",
      "group" : "Group H",
      "stadium" : "VOL",
      "team1" : "Japan",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "result" : null
   },
   {
      "stadium" : "COS",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "team1" : "Senegal",
      "result" : null,
      "team2" : "Colombia",
      "group" : "Group H",
      "description" : "Group H",
      "date" : "2018-06-28T14:00:00"
   },
   {
      "description" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "result" : null,
      "team1" : "Panama",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "stadium" : "MOR",
      "group" : "Group G",
      "team2" : "Tunisia"
   },
   {
      "stadium" : "KAL",
      "team1" : "England",
      "result" : null,
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "team2" : "Belgium",
      "group" : "Group G",
      "description" : "Group G",
      "date" : "2018-06-28T18:00:00"
   },
   {
      "description" : "Round of 16",
      "date" : "2018-06-30T14:00:00",
      "team1" : "France",
      "result" : null,
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "stadium" : "KAZ",
      "group" : null,
      "team2" : "Argentina"
   },
   {
      "date" : "2018-06-30T18:00:00",
      "description" : "Round of 16",
      "group" : null,
      "team2" : "Portugal",
      "team1" : "Uruguay",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "result" : null,
      "stadium" : "FIS"
   },
   {
      "description" : "Round of 16",
      "date" : "2018-07-01T14:00:00",
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Spain",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "team2" : "Russia",
      "group" : null
   },
   {
      "description" : "Round of 16",
      "date" : "2018-07-01T18:00:00",
      "stadium" : "NIZ",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "result" : null,
      "team1" : "Croatia",
      "team2" : "Denmark",
      "group" : null
   },
   {
      "description" : "Round of 16",
      "date" : "2018-07-02T14:00:00",
      "result" : null,
      "team1" : "Brazil",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "stadium" : "COS",
      "group" : null,
      "team2" : "Mexico"
   },
   {
      "group" : null,
      "team2" : "Japan",
      "team1" : "Belgium",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "result" : null,
      "stadium" : "ROS",
      "date" : "2018-07-02T18:00:00",
      "description" : "Round of 16"
   },
   {
      "date" : "2018-07-03T14:00:00",
      "description" : "Round of 16",
      "team2" : "Switzerland",
      "group" : null,
      "stadium" : "KRE",
      "result" : null,
      "team1" : "Sweden",
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland"
   },
   {
      "description" : "Round of 16",
      "date" : "2018-07-03T18:00:00",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "result" : null,
      "team1" : "Colombia",
      "stadium" : "OTK",
      "group" : null,
      "team2" : "England"
   },
   {
      "stadium" : "NIZ",
      "team1" : "Uruguay",
      "result" : null,
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "team2" : "France",
      "group" : null,
      "description" : "Quarter Finals",
      "date" : "2018-07-06T14:00:00"
   },
   {
      "date" : "2018-07-06T18:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "team2" : "Belgium",
      "team1" : "Brazil",
      "result" : null,
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "stadium" : "KAZ"
   },
   {
      "description" : "Quarter Finals",
      "date" : "2018-07-07T14:00:00",
      "result" : null,
      "team1" : "Sweden",
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "stadium" : "COS",
      "group" : null,
      "team2" : "England"
   },
   {
      "date" : "2018-07-07T18:00:00",
      "description" : "Quarter Finals",
      "group" : null,
      "team2" : "Croatia",
      "result" : null,
      "team1" : "Russia",
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "stadium" : "FIS"
   },
   {
      "description" : "Semi Finals",
      "date" : "2018-07-10T18:00:00",
      "stadium" : "KRE",
      "result" : null,
      "team1" : "France",
      "class" : "round-semi-finals stadium-kre team-france team-belgium",
      "team2" : "Belgium",
      "group" : null
   },
   {
      "date" : "2018-07-11T18:00:00",
      "description" : "Semi Finals",
      "team2" : "England",
      "group" : null,
      "stadium" : "LUZ",
      "result" : null,
      "team1" : "Croatia",
      "class" : "round-semi-finals stadium-luz team-croatia team-england"
   },
   {
      "description" : "Finals",
      "date" : "2018-07-14T14:00:00",
      "stadium" : "KRE",
      "result" : null,
      "team1" : "To be announced",
      "class" : "round-finals stadium-kre",
      "team2" : "To be announced",
      "group" : null
   },
   {
      "description" : "Finals",
      "date" : "2018-07-15T15:00:00",
      "result" : null,
      "class" : "round-finals stadium-luz",
      "team1" : "To be announced",
      "stadium" : "LUZ",
      "group" : null,
      "team2" : "To be announced"
   }
]
;

