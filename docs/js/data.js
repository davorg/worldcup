var stadiums = {
   "CEN" : {
      "timezone" : "Asia/Yekaterinburg",
      "name" : "Central Stadium",
      "code" : "CEN",
      "city" : "Yekaterinburg",
      "utcoffset" : "5"
   },
   "KAZ" : {
      "code" : "KAZ",
      "city" : "Kazan",
      "timezone" : "Europe/Moscow",
      "name" : "Kazan Arena",
      "utcoffset" : "3"
   },
   "COS" : {
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "city" : "Samara",
      "code" : "COS",
      "utcoffset" : "4"
   },
   "OTK" : {
      "utcoffset" : "3",
      "code" : "OTK",
      "city" : "Moscow",
      "name" : "Otkritie Arena",
      "timezone" : "Europe/Moscow"
   },
   "FIS" : {
      "name" : "Fisht Olympic Stadium",
      "timezone" : "Europe/Moscow",
      "code" : "FIS",
      "city" : "Sochi",
      "utcoffset" : "4"
   },
   "MOR" : {
      "code" : "MOR",
      "city" : "Saransk",
      "name" : "Mordovia Arena",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "KRE" : {
      "code" : "KRE",
      "city" : "Saint Petersburg",
      "timezone" : "Europe/Moscow",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3"
   },
   "ROS" : {
      "timezone" : "Europe/Moscow",
      "name" : "Rostov Arena",
      "city" : "Rostov-on-Don",
      "code" : "ROS",
      "utcoffset" : "3"
   },
   "KAL" : {
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "name" : "Kaliningrad Stadium",
      "code" : "KAL",
      "city" : "Kaliningrad"
   },
   "NIZ" : {
      "code" : "NIZ",
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "LUZ" : {
      "city" : "Moscow",
      "code" : "LUZ",
      "name" : "Luzhniki Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "VOL" : {
      "name" : "Volgograd Arena",
      "timezone" : "Europe/Volgograd",
      "city" : "Volgograd",
      "code" : "VOL",
      "utcoffset" : "3"
   }
}
;

var games = [
   {
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "description" : "Group A",
      "team1" : "Russia",
      "date" : "2018-06-14T15:00:00",
      "group" : "Group A",
      "result" : null
   },
   {
      "date" : "2018-06-15T12:00:00",
      "group" : "Group A",
      "result" : null,
      "team1" : "Egypt",
      "description" : "Group A",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "team2" : "Uruguay",
      "stadium" : "CEN"
   },
   {
      "stadium" : "KRE",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "team2" : "Iran",
      "description" : "Group B",
      "team1" : "Morocco",
      "result" : null,
      "date" : "2018-06-15T15:00:00",
      "group" : "Group B"
   },
   {
      "description" : "Group B",
      "stadium" : "FIS",
      "team2" : "Spain",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "result" : null,
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00",
      "team1" : "Portugal"
   },
   {
      "team2" : "Australia",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "stadium" : "KAZ",
      "description" : "Group C",
      "team1" : "France",
      "group" : "Group C",
      "date" : "2018-06-16T10:00:00",
      "result" : null
   },
   {
      "group" : "Group D",
      "date" : "2018-06-16T13:00:00",
      "result" : null,
      "team1" : "Argentina",
      "description" : "Group D",
      "team2" : "Iceland",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "stadium" : "OTK"
   },
   {
      "result" : null,
      "date" : "2018-06-16T16:00:00",
      "group" : "Group C",
      "team1" : "Peru",
      "description" : "Group C",
      "stadium" : "MOR",
      "team2" : "Denmark",
      "class" : "round-group-c stadium-mor team-peru team-denmark"
   },
   {
      "team2" : "Nigeria",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "stadium" : "KAL",
      "description" : "Group D",
      "team1" : "Croatia",
      "group" : "Group D",
      "date" : "2018-06-16T19:00:00",
      "result" : null
   },
   {
      "team2" : "Serbia",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "stadium" : "COS",
      "description" : "Group E",
      "team1" : "Costa Rica",
      "group" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "result" : null
   },
   {
      "team1" : "Germany",
      "result" : null,
      "group" : "Group F",
      "date" : "2018-06-17T15:00:00",
      "stadium" : "LUZ",
      "team2" : "Mexico",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "description" : "Group F"
   },
   {
      "description" : "Group E",
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "stadium" : "ROS",
      "date" : "2018-06-17T18:00:00",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil"
   },
   {
      "team1" : "Sweden",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "result" : null,
      "team2" : "Korea Republic",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "stadium" : "NIZ",
      "description" : "Group F"
   },
   {
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "team2" : "Panama",
      "stadium" : "FIS",
      "description" : "Group G",
      "team1" : "Belgium",
      "group" : "Group G",
      "date" : "2018-06-18T15:00:00",
      "result" : null
   },
   {
      "team1" : "Tunisia",
      "result" : null,
      "group" : "Group G",
      "date" : "2018-06-18T18:00:00",
      "stadium" : "VOL",
      "team2" : "England",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "description" : "Group G"
   },
   {
      "team2" : "Japan",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "stadium" : "MOR",
      "description" : "Group H",
      "team1" : "Colombia",
      "group" : "Group H",
      "date" : "2018-06-19T12:00:00",
      "result" : null
   },
   {
      "team1" : "Poland",
      "result" : null,
      "date" : "2018-06-19T15:00:00",
      "group" : "Group H",
      "stadium" : "OTK",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "team2" : "Senegal",
      "description" : "Group H"
   },
   {
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "team2" : "Egypt",
      "stadium" : "KRE",
      "description" : "Group A",
      "team1" : "Russia",
      "date" : "2018-06-19T18:00:00",
      "group" : "Group A",
      "result" : null
   },
   {
      "description" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "team2" : "Morocco",
      "stadium" : "LUZ",
      "date" : "2018-06-20T12:00:00",
      "group" : "Group B",
      "result" : null,
      "team1" : "Portugal"
   },
   {
      "team1" : "Uruguay",
      "group" : "Group A",
      "date" : "2018-06-20T15:00:00",
      "result" : null,
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "team2" : "Saudi Arabia",
      "stadium" : "ROS",
      "description" : "Group A"
   },
   {
      "team1" : "Iran",
      "date" : "2018-06-20T18:00:00",
      "group" : "Group B",
      "result" : null,
      "team2" : "Spain",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "stadium" : "KAZ",
      "description" : "Group B"
   },
   {
      "description" : "Group C",
      "stadium" : "COS",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "team2" : "Australia",
      "result" : null,
      "group" : "Group C",
      "date" : "2018-06-21T12:00:00",
      "team1" : "Denmark"
   },
   {
      "result" : null,
      "group" : "Group C",
      "date" : "2018-06-21T15:00:00",
      "team1" : "France",
      "description" : "Group C",
      "stadium" : "CEN",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team2" : "Peru"
   },
   {
      "team1" : "Argentina",
      "date" : "2018-06-21T18:00:00",
      "group" : "Group D",
      "result" : null,
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "team2" : "Croatia",
      "stadium" : "NIZ",
      "description" : "Group D"
   },
   {
      "stadium" : "KRE",
      "team2" : "Costa Rica",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "description" : "Group E",
      "team1" : "Brazil",
      "result" : null,
      "group" : "Group E",
      "date" : "2018-06-22T12:00:00"
   },
   {
      "team1" : "Nigeria",
      "result" : null,
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D",
      "stadium" : "VOL",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "team2" : "Iceland",
      "description" : "Group D"
   },
   {
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "stadium" : "KAL",
      "description" : "Group E",
      "team1" : "Serbia",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "result" : null
   },
   {
      "stadium" : "OTK",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "description" : "Group G",
      "team1" : "Belgium",
      "result" : null,
      "group" : "Group G",
      "date" : "2018-06-23T12:00:00"
   },
   {
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "team2" : "Mexico",
      "stadium" : "ROS",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "group" : "Group F",
      "date" : "2018-06-23T15:00:00",
      "result" : null
   },
   {
      "team1" : "Germany",
      "group" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "result" : null,
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "team2" : "Sweden",
      "stadium" : "FIS",
      "description" : "Group F"
   },
   {
      "team1" : "England",
      "date" : "2018-06-24T12:00:00",
      "group" : "Group G",
      "result" : null,
      "team2" : "Panama",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "stadium" : "NIZ",
      "description" : "Group G"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-24T15:00:00",
      "result" : null,
      "team1" : "Japan",
      "description" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "team2" : "Senegal",
      "stadium" : "CEN"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team2" : "Colombia",
      "stadium" : "KAZ",
      "date" : "2018-06-24T18:00:00",
      "group" : "Group H",
      "result" : null,
      "team1" : "Poland"
   },
   {
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "stadium" : "COS",
      "description" : "Group A",
      "team1" : "Uruguay",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "result" : null
   },
   {
      "result" : null,
      "group" : "Group A",
      "date" : "2018-06-25T14:00:00",
      "team1" : "Saudi Arabia",
      "description" : "Group A",
      "stadium" : "VOL",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "team2" : "Egypt"
   },
   {
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "team1" : "Iran",
      "description" : "Group B",
      "team2" : "Portugal",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "stadium" : "MOR"
   },
   {
      "team1" : "Spain",
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "team2" : "Morocco",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "stadium" : "KAL",
      "description" : "Group B"
   },
   {
      "stadium" : "LUZ",
      "team2" : "France",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "description" : "Group C",
      "team1" : "Denmark",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C"
   },
   {
      "stadium" : "FIS",
      "team2" : "Peru",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "description" : "Group C",
      "team1" : "Australia",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C"
   },
   {
      "stadium" : "KRE",
      "team2" : "Argentina",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "description" : "Group D",
      "team1" : "Nigeria",
      "result" : null,
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D"
   },
   {
      "team1" : "Iceland",
      "result" : null,
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "stadium" : "ROS",
      "team2" : "Croatia",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "description" : "Group D"
   },
   {
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "result" : null,
      "team1" : "Mexico",
      "description" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "team2" : "Sweden",
      "stadium" : "CEN"
   },
   {
      "description" : "Group F",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "team2" : "Germany",
      "stadium" : "KAZ",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "result" : null,
      "team1" : "Korea Republic"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "team2" : "Brazil",
      "stadium" : "OTK",
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E",
      "result" : null,
      "team1" : "Serbia"
   },
   {
      "description" : "Group E",
      "stadium" : "NIZ",
      "team2" : "Costa Rica",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "result" : null,
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "team1" : "Switzerland"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "team2" : "Poland",
      "stadium" : "VOL",
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "result" : null,
      "team1" : "Japan"
   },
   {
      "description" : "Group H",
      "stadium" : "COS",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "team2" : "Colombia",
      "result" : null,
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H",
      "team1" : "Senegal"
   },
   {
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "team2" : "Tunisia",
      "stadium" : "MOR",
      "description" : "Group G",
      "team1" : "Panama",
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "result" : null
   },
   {
      "team1" : "England",
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G",
      "stadium" : "KAL",
      "team2" : "Belgium",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "description" : "Group G"
   },
   {
      "result" : null,
      "group" : null,
      "date" : "2018-06-30T14:00:00",
      "team1" : "France",
      "description" : "Round of 16",
      "stadium" : "KAZ",
      "team2" : "Argentina",
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina"
   },
   {
      "team1" : "Uruguay",
      "group" : null,
      "date" : "2018-06-30T18:00:00",
      "result" : null,
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "team2" : "Portugal",
      "stadium" : "FIS",
      "description" : "Round of 16"
   },
   {
      "team2" : "Russia",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "stadium" : "LUZ",
      "description" : "Round of 16",
      "team1" : "Spain",
      "group" : null,
      "date" : "2018-07-01T14:00:00",
      "result" : null
   },
   {
      "stadium" : "NIZ",
      "team2" : "Denmark",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "description" : "Round of 16",
      "team1" : "Croatia",
      "result" : null,
      "date" : "2018-07-01T18:00:00",
      "group" : null
   },
   {
      "stadium" : "COS",
      "team2" : "Mexico",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "description" : "Round of 16",
      "team1" : "Brazil",
      "result" : null,
      "date" : "2018-07-02T14:00:00",
      "group" : null
   },
   {
      "team1" : "Belgium",
      "result" : null,
      "date" : "2018-07-02T18:00:00",
      "group" : null,
      "stadium" : "ROS",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "team2" : "Japan",
      "description" : "Round of 16"
   },
   {
      "date" : "2018-07-03T14:00:00",
      "group" : null,
      "result" : null,
      "team1" : "Sweden",
      "description" : "Round of 16",
      "team2" : "Switzerland",
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "stadium" : "KRE"
   },
   {
      "description" : "Round of 16",
      "stadium" : "OTK",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "team2" : "England",
      "result" : null,
      "date" : "2018-07-03T18:00:00",
      "group" : null,
      "team1" : "Colombia"
   },
   {
      "group" : null,
      "date" : "2018-07-06T14:00:00",
      "result" : null,
      "team1" : "Uruguay",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "team2" : "France",
      "stadium" : "NIZ"
   },
   {
      "team2" : "Belgium",
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "stadium" : "KAZ",
      "description" : "Quarter Finals",
      "team1" : "Brazil",
      "group" : null,
      "date" : "2018-07-06T18:00:00",
      "result" : null
   },
   {
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "team2" : "England",
      "stadium" : "COS",
      "date" : "2018-07-07T14:00:00",
      "group" : null,
      "result" : null,
      "team1" : "Sweden"
   },
   {
      "group" : null,
      "date" : "2018-07-07T18:00:00",
      "result" : null,
      "team1" : "Russia",
      "description" : "Quarter Finals",
      "team2" : "Croatia",
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "stadium" : "FIS"
   },
   {
      "group" : null,
      "date" : "2018-07-10T18:00:00",
      "result" : null,
      "team1" : "To be announced",
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-kre",
      "team2" : "To be announced",
      "stadium" : "KRE"
   },
   {
      "description" : "Semi Finals",
      "stadium" : "LUZ",
      "team2" : "To be announced",
      "class" : "round-semi-finals stadium-luz",
      "result" : null,
      "date" : "2018-07-11T18:00:00",
      "group" : null,
      "team1" : "To be announced"
   },
   {
      "team1" : "To be announced",
      "date" : "2018-07-14T14:00:00",
      "group" : null,
      "result" : null,
      "team2" : "To be announced",
      "class" : "round-finals stadium-kre",
      "stadium" : "KRE",
      "description" : "Finals"
   },
   {
      "description" : "Finals",
      "class" : "round-finals stadium-luz",
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "date" : "2018-07-15T15:00:00",
      "group" : null,
      "result" : null,
      "team1" : "To be announced"
   }
]
;

