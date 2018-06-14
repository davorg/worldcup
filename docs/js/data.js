var stadiums = [
   {
      "city" : "Yekaterinburg",
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   {
      "code" : "COS",
      "timezone" : "Europe/Samara",
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "city" : "Samara"
   },
   {
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow",
      "code" : "FIS",
      "city" : "Sochi"
   },
   {
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "code" : "KAL",
      "city" : "Kaliningrad"
   },
   {
      "city" : "Kazan",
      "utcoffset" : "3",
      "name" : "Kazan Arena",
      "code" : "KAZ",
      "timezone" : "Europe/Moscow"
   },
   {
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "KRE"
   },
   {
      "city" : "Moscow",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "LUZ"
   },
   {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "code" : "MOR",
      "timezone" : "Europe/Moscow",
      "city" : "Saransk"
   },
   {
      "city" : "Nizhny Novgorod",
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Nizhny Novgorod Stadium"
   },
   {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "code" : "OTK",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   {
      "city" : "Rostov-on-Don",
      "utcoffset" : "3",
      "name" : "Rostov Arena",
      "code" : "ROS",
      "timezone" : "Europe/Moscow"
   },
   {
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd",
      "code" : "VOL",
      "name" : "Volgograd Arena",
      "utcoffset" : "3"
   }
]
;

var stadiums_lookup = {
   "LUZ" : {
      "city" : "Moscow",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "LUZ"
   },
   "FIS" : {
      "name" : "Fisht Olympic Stadium",
      "utcoffset" : "4",
      "timezone" : "Europe/Moscow",
      "code" : "FIS",
      "city" : "Sochi"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "utcoffset" : "3",
      "name" : "Rostov Arena",
      "code" : "ROS",
      "timezone" : "Europe/Moscow"
   },
   "KAZ" : {
      "city" : "Kazan",
      "utcoffset" : "3",
      "name" : "Kazan Arena",
      "code" : "KAZ",
      "timezone" : "Europe/Moscow"
   },
   "OTK" : {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "code" : "OTK",
      "name" : "Otkritie Arena",
      "utcoffset" : "3"
   },
   "NIZ" : {
      "city" : "Nizhny Novgorod",
      "code" : "NIZ",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Nizhny Novgorod Stadium"
   },
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "code" : "KAL",
      "city" : "Kaliningrad"
   },
   "MOR" : {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "code" : "MOR",
      "timezone" : "Europe/Moscow",
      "city" : "Saransk"
   },
   "KRE" : {
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3",
      "timezone" : "Europe/Moscow",
      "code" : "KRE"
   },
   "CEN" : {
      "city" : "Yekaterinburg",
      "code" : "CEN",
      "timezone" : "Asia/Yekaterinburg",
      "utcoffset" : "5",
      "name" : "Central Stadium"
   },
   "COS" : {
      "code" : "COS",
      "timezone" : "Europe/Samara",
      "utcoffset" : "4",
      "name" : "Cosmos Arena",
      "city" : "Samara"
   },
   "VOL" : {
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd",
      "code" : "VOL",
      "name" : "Volgograd Arena",
      "utcoffset" : "3"
   }
}
;

var rounds = [
   {
      "name" : "Group A",
      "class" : "group-a"
   },
   {
      "name" : "Group B",
      "class" : "group-b"
   },
   {
      "class" : "group-c",
      "name" : "Group C"
   },
   {
      "class" : "group-d",
      "name" : "Group D"
   },
   {
      "class" : "group-e",
      "name" : "Group E"
   },
   {
      "class" : "group-f",
      "name" : "Group F"
   },
   {
      "class" : "group-g",
      "name" : "Group G"
   },
   {
      "class" : "group-h",
      "name" : "Group H"
   },
   {
      "name" : "Round of 16",
      "class" : "round-of-16"
   },
   {
      "class" : "quarter-finals",
      "name" : "Quarter Finals"
   },
   {
      "class" : "semi-finals",
      "name" : "Semi Finals"
   },
   {
      "class" : "finals",
      "name" : "Finals"
   }
]
;

var games = [
   {
      "class" : "round-group-a stadium-luz team-russia team-saudi-arabia",
      "stadium" : "LUZ",
      "team2" : "Saudi Arabia",
      "description" : "Group A",
      "team1" : "Russia",
      "date" : "2018-06-14T15:00:00",
      "group" : "Group A",
      "result" : null
   },
   {
      "team1" : "Egypt",
      "description" : "Group A",
      "result" : null,
      "group" : "Group A",
      "date" : "2018-06-15T12:00:00",
      "stadium" : "CEN",
      "class" : "round-group-a stadium-cen team-egypt team-uruguay",
      "team2" : "Uruguay"
   },
   {
      "team2" : "Iran",
      "stadium" : "KRE",
      "class" : "round-group-b stadium-kre team-morocco team-iran",
      "result" : null,
      "date" : "2018-06-15T15:00:00",
      "group" : "Group B",
      "description" : "Group B",
      "team1" : "Morocco"
   },
   {
      "date" : "2018-06-15T18:00:00",
      "group" : "Group B",
      "result" : null,
      "description" : "Group B",
      "team1" : "Portugal",
      "team2" : "Spain",
      "class" : "round-group-b stadium-fis team-portugal team-spain",
      "stadium" : "FIS"
   },
   {
      "stadium" : "KAZ",
      "class" : "round-group-c stadium-kaz team-france team-australia",
      "team2" : "Australia",
      "description" : "Group C",
      "team1" : "France",
      "result" : null,
      "date" : "2018-06-16T10:00:00",
      "group" : "Group C"
   },
   {
      "stadium" : "OTK",
      "class" : "round-group-d stadium-otk team-argentina team-iceland",
      "team2" : "Iceland",
      "team1" : "Argentina",
      "description" : "Group D",
      "result" : null,
      "date" : "2018-06-16T13:00:00",
      "group" : "Group D"
   },
   {
      "result" : null,
      "group" : "Group C",
      "date" : "2018-06-16T16:00:00",
      "description" : "Group C",
      "team1" : "Peru",
      "team2" : "Denmark",
      "stadium" : "MOR",
      "class" : "round-group-c stadium-mor team-peru team-denmark"
   },
   {
      "team2" : "Nigeria",
      "stadium" : "KAL",
      "class" : "round-group-d stadium-kal team-croatia team-nigeria",
      "result" : null,
      "date" : "2018-06-16T19:00:00",
      "group" : "Group D",
      "team1" : "Croatia",
      "description" : "Group D"
   },
   {
      "team2" : "Serbia",
      "stadium" : "COS",
      "class" : "round-group-e stadium-cos team-costa-rica team-serbia",
      "result" : null,
      "group" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "team1" : "Costa Rica",
      "description" : "Group E"
   },
   {
      "description" : "Group F",
      "team1" : "Germany",
      "result" : null,
      "date" : "2018-06-17T15:00:00",
      "group" : "Group F",
      "stadium" : "LUZ",
      "class" : "round-group-f stadium-luz team-germany team-mexico",
      "team2" : "Mexico"
   },
   {
      "team1" : "Brazil",
      "description" : "Group E",
      "result" : null,
      "group" : "Group E",
      "date" : "2018-06-17T18:00:00",
      "stadium" : "ROS",
      "class" : "round-group-e stadium-ros team-brazil team-switzerland",
      "team2" : "Switzerland"
   },
   {
      "group" : "Group F",
      "date" : "2018-06-18T12:00:00",
      "result" : null,
      "team1" : "Sweden",
      "description" : "Group F",
      "team2" : "Korea Republic",
      "class" : "round-group-f stadium-niz team-sweden team-korea-republic",
      "stadium" : "NIZ"
   },
   {
      "description" : "Group G",
      "team1" : "Belgium",
      "date" : "2018-06-18T15:00:00",
      "group" : "Group G",
      "result" : null,
      "class" : "round-group-g stadium-fis team-belgium team-panama",
      "stadium" : "FIS",
      "team2" : "Panama"
   },
   {
      "description" : "Group G",
      "team1" : "Tunisia",
      "result" : null,
      "group" : "Group G",
      "date" : "2018-06-18T18:00:00",
      "stadium" : "VOL",
      "class" : "round-group-g stadium-vol team-tunisia team-england",
      "team2" : "England"
   },
   {
      "team2" : "Japan",
      "class" : "round-group-h stadium-mor team-colombia team-japan",
      "stadium" : "MOR",
      "date" : "2018-06-19T12:00:00",
      "group" : "Group H",
      "result" : null,
      "team1" : "Colombia",
      "description" : "Group H"
   },
   {
      "result" : null,
      "group" : "Group H",
      "date" : "2018-06-19T15:00:00",
      "team1" : "Poland",
      "description" : "Group H",
      "team2" : "Senegal",
      "stadium" : "OTK",
      "class" : "round-group-h stadium-otk team-poland team-senegal"
   },
   {
      "team2" : "Egypt",
      "class" : "round-group-a stadium-kre team-russia team-egypt",
      "stadium" : "KRE",
      "group" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "result" : null,
      "description" : "Group A",
      "team1" : "Russia"
   },
   {
      "stadium" : "LUZ",
      "class" : "round-group-b stadium-luz team-portugal team-morocco",
      "team2" : "Morocco",
      "team1" : "Portugal",
      "description" : "Group B",
      "result" : null,
      "group" : "Group B",
      "date" : "2018-06-20T12:00:00"
   },
   {
      "class" : "round-group-a stadium-ros team-uruguay team-saudi-arabia",
      "stadium" : "ROS",
      "team2" : "Saudi Arabia",
      "team1" : "Uruguay",
      "description" : "Group A",
      "group" : "Group A",
      "date" : "2018-06-20T15:00:00",
      "result" : null
   },
   {
      "result" : null,
      "group" : "Group B",
      "date" : "2018-06-20T18:00:00",
      "team1" : "Iran",
      "description" : "Group B",
      "team2" : "Spain",
      "stadium" : "KAZ",
      "class" : "round-group-b stadium-kaz team-iran team-spain"
   },
   {
      "group" : "Group C",
      "date" : "2018-06-21T12:00:00",
      "result" : null,
      "description" : "Group C",
      "team1" : "Denmark",
      "team2" : "Australia",
      "class" : "round-group-c stadium-cos team-denmark team-australia",
      "stadium" : "COS"
   },
   {
      "description" : "Group C",
      "team1" : "France",
      "result" : null,
      "date" : "2018-06-21T15:00:00",
      "group" : "Group C",
      "stadium" : "CEN",
      "class" : "round-group-c stadium-cen team-france team-peru",
      "team2" : "Peru"
   },
   {
      "class" : "round-group-d stadium-niz team-argentina team-croatia",
      "stadium" : "NIZ",
      "team2" : "Croatia",
      "team1" : "Argentina",
      "description" : "Group D",
      "group" : "Group D",
      "date" : "2018-06-21T18:00:00",
      "result" : null
   },
   {
      "stadium" : "KRE",
      "class" : "round-group-e stadium-kre team-brazil team-costa-rica",
      "team2" : "Costa Rica",
      "description" : "Group E",
      "team1" : "Brazil",
      "result" : null,
      "date" : "2018-06-22T12:00:00",
      "group" : "Group E"
   },
   {
      "stadium" : "VOL",
      "class" : "round-group-d stadium-vol team-nigeria team-iceland",
      "team2" : "Iceland",
      "description" : "Group D",
      "team1" : "Nigeria",
      "result" : null,
      "group" : "Group D",
      "date" : "2018-06-22T15:00:00"
   },
   {
      "team2" : "Switzerland",
      "class" : "round-group-e stadium-kal team-serbia team-switzerland",
      "stadium" : "KAL",
      "group" : "Group E",
      "date" : "2018-06-22T18:00:00",
      "result" : null,
      "description" : "Group E",
      "team1" : "Serbia"
   },
   {
      "stadium" : "OTK",
      "class" : "round-group-g stadium-otk team-belgium team-tunisia",
      "team2" : "Tunisia",
      "description" : "Group G",
      "team1" : "Belgium",
      "result" : null,
      "date" : "2018-06-23T12:00:00",
      "group" : "Group G"
   },
   {
      "result" : null,
      "date" : "2018-06-23T15:00:00",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "description" : "Group F",
      "team2" : "Mexico",
      "stadium" : "ROS",
      "class" : "round-group-f stadium-ros team-korea-republic team-mexico"
   },
   {
      "team2" : "Sweden",
      "class" : "round-group-f stadium-fis team-germany team-sweden",
      "stadium" : "FIS",
      "group" : "Group F",
      "date" : "2018-06-23T18:00:00",
      "result" : null,
      "team1" : "Germany",
      "description" : "Group F"
   },
   {
      "team1" : "England",
      "description" : "Group G",
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "result" : null,
      "class" : "round-group-g stadium-niz team-england team-panama",
      "stadium" : "NIZ",
      "team2" : "Panama"
   },
   {
      "class" : "round-group-h stadium-cen team-japan team-senegal",
      "stadium" : "CEN",
      "team2" : "Senegal",
      "description" : "Group H",
      "team1" : "Japan",
      "date" : "2018-06-24T15:00:00",
      "group" : "Group H",
      "result" : null
   },
   {
      "stadium" : "KAZ",
      "class" : "round-group-h stadium-kaz team-poland team-colombia",
      "team2" : "Colombia",
      "team1" : "Poland",
      "description" : "Group H",
      "result" : null,
      "date" : "2018-06-24T18:00:00",
      "group" : "Group H"
   },
   {
      "stadium" : "COS",
      "class" : "round-group-a stadium-cos team-uruguay team-russia",
      "team2" : "Russia",
      "description" : "Group A",
      "team1" : "Uruguay",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A"
   },
   {
      "description" : "Group A",
      "team1" : "Saudi Arabia",
      "result" : null,
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "stadium" : "VOL",
      "class" : "round-group-a stadium-vol team-saudi-arabia team-egypt",
      "team2" : "Egypt"
   },
   {
      "team1" : "Iran",
      "description" : "Group B",
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "result" : null,
      "class" : "round-group-b stadium-mor team-iran team-portugal",
      "stadium" : "MOR",
      "team2" : "Portugal"
   },
   {
      "class" : "round-group-b stadium-kal team-spain team-morocco",
      "stadium" : "KAL",
      "team2" : "Morocco",
      "description" : "Group B",
      "team1" : "Spain",
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "result" : null
   },
   {
      "team2" : "France",
      "class" : "round-group-c stadium-luz team-denmark team-france",
      "stadium" : "LUZ",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "result" : null,
      "team1" : "Denmark",
      "description" : "Group C"
   },
   {
      "team2" : "Peru",
      "class" : "round-group-c stadium-fis team-australia team-peru",
      "stadium" : "FIS",
      "date" : "2018-06-26T14:00:00",
      "group" : "Group C",
      "result" : null,
      "team1" : "Australia",
      "description" : "Group C"
   },
   {
      "class" : "round-group-d stadium-kre team-nigeria team-argentina",
      "stadium" : "KRE",
      "team2" : "Argentina",
      "team1" : "Nigeria",
      "description" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "group" : "Group D",
      "result" : null
   },
   {
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "result" : null,
      "team1" : "Iceland",
      "description" : "Group D",
      "team2" : "Croatia",
      "class" : "round-group-d stadium-ros team-iceland team-croatia",
      "stadium" : "ROS"
   },
   {
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "result" : null,
      "description" : "Group F",
      "team1" : "Mexico",
      "team2" : "Sweden",
      "class" : "round-group-f stadium-cen team-mexico team-sweden",
      "stadium" : "CEN"
   },
   {
      "team2" : "Germany",
      "stadium" : "KAZ",
      "class" : "round-group-f stadium-kaz team-korea-republic team-germany",
      "result" : null,
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "description" : "Group F"
   },
   {
      "stadium" : "OTK",
      "class" : "round-group-e stadium-otk team-serbia team-brazil",
      "team2" : "Brazil",
      "description" : "Group E",
      "team1" : "Serbia",
      "result" : null,
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E"
   },
   {
      "description" : "Group E",
      "team1" : "Switzerland",
      "group" : "Group E",
      "date" : "2018-06-27T18:00:00",
      "result" : null,
      "class" : "round-group-e stadium-niz team-switzerland team-costa-rica",
      "stadium" : "NIZ",
      "team2" : "Costa Rica"
   },
   {
      "description" : "Group H",
      "team1" : "Japan",
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H",
      "result" : null,
      "class" : "round-group-h stadium-vol team-japan team-poland",
      "stadium" : "VOL",
      "team2" : "Poland"
   },
   {
      "description" : "Group H",
      "team1" : "Senegal",
      "date" : "2018-06-28T14:00:00",
      "group" : "Group H",
      "result" : null,
      "class" : "round-group-h stadium-cos team-senegal team-colombia",
      "stadium" : "COS",
      "team2" : "Colombia"
   },
   {
      "stadium" : "MOR",
      "class" : "round-group-g stadium-mor team-panama team-tunisia",
      "team2" : "Tunisia",
      "description" : "Group G",
      "team1" : "Panama",
      "result" : null,
      "date" : "2018-06-28T18:00:00",
      "group" : "Group G"
   },
   {
      "team2" : "Belgium",
      "stadium" : "KAL",
      "class" : "round-group-g stadium-kal team-england team-belgium",
      "result" : null,
      "group" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "description" : "Group G",
      "team1" : "England"
   },
   {
      "result" : null,
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "description" : "Round of 16",
      "team1" : "Winner Group A",
      "team2" : "Runner-up Group B\t",
      "stadium" : "FIS",
      "class" : "round-round-of-16 stadium-fis"
   },
   {
      "date" : "2018-06-30T18:00:00",
      "group" : null,
      "result" : null,
      "team1" : "Winner Group C",
      "description" : "Round of 16",
      "team2" : "Runner-up Group D",
      "class" : "round-round-of-16 stadium-kaz",
      "stadium" : "KAZ"
   },
   {
      "team2" : "Runner-up Group A\t",
      "class" : "round-round-of-16 stadium-luz",
      "stadium" : "LUZ",
      "date" : "2018-07-01T14:00:00",
      "group" : null,
      "result" : null,
      "team1" : "Winner Group B",
      "description" : "Round of 16"
   },
   {
      "class" : "round-round-of-16 stadium-niz",
      "stadium" : "NIZ",
      "team2" : "Runner-up Group C",
      "description" : "Round of 16",
      "team1" : "Winner Group D",
      "date" : "2018-07-01T18:00:00",
      "group" : null,
      "result" : null
   },
   {
      "group" : null,
      "date" : "2018-07-02T14:00:00",
      "result" : null,
      "description" : "Round of 16",
      "team1" : "Winner Group E",
      "team2" : "Runner-up Group F",
      "class" : "round-round-of-16 stadium-cos",
      "stadium" : "COS"
   },
   {
      "team2" : "Runner-up Group H",
      "stadium" : "ROS",
      "class" : "round-round-of-16 stadium-ros",
      "result" : null,
      "group" : null,
      "date" : "2018-07-02T18:00:00",
      "team1" : "Winner Group G",
      "description" : "Round of 16"
   },
   {
      "team1" : "Winner Group F",
      "description" : "Round of 16",
      "result" : null,
      "group" : null,
      "date" : "2018-07-03T14:00:00",
      "stadium" : "KRE",
      "class" : "round-round-of-16 stadium-kre",
      "team2" : "Runner-up Group E"
   },
   {
      "team2" : "Runner-up Group G",
      "class" : "round-round-of-16 stadium-otk",
      "stadium" : "OTK",
      "group" : null,
      "date" : "2018-07-03T18:00:00",
      "result" : null,
      "team1" : "Winner Group H",
      "description" : "Round of 16"
   },
   {
      "class" : "round-quarter-finals stadium-niz",
      "stadium" : "NIZ",
      "team2" : "To be announced",
      "description" : "Quarter Finals",
      "team1" : "To be announced",
      "date" : "2018-07-06T14:00:00",
      "group" : null,
      "result" : null
   },
   {
      "class" : "round-quarter-finals stadium-kaz",
      "stadium" : "KAZ",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "date" : "2018-07-06T18:00:00",
      "group" : null,
      "result" : null
   },
   {
      "result" : null,
      "date" : "2018-07-07T14:00:00",
      "group" : null,
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "team2" : "To be announced",
      "stadium" : "COS",
      "class" : "round-quarter-finals stadium-cos"
   },
   {
      "class" : "round-quarter-finals stadium-fis",
      "stadium" : "FIS",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "description" : "Quarter Finals",
      "date" : "2018-07-07T18:00:00",
      "group" : null,
      "result" : null
   },
   {
      "team2" : "To be announced",
      "class" : "round-semi-finals stadium-kre",
      "stadium" : "KRE",
      "date" : "2018-07-10T18:00:00",
      "group" : null,
      "result" : null,
      "description" : "Semi Finals",
      "team1" : "To be announced"
   },
   {
      "stadium" : "LUZ",
      "class" : "round-semi-finals stadium-luz",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "description" : "Semi Finals",
      "result" : null,
      "date" : "2018-07-11T18:00:00",
      "group" : null
   },
   {
      "class" : "round-finals stadium-kre",
      "stadium" : "KRE",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "description" : "Finals",
      "date" : "2018-07-14T14:00:00",
      "group" : null,
      "result" : null
   },
   {
      "team1" : "To be announced",
      "description" : "Finals",
      "group" : null,
      "date" : "2018-07-15T15:00:00",
      "result" : null,
      "class" : "round-finals stadium-luz",
      "stadium" : "LUZ",
      "team2" : "To be announced"
   }
]
;

var teams = [
   {
      "name" : "Argentina",
      "class" : "argentina"
   },
   {
      "name" : "Australia",
      "class" : "australia"
   },
   {
      "class" : "belgium",
      "name" : "Belgium"
   },
   {
      "class" : "brazil",
      "name" : "Brazil"
   },
   {
      "class" : "colombia",
      "name" : "Colombia"
   },
   {
      "name" : "Costa Rica",
      "class" : "costa-rica"
   },
   {
      "class" : "croatia",
      "name" : "Croatia"
   },
   {
      "name" : "Denmark",
      "class" : "denmark"
   },
   {
      "class" : "egypt",
      "name" : "Egypt"
   },
   {
      "class" : "england",
      "name" : "England"
   },
   {
      "class" : "france",
      "name" : "France"
   },
   {
      "name" : "Germany",
      "class" : "germany"
   },
   {
      "name" : "Iceland",
      "class" : "iceland"
   },
   {
      "class" : "iran",
      "name" : "Iran"
   },
   {
      "name" : "Japan",
      "class" : "japan"
   },
   {
      "name" : "Korea Republic",
      "class" : "korea-republic"
   },
   {
      "class" : "mexico",
      "name" : "Mexico"
   },
   {
      "name" : "Morocco",
      "class" : "morocco"
   },
   {
      "class" : "nigeria",
      "name" : "Nigeria"
   },
   {
      "name" : "Panama",
      "class" : "panama"
   },
   {
      "class" : "peru",
      "name" : "Peru"
   },
   {
      "name" : "Poland",
      "class" : "poland"
   },
   {
      "class" : "portugal",
      "name" : "Portugal"
   },
   {
      "class" : "russia",
      "name" : "Russia"
   },
   {
      "name" : "Saudi Arabia",
      "class" : "saudi-arabia"
   },
   {
      "name" : "Senegal",
      "class" : "senegal"
   },
   {
      "class" : "serbia",
      "name" : "Serbia"
   },
   {
      "name" : "Spain",
      "class" : "spain"
   },
   {
      "class" : "sweden",
      "name" : "Sweden"
   },
   {
      "class" : "switzerland",
      "name" : "Switzerland"
   },
   {
      "class" : "tunisia",
      "name" : "Tunisia"
   },
   {
      "class" : "uruguay",
      "name" : "Uruguay"
   }
]
;

