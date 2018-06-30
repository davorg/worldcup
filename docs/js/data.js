var stadiums = {
   "OTK" : {
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "code" : "OTK",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   "KRE" : {
      "timezone" : "Europe/Moscow",
      "city" : "Saint Petersburg",
      "code" : "KRE",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "name" : "Luzhniki Stadium",
      "code" : "LUZ",
      "utcoffset" : "3"
   },
   "NIZ" : {
      "utcoffset" : "3",
      "city" : "Nizhny Novgorod",
      "code" : "NIZ",
      "name" : "Nizhny Novgorod Stadium",
      "timezone" : "Europe/Moscow"
   },
   "FIS" : {
      "city" : "Sochi",
      "code" : "FIS",
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow"
   },
   "VOL" : {
      "timezone" : "Europe/Volgograd",
      "city" : "Volgograd",
      "code" : "VOL",
      "name" : "Volgograd Arena",
      "utcoffset" : "3"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "name" : "Rostov Arena",
      "code" : "ROS",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow"
   },
   "CEN" : {
      "timezone" : "Asia/Yekaterinburg",
      "name" : "Central Stadium",
      "code" : "CEN",
      "city" : "Yekaterinburg",
      "utcoffset" : "5"
   },
   "COS" : {
      "timezone" : "Europe/Samara",
      "code" : "COS",
      "name" : "Cosmos Arena",
      "city" : "Samara",
      "utcoffset" : "4"
   },
   "KAZ" : {
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "city" : "Kazan"
   },
   "KAL" : {
      "timezone" : "Europe/Kaliningrad",
      "code" : "KAL",
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "utcoffset" : "2"
   },
   "MOR" : {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "code" : "MOR",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow"
   }
}
;

var games = [
   {
      "result" : null,
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "group" : "Group A",
      "date" : "2018-06-14T15:00:00",
      "team1" : "Russia",
      "stadium" : "LUZ",
      "description" : "Group A"
   },
   {
      "description" : "Group A",
      "stadium" : "CEN",
      "team1" : "Egypt",
      "group" : "Group A",
      "date" : "2018-06-15T12:00:00",
      "result" : null,
      "team2" : "Uruguay",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay"
   },
   {
      "date" : "2018-06-15T15:00:00",
      "team1" : "Morocco",
      "group" : "Group B",
      "result" : null,
      "team2" : "Iran",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "description" : "Group B",
      "stadium" : "KRE"
   },
   {
      "date" : "2018-06-15T18:00:00",
      "team1" : "Portugal",
      "group" : "Group B",
      "team2" : "Spain",
      "result" : null,
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "description" : "Group B",
      "stadium" : "FIS"
   },
   {
      "stadium" : "KAZ",
      "description" : "Group C",
      "team2" : "Australia",
      "result" : null,
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "date" : "2018-06-16T10:00:00",
      "team1" : "France",
      "group" : "Group C"
   },
   {
      "group" : "Group D",
      "date" : "2018-06-16T13:00:00",
      "team1" : "Argentina",
      "team2" : "Iceland",
      "result" : null,
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "description" : "Group D",
      "stadium" : "OTK"
   },
   {
      "description" : "Group C",
      "stadium" : "MOR",
      "date" : "2018-06-16T16:00:00",
      "group" : "Group C",
      "team1" : "Peru",
      "team2" : "Denmark",
      "result" : null,
      "class" : "round-group-c stadium-mor team-peru team-denmark"
   },
   {
      "stadium" : "KAL",
      "description" : "Group D",
      "result" : null,
      "team2" : "Nigeria",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "date" : "2018-06-16T19:00:00",
      "group" : "Group D",
      "team1" : "Croatia"
   },
   {
      "team2" : "Serbia",
      "result" : null,
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "team1" : "Costa Rica",
      "group" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "stadium" : "COS",
      "description" : "Group E"
   },
   {
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "team2" : "Mexico",
      "result" : null,
      "date" : "2018-06-17T15:00:00",
      "team1" : "Germany",
      "group" : "Group F",
      "stadium" : "LUZ",
      "description" : "Group F"
   },
   {
      "stadium" : "ROS",
      "description" : "Group E",
      "result" : null,
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "team1" : "Brazil",
      "date" : "2018-06-17T18:00:00",
      "group" : "Group E"
   },
   {
      "result" : null,
      "team2" : "Korea Republic",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "group" : "Group F",
      "date" : "2018-06-18T12:00:00",
      "team1" : "Sweden",
      "stadium" : "NIZ",
      "description" : "Group F"
   },
   {
      "team2" : "Panama",
      "result" : null,
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "date" : "2018-06-18T15:00:00",
      "group" : "Group G",
      "team1" : "Belgium",
      "stadium" : "FIS",
      "description" : "Group G"
   },
   {
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "result" : null,
      "team2" : "England",
      "group" : "Group G",
      "date" : "2018-06-18T18:00:00",
      "team1" : "Tunisia",
      "stadium" : "VOL",
      "description" : "Group G"
   },
   {
      "result" : null,
      "team2" : "Japan",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "group" : "Group H",
      "team1" : "Colombia",
      "date" : "2018-06-19T12:00:00",
      "stadium" : "MOR",
      "description" : "Group H"
   },
   {
      "description" : "Group H",
      "stadium" : "OTK",
      "team1" : "Poland",
      "date" : "2018-06-19T15:00:00",
      "group" : "Group H",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "result" : null,
      "team2" : "Senegal"
   },
   {
      "stadium" : "KRE",
      "description" : "Group A",
      "result" : null,
      "team2" : "Egypt",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "date" : "2018-06-19T18:00:00",
      "team1" : "Russia",
      "group" : "Group A"
   },
   {
      "description" : "Group B",
      "stadium" : "LUZ",
      "team1" : "Portugal",
      "date" : "2018-06-20T12:00:00",
      "group" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "result" : null,
      "team2" : "Morocco"
   },
   {
      "stadium" : "ROS",
      "description" : "Group A",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "team2" : "Saudi Arabia",
      "result" : null,
      "date" : "2018-06-20T15:00:00",
      "team1" : "Uruguay",
      "group" : "Group A"
   },
   {
      "description" : "Group B",
      "stadium" : "KAZ",
      "date" : "2018-06-20T18:00:00",
      "team1" : "Iran",
      "group" : "Group B",
      "result" : null,
      "team2" : "Spain",
      "class" : "round-group-b stadium-kaz team-iran team-spain"
   },
   {
      "description" : "Group C",
      "stadium" : "COS",
      "date" : "2018-06-21T12:00:00",
      "team1" : "Denmark",
      "group" : "Group C",
      "result" : null,
      "team2" : "Australia",
      "class" : "round-group-c stadium-cos team-denmark team-australia"
   },
   {
      "date" : "2018-06-21T15:00:00",
      "group" : "Group C",
      "team1" : "France",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "result" : null,
      "team2" : "Peru",
      "description" : "Group C",
      "stadium" : "CEN"
   },
   {
      "group" : "Group D",
      "team1" : "Argentina",
      "date" : "2018-06-21T18:00:00",
      "result" : null,
      "team2" : "Croatia",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "description" : "Group D",
      "stadium" : "NIZ"
   },
   {
      "description" : "Group E",
      "stadium" : "KRE",
      "date" : "2018-06-22T12:00:00",
      "group" : "Group E",
      "team1" : "Brazil",
      "team2" : "Costa Rica",
      "result" : null,
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica"
   },
   {
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "result" : null,
      "team2" : "Iceland",
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D",
      "team1" : "Nigeria",
      "stadium" : "VOL",
      "description" : "Group D"
   },
   {
      "result" : null,
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "team1" : "Serbia",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "stadium" : "KAL",
      "description" : "Group E"
   },
   {
      "description" : "Group G",
      "stadium" : "OTK",
      "group" : "Group G",
      "date" : "2018-06-23T12:00:00",
      "team1" : "Belgium",
      "result" : null,
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia"
   },
   {
      "date" : "2018-06-23T15:00:00",
      "team1" : "Korea Republic",
      "group" : "Group F",
      "team2" : "Mexico",
      "result" : null,
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "description" : "Group F",
      "stadium" : "ROS"
   },
   {
      "description" : "Group F",
      "stadium" : "FIS",
      "date" : "2018-06-23T18:00:00",
      "group" : "Group F",
      "team1" : "Germany",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "team2" : "Sweden",
      "result" : null
   },
   {
      "team1" : "England",
      "date" : "2018-06-24T12:00:00",
      "group" : "Group G",
      "result" : null,
      "team2" : "Panama",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "description" : "Group G",
      "stadium" : "NIZ"
   },
   {
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "result" : null,
      "team2" : "Senegal",
      "team1" : "Japan",
      "date" : "2018-06-24T15:00:00",
      "group" : "Group H",
      "stadium" : "CEN",
      "description" : "Group H"
   },
   {
      "stadium" : "KAZ",
      "description" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "result" : null,
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00",
      "group" : "Group H",
      "team1" : "Poland"
   },
   {
      "description" : "Group A",
      "stadium" : "COS",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "team1" : "Uruguay",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "result" : null
   },
   {
      "result" : null,
      "team2" : "Egypt",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "date" : "2018-06-25T14:00:00",
      "team1" : "Saudi Arabia",
      "group" : "Group A",
      "stadium" : "VOL",
      "description" : "Group A"
   },
   {
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "result" : null,
      "team2" : "Portugal",
      "team1" : "Iran",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "stadium" : "MOR",
      "description" : "Group B"
   },
   {
      "team1" : "Spain",
      "date" : "2018-06-25T18:00:00",
      "group" : "Group B",
      "team2" : "Morocco",
      "result" : null,
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "description" : "Group B",
      "stadium" : "KAL"
   },
   {
      "stadium" : "LUZ",
      "description" : "Group C",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "team2" : "France",
      "result" : null,
      "team1" : "Denmark",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C"
   },
   {
      "description" : "Group C",
      "stadium" : "FIS",
      "team1" : "Australia",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "team2" : "Peru",
      "result" : null
   },
   {
      "description" : "Group D",
      "stadium" : "KRE",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D",
      "team1" : "Nigeria",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "team2" : "Argentina",
      "result" : null
   },
   {
      "result" : null,
      "team2" : "Croatia",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "date" : "2018-06-26T18:00:00",
      "team1" : "Iceland",
      "group" : "Group D",
      "stadium" : "ROS",
      "description" : "Group D"
   },
   {
      "stadium" : "CEN",
      "description" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "team2" : "Sweden",
      "result" : null,
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "team1" : "Mexico"
   },
   {
      "description" : "Group F",
      "stadium" : "KAZ",
      "team1" : "Korea Republic",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "team2" : "Germany",
      "result" : null
   },
   {
      "description" : "Group E",
      "stadium" : "OTK",
      "team1" : "Serbia",
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E",
      "team2" : "Brazil",
      "result" : null,
      "class" : "round-group-e stadium-otk team-serbia team-brazil"
   },
   {
      "date" : "2018-06-27T18:00:00",
      "team1" : "Switzerland",
      "group" : "Group E",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team2" : "Costa Rica",
      "result" : null,
      "description" : "Group E",
      "stadium" : "NIZ"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "team1" : "Japan",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "team2" : "Poland",
      "result" : null,
      "description" : "Group H",
      "stadium" : "VOL"
   },
   {
      "description" : "Group H",
      "stadium" : "COS",
      "team1" : "Senegal",
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H",
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "result" : null,
      "team2" : "Colombia"
   },
   {
      "stadium" : "MOR",
      "description" : "Group G",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "team2" : "Tunisia",
      "result" : null,
      "team1" : "Panama",
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G"
   },
   {
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "result" : null,
      "team2" : "Belgium",
      "date" : "2018-06-28T18:00:00",
      "team1" : "England",
      "group" : "Group G",
      "stadium" : "KAL",
      "description" : "Group G"
   },
   {
      "team1" : "France",
      "date" : "2018-06-30T14:00:00",
      "group" : null,
      "team2" : "Argentina",
      "result" : null,
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "description" : "Round of 16",
      "stadium" : "KAZ"
   },
   {
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "team2" : "Portugal",
      "result" : null,
      "team1" : "Uruguay",
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "stadium" : "FIS",
      "description" : "Round of 16"
   },
   {
      "description" : "Round of 16",
      "stadium" : "LUZ",
      "date" : "2018-07-01T14:00:00",
      "team1" : "Spain",
      "group" : null,
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "team2" : "Russia",
      "result" : null
   },
   {
      "stadium" : "NIZ",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "result" : null,
      "team2" : "Denmark",
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "team1" : "Croatia"
   },
   {
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "team2" : "Mexico",
      "result" : null,
      "team1" : "Brazil",
      "group" : null,
      "date" : "2018-07-02T14:00:00",
      "stadium" : "COS",
      "description" : "Round of 16"
   },
   {
      "group" : null,
      "date" : "2018-07-02T18:00:00",
      "team1" : "Belgium",
      "result" : null,
      "team2" : "Japan",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "description" : "Round of 16",
      "stadium" : "ROS"
   },
   {
      "team2" : "Switzerland",
      "result" : null,
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "date" : "2018-07-03T14:00:00",
      "team1" : "Sweden",
      "group" : null,
      "stadium" : "KRE",
      "description" : "Round of 16"
   },
   {
      "stadium" : "OTK",
      "description" : "Round of 16",
      "result" : null,
      "team2" : "England",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "date" : "2018-07-03T10:00:00",
      "team1" : "Colombia",
      "group" : null
   },
   {
      "date" : "2018-07-06T14:00:00",
      "team1" : "To be announced",
      "group" : null,
      "result" : null,
      "team2" : "To be announced",
      "class" : "round-quarter-finals stadium-niz",
      "description" : "Quarter Finals",
      "stadium" : "NIZ"
   },
   {
      "group" : null,
      "team1" : "To be announced",
      "date" : "2018-07-06T18:00:00",
      "class" : "round-quarter-finals stadium-kaz",
      "team2" : "To be announced",
      "result" : null,
      "description" : "Quarter Finals",
      "stadium" : "KAZ"
   },
   {
      "group" : null,
      "date" : "2018-07-07T14:00:00",
      "team1" : "To be announced",
      "result" : null,
      "team2" : "To be announced",
      "class" : "round-quarter-finals stadium-cos",
      "description" : "Quarter Finals",
      "stadium" : "COS"
   },
   {
      "description" : "Quarter Finals",
      "stadium" : "FIS",
      "group" : null,
      "date" : "2018-07-07T18:00:00",
      "team1" : "To be announced",
      "class" : "round-quarter-finals stadium-fis",
      "team2" : "To be announced",
      "result" : null
   },
   {
      "class" : "round-semi-finals stadium-kre",
      "result" : null,
      "team2" : "To be announced",
      "team1" : "To be announced",
      "date" : "2018-07-10T18:00:00",
      "group" : null,
      "stadium" : "KRE",
      "description" : "Semi Finals"
   },
   {
      "description" : "Semi Finals",
      "stadium" : "LUZ",
      "date" : "2018-07-11T18:00:00",
      "team1" : "To be announced",
      "group" : null,
      "class" : "round-semi-finals stadium-luz",
      "team2" : "To be announced",
      "result" : null
   },
   {
      "description" : "Finals",
      "stadium" : "KRE",
      "team1" : "To be announced",
      "date" : "2018-07-14T14:00:00",
      "group" : null,
      "result" : null,
      "team2" : "To be announced",
      "class" : "round-finals stadium-kre"
   },
   {
      "stadium" : "LUZ",
      "description" : "Finals",
      "team2" : "To be announced",
      "result" : null,
      "class" : "round-finals stadium-luz",
      "team1" : "To be announced",
      "group" : null,
      "date" : "2018-07-15T15:00:00"
   }
]
;

