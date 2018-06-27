var stadiums = {
   "OTK" : {
      "utcoffset" : "3",
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "code" : "OTK",
      "name" : "Otkritie Arena"
   },
   "VOL" : {
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd",
      "utcoffset" : "3",
      "code" : "VOL",
      "name" : "Volgograd Arena"
   },
   "NIZ" : {
      "code" : "NIZ",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Nizhny Novgorod"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "code" : "ROS",
      "name" : "Rostov Arena"
   },
   "FIS" : {
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow",
      "city" : "Sochi",
      "name" : "Fisht Olympic Stadium",
      "code" : "FIS"
   },
   "CEN" : {
      "utcoffset" : "5",
      "city" : "Yekaterinburg",
      "timezone" : "Asia/Yekaterinburg",
      "name" : "Central Stadium",
      "code" : "CEN"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "city" : "Moscow",
      "utcoffset" : "3",
      "name" : "Luzhniki Stadium",
      "code" : "LUZ"
   },
   "COS" : {
      "code" : "COS",
      "name" : "Cosmos Arena",
      "utcoffset" : "4",
      "city" : "Samara",
      "timezone" : "Europe/Samara"
   },
   "KRE" : {
      "code" : "KRE",
      "name" : "Krestovsky Stadium",
      "timezone" : "Europe/Moscow",
      "city" : "Saint Petersburg",
      "utcoffset" : "3"
   },
   "KAZ" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Kazan",
      "name" : "Kazan Arena",
      "code" : "KAZ"
   },
   "MOR" : {
      "code" : "MOR",
      "name" : "Mordovia Arena",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "code" : "KAL",
      "utcoffset" : "2",
      "city" : "Kaliningrad",
      "timezone" : "Europe/Kaliningrad"
   }
}
;

