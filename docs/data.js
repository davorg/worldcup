var stadiums = {
   "LUZ" : {
      "name" : "Luzhniki Stadium",
      "code" : "LUZ",
      "timezone" : "3",
      "city" : "Moscow"
   },
   "FIS" : {
      "timezone" : "4",
      "city" : "Sochi",
      "name" : "Fisht Olympic Stadium",
      "code" : "FIS"
   },
   "COS" : {
      "name" : "Cosmos Arena",
      "code" : "COS",
      "timezone" : "4",
      "city" : "Samara"
   },
   "OTK" : {
      "code" : "OTK",
      "name" : "Otkritie Arena",
      "city" : "Moscow",
      "timezone" : "3"
   },
   "MOR" : {
      "code" : "MOR",
      "name" : "Mordovia Arena",
      "city" : "Saransk",
      "timezone" : "3"
   },
   "VOL" : {
      "code" : "VOL",
      "name" : "Volgograd Arena",
      "city" : "Volgograd",
      "timezone" : "3"
   },
   "KAL" : {
      "code" : "KAL",
      "name" : "Kaliningrad Stadium",
      "city" : "Kaliningrad",
      "timezone" : "2"
   },
   "ROS" : {
      "timezone" : "3",
      "city" : "Rostov-on-Don",
      "name" : "Rostov Arena",
      "code" : "ROS"
   },
   "CEN" : {
      "timezone" : "5",
      "city" : "Yekaterinburg",
      "name" : "Central Stadium",
      "code" : "CEN"
   },
   "KAZ" : {
      "code" : "KAZ",
      "name" : "Kazan Arena",
      "city" : "Kazan",
      "timezone" : "3"
   },
   "KRE" : {
      "timezone" : "3",
      "city" : "Saint Petersburg",
      "name" : "Krestovsky Stadium",
      "code" : "KRE"
   },
   "NIZ" : {
      "code" : "NIZ",
      "name" : "Nizhny Novgorod Stadium",
      "city" : "Nizhny Novgorod",
      "timezone" : "3"
   }
}
;

