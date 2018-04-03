var stadiums = {
   "KAZ" : {
      "utcoffset" : "3",
      "name" : "Kazan Arena",
      "timezone" : "Europe/Moscow",
      "code" : "KAZ",
      "city" : "Kazan"
   },
   "ROS" : {
      "city" : "Rostov-on-Don",
      "code" : "ROS",
      "name" : "Rostov Arena",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3"
   },
   "FIS" : {
      "city" : "Sochi",
      "code" : "FIS",
      "name" : "Fisht Olympic Stadium",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "4"
   },
   "LUZ" : {
      "timezone" : "Europe/Moscow",
      "name" : "Luzhniki Stadium",
      "utcoffset" : "3",
      "city" : "Moscow",
      "code" : "LUZ"
   },
   "VOL" : {
      "utcoffset" : "3",
      "timezone" : "Europe/Volgograd",
      "name" : "Volgograd Arena",
      "code" : "VOL",
      "city" : "Volgograd"
   },
   "OTK" : {
      "name" : "Otkritie Arena",
      "timezone" : "Europe/Moscow",
      "utcoffset" : "3",
      "city" : "Moscow",
      "code" : "OTK"
   },
   "NIZ" : {
      "utcoffset" : "3",
      "name" : "Nizhny Novgorod Stadium",
      "timezone" : "Europe/Moscow",
      "code" : "NIZ",
      "city" : "Nizhny Novgorod"
   },
   "KRE" : {
      "code" : "KRE",
      "city" : "Saint Petersburg",
      "utcoffset" : "3",
      "name" : "Krestovsky Stadium",
      "timezone" : "Europe/Moscow"
   },
   "MOR" : {
      "timezone" : "Europe/Moscow",
      "name" : "Mordovia Arena",
      "utcoffset" : "3",
      "city" : "Saransk",
      "code" : "MOR"
   },
   "KAL" : {
      "code" : "KAL",
      "city" : "Kaliningrad",
      "utcoffset" : "2",
      "timezone" : "Europe/Kaliningrad",
      "name" : "Kaliningrad Stadium"
   },
   "CEN" : {
      "code" : "CEN",
      "city" : "Yekaterinburg",
      "utcoffset" : "5",
      "timezone" : "Asia/Yekaterinburg",
      "name" : "Central Stadium"
   },
   "COS" : {
      "city" : "Samara",
      "code" : "COS",
      "timezone" : "Europe/Samara",
      "name" : "Cosmos Arena",
      "utcoffset" : "4"
   }
}
;

