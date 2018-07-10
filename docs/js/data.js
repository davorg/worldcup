var stadiums = {
   "VOL" : {
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "city" : "Volgograd",
      "code" : "VOL",
      "utcoffset" : "3"
   },
   "KAZ" : {
      "code" : "KAZ",
      "city" : "Kazan",
      "name" : "Kazan Arena",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "ROS" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Rostov-on-Don",
      "name" : "Rostov Arena",
      "code" : "ROS"
   },
   "NIZ" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "name" : "Nizhny Novgorod Stadium",
      "city" : "Nizhny Novgorod",
      "code" : "NIZ"
   },
   "MOR" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "city" : "Saransk",
      "code" : "MOR",
      "name" : "Mordovia Arena"
   },
   "COS" : {
      "utcoffset" : "4",
      "code" : "COS",
      "city" : "Samara",
      "name" : "Cosmos Arena",
      "timezone" : "Europe/Samara"
   },
   "OTK" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "OTK",
      "city" : "Moscow",
      "name" : "Otkritie Arena"
   },
   "FIS" : {
      "name" : "Fisht Olympic Stadium",
      "city" : "Sochi",
      "code" : "FIS",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "4"
   },
   "CEN" : {
      "utcoffset" : "5",
      "timezone" : "Asia/Yekaterinburg",
      "code" : "CEN",
      "city" : "Yekaterinburg",
      "name" : "Central Stadium"
   },
   "KRE" : {
      "utcoffset" : "3",
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "code" : "KRE",
      "timezone" : "Europe/Moscow"
   },
   "LUZ" : {
      "name" : "Luzhniki Stadium",
      "city" : "Moscow",
      "code" : "LUZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "code" : "KAL",
      "timezone" : "Europe/Kaliningrad",
      "utcoffset" : "2"
   }
}
;

