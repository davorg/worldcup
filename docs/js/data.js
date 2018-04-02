var stadiums = {
   "MOR" : {
      "utcoffset" : "3",
      "name" : "Mordovia Arena",
      "city" : "Saransk",
      "timezone" : "Europe/Moscow",
      "code" : "MOR"
   },
   "KAL" : {
      "name" : "Kaliningrad Stadium",
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "city" : "Kaliningrad",
      "code" : "KAL"
   },
   "OTK" : {
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Otkritie Arena",
      "code" : "OTK"
   },
   "CEN" : {
      "name" : "Central Stadium",
      "utcoffset" : "5",
      "city" : "Yekaterinburg",
      "timezone" : "Asia/Yekaterinburg",
      "code" : "CEN"
   },
   "VOL" : {
      "code" : "VOL",
      "utcoffset" : "3",
      "name" : "Volgograd Arena",
      "city" : "Volgograd",
      "timezone" : "Europe/Volgograd"
   },
   "NIZ" : {
      "timezone" : "Europe/Moscow",
      "city" : "Nizhny Novgorod",
      "name" : "Nizhny Novgorod Stadium",
      "utcoffset" : "3",
      "code" : "NIZ"
   },
   "KAZ" : {
      "name" : "Kazan Arena",
      "utcoffset" : "3",
      "city" : "Kazan",
      "timezone" : "Europe/Moscow",
      "code" : "KAZ"
   },
   "FIS" : {
      "code" : "FIS",
      "utcoffset" : "4",
      "name" : "Fisht Olympic Stadium",
      "timezone" : "Europe/Moscow",
      "city" : "Sochi"
   },
   "ROS" : {
      "code" : "ROS",
      "utcoffset" : "3",
      "name" : "Rostov Arena",
      "city" : "Rostov-on-Don",
      "timezone" : "Europe/Moscow"
   },
   "COS" : {
      "city" : "Samara",
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "utcoffset" : "4",
      "code" : "COS"
   },
   "LUZ" : {
      "code" : "LUZ",
      "city" : "Moscow",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "name" : "Luzhniki Stadium"
   },
   "KRE" : {
      "code" : "KRE",
      "city" : "Saint Petersburg",
      "timezone" : "Europe/Moscow",
      "name" : "Krestovsky Stadium",
      "utcoffset" : "3"
   }
}
;