var games = [
   {
      "stadium" : "LUZ",
      "group" : "Group A",
      "team2" : "Saudi Arabia",
      "team1" : "Russia",
      "result" : null,
      "date" : "2018-06-14T15:00:00",
      "description" : "Group A",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia"
   },
   {
      "team2" : "Uruguay",
      "team1" : "Egypt",
      "result" : null,
      "date" : "2018-06-15T12:00:00",
      "description" : "Group A",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "stadium" : "CEN",
      "group" : "Group A"
   },
   {
      "description" : "Group B",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "result" : null,
      "date" : "2018-06-15T15:00:00",
      "team2" : "Iran",
      "team1" : "Morocco",
      "group" : "Group B",
      "stadium" : "KRE"
   },
   {
      "stadium" : "FIS",
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00",
      "result" : null,
      "team1" : "Portugal",
      "team2" : "Spain",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "description" : "Group B"
   },
   {
      "group" : "Group C",
      "stadium" : "KAZ",
      "description" : "Group C",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "team2" : "Australia",
      "team1" : "France",
      "result" : null,
      "date" : "2018-06-16T10:00:00"
   },
   {
      "group" : "Group D",
      "stadium" : "OTK",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "description" : "Group D",
      "team1" : "Argentina",
      "team2" : "Iceland",
      "result" : null,
      "date" : "2018-06-16T13:00:00"
   },
   {
      "result" : null,
      "date" : "2018-06-16T16:00:00",
      "team2" : "Denmark",
      "team1" : "Peru",
      "description" : "Group C",
      "class" : "round-group-c stadium-mor team-peru team-denmark",
      "stadium" : "MOR",
      "group" : "Group C"
   },
   {
      "stadium" : "KAL",
      "group" : "Group D",
      "result" : null,
      "date" : "2018-06-16T19:00:00",
      "team1" : "Croatia",
      "team2" : "Nigeria",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "description" : "Group D"
   },
   {
      "stadium" : "COS",
      "group" : "Group E",
      "team2" : "Serbia",
      "team1" : "Costa Rica",
      "date" : "2018-06-17T12:00:00",
      "result" : null,
      "description" : "Group E",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia"
   },
   {
      "stadium" : "LUZ",
      "group" : "Group F",
      "team2" : "Mexico",
      "team1" : "Germany",
      "date" : "2018-06-17T15:00:00",
      "result" : null,
      "description" : "Group F",
      "class" : "round-group-f stadium-luz team-germany team-mexico"
   },
   {
      "group" : "Group E",
      "stadium" : "ROS",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "description" : "Group E",
      "team1" : "Brazil",
      "team2" : "Switzerland",
      "result" : null,
      "date" : "2018-06-17T18:00:00"
   },
   {
      "description" : "Group F",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "team2" : "Korea Republic",
      "team1" : "Sweden",
      "result" : null,
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "stadium" : "NIZ"
   },
   {
      "team2" : "Panama",
      "team1" : "Belgium",
      "result" : null,
      "date" : "2018-06-18T15:00:00",
      "description" : "Group G",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "stadium" : "FIS",
      "group" : "Group G"
   },
   {
      "description" : "Group G",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "result" : null,
      "date" : "2018-06-18T18:00:00",
      "team2" : "England",
      "team1" : "Tunisia",
      "group" : "Group G",
      "stadium" : "VOL"
   },
   {
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "description" : "Group H",
      "result" : null,
      "date" : "2018-06-19T12:00:00",
      "team1" : "Colombia",
      "team2" : "Japan",
      "group" : "Group H",
      "stadium" : "MOR"
   },
   {
      "group" : "Group H",
      "stadium" : "OTK",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "description" : "Group H",
      "result" : null,
      "date" : "2018-06-19T15:00:00",
      "team1" : "Poland",
      "team2" : "Senegal"
   },
   {
      "team1" : "Russia",
      "team2" : "Egypt",
      "result" : null,
      "date" : "2018-06-19T18:00:00",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "description" : "Group A",
      "stadium" : "KRE",
      "group" : "Group A"
   },
   {
      "stadium" : "LUZ",
      "group" : "Group B",
      "team2" : "Morocco",
      "team1" : "Portugal",
      "date" : "2018-06-20T12:00:00",
      "result" : null,
      "description" : "Group B",
      "class" : "round-group-b stadium-luz team-portugal team-morocco"
   },
   {
      "description" : "Group A",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "result" : null,
      "date" : "2018-06-20T15:00:00",
      "team2" : "Saudi Arabia",
      "team1" : "Uruguay",
      "group" : "Group A",
      "stadium" : "ROS"
   },
   {
      "description" : "Group B",
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "team2" : "Spain",
      "team1" : "Iran",
      "date" : "2018-06-20T18:00:00",
      "result" : null,
      "group" : "Group B",
      "stadium" : "KAZ"
   },
   {
      "stadium" : "COS",
      "group" : "Group C",
      "team1" : "Denmark",
      "team2" : "Australia",
      "date" : "2018-06-21T12:00:00",
      "result" : null,
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "description" : "Group C"
   },
   {
      "stadium" : "CEN",
      "group" : "Group C",
      "result" : null,
      "date" : "2018-06-21T15:00:00",
      "team1" : "France",
      "team2" : "Peru",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "description" : "Group C"
   },
   {
      "stadium" : "NIZ",
      "group" : "Group D",
      "team2" : "Croatia",
      "team1" : "Argentina",
      "result" : null,
      "date" : "2018-06-21T18:00:00",
      "description" : "Group D",
      "class" : "round-group-d stadium-niz team-argentina team-croatia"
   },
   {
      "group" : "Group E",
      "stadium" : "KRE",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "description" : "Group E",
      "team1" : "Brazil",
      "team2" : "Costa Rica",
      "result" : null,
      "date" : "2018-06-22T12:00:00"
   },
   {
      "group" : "Group D",
      "stadium" : "VOL",
      "description" : "Group D",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "date" : "2018-06-22T15:00:00",
      "result" : null,
      "team2" : "Iceland",
      "team1" : "Nigeria"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "team2" : "Switzerland",
      "team1" : "Serbia",
      "result" : null,
      "date" : "2018-06-22T18:00:00",
      "group" : "Group E",
      "stadium" : "KAL"
   },
   {
      "stadium" : "OTK",
      "group" : "Group G",
      "result" : null,
      "date" : "2018-06-23T12:00:00",
      "team1" : "Belgium",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "description" : "Group G"
   },
   {
      "team1" : "Korea Republic",
      "team2" : "Mexico",
      "result" : null,
      "date" : "2018-06-23T15:00:00",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "description" : "Group F",
      "stadium" : "ROS",
      "group" : "Group F"
   },
   {
      "team1" : "Germany",
      "team2" : "Sweden",
      "result" : null,
      "date" : "2018-06-23T18:00:00",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "description" : "Group F",
      "stadium" : "FIS",
      "group" : "Group F"
   },
   {
      "stadium" : "NIZ",
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "result" : null,
      "team2" : "Panama",
      "team1" : "England",
      "description" : "Group G",
      "class" : "round-group-g stadium-niz team-england team-panama"
   },
   {
      "stadium" : "CEN",
      "group" : "Group H",
      "team2" : "Senegal",
      "team1" : "Japan",
      "date" : "2018-06-24T15:00:00",
      "result" : null,
      "description" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal"
   },
   {
      "stadium" : "KAZ",
      "group" : "Group H",
      "team1" : "Poland",
      "team2" : "Colombia",
      "result" : null,
      "date" : "2018-06-24T18:00:00",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "description" : "Group H"
   },
   {
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "team2" : "Russia",
      "team1" : "Uruguay",
      "description" : "Group A",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "stadium" : "COS",
      "group" : "Group A"
   },
   {
      "group" : "Group A",
      "stadium" : "VOL",
      "description" : "Group A",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "team2" : "Egypt",
      "team1" : "Saudi Arabia"
   },
   {
      "stadium" : "MOR",
      "group" : "Group B",
      "result" : null,
      "date" : "2018-06-25T18:00:00",
      "team1" : "Iran",
      "team2" : "Portugal",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "description" : "Group B"
   },
   {
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "team2" : "Morocco",
      "team1" : "Spain",
      "description" : "Group B",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "stadium" : "KAL",
      "group" : "Group B"
   },
   {
      "description" : "Group C",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "team2" : "France",
      "team1" : "Denmark",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "stadium" : "LUZ"
   },
   {
      "group" : "Group C",
      "stadium" : "FIS",
      "description" : "Group C",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "team2" : "Peru",
      "team1" : "Australia",
      "result" : null,
      "date" : "2018-06-26T14:00:00"
   },
   {
      "group" : "Group D",
      "stadium" : "KRE",
      "description" : "Group D",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "result" : null,
      "date" : "2018-06-26T18:00:00",
      "team2" : "Argentina",
      "team1" : "Nigeria"
   },
   {
      "group" : "Group D",
      "stadium" : "ROS",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "description" : "Group D",
      "team1" : "Iceland",
      "team2" : "Croatia",
      "result" : null,
      "date" : "2018-06-26T18:00:00"
   },
   {
      "team2" : "Sweden",
      "team1" : "Mexico",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "description" : "Group F",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "stadium" : "CEN",
      "group" : "Group F"
   },
   {
      "group" : "Group F",
      "stadium" : "KAZ",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "team2" : "Germany",
      "result" : null,
      "date" : "2018-06-27T14:00:00"
   },
   {
      "description" : "Group E",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "team2" : "Brazil",
      "team1" : "Serbia",
      "result" : null,
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E",
      "stadium" : "OTK"
   },
   {
      "group" : "Group E",
      "stadium" : "NIZ",
      "description" : "Group E",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team2" : "Costa Rica",
      "team1" : "Switzerland",
      "result" : null,
      "date" : "2018-06-27T18:00:00"
   },
   {
      "stadium" : "VOL",
      "group" : "Group H",
      "team1" : "Japan",
      "team2" : "Poland",
      "result" : null,
      "date" : "2018-06-28T14:00:00",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "description" : "Group H"
   },
   {
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "description" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "result" : null,
      "team1" : "Senegal",
      "team2" : "Colombia",
      "group" : "Group H",
      "stadium" : "COS"
   },
   {
      "stadium" : "MOR",
      "group" : "Group G",
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "team1" : "Panama",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "description" : "Group G"
   },
   {
      "group" : "Group G",
      "stadium" : "KAL",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "description" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "result" : null,
      "team1" : "England",
      "team2" : "Belgium"
   },
   {
      "team2" : "Portugal",
      "team1" : "Uruguay",
      "result" : null,
      "date" : "2018-06-30T18:00:00",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "stadium" : "FIS",
      "group" : null
   },
   {
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "description" : "Round of 16",
      "team1" : "France",
      "team2" : "Argentina",
      "result" : null,
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "stadium" : "KAZ"
   },
   {
      "team2" : "Russia",
      "team1" : "Spain",
      "date" : "2018-07-01T14:00:00",
      "result" : null,
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "stadium" : "LUZ",
      "group" : null
   },
   {
      "group" : null,
      "stadium" : "NIZ",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "description" : "Round of 16",
      "result" : null,
      "date" : "2018-07-01T18:00:00",
      "team1" : "Croatia",
      "team2" : "Denmark"
   },
   {
      "team2" : "Runner-up Group F",
      "team1" : "Winner Group E",
      "result" : null,
      "date" : "2018-07-02T14:00:00",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-cos",
      "stadium" : "COS",
      "group" : null
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-ros",
      "team2" : "Runner-up Group H",
      "team1" : "Winner Group G",
      "result" : null,
      "date" : "2018-07-02T18:00:00",
      "group" : null,
      "stadium" : "ROS"
   },
   {
      "class" : "round-round-of-16 stadium-kre",
      "description" : "Round of 16",
      "result" : null,
      "date" : "2018-07-03T14:00:00",
      "team1" : "Winner Group F",
      "team2" : "Runner-up Group E",
      "group" : null,
      "stadium" : "KRE"
   },
   {
      "class" : "round-round-of-16 stadium-otk",
      "description" : "Round of 16",
      "result" : null,
      "date" : "2018-07-03T18:00:00",
      "team1" : "Winner Group H",
      "team2" : "Runner-up Group G",
      "group" : null,
      "stadium" : "OTK"
   },
   {
      "team2" : "To be announced",
      "team1" : "To be announced",
      "date" : "2018-07-06T14:00:00",
      "result" : null,
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-niz",
      "stadium" : "NIZ",
      "group" : null
   },
   {
      "result" : null,
      "date" : "2018-07-06T18:00:00",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-kaz",
      "stadium" : "KAZ",
      "group" : null
   },
   {
      "team1" : "To be announced",
      "team2" : "To be announced",
      "result" : null,
      "date" : "2018-07-07T14:00:00",
      "class" : "round-quarter-finals stadium-cos",
      "description" : "Quarter Finals",
      "stadium" : "COS",
      "group" : null
   },
   {
      "group" : null,
      "stadium" : "FIS",
      "class" : "round-quarter-finals stadium-fis",
      "description" : "Quarter Finals",
      "result" : null,
      "date" : "2018-07-07T18:00:00",
      "team1" : "To be announced",
      "team2" : "To be announced"
   },
   {
      "group" : null,
      "stadium" : "KRE",
      "class" : "round-semi-finals stadium-kre",
      "description" : "Semi Finals",
      "team1" : "To be announced",
      "team2" : "To be announced",
      "date" : "2018-07-10T18:00:00",
      "result" : null
   },
   {
      "team2" : "To be announced",
      "team1" : "To be announced",
      "result" : null,
      "date" : "2018-07-11T18:00:00",
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-luz",
      "stadium" : "LUZ",
      "group" : null
   },
   {
      "group" : null,
      "stadium" : "KRE",
      "description" : "Finals",
      "class" : "round-finals stadium-kre",
      "result" : null,
      "date" : "2018-07-14T14:00:00",
      "team2" : "To be announced",
      "team1" : "To be announced"
   },
   {
      "description" : "Finals",
      "class" : "round-finals stadium-luz",
      "result" : null,
      "date" : "2018-07-15T15:00:00",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "group" : null,
      "stadium" : "LUZ"
   }
]
;