var games = [
   {
      "description" : "Group A",
      "team1" : "Russia",
      "group" : "Group A",
      "stadium" : "LUZ",
      "result" : null,
      "date" : "2018-06-14T15:00:00",
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia"
   },
   {
      "team1" : "Egypt",
      "description" : "Group A",
      "result" : null,
      "stadium" : "CEN",
      "group" : "Group A",
      "team2" : "Uruguay",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "date" : "2018-06-15T12:00:00"
   },
   {
      "date" : "2018-06-15T15:00:00",
      "team2" : "Iran",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "team1" : "Morocco",
      "description" : "Group B",
      "stadium" : "KRE",
      "group" : "Group B",
      "result" : null
   },
   {
      "team1" : "Portugal",
      "description" : "Group B",
      "result" : null,
      "stadium" : "FIS",
      "group" : "Group B",
      "date" : "2018-06-15T18:00:00",
      "team2" : "Spain",
      "class" : "round-group-b stadium-fis team-portugal team-spain"
   },
   {
      "date" : "2018-06-16T10:00:00",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "team2" : "Australia",
      "group" : "Group C",
      "stadium" : "KAZ",
      "result" : null,
      "team1" : "France",
      "description" : "Group C"
   },
   {
      "date" : "2018-06-16T13:00:00",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "team2" : "Iceland",
      "group" : "Group D",
      "result" : null,
      "stadium" : "OTK",
      "description" : "Group D",
      "team1" : "Argentina"
   },
   {
      "team1" : "Peru",
      "description" : "Group C",
      "stadium" : "MOR",
      "result" : null,
      "group" : "Group C",
      "date" : "2018-06-16T16:00:00",
      "team2" : "Denmark",
      "class" : "round-group-c stadium-mor team-peru team-denmark"
   },
   {
      "date" : "2018-06-16T19:00:00",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "team2" : "Nigeria",
      "stadium" : "KAL",
      "group" : "Group D",
      "result" : null,
      "description" : "Group D",
      "team1" : "Croatia"
   },
   {
      "team1" : "Costa Rica",
      "description" : "Group E",
      "stadium" : "COS",
      "result" : null,
      "group" : "Group E",
      "team2" : "Serbia",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "date" : "2018-06-17T12:00:00"
   },
   {
      "team2" : "Mexico",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "date" : "2018-06-17T15:00:00",
      "description" : "Group F",
      "team1" : "Germany",
      "result" : null,
      "group" : "Group F",
      "stadium" : "LUZ"
   },
   {
      "date" : "2018-06-17T18:00:00",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "team2" : "Switzerland",
      "stadium" : "ROS",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil",
      "description" : "Group E"
   },
   {
      "date" : "2018-06-18T12:00:00",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "team2" : "Korea Republic",
      "group" : "Group F",
      "result" : null,
      "stadium" : "NIZ",
      "description" : "Group F",
      "team1" : "Sweden"
   },
   {
      "stadium" : "FIS",
      "group" : "Group G",
      "result" : null,
      "team1" : "Belgium",
      "description" : "Group G",
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "team2" : "Panama",
      "date" : "2018-06-18T15:00:00"
   },
   {
      "team2" : "England",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "date" : "2018-06-18T18:00:00",
      "description" : "Group G",
      "team1" : "Tunisia",
      "result" : null,
      "group" : "Group G",
      "stadium" : "VOL"
   },
   {
      "team1" : "Colombia",
      "description" : "Group H",
      "group" : "Group H",
      "stadium" : "MOR",
      "result" : null,
      "date" : "2018-06-19T12:00:00",
      "team2" : "Japan",
      "class" : "round-group-h stadium-mor team-colombia team-japan"
   },
   {
      "date" : "2018-06-19T15:00:00",
      "team2" : "Senegal",
      "class" : "round-group-h stadium-otk team-poland team-senegal",
      "description" : "Group H",
      "team1" : "Poland",
      "group" : "Group H",
      "stadium" : "OTK",
      "result" : null
   },
   {
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "team2" : "Egypt",
      "date" : "2018-06-19T18:00:00",
      "stadium" : "KRE",
      "result" : null,
      "group" : "Group A",
      "team1" : "Russia",
      "description" : "Group A"
   },
   {
      "result" : null,
      "group" : "Group B",
      "stadium" : "LUZ",
      "description" : "Group B",
      "team1" : "Portugal",
      "date" : "2018-06-20T12:00:00",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "team2" : "Morocco"
   },
   {
      "description" : "Group A",
      "team1" : "Uruguay",
      "stadium" : "ROS",
      "group" : "Group A",
      "result" : null,
      "team2" : "Saudi Arabia",
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "date" : "2018-06-20T15:00:00"
   },
   {
      "class" : "round-group-b stadium-kaz team-iran team-spain",
      "team2" : "Spain",
      "date" : "2018-06-20T18:00:00",
      "stadium" : "KAZ",
      "group" : "Group B",
      "result" : null,
      "team1" : "Iran",
      "description" : "Group B"
   },
   {
      "stadium" : "COS",
      "result" : null,
      "group" : "Group C",
      "description" : "Group C",
      "team1" : "Denmark",
      "date" : "2018-06-21T12:00:00",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "team2" : "Australia"
   },
   {
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "result" : null,
      "group" : "Group C",
      "stadium" : "CEN",
      "description" : "Group C",
      "team1" : "France"
   },
   {
      "date" : "2018-06-21T18:00:00",
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "team2" : "Croatia",
      "group" : "Group D",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "Argentina",
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
      "result" : null,
      "group" : "Group D",
      "stadium" : "VOL",
      "description" : "Group D",
      "team1" : "Nigeria",
      "date" : "2018-06-22T15:00:00",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "team2" : "Iceland"
   },
   {
      "date" : "2018-06-22T18:00:00",
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "team1" : "Serbia",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "KAL"
   },
   {
      "date" : "2018-06-23T12:00:00",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "team2" : "Tunisia",
      "stadium" : "OTK",
      "group" : "Group G",
      "result" : null,
      "team1" : "Belgium",
      "description" : "Group G"
   },
   {
      "result" : null,
      "group" : "Group F",
      "stadium" : "ROS",
      "team1" : "Korea Republic",
      "description" : "Group F",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico",
      "team2" : "Mexico",
      "date" : "2018-06-23T15:00:00"
   },
   {
      "date" : "2018-06-23T18:00:00",
      "team2" : "Sweden",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "team1" : "Germany",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "FIS"
   },
   {
      "date" : "2018-06-24T12:00:00",
      "class" : "round-group-g stadium-niz team-england team-panama",
      "team2" : "Panama",
      "result" : null,
      "stadium" : "NIZ",
      "group" : "Group G",
      "description" : "Group G",
      "team1" : "England"
   },
   {
      "group" : "Group H",
      "stadium" : "CEN",
      "result" : null,
      "team1" : "Japan",
      "description" : "Group H",
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "team2" : "Senegal",
      "date" : "2018-06-24T15:00:00"
   },
   {
      "stadium" : "KAZ",
      "group" : "Group H",
      "result" : null,
      "team1" : "Poland",
      "description" : "Group H",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team2" : "Colombia",
      "date" : "2018-06-24T18:00:00"
   },
   {
      "date" : "2018-06-25T14:00:00",
      "team2" : "Russia",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team1" : "Uruguay",
      "description" : "Group A",
      "stadium" : "COS",
      "group" : "Group A",
      "result" : null
   },
   {
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "team2" : "Egypt",
      "date" : "2018-06-25T14:00:00",
      "result" : null,
      "stadium" : "VOL",
      "group" : "Group A",
      "team1" : "Saudi Arabia",
      "description" : "Group A"
   },
   {
      "team2" : "Portugal",
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "team1" : "Iran",
      "group" : "Group B",
      "stadium" : "MOR",
      "result" : null
   },
   {
      "team2" : "Morocco",
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "team1" : "Spain",
      "group" : "Group B",
      "stadium" : "KAL",
      "result" : null
   },
   {
      "team1" : "Denmark",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "LUZ",
      "date" : "2018-06-26T14:00:00",
      "team2" : "France",
      "class" : "round-group-c stadium-luz team-denmark team-france"
   },
   {
      "description" : "Group C",
      "team1" : "Australia",
      "group" : "Group C",
      "stadium" : "FIS",
      "result" : null,
      "team2" : "Peru",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "date" : "2018-06-26T14:00:00"
   },
   {
      "group" : "Group D",
      "stadium" : "KRE",
      "result" : null,
      "description" : "Group D",
      "team1" : "Nigeria",
      "date" : "2018-06-26T18:00:00",
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "team2" : "Argentina"
   },
   {
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "team2" : "Croatia",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D",
      "result" : null,
      "stadium" : "ROS",
      "description" : "Group D",
      "team1" : "Iceland"
   },
   {
      "description" : "Group F",
      "team1" : "Mexico",
      "stadium" : "CEN",
      "group" : "Group F",
      "result" : null,
      "date" : "2018-06-27T14:00:00",
      "team2" : "Sweden",
      "class" : "round-group-f stadium-cen team-mexico team-sweden"
   },
   {
      "date" : "2018-06-27T14:00:00",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "team2" : "Germany",
      "result" : null,
      "group" : "Group F",
      "stadium" : "KAZ",
      "description" : "Group F",
      "team1" : "Korea Republic"
   },
   {
      "description" : "Group E",
      "team1" : "Serbia",
      "group" : "Group E",
      "stadium" : "OTK",
      "result" : null,
      "date" : "2018-06-27T18:00:00",
      "team2" : "Brazil",
      "class" : "round-group-e stadium-otk team-serbia team-brazil"
   },
   {
      "result" : null,
      "stadium" : "NIZ",
      "group" : "Group E",
      "description" : "Group E",
      "team1" : "Switzerland",
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "team2" : "Costa Rica",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "team2" : "Poland",
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "date" : "2018-06-28T14:00:00",
      "description" : "Group H",
      "team1" : "Japan",
      "group" : "Group H",
      "result" : null,
      "stadium" : "VOL"
   },
   {
      "team1" : "Senegal",
      "description" : "Group H",
      "stadium" : "COS",
      "group" : "Group H",
      "result" : null,
      "date" : "2018-06-28T14:00:00",
      "team2" : "Colombia",
      "class" : "round-group-h stadium-cos team-senegal team-colombia"
   },
   {
      "date" : "2018-06-28T18:00:00",
      "team2" : "Tunisia",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "team1" : "Panama",
      "description" : "Group G",
      "stadium" : "MOR",
      "result" : null,
      "group" : "Group G"
   },
   {
      "team1" : "England",
      "description" : "Group G",
      "result" : null,
      "group" : "Group G",
      "stadium" : "KAL",
      "date" : "2018-06-28T18:00:00",
      "team2" : "Belgium",
      "class" : "round-group-g stadium-kal team-england team-belgium"
   },
   {
      "team2" : "Argentina",
      "class" : "round-round-of-16 stadium-kaz team-france team-argentina",
      "date" : "2018-06-30T14:00:00",
      "description" : "Round of 16",
      "team1" : "France",
      "stadium" : "KAZ",
      "result" : null,
      "group" : null
   },
   {
      "team1" : "Uruguay",
      "description" : "Round of 16",
      "group" : null,
      "stadium" : "FIS",
      "result" : null,
      "team2" : "Portugal",
      "class" : "round-round-of-16 stadium-fis team-uruguay team-portugal",
      "date" : "2018-06-30T18:00:00"
   },
   {
      "date" : "2018-07-01T14:00:00",
      "class" : "round-round-of-16 stadium-luz team-spain team-russia",
      "team2" : "Russia",
      "result" : null,
      "group" : null,
      "stadium" : "LUZ",
      "description" : "Round of 16",
      "team1" : "Spain"
   },
   {
      "team2" : "Denmark",
      "class" : "round-round-of-16 stadium-niz team-croatia team-denmark",
      "date" : "2018-07-01T18:00:00",
      "description" : "Round of 16",
      "team1" : "Croatia",
      "group" : null,
      "stadium" : "NIZ",
      "result" : null
   },
   {
      "result" : null,
      "group" : null,
      "stadium" : "COS",
      "description" : "Round of 16",
      "team1" : "Brazil",
      "class" : "round-round-of-16 stadium-cos team-brazil team-mexico",
      "team2" : "Mexico",
      "date" : "2018-07-02T14:00:00"
   },
   {
      "team1" : "Belgium",
      "description" : "Round of 16",
      "stadium" : "ROS",
      "group" : null,
      "result" : null,
      "team2" : "Japan",
      "class" : "round-round-of-16 stadium-ros team-belgium team-japan",
      "date" : "2018-07-02T18:00:00"
   },
   {
      "description" : "Round of 16",
      "team1" : "Sweden",
      "stadium" : "KRE",
      "result" : null,
      "group" : null,
      "team2" : "Switzerland",
      "class" : "round-round-of-16 stadium-kre team-sweden team-switzerland",
      "date" : "2018-07-03T14:00:00"
   },
   {
      "date" : "2018-07-03T18:00:00",
      "class" : "round-round-of-16 stadium-otk team-colombia team-england",
      "team2" : "England",
      "stadium" : "OTK",
      "group" : null,
      "result" : null,
      "description" : "Round of 16",
      "team1" : "Colombia"
   },
   {
      "date" : "2018-07-06T14:00:00",
      "class" : "round-quarter-finals stadium-niz team-uruguay team-france",
      "team2" : "France",
      "stadium" : "NIZ",
      "result" : null,
      "group" : null,
      "description" : "Quarter Finals",
      "team1" : "Uruguay"
   },
   {
      "description" : "Quarter Finals",
      "team1" : "Brazil",
      "stadium" : "KAZ",
      "result" : null,
      "group" : null,
      "team2" : "Belgium",
      "class" : "round-quarter-finals stadium-kaz team-brazil team-belgium",
      "date" : "2018-07-06T18:00:00"
   },
   {
      "team2" : "England",
      "class" : "round-quarter-finals stadium-cos team-sweden team-england",
      "date" : "2018-07-07T14:00:00",
      "description" : "Quarter Finals",
      "team1" : "Sweden",
      "group" : null,
      "stadium" : "COS",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "class" : "round-quarter-finals stadium-fis team-russia team-croatia",
      "date" : "2018-07-07T18:00:00",
      "description" : "Quarter Finals",
      "team1" : "Russia",
      "group" : null,
      "stadium" : "FIS",
      "result" : null
   },
   {
      "team1" : "France",
      "description" : "Semi Finals",
      "stadium" : "KRE",
      "group" : null,
      "result" : null,
      "date" : "2018-07-10T18:00:00",
      "team2" : "Belgium",
      "class" : "round-semi-finals stadium-kre team-france team-belgium"
   },
   {
      "date" : "2018-07-11T18:00:00",
      "team2" : "England",
      "class" : "round-semi-finals stadium-luz team-croatia team-england",
      "team1" : "Croatia",
      "description" : "Semi Finals",
      "stadium" : "LUZ",
      "result" : null,
      "group" : null
   },
   {
      "date" : "2018-07-14T14:00:00",
      "team2" : "To be announced",
      "class" : "round-finals stadium-kre team-belgium",
      "team1" : "Belgium",
      "description" : "Finals",
      "stadium" : "KRE",
      "group" : null,
      "result" : null
   },
   {
      "result" : null,
      "stadium" : "LUZ",
      "group" : null,
      "team1" : "France",
      "description" : "Finals",
      "date" : "2018-07-15T15:00:00",
      "class" : "round-finals stadium-luz team-france",
      "team2" : "To be announced"
   }
]
;