var games = [
   {
      "team1" : "Russia",
      "stadium" : "LUZ",
      "result" : null,
      "description" : "Group A",
      "class" : "group-a luz russia saudi-arabia",
      "group" : "Group A",
      "team2" : "Saudi Arabia",
      "date" : "2018-06-14T15:00:00"
   },
   {
      "stadium" : "CEN",
      "team1" : "Egypt",
      "class" : "group-a cen egypt uruguay",
      "result" : null,
      "description" : "Group A",
      "team2" : "Uruguay",
      "date" : "2018-06-15T12:00:00",
      "group" : "Group A"
   },
   {
      "class" : "group-b kre morocco iran",
      "description" : "Group B",
      "result" : null,
      "stadium" : "KRE",
      "team1" : "Morocco",
      "date" : "2018-06-15T15:00:00",
      "team2" : "Iran",
      "group" : "Group B"
   },
   {
      "group" : "Group B",
      "team2" : "Spain",
      "date" : "2018-06-15T18:00:00",
      "description" : "Group B",
      "result" : null,
      "class" : "group-b fis portugal spain",
      "team1" : "Portugal",
      "stadium" : "FIS"
   },
   {
      "stadium" : "KAZ",
      "team1" : "France",
      "class" : "group-c kaz france australia",
      "result" : null,
      "description" : "Group C",
      "team2" : "Australia",
      "date" : "2018-06-16T10:00:00",
      "group" : "Group C"
   },
   {
      "group" : "Group D",
      "team2" : "Iceland",
      "date" : "2018-06-16T13:00:00",
      "team1" : "Argentina",
      "stadium" : "OTK",
      "description" : "Group D",
      "result" : null,
      "class" : "group-d otk argentina iceland"
   },
   {
      "team2" : "Denmark",
      "date" : "2018-06-16T16:00:00",
      "group" : "Group C",
      "class" : "group-c mor peru denmark",
      "description" : "Group C",
      "result" : null,
      "stadium" : "MOR",
      "team1" : "Peru"
   },
   {
      "class" : "group-d kal croatia nigeria",
      "result" : null,
      "description" : "Group D",
      "stadium" : "KAL",
      "team1" : "Croatia",
      "team2" : "Nigeria",
      "date" : "2018-06-16T19:00:00",
      "group" : "Group D"
   },
   {
      "class" : "group-e cos costa-rica serbia",
      "description" : "Group E",
      "result" : null,
      "stadium" : "COS",
      "team1" : "Costa Rica",
      "date" : "2018-06-17T12:00:00",
      "team2" : "Serbia",
      "group" : "Group E"
   },
   {
      "stadium" : "LUZ",
      "team1" : "Germany",
      "class" : "group-f luz germany mexico",
      "result" : null,
      "description" : "Group F",
      "date" : "2018-06-17T15:00:00",
      "team2" : "Mexico",
      "group" : "Group F"
   },
   {
      "team1" : "Brazil",
      "stadium" : "ROS",
      "description" : "Group E",
      "result" : null,
      "class" : "group-e ros brazil switzerland",
      "group" : "Group E",
      "date" : "2018-06-17T18:00:00",
      "team2" : "Switzerland"
   },
   {
      "team2" : "Korea Republic",
      "date" : "2018-06-18T12:00:00",
      "group" : "Group F",
      "stadium" : "NIZ",
      "team1" : "Sweden",
      "class" : "group-f niz sweden korea-republic",
      "result" : null,
      "description" : "Group F"
   },
   {
      "description" : "Group G",
      "result" : null,
      "class" : "group-g fis belgium panama",
      "team1" : "Belgium",
      "stadium" : "FIS",
      "group" : "Group G",
      "date" : "2018-06-18T15:00:00",
      "team2" : "Panama"
   },
   {
      "team1" : "Tunisia",
      "stadium" : "VOL",
      "result" : null,
      "description" : "Group G",
      "class" : "group-g vol tunisia england",
      "group" : "Group G",
      "team2" : "England",
      "date" : "2018-06-18T18:00:00"
   },
   {
      "group" : "Group H",
      "team2" : "Japan",
      "date" : "2018-06-19T12:00:00",
      "result" : null,
      "description" : "Group H",
      "class" : "group-h mor colombia japan",
      "team1" : "Colombia",
      "stadium" : "MOR"
   },
   {
      "group" : "Group H",
      "team2" : "Senegal",
      "date" : "2018-06-19T15:00:00",
      "team1" : "Poland",
      "stadium" : "OTK",
      "description" : "Group H",
      "result" : null,
      "class" : "group-h otk poland senegal"
   },
   {
      "team1" : "Russia",
      "stadium" : "KRE",
      "result" : null,
      "description" : "Group A",
      "class" : "group-a kre russia egypt",
      "group" : "Group A",
      "date" : "2018-06-19T18:00:00",
      "team2" : "Egypt"
   },
   {
      "group" : "Group B",
      "team2" : "Morocco",
      "date" : "2018-06-20T12:00:00",
      "team1" : "Portugal",
      "stadium" : "LUZ",
      "description" : "Group B",
      "result" : null,
      "class" : "group-b luz portugal morocco"
   },
   {
      "class" : "group-a ros uruguay saudi-arabia",
      "description" : "Group A",
      "result" : null,
      "stadium" : "ROS",
      "team1" : "Uruguay",
      "date" : "2018-06-20T15:00:00",
      "team2" : "Saudi Arabia",
      "group" : "Group A"
   },
   {
      "team1" : "Iran",
      "stadium" : "KAZ",
      "description" : "Group B",
      "result" : null,
      "class" : "group-b kaz iran spain",
      "group" : "Group B",
      "date" : "2018-06-20T18:00:00",
      "team2" : "Spain"
   },
   {
      "group" : "Group C",
      "team2" : "Australia",
      "date" : "2018-06-21T12:00:00",
      "result" : null,
      "description" : "Group C",
      "class" : "group-c cos denmark australia",
      "team1" : "Denmark",
      "stadium" : "COS"
   },
   {
      "group" : "Group C",
      "team2" : "Peru",
      "date" : "2018-06-21T15:00:00",
      "team1" : "France",
      "stadium" : "CEN",
      "result" : null,
      "description" : "Group C",
      "class" : "group-c cen france peru"
   },
   {
      "stadium" : "NIZ",
      "team1" : "Argentina",
      "class" : "group-d niz argentina croatia",
      "description" : "Group D",
      "result" : null,
      "date" : "2018-06-21T18:00:00",
      "team2" : "Croatia",
      "group" : "Group D"
   },
   {
      "date" : "2018-06-22T12:00:00",
      "team2" : "Costa Rica",
      "group" : "Group E",
      "stadium" : "KRE",
      "team1" : "Brazil",
      "class" : "group-e kre brazil costa-rica",
      "description" : "Group E",
      "result" : null
   },
   {
      "result" : null,
      "description" : "Group D",
      "class" : "group-d vol nigeria iceland",
      "team1" : "Nigeria",
      "stadium" : "VOL",
      "group" : "Group D",
      "team2" : "Iceland",
      "date" : "2018-06-22T15:00:00"
   },
   {
      "team2" : "Switzerland",
      "date" : "2018-06-22T18:00:00",
      "group" : "Group E",
      "stadium" : "KAL",
      "team1" : "Serbia",
      "class" : "group-e kal serbia switzerland",
      "result" : null,
      "description" : "Group E"
   },
   {
      "date" : "2018-06-23T12:00:00",
      "team2" : "Tunisia",
      "group" : "Group G",
      "class" : "group-g otk belgium tunisia",
      "result" : null,
      "description" : "Group G",
      "stadium" : "OTK",
      "team1" : "Belgium"
   },
   {
      "team1" : "Korea Republic",
      "stadium" : "ROS",
      "description" : "Group F",
      "result" : null,
      "class" : "group-f ros korea-republic mexico",
      "group" : "Group F",
      "date" : "2018-06-23T15:00:00",
      "team2" : "Mexico"
   },
   {
      "team2" : "Sweden",
      "date" : "2018-06-23T18:00:00",
      "group" : "Group F",
      "stadium" : "FIS",
      "team1" : "Germany",
      "class" : "group-f fis germany sweden",
      "result" : null,
      "description" : "Group F"
   },
   {
      "team1" : "England",
      "stadium" : "NIZ",
      "description" : "Group G",
      "result" : null,
      "class" : "group-g niz england panama",
      "group" : "Group G",
      "date" : "2018-06-24T12:00:00",
      "team2" : "Panama"
   },
   {
      "class" : "group-h cen japan senegal",
      "result" : null,
      "description" : "Group H",
      "stadium" : "CEN",
      "team1" : "Japan",
      "date" : "2018-06-24T15:00:00",
      "team2" : "Senegal",
      "group" : "Group H"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-24T18:00:00",
      "team2" : "Colombia",
      "team1" : "Poland",
      "stadium" : "KAZ",
      "result" : null,
      "description" : "Group H",
      "class" : "group-h kaz poland colombia"
   },
   {
      "team2" : "Russia",
      "date" : "2018-06-25T14:00:00",
      "group" : "Group A",
      "class" : "group-a cos uruguay russia",
      "description" : "Group A",
      "result" : null,
      "stadium" : "COS",
      "team1" : "Uruguay"
   },
   {
      "date" : "2018-06-25T14:00:00",
      "team2" : "Egypt",
      "group" : "Group A",
      "class" : "group-a vol saudi-arabia egypt",
      "result" : null,
      "description" : "Group A",
      "stadium" : "VOL",
      "team1" : "Saudi Arabia"
   },
   {
      "group" : "Group B",
      "date" : "2018-06-25T18:00:00",
      "team2" : "Portugal",
      "result" : null,
      "description" : "Group B",
      "class" : "group-b mor iran portugal",
      "team1" : "Iran",
      "stadium" : "MOR"
   },
   {
      "group" : "Group B",
      "team2" : "Morocco",
      "date" : "2018-06-25T18:00:00",
      "description" : "Group B",
      "result" : null,
      "class" : "group-b kal spain morocco",
      "team1" : "Spain",
      "stadium" : "KAL"
   },
   {
      "result" : null,
      "description" : "Group C",
      "class" : "group-c luz denmark france",
      "team1" : "Denmark",
      "stadium" : "LUZ",
      "group" : "Group C",
      "team2" : "France",
      "date" : "2018-06-26T14:00:00"
   },
   {
      "class" : "group-c fis australia peru",
      "description" : "Group C",
      "result" : null,
      "stadium" : "FIS",
      "team1" : "Australia",
      "date" : "2018-06-26T14:00:00",
      "team2" : "Peru",
      "group" : "Group C"
   },
   {
      "stadium" : "KRE",
      "team1" : "Nigeria",
      "class" : "group-d kre nigeria argentina",
      "description" : "Group D",
      "result" : null,
      "date" : "2018-06-26T18:00:00",
      "team2" : "Argentina",
      "group" : "Group D"
   },
   {
      "group" : "Group D",
      "date" : "2018-06-26T18:00:00",
      "team2" : "Croatia",
      "team1" : "Iceland",
      "stadium" : "ROS",
      "description" : "Group D",
      "result" : null,
      "class" : "group-d ros iceland croatia"
   },
   {
      "team1" : "Mexico",
      "stadium" : "CEN",
      "result" : null,
      "description" : "Group F",
      "class" : "group-f cen mexico sweden",
      "group" : "Group F",
      "team2" : "Sweden",
      "date" : "2018-06-27T14:00:00"
   },
   {
      "group" : "Group F",
      "date" : "2018-06-27T14:00:00",
      "team2" : "Germany",
      "result" : null,
      "description" : "Group F",
      "class" : "group-f kaz korea-republic germany",
      "team1" : "Korea Republic",
      "stadium" : "KAZ"
   },
   {
      "result" : null,
      "description" : "Group E",
      "class" : "group-e otk serbia brazil",
      "team1" : "Serbia",
      "stadium" : "OTK",
      "group" : "Group E",
      "team2" : "Brazil",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "team1" : "Switzerland",
      "stadium" : "NIZ",
      "result" : null,
      "description" : "Group E",
      "class" : "group-e niz switzerland costa-rica",
      "group" : "Group E",
      "team2" : "Costa Rica",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "group" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "team2" : "Poland",
      "description" : "Group H",
      "result" : null,
      "class" : "group-h vol japan poland",
      "team1" : "Japan",
      "stadium" : "VOL"
   },
   {
      "stadium" : "COS",
      "team1" : "Senegal",
      "class" : "group-h cos senegal colombia",
      "description" : "Group H",
      "result" : null,
      "date" : "2018-06-28T14:00:00",
      "team2" : "Colombia",
      "group" : "Group H"
   },
   {
      "stadium" : "MOR",
      "team1" : "Panama",
      "class" : "group-g mor panama tunisia",
      "result" : null,
      "description" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "team2" : "Tunisia",
      "group" : "Group G"
   },
   {
      "group" : "Group G",
      "date" : "2018-06-28T18:00:00",
      "team2" : "Belgium",
      "result" : null,
      "description" : "Group G",
      "class" : "group-g kal england belgium",
      "team1" : "England",
      "stadium" : "KAL"
   },
   {
      "group" : null,
      "team2" : "Runner-up Group B\t",
      "date" : "2018-06-30T18:00:00",
      "team1" : "Winner Group A",
      "stadium" : "FIS",
      "description" : "Round of 16",
      "result" : null,
      "class" : "round-of-16 fis"
   },
   {
      "date" : "2018-06-30T18:00:00",
      "team2" : "Runner-up Group D",
      "group" : null,
      "class" : "round-of-16 kaz",
      "description" : "Round of 16",
      "result" : null,
      "stadium" : "KAZ",
      "team1" : "Winner Group C"
   },
   {
      "team2" : "Runner-up Group A\t",
      "date" : "2018-07-01T14:00:00",
      "group" : null,
      "class" : "round-of-16 luz",
      "description" : "Round of 16",
      "result" : null,
      "stadium" : "LUZ",
      "team1" : "Winner Group B"
   },
   {
      "team1" : "Winner Group D",
      "stadium" : "NIZ",
      "description" : "Round of 16",
      "result" : null,
      "class" : "round-of-16 niz",
      "group" : null,
      "date" : "2018-07-01T18:00:00",
      "team2" : "Runner-up Group C"
   },
   {
      "class" : "round-of-16 cos",
      "result" : null,
      "description" : "Round of 16",
      "stadium" : "COS",
      "team1" : "Winner Group E",
      "date" : "2018-07-02T14:00:00",
      "team2" : "Runner-up Group F",
      "group" : null
   },
   {
      "team1" : "Winner Group G",
      "stadium" : "ROS",
      "result" : null,
      "description" : "Round of 16",
      "class" : "round-of-16 ros",
      "group" : null,
      "team2" : "Runner-up Group H",
      "date" : "2018-07-02T18:00:00"
   },
   {
      "group" : null,
      "date" : "2018-07-03T14:00:00",
      "team2" : "Runner-up Group E",
      "team1" : "Winner Group F",
      "stadium" : "KRE",
      "description" : "Round of 16",
      "result" : null,
      "class" : "round-of-16 kre"
   },
   {
      "result" : null,
      "description" : "Round of 16",
      "class" : "round-of-16 otk",
      "team1" : "Winner Group H",
      "stadium" : "OTK",
      "group" : null,
      "team2" : "Runner-up Group G",
      "date" : "2018-07-03T18:00:00"
   },
   {
      "team2" : "To be announced",
      "date" : "2018-07-06T14:00:00",
      "group" : null,
      "class" : "quarter-finals niz",
      "description" : "Quarter Finals",
      "result" : null,
      "stadium" : "NIZ",
      "team1" : "To be announced"
   },
   {
      "date" : "2018-07-06T18:00:00",
      "team2" : "To be announced",
      "group" : null,
      "class" : "quarter-finals kaz",
      "result" : null,
      "description" : "Quarter Finals",
      "stadium" : "KAZ",
      "team1" : "To be announced"
   },
   {
      "date" : "2018-07-07T14:00:00",
      "team2" : "To be announced",
      "group" : null,
      "stadium" : "COS",
      "team1" : "To be announced",
      "class" : "quarter-finals cos",
      "result" : null,
      "description" : "Quarter Finals"
   },
   {
      "stadium" : "FIS",
      "team1" : "To be announced",
      "class" : "quarter-finals fis",
      "description" : "Quarter Finals",
      "result" : null,
      "team2" : "To be announced",
      "date" : "2018-07-07T18:00:00",
      "group" : null
   },
   {
      "class" : "semi-finals kre",
      "description" : "Semi Finals",
      "result" : null,
      "stadium" : "KRE",
      "team1" : "To be announced",
      "date" : "2018-07-10T18:00:00",
      "team2" : "To be announced",
      "group" : null
   },
   {
      "stadium" : "LUZ",
      "team1" : "To be announced",
      "class" : "semi-finals luz",
      "description" : "Semi Finals",
      "result" : null,
      "date" : "2018-07-11T18:00:00",
      "team2" : "To be announced",
      "group" : null
   },
   {
      "group" : null,
      "date" : "2018-07-14T14:00:00",
      "team2" : "To be announced",
      "team1" : "To be announced",
      "stadium" : "KRE",
      "description" : "Finals",
      "result" : null,
      "class" : "finals kre"
   },
   {
      "date" : "2018-07-15T15:00:00",
      "team2" : "To be announced",
      "group" : null,
      "class" : "finals luz",
      "description" : "Finals",
      "result" : null,
      "stadium" : "LUZ",
      "team1" : "To be announced"
   }
]
;