var games = [
   {
      "class" : "group-a luz russia saudi-arabia",
      "team2" : "Saudi Arabia",
      "stadium" : "LUZ",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "team1" : "Russia",
      "date" : "2018-06-14T15:00:00"
   },
   {
      "team2" : "Uruguay",
      "stadium" : "CEN",
      "class" : "group-a cen egypt uruguay",
      "date" : "2018-06-15T12:00:00",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "team1" : "Egypt"
   },
   {
      "team1" : "Morocco",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "date" : "2018-06-15T15:00:00",
      "class" : "group-b kre morocco iran",
      "stadium" : "KRE",
      "team2" : "Iran"
   },
   {
      "date" : "2018-06-15T18:00:00",
      "group" : "Group B",
      "description" : "Group B",
      "result" : null,
      "team1" : "Portugal",
      "team2" : "Spain",
      "stadium" : "FIS",
      "class" : "group-b fis portugal spain"
   },
   {
      "class" : "group-c kaz france australia",
      "team2" : "Australia",
      "stadium" : "KAZ",
      "result" : null,
      "description" : "Group C",
      "group" : "Group C",
      "team1" : "France",
      "date" : "2018-06-16T10:00:00"
   },
   {
      "class" : "group-d otk argentina iceland",
      "stadium" : "OTK",
      "team2" : "Iceland",
      "team1" : "Argentina",
      "result" : null,
      "description" : "Group D",
      "group" : "Group D",
      "date" : "2018-06-16T13:00:00"
   },
   {
      "team1" : "Peru",
      "result" : null,
      "description" : "Group C",
      "group" : "Group C",
      "date" : "2018-06-16T16:00:00",
      "class" : "group-c mor peru denmark",
      "stadium" : "MOR",
      "team2" : "Denmark"
   },
   {
      "class" : "group-d kal croatia nigeria",
      "stadium" : "KAL",
      "team2" : "Nigeria",
      "team1" : "Croatia",
      "result" : null,
      "description" : "Group D",
      "group" : "Group D",
      "date" : "2018-06-16T19:00:00"
   },
   {
      "team1" : "Costa Rica",
      "result" : null,
      "group" : "Group E",
      "description" : "Group E",
      "date" : "2018-06-17T12:00:00",
      "class" : "group-e cos costa-rica serbia",
      "stadium" : "COS",
      "team2" : "Serbia"
   },
   {
      "date" : "2018-06-17T15:00:00",
      "team1" : "Germany",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "LUZ",
      "team2" : "Mexico",
      "class" : "group-f luz germany mexico"
   },
   {
      "class" : "group-e ros brazil switzerland",
      "team2" : "Switzerland",
      "stadium" : "ROS",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil",
      "date" : "2018-06-17T18:00:00"
   },
   {
      "class" : "group-f niz sweden korea-republic",
      "team2" : "Korea Republic",
      "stadium" : "NIZ",
      "result" : null,
      "group" : "Group F",
      "description" : "Group F",
      "team1" : "Sweden",
      "date" : "2018-06-18T12:00:00"
   },
   {
      "team2" : "Panama",
      "stadium" : "FIS",
      "class" : "group-g fis belgium panama",
      "date" : "2018-06-18T15:00:00",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "team1" : "Belgium"
   },
   {
      "team2" : "England",
      "stadium" : "VOL",
      "class" : "group-g vol tunisia england",
      "date" : "2018-06-18T18:00:00",
      "group" : "Group G",
      "description" : "Group G",
      "result" : null,
      "team1" : "Tunisia"
   },
   {
      "date" : "2018-06-19T12:00:00",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "team1" : "Colombia",
      "team2" : "Japan",
      "stadium" : "MOR",
      "class" : "group-h mor colombia japan"
   },
   {
      "team1" : "Poland",
      "group" : "Group H",
      "description" : "Group H",
      "result" : null,
      "date" : "2018-06-19T15:00:00",
      "class" : "group-h otk poland senegal",
      "stadium" : "OTK",
      "team2" : "Senegal"
   },
   {
      "group" : "Group A",
      "description" : "Group A",
      "result" : null,
      "team1" : "Russia",
      "date" : "2018-06-19T18:00:00",
      "class" : "group-a kre russia egypt",
      "team2" : "Egypt",
      "stadium" : "KRE"
   },
   {
      "stadium" : "LUZ",
      "team2" : "Morocco",
      "class" : "group-b luz portugal morocco",
      "date" : "2018-06-20T12:00:00",
      "team1" : "Portugal",
      "result" : null,
      "group" : "Group B",
      "description" : "Group B"
   },
   {
      "result" : null,
      "description" : "Group A",
      "group" : "Group A",
      "team1" : "Uruguay",
      "date" : "2018-06-20T15:00:00",
      "class" : "group-a ros uruguay saudi-arabia",
      "team2" : "Saudi Arabia",
      "stadium" : "ROS"
   },
   {
      "team2" : "Spain",
      "stadium" : "KAZ",
      "class" : "group-b kaz iran spain",
      "date" : "2018-06-20T18:00:00",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "team1" : "Iran"
   },
   {
      "result" : null,
      "group" : "Group C",
      "description" : "Group C",
      "team1" : "Denmark",
      "date" : "2018-06-21T12:00:00",
      "class" : "group-c cos denmark australia",
      "team2" : "Australia",
      "stadium" : "COS"
   },
   {
      "date" : "2018-06-21T15:00:00",
      "team1" : "France",
      "result" : null,
      "group" : "Group C",
      "description" : "Group C",
      "stadium" : "CEN",
      "team2" : "Peru",
      "class" : "group-c cen france peru"
   },
   {
      "date" : "2018-06-21T18:00:00",
      "team1" : "Argentina",
      "result" : null,
      "description" : "Group D",
      "group" : "Group D",
      "stadium" : "NIZ",
      "team2" : "Croatia",
      "class" : "group-d niz argentina croatia"
   },
   {
      "group" : "Group E",
      "description" : "Group E",
      "result" : null,
      "team1" : "Brazil",
      "date" : "2018-06-22T12:00:00",
      "class" : "group-e kre brazil costa-rica",
      "team2" : "Costa Rica",
      "stadium" : "KRE"
   },
   {
      "date" : "2018-06-22T15:00:00",
      "group" : "Group D",
      "description" : "Group D",
      "result" : null,
      "team1" : "Nigeria",
      "team2" : "Iceland",
      "stadium" : "VOL",
      "class" : "group-d vol nigeria iceland"
   },
   {
      "stadium" : "KAL",
      "team2" : "Switzerland",
      "class" : "group-e kal serbia switzerland",
      "date" : "2018-06-22T18:00:00",
      "team1" : "Serbia",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null
   },
   {
      "class" : "group-g otk belgium tunisia",
      "team2" : "Tunisia",
      "stadium" : "OTK",
      "result" : null,
      "description" : "Group G",
      "group" : "Group G",
      "team1" : "Belgium",
      "date" : "2018-06-23T12:00:00"
   },
   {
      "result" : null,
      "description" : "Group F",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "date" : "2018-06-23T15:00:00",
      "class" : "group-f ros korea-republic mexico",
      "team2" : "Mexico",
      "stadium" : "ROS"
   },
   {
      "date" : "2018-06-23T18:00:00",
      "group" : "Group F",
      "description" : "Group F",
      "result" : null,
      "team1" : "Germany",
      "team2" : "Sweden",
      "stadium" : "FIS",
      "class" : "group-f fis germany sweden"
   },
   {
      "date" : "2018-06-24T12:00:00",
      "team1" : "England",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "NIZ",
      "team2" : "Panama",
      "class" : "group-g niz england panama"
   },
   {
      "date" : "2018-06-24T15:00:00",
      "result" : null,
      "description" : "Group H",
      "group" : "Group H",
      "team1" : "Japan",
      "team2" : "Senegal",
      "stadium" : "CEN",
      "class" : "group-h cen japan senegal"
   },
   {
      "stadium" : "KAZ",
      "team2" : "Colombia",
      "class" : "group-h kaz poland colombia",
      "date" : "2018-06-24T18:00:00",
      "team1" : "Poland",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null
   },
   {
      "class" : "group-a cos uruguay russia",
      "team2" : "Russia",
      "stadium" : "COS",
      "group" : "Group A",
      "description" : "Group A",
      "result" : null,
      "team1" : "Uruguay",
      "date" : "2018-06-25T14:00:00"
   },
   {
      "date" : "2018-06-25T14:00:00",
      "result" : null,
      "group" : "Group A",
      "description" : "Group A",
      "team1" : "Saudi Arabia",
      "team2" : "Egypt",
      "stadium" : "VOL",
      "class" : "group-a vol saudi-arabia egypt"
   },
   {
      "class" : "group-b mor iran portugal",
      "team2" : "Portugal",
      "stadium" : "MOR",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "team1" : "Iran",
      "date" : "2018-06-25T18:00:00"
   },
   {
      "result" : null,
      "description" : "Group B",
      "group" : "Group B",
      "team1" : "Spain",
      "date" : "2018-06-25T18:00:00",
      "class" : "group-b kal spain morocco",
      "team2" : "Morocco",
      "stadium" : "KAL"
   },
   {
      "class" : "group-c luz denmark france",
      "team2" : "France",
      "stadium" : "LUZ",
      "result" : null,
      "description" : "Group C",
      "group" : "Group C",
      "team1" : "Denmark",
      "date" : "2018-06-26T14:00:00"
   },
   {
      "team1" : "Australia",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "date" : "2018-06-26T14:00:00",
      "class" : "group-c fis australia peru",
      "stadium" : "FIS",
      "team2" : "Peru"
   },
   {
      "team2" : "Argentina",
      "stadium" : "KRE",
      "class" : "group-d kre nigeria argentina",
      "date" : "2018-06-26T18:00:00",
      "result" : null,
      "description" : "Group D",
      "group" : "Group D",
      "team1" : "Nigeria"
   },
   {
      "stadium" : "ROS",
      "team2" : "Croatia",
      "class" : "group-d ros iceland croatia",
      "date" : "2018-06-26T18:00:00",
      "team1" : "Iceland",
      "result" : null,
      "description" : "Group D",
      "group" : "Group D"
   },
   {
      "team2" : "Sweden",
      "stadium" : "CEN",
      "class" : "group-f cen mexico sweden",
      "date" : "2018-06-27T14:00:00",
      "group" : "Group F",
      "description" : "Group F",
      "result" : null,
      "team1" : "Mexico"
   },
   {
      "result" : null,
      "group" : "Group F",
      "description" : "Group F",
      "team1" : "Korea Republic",
      "date" : "2018-06-27T14:00:00",
      "class" : "group-f kaz korea-republic germany",
      "team2" : "Germany",
      "stadium" : "KAZ"
   },
   {
      "class" : "group-e otk serbia brazil",
      "team2" : "Brazil",
      "stadium" : "OTK",
      "group" : "Group E",
      "description" : "Group E",
      "result" : null,
      "team1" : "Serbia",
      "date" : "2018-06-27T18:00:00"
   },
   {
      "team2" : "Costa Rica",
      "stadium" : "NIZ",
      "class" : "group-e niz switzerland costa-rica",
      "date" : "2018-06-27T18:00:00",
      "group" : "Group E",
      "description" : "Group E",
      "result" : null,
      "team1" : "Switzerland"
   },
   {
      "team2" : "Poland",
      "stadium" : "VOL",
      "class" : "group-h vol japan poland",
      "date" : "2018-06-28T14:00:00",
      "result" : null,
      "group" : "Group H",
      "description" : "Group H",
      "team1" : "Japan"
   },
   {
      "team1" : "Senegal",
      "result" : null,
      "group" : "Group H",
      "description" : "Group H",
      "date" : "2018-06-28T14:00:00",
      "class" : "group-h cos senegal colombia",
      "stadium" : "COS",
      "team2" : "Colombia"
   },
   {
      "date" : "2018-06-28T18:00:00",
      "result" : null,
      "description" : "Group G",
      "group" : "Group G",
      "team1" : "Panama",
      "team2" : "Tunisia",
      "stadium" : "MOR",
      "class" : "group-g mor panama tunisia"
   },
   {
      "class" : "group-g kal england belgium",
      "stadium" : "KAL",
      "team2" : "Belgium",
      "team1" : "England",
      "result" : null,
      "group" : "Group G",
      "description" : "Group G",
      "date" : "2018-06-28T18:00:00"
   },
   {
      "class" : "round-of-16 fis",
      "stadium" : "FIS",
      "team2" : "Runner-up Group B\t",
      "team1" : "Winner Group A",
      "group" : null,
      "description" : "Round of 16",
      "result" : null,
      "date" : "2018-06-30T18:00:00"
   },
   {
      "date" : "2018-06-30T18:00:00",
      "team1" : "Winner Group C",
      "group" : null,
      "description" : "Round of 16",
      "result" : null,
      "stadium" : "KAZ",
      "team2" : "Runner-up Group D",
      "class" : "round-of-16 kaz"
   },
   {
      "group" : null,
      "description" : "Round of 16",
      "result" : null,
      "team1" : "Winner Group B",
      "date" : "2018-07-01T14:00:00",
      "class" : "round-of-16 luz",
      "team2" : "Runner-up Group A\t",
      "stadium" : "LUZ"
   },
   {
      "class" : "round-of-16 niz",
      "stadium" : "NIZ",
      "team2" : "Runner-up Group C",
      "team1" : "Winner Group D",
      "group" : null,
      "description" : "Round of 16",
      "result" : null,
      "date" : "2018-07-01T18:00:00"
   },
   {
      "team2" : "Runner-up Group F",
      "stadium" : "COS",
      "class" : "round-of-16 cos",
      "date" : "2018-07-02T14:00:00",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "team1" : "Winner Group E"
   },
   {
      "class" : "round-of-16 ros",
      "team2" : "Runner-up Group H",
      "stadium" : "ROS",
      "result" : null,
      "description" : "Round of 16",
      "group" : null,
      "team1" : "Winner Group G",
      "date" : "2018-07-02T18:00:00"
   },
   {
      "stadium" : "KRE",
      "team2" : "Runner-up Group E",
      "class" : "round-of-16 kre",
      "date" : "2018-07-03T14:00:00",
      "team1" : "Winner Group F",
      "result" : null,
      "description" : "Round of 16",
      "group" : null
   },
   {
      "date" : "2018-07-03T18:00:00",
      "team1" : "Winner Group H",
      "result" : null,
      "group" : null,
      "description" : "Round of 16",
      "stadium" : "OTK",
      "team2" : "Runner-up Group G",
      "class" : "round-of-16 otk"
   },
   {
      "team1" : "To be announced",
      "result" : null,
      "description" : "Quarter Finals",
      "group" : null,
      "date" : "2018-07-06T14:00:00",
      "class" : "quarter-finals niz",
      "stadium" : "NIZ",
      "team2" : "To be announced"
   },
   {
      "team2" : "To be announced",
      "stadium" : "KAZ",
      "class" : "quarter-finals kaz",
      "date" : "2018-07-06T18:00:00",
      "result" : null,
      "group" : null,
      "description" : "Quarter Finals",
      "team1" : "To be announced"
   },
   {
      "class" : "quarter-finals cos",
      "team2" : "To be announced",
      "stadium" : "COS",
      "result" : null,
      "description" : "Quarter Finals",
      "group" : null,
      "team1" : "To be announced",
      "date" : "2018-07-07T14:00:00"
   },
   {
      "stadium" : "FIS",
      "team2" : "To be announced",
      "class" : "quarter-finals fis",
      "date" : "2018-07-07T18:00:00",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "description" : "Quarter Finals"
   },
   {
      "class" : "semi-finals kre",
      "team2" : "To be announced",
      "stadium" : "KRE",
      "group" : null,
      "description" : "Semi Finals",
      "result" : null,
      "team1" : "To be announced",
      "date" : "2018-07-10T18:00:00"
   },
   {
      "date" : "2018-07-11T18:00:00",
      "group" : null,
      "description" : "Semi Finals",
      "result" : null,
      "team1" : "To be announced",
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "class" : "semi-finals luz"
   },
   {
      "stadium" : "KRE",
      "team2" : "To be announced",
      "class" : "finals kre",
      "date" : "2018-07-14T14:00:00",
      "team1" : "To be announced",
      "group" : null,
      "description" : "Finals",
      "result" : null
   },
   {
      "team2" : "To be announced",
      "stadium" : "LUZ",
      "class" : "finals luz",
      "date" : "2018-07-15T15:00:00",
      "description" : "Finals",
      "group" : null,
      "result" : null,
      "team1" : "To be announced"
   }
]
;