var games = [
   {
      "team1" : "Russia",
      "result" : null,
      "group" : "Group A",
      "date" : "14/06/2018 15:00",
      "stadium" : "LUZ",
      "round" : "1",
      "team2" : "Saudi Arabia"
   },
   {
      "team2" : "Uruguay",
      "date" : "15/06/2018 12:00",
      "stadium" : "CEN",
      "round" : "1",
      "group" : "Group A",
      "team1" : "Egypt",
      "result" : null
   },
   {
      "group" : "Group B",
      "result" : null,
      "team1" : "Morocco",
      "stadium" : "KRE",
      "round" : "1",
      "date" : "15/06/2018 15:00",
      "team2" : "Iran"
   },
   {
      "team2" : "Spain",
      "result" : null,
      "team1" : "Portugal",
      "group" : "Group B",
      "round" : "1",
      "stadium" : "FIS",
      "date" : "15/06/2018 18:00"
   },
   {
      "stadium" : "KAZ",
      "round" : "1",
      "date" : "16/06/2018 10:00",
      "group" : "Group C",
      "result" : null,
      "team1" : "France",
      "team2" : "Australia"
   },
   {
      "group" : "Group D",
      "result" : null,
      "team1" : "Argentina",
      "round" : "1",
      "stadium" : "OTK",
      "date" : "16/06/2018 13:00",
      "team2" : "Iceland"
   },
   {
      "group" : "Group C",
      "result" : null,
      "team1" : "Peru",
      "round" : "1",
      "stadium" : "MOR",
      "date" : "16/06/2018 16:00",
      "team2" : "Denmark"
   },
   {
      "team2" : "Nigeria",
      "round" : "1",
      "stadium" : "KAL",
      "date" : "16/06/2018 19:00",
      "team1" : "Croatia",
      "result" : null,
      "group" : "Group D"
   },
   {
      "team2" : "Serbia",
      "round" : "1",
      "stadium" : "COS",
      "date" : "17/06/2018 12:00",
      "result" : null,
      "team1" : "Costa Rica",
      "group" : "Group E"
   },
   {
      "team2" : "Mexico",
      "date" : "17/06/2018 15:00",
      "stadium" : "LUZ",
      "round" : "1",
      "group" : "Group F",
      "team1" : "Germany",
      "result" : null
   },
   {
      "team2" : "Switzerland",
      "round" : "1",
      "stadium" : "ROS",
      "date" : "17/06/2018 18:00",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil"
   },
   {
      "team2" : "Korea Republic",
      "date" : "18/06/2018 12:00",
      "stadium" : "NIZ",
      "round" : "1",
      "team1" : "Sweden",
      "result" : null,
      "group" : "Group F"
   },
   {
      "date" : "18/06/2018 15:00",
      "stadium" : "FIS",
      "round" : "1",
      "group" : "Group G",
      "team1" : "Belgium",
      "result" : null,
      "team2" : "Panama"
   },
   {
      "team2" : "England",
      "result" : null,
      "team1" : "Tunisia",
      "group" : "Group G",
      "stadium" : "VOL",
      "round" : "1",
      "date" : "18/06/2018 18:00"
   },
   {
      "date" : "19/06/2018 12:00",
      "stadium" : "MOR",
      "round" : "1",
      "team1" : "Colombia",
      "result" : null,
      "group" : "Group H",
      "team2" : "Japan"
   },
   {
      "group" : "Group H",
      "team1" : "Poland",
      "result" : null,
      "round" : "1",
      "stadium" : "OTK",
      "date" : "19/06/2018 15:00",
      "team2" : "Senegal"
   },
   {
      "team2" : "Egypt",
      "round" : "2",
      "stadium" : "KRE",
      "date" : "19/06/2018 18:00",
      "group" : "Group A",
      "result" : null,
      "team1" : "Russia"
   },
   {
      "team1" : "Portugal",
      "result" : null,
      "group" : "Group B",
      "stadium" : "LUZ",
      "round" : "2",
      "date" : "20/06/2018 12:00",
      "team2" : "Morocco"
   },
   {
      "team2" : "Saudi Arabia",
      "date" : "20/06/2018 15:00",
      "stadium" : "ROS",
      "round" : "2",
      "group" : "Group A",
      "result" : null,
      "team1" : "Uruguay"
   },
   {
      "team2" : "Spain",
      "round" : "2",
      "stadium" : "KAZ",
      "date" : "20/06/2018 18:00",
      "group" : "Group B",
      "result" : null,
      "team1" : "Iran"
   },
   {
      "team2" : "Australia",
      "team1" : "Denmark",
      "result" : null,
      "group" : "Group C",
      "round" : "2",
      "stadium" : "COS",
      "date" : "21/06/2018 12:00"
   },
   {
      "team2" : "Peru",
      "group" : "Group C",
      "team1" : "France",
      "result" : null,
      "stadium" : "CEN",
      "round" : "2",
      "date" : "21/06/2018 15:00"
   },
   {
      "team2" : "Croatia",
      "group" : "Group D",
      "team1" : "Argentina",
      "result" : null,
      "stadium" : "NIZ",
      "round" : "2",
      "date" : "21/06/2018 18:00"
   },
   {
      "team2" : "Costa Rica",
      "group" : "Group E",
      "result" : null,
      "team1" : "Brazil",
      "round" : "2",
      "stadium" : "KRE",
      "date" : "22/06/2018 12:00"
   },
   {
      "date" : "22/06/2018 15:00",
      "stadium" : "VOL",
      "round" : "2",
      "group" : "Group D",
      "team1" : "Nigeria",
      "result" : null,
      "team2" : "Iceland"
   },
   {
      "team2" : "Switzerland",
      "date" : "22/06/2018 18:00",
      "stadium" : "KAL",
      "round" : "2",
      "group" : "Group E",
      "result" : null,
      "team1" : "Serbia"
   },
   {
      "team2" : "Tunisia",
      "date" : "23/06/2018 12:00",
      "stadium" : "OTK",
      "round" : "2",
      "team1" : "Belgium",
      "result" : null,
      "group" : "Group G"
   },
   {
      "group" : "Group F",
      "team1" : "Korea Republic",
      "result" : null,
      "date" : "23/06/2018 15:00",
      "stadium" : "ROS",
      "round" : "2",
      "team2" : "Mexico"
   },
   {
      "team2" : "Sweden",
      "team1" : "Germany",
      "result" : null,
      "group" : "Group F",
      "date" : "23/06/2018 18:00",
      "stadium" : "FIS",
      "round" : "2"
   },
   {
      "round" : "2",
      "stadium" : "NIZ",
      "date" : "24/06/2018 12:00",
      "team1" : "England",
      "result" : null,
      "group" : "Group G",
      "team2" : "Panama"
   },
   {
      "team1" : "Japan",
      "result" : null,
      "group" : "Group H",
      "stadium" : "CEN",
      "date" : "24/06/2018 15:00",
      "round" : "2",
      "team2" : "Senegal"
   },
   {
      "team2" : "Colombia",
      "team1" : "Poland",
      "result" : null,
      "group" : "Group H",
      "round" : "2",
      "stadium" : "KAZ",
      "date" : "24/06/2018 18:00"
   },
   {
      "stadium" : "COS",
      "date" : "25/06/2018 14:00",
      "round" : "3",
      "team1" : "Uruguay",
      "result" : null,
      "group" : "Group A",
      "team2" : "Russia"
   },
   {
      "stadium" : "VOL",
      "round" : "3",
      "date" : "25/06/2018 14:00",
      "group" : "Group A",
      "team1" : "Saudi Arabia",
      "result" : null,
      "team2" : "Egypt"
   },
   {
      "result" : null,
      "team1" : "Iran",
      "group" : "Group B",
      "round" : "3",
      "stadium" : "MOR",
      "date" : "25/06/2018 18:00",
      "team2" : "Portugal"
   },
   {
      "team1" : "Spain",
      "result" : null,
      "group" : "Group B",
      "stadium" : "KAL",
      "date" : "25/06/2018 18:00",
      "round" : "3",
      "team2" : "Morocco"
   },
   {
      "team1" : "Denmark",
      "result" : null,
      "group" : "Group C",
      "round" : "3",
      "stadium" : "LUZ",
      "date" : "26/06/2018 14:00",
      "team2" : "France"
   },
   {
      "team2" : "Peru",
      "group" : "Group C",
      "team1" : "Australia",
      "result" : null,
      "round" : "3",
      "stadium" : "FIS",
      "date" : "26/06/2018 14:00"
   },
   {
      "team2" : "Argentina",
      "date" : "26/06/2018 18:00",
      "stadium" : "KRE",
      "round" : "3",
      "group" : "Group D",
      "result" : null,
      "team1" : "Nigeria"
   },
   {
      "team2" : "Croatia",
      "stadium" : "ROS",
      "round" : "3",
      "date" : "26/06/2018 18:00",
      "team1" : "Iceland",
      "result" : null,
      "group" : "Group D"
   },
   {
      "group" : "Group F",
      "team1" : "Mexico",
      "result" : null,
      "date" : "27/06/2018 14:00",
      "stadium" : "CEN",
      "round" : "3",
      "team2" : "Sweden"
   },
   {
      "date" : "27/06/2018 14:00",
      "stadium" : "KAZ",
      "round" : "3",
      "group" : "Group F",
      "team1" : "Korea Republic",
      "result" : null,
      "team2" : "Germany"
   },
   {
      "team2" : "Brazil",
      "round" : "3",
      "stadium" : "OTK",
      "date" : "27/06/2018 18:00",
      "group" : "Group E",
      "result" : null,
      "team1" : "Serbia"
   },
   {
      "team2" : "Costa Rica",
      "round" : "3",
      "stadium" : "NIZ",
      "date" : "27/06/2018 18:00",
      "group" : "Group E",
      "result" : null,
      "team1" : "Switzerland"
   },
   {
      "team2" : "Poland",
      "round" : "3",
      "stadium" : "VOL",
      "date" : "28/06/2018 14:00",
      "group" : "Group H",
      "team1" : "Japan",
      "result" : null
   },
   {
      "team2" : "Colombia",
      "stadium" : "COS",
      "date" : "28/06/2018 14:00",
      "round" : "3",
      "group" : "Group H",
      "team1" : "Senegal",
      "result" : null
   },
   {
      "team1" : "Panama",
      "result" : null,
      "group" : "Group G",
      "stadium" : "MOR",
      "round" : "3",
      "date" : "28/06/2018 18:00",
      "team2" : "Tunisia"
   },
   {
      "team2" : "Belgium",
      "group" : "Group G",
      "team1" : "England",
      "result" : null,
      "stadium" : "KAL",
      "date" : "28/06/2018 18:00",
      "round" : "3"
   },
   {
      "team2" : "Runner-up Group B\t",
      "stadium" : "FIS",
      "round" : "Round of 16",
      "date" : "30/06/2018 18:00",
      "group" : null,
      "team1" : "Winner Group A",
      "result" : null
   },
   {
      "team1" : "Winner Group C",
      "result" : null,
      "group" : null,
      "stadium" : "KAZ",
      "round" : "Round of 16",
      "date" : "30/06/2018 18:00",
      "team2" : "Runner-up Group D"
   },
   {
      "team1" : "Winner Group B",
      "result" : null,
      "group" : null,
      "round" : "Round of 16",
      "stadium" : "LUZ",
      "date" : "01/07/2018 14:00",
      "team2" : "Runner-up Group A\t"
   },
   {
      "team2" : "Runner-up Group C",
      "stadium" : "NIZ",
      "round" : "Round of 16",
      "date" : "01/07/2018 18:00",
      "group" : null,
      "result" : null,
      "team1" : "Winner Group D"
   },
   {
      "team2" : "Runner-up Group F",
      "group" : null,
      "team1" : "Winner Group E",
      "result" : null,
      "round" : "Round of 16",
      "stadium" : "COS",
      "date" : "02/07/2018 14:00"
   },
   {
      "team2" : "Runner-up Group H",
      "stadium" : "ROS",
      "round" : "Round of 16",
      "date" : "02/07/2018 18:00",
      "result" : null,
      "team1" : "Winner Group G",
      "group" : null
   },
   {
      "round" : "Round of 16",
      "stadium" : "KRE",
      "date" : "03/07/2018 14:00",
      "result" : null,
      "team1" : "Winner Group F",
      "group" : null,
      "team2" : "Runner-up Group E"
   },
   {
      "round" : "Round of 16",
      "stadium" : "OTK",
      "date" : "03/07/2018 18:00",
      "team1" : "Winner Group H",
      "result" : null,
      "group" : null,
      "team2" : "Runner-up Group G"
   },
   {
      "team2" : "To be announced",
      "stadium" : "NIZ",
      "date" : "06/07/2018 14:00",
      "round" : "Quarter Finals",
      "result" : null,
      "team1" : "To be announced",
      "group" : null
   },
   {
      "round" : "Quarter Finals",
      "stadium" : "KAZ",
      "date" : "06/07/2018 18:00",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "team2" : "To be announced"
   },
   {
      "round" : "Quarter Finals",
      "stadium" : "COS",
      "date" : "07/07/2018 14:00",
      "group" : null,
      "team1" : "To be announced",
      "result" : null,
      "team2" : "To be announced"
   },
   {
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "stadium" : "FIS",
      "round" : "Quarter Finals",
      "date" : "07/07/2018 18:00",
      "team2" : "To be announced"
   },
   {
      "team2" : "To be announced",
      "date" : "10/07/2018 18:00",
      "stadium" : "KRE",
      "round" : "Semi Finals",
      "result" : null,
      "team1" : "To be announced",
      "group" : null
   },
   {
      "stadium" : "LUZ",
      "round" : "Semi Finals",
      "date" : "11/07/2018 18:00",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "team2" : "To be announced"
   },
   {
      "stadium" : "KRE",
      "round" : "Finals",
      "date" : "14/07/2018 14:00",
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "team2" : "To be announced"
   },
   {
      "team1" : "To be announced",
      "result" : null,
      "group" : null,
      "round" : "Finals",
      "stadium" : "LUZ",
      "date" : "15/07/2018 15:00",
      "team2" : "To be announced"
   }
]
;