var teams = [
   {
      "Argentina" : "argentina"
   },
   {
      "Australia" : "australia"
   },
   {
      "Belgium" : "belgium"
   },
   {
      "Brazil" : "brazil"
   },
   {
      "Colombia" : "colombia"
   },
   {
      "Costa Rica" : "costa-rica"
   },
   {
      "Croatia" : "croatia"
   },
   {
      "Denmark" : "denmark"
   },
   {
      "Egypt" : "egypt"
   },
   {
      "England" : "england"
   },
   {
      "France" : "france"
   },
   {
      "Germany" : "germany"
   },
   {
      "Iceland" : "iceland"
   },
   {
      "Iran" : "iran"
   },
   {
      "Japan" : "japan"
   },
   {
      "Korea Republic" : "korea-republic"
   },
   {
      "Mexico" : "mexico"
   },
   {
      "Morocco" : "morocco"
   },
   {
      "Nigeria" : "nigeria"
   },
   {
      "Panama" : "panama"
   },
   {
      "Peru" : "peru"
   },
   {
      "Poland" : "poland"
   },
   {
      "Portugal" : "portugal"
   },
   {
      "Russia" : "russia"
   },
   {
      "Saudi Arabia" : "saudi-arabia"
   },
   {
      "Senegal" : "senegal"
   },
   {
      "Serbia" : "serbia"
   },
   {
      "Spain" : "spain"
   },
   {
      "Sweden" : "sweden"
   },
   {
      "Switzerland" : "switzerland"
   },
   {
      "Tunisia" : "tunisia"
   },
   {
      "Uruguay" : "uruguay"
   }
]
;

