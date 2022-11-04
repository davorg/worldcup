var stadiums = {
   "ECS" : {
      "city" : "Al Rayyan",
      "name" : "Education City Stadium",
      "utcoffset" : "3",
      "timezone" : "Asia/Qatar",
      "code" : "ECS"
   },
   "ABS" : {
      "code" : "ABS",
      "city" : "Al Khor",
      "name" : "Al Bait Stadium",
      "utcoffset" : "3",
      "timezone" : "Asia/Qatar"
   },
   "AJS" : {
      "name" : "Al Janoub Stadium",
      "city" : "Al Wakrah",
      "timezone" : "Asia/Qatar",
      "utcoffset" : "3",
      "code" : "AJS"
   },
   "AAS" : {
      "timezone" : "Asia/Qatar",
      "utcoffset" : "3",
      "name" : "Ahmad bin Ali Stadium",
      "city" : "Al Rayyan",
      "code" : "AAS"
   },
   "974" : {
      "utcoffset" : "3",
      "timezone" : "Asia/Qatar",
      "city" : "Doha",
      "name" : "Stadium 974",
      "code" : "974"
   },
   "LIS" : {
      "code" : "LIS",
      "city" : "Lusail",
      "name" : "Lusail Iconic Stadium",
      "timezone" : "Asia/Qatar",
      "utcoffset" : "3"
   },
   "KIS" : {
      "code" : "KIS",
      "timezone" : "Asia/Qatar",
      "utcoffset" : "3",
      "name" : "Khalifa International Stadium",
      "city" : "Al Rayyan"
   },
   "ATS" : {
      "city" : "Doha",
      "name" : "Al Thumama Stadium",
      "utcoffset" : "3",
      "timezone" : "Asia/Qatar",
      "code" : "ATS"
   }
}
;

var games = [
   {
      "team2" : "Ecuador",
      "description" : "Group A",
      "date" : "2022-11-20T16:00:00",
      "team1" : "Qatar",
      "group" : "Group A",
      "stadium" : "ABS",
      "class" : "round-group-a stadium-abs team-qatar team-ecuador",
      "result" : null
   },
   {
      "description" : "Group B",
      "date" : "2022-11-21T13:00:00",
      "team1" : "England",
      "group" : "Group B",
      "team2" : "Iran",
      "result" : null,
      "stadium" : "KIS",
      "class" : "round-group-b stadium-kis team-england team-iran"
   },
   {
      "team2" : "Netherlands",
      "description" : "Group A",
      "date" : "2022-11-21T16:00:00",
      "group" : "Group A",
      "team1" : "Senegal",
      "stadium" : "ATS",
      "class" : "round-group-a stadium-ats team-senegal team-netherlands",
      "result" : null
   },
   {
      "result" : null,
      "class" : "round-group-b stadium-aas team-usa team-wales",
      "stadium" : "AAS",
      "date" : "2022-11-21T19:00:00",
      "group" : "Group B",
      "team1" : "USA",
      "description" : "Group B",
      "team2" : "Wales"
   },
   {
      "team1" : "Argentina",
      "group" : "Group C",
      "date" : "2022-11-22T10:00:00",
      "description" : "Group C",
      "team2" : "Saudi Arabia",
      "result" : null,
      "class" : "round-group-c stadium-lis team-argentina team-saudi-arabia",
      "stadium" : "LIS"
   },
   {
      "team2" : "Tunisia",
      "description" : "Group D",
      "date" : "2022-11-22T13:00:00",
      "team1" : "Denmark",
      "group" : "Group D",
      "stadium" : "ECS",
      "class" : "round-group-d stadium-ecs team-denmark team-tunisia",
      "result" : null
   },
   {
      "stadium" : "974",
      "class" : "round-group-c stadium-974 team-mexico team-poland",
      "result" : null,
      "team2" : "Poland",
      "description" : "Group C",
      "date" : "2022-11-22T16:00:00",
      "group" : "Group C",
      "team1" : "Mexico"
   },
   {
      "team2" : "Australia",
      "group" : "Group D",
      "team1" : "France",
      "date" : "2022-11-22T19:00:00",
      "description" : "Group D",
      "class" : "round-group-d stadium-ajs team-france team-australia",
      "stadium" : "AJS",
      "result" : null
   },
   {
      "team2" : "Croatia",
      "date" : "2022-11-23T10:00:00",
      "team1" : "Morocco",
      "group" : "Group F",
      "description" : "Group F",
      "class" : "round-group-f stadium-abs team-morocco team-croatia",
      "stadium" : "ABS",
      "result" : null
   },
   {
      "description" : "Group E",
      "group" : "Group E",
      "team1" : "Germany",
      "date" : "2022-11-23T13:00:00",
      "team2" : "Japan",
      "result" : null,
      "stadium" : "KIS",
      "class" : "round-group-e stadium-kis team-germany team-japan"
   },
   {
      "team1" : "Spain",
      "group" : "Group E",
      "date" : "2022-11-23T16:00:00",
      "description" : "Group E",
      "team2" : "Costa Rica",
      "result" : null,
      "class" : "round-group-e stadium-ats team-spain team-costa-rica",
      "stadium" : "ATS"
   },
   {
      "result" : null,
      "stadium" : "AAS",
      "class" : "round-group-f stadium-aas team-belgium team-canada",
      "description" : "Group F",
      "team1" : "Belgium",
      "group" : "Group F",
      "date" : "2022-11-23T19:00:00",
      "team2" : "Canada"
   },
   {
      "stadium" : "AJS",
      "class" : "round-group-g stadium-ajs team-switzerland team-cameroon",
      "result" : null,
      "team2" : "Cameroon",
      "description" : "Group G",
      "team1" : "Switzerland",
      "group" : "Group G",
      "date" : "2022-11-24T10:00:00"
   },
   {
      "result" : null,
      "class" : "round-group-h stadium-ecs team-uruguay team-korea-republic",
      "stadium" : "ECS",
      "date" : "2022-11-24T13:00:00",
      "group" : "Group H",
      "team1" : "Uruguay",
      "description" : "Group H",
      "team2" : "Korea Republic"
   },
   {
      "class" : "round-group-h stadium-974 team-portugal team-ghana",
      "stadium" : "974",
      "result" : null,
      "team2" : "Ghana",
      "date" : "2022-11-24T16:00:00",
      "team1" : "Portugal",
      "group" : "Group H",
      "description" : "Group H"
   },
   {
      "team1" : "Brazil",
      "group" : "Group G",
      "date" : "2022-11-24T19:00:00",
      "description" : "Group G",
      "team2" : "Serbia",
      "result" : null,
      "class" : "round-group-g stadium-lis team-brazil team-serbia",
      "stadium" : "LIS"
   },
   {
      "team2" : "Iran",
      "description" : "Group B",
      "date" : "2022-11-25T10:00:00",
      "group" : "Group B",
      "team1" : "Wales",
      "stadium" : "AAS",
      "class" : "round-group-b stadium-aas team-wales team-iran",
      "result" : null
   },
   {
      "stadium" : "ATS",
      "class" : "round-group-a stadium-ats team-qatar team-senegal",
      "result" : null,
      "team2" : "Senegal",
      "description" : "Group A",
      "team1" : "Qatar",
      "group" : "Group A",
      "date" : "2022-11-25T13:00:00"
   },
   {
      "team2" : "Ecuador",
      "group" : "Group A",
      "team1" : "Netherlands",
      "date" : "2022-11-25T16:00:00",
      "description" : "Group A",
      "class" : "round-group-a stadium-kis team-netherlands team-ecuador",
      "stadium" : "KIS",
      "result" : null
   },
   {
      "team1" : "England",
      "group" : "Group B",
      "date" : "2022-11-25T19:00:00",
      "description" : "Group B",
      "team2" : "USA",
      "result" : null,
      "class" : "round-group-b stadium-abs team-england team-usa",
      "stadium" : "ABS"
   },
   {
      "stadium" : "AJS",
      "class" : "round-group-d stadium-ajs team-tunisia team-australia",
      "result" : null,
      "team2" : "Australia",
      "description" : "Group D",
      "team1" : "Tunisia",
      "group" : "Group D",
      "date" : "2022-11-26T10:00:00"
   },
   {
      "class" : "round-group-c stadium-ecs team-poland team-saudi-arabia",
      "stadium" : "ECS",
      "result" : null,
      "team2" : "Saudi Arabia",
      "date" : "2022-11-26T13:00:00",
      "group" : "Group C",
      "team1" : "Poland",
      "description" : "Group C"
   },
   {
      "team1" : "France",
      "group" : "Group D",
      "date" : "2022-11-26T16:00:00",
      "description" : "Group D",
      "team2" : "Denmark",
      "result" : null,
      "class" : "round-group-d stadium-974 team-france team-denmark",
      "stadium" : "974"
   },
   {
      "stadium" : "LIS",
      "class" : "round-group-c stadium-lis team-argentina team-mexico",
      "result" : null,
      "team2" : "Mexico",
      "description" : "Group C",
      "group" : "Group C",
      "team1" : "Argentina",
      "date" : "2022-11-26T19:00:00"
   },
   {
      "team2" : "Costa Rica",
      "team1" : "Japan",
      "group" : "Group E",
      "date" : "2022-11-27T10:00:00",
      "description" : "Group E",
      "class" : "round-group-e stadium-aas team-japan team-costa-rica",
      "stadium" : "AAS",
      "result" : null
   },
   {
      "result" : null,
      "class" : "round-group-f stadium-ats team-belgium team-morocco",
      "stadium" : "ATS",
      "date" : "2022-11-27T13:00:00",
      "group" : "Group F",
      "team1" : "Belgium",
      "description" : "Group F",
      "team2" : "Morocco"
   },
   {
      "description" : "Group F",
      "group" : "Group F",
      "team1" : "Croatia",
      "date" : "2022-11-27T16:00:00",
      "team2" : "Canada",
      "result" : null,
      "stadium" : "KIS",
      "class" : "round-group-f stadium-kis team-croatia team-canada"
   },
   {
      "stadium" : "ABS",
      "class" : "round-group-e stadium-abs team-spain team-germany",
      "result" : null,
      "team2" : "Germany",
      "description" : "Group E",
      "team1" : "Spain",
      "group" : "Group E",
      "date" : "2022-11-27T19:00:00"
   },
   {
      "result" : null,
      "class" : "round-group-g stadium-ajs team-cameroon team-serbia",
      "stadium" : "AJS",
      "team1" : "Cameroon",
      "group" : "Group G",
      "date" : "2022-11-28T10:00:00",
      "description" : "Group G",
      "team2" : "Serbia"
   },
   {
      "team2" : "Ghana",
      "team1" : "Korea Republic",
      "group" : "Group H",
      "date" : "2022-11-28T13:00:00",
      "description" : "Group H",
      "class" : "round-group-h stadium-ecs team-korea-republic team-ghana",
      "stadium" : "ECS",
      "result" : null
   },
   {
      "team1" : "Brazil",
      "group" : "Group G",
      "date" : "2022-11-28T16:00:00",
      "description" : "Group G",
      "team2" : "Switzerland",
      "result" : null,
      "class" : "round-group-g stadium-974 team-brazil team-switzerland",
      "stadium" : "974"
   },
   {
      "stadium" : "LIS",
      "class" : "round-group-h stadium-lis team-portugal team-uruguay",
      "result" : null,
      "team2" : "Uruguay",
      "description" : "Group H",
      "group" : "Group H",
      "team1" : "Portugal",
      "date" : "2022-11-28T19:00:00"
   },
   {
      "description" : "Group A",
      "date" : "2022-11-29T15:00:00",
      "group" : "Group A",
      "team1" : "Ecuador",
      "team2" : "Senegal",
      "result" : null,
      "stadium" : "KIS",
      "class" : "round-group-a stadium-kis team-ecuador team-senegal"
   },
   {
      "description" : "Group A",
      "team1" : "Netherlands",
      "group" : "Group A",
      "date" : "2022-11-29T15:00:00",
      "team2" : "Qatar",
      "result" : null,
      "stadium" : "ABS",
      "class" : "round-group-a stadium-abs team-netherlands team-qatar"
   },
   {
      "date" : "2022-11-29T19:00:00",
      "group" : "Group B",
      "team1" : "Wales",
      "description" : "Group B",
      "team2" : "England",
      "result" : null,
      "class" : "round-group-b stadium-aas team-wales team-england",
      "stadium" : "AAS"
   },
   {
      "team1" : "Iran",
      "group" : "Group B",
      "date" : "2022-11-29T19:00:00",
      "description" : "Group B",
      "team2" : "USA",
      "result" : null,
      "class" : "round-group-b stadium-ats team-iran team-usa",
      "stadium" : "ATS"
   },
   {
      "class" : "round-group-d stadium-ajs team-australia team-denmark",
      "stadium" : "AJS",
      "result" : null,
      "team2" : "Denmark",
      "date" : "2022-11-30T15:00:00",
      "team1" : "Australia",
      "group" : "Group D",
      "description" : "Group D"
   },
   {
      "team2" : "France",
      "date" : "2022-11-30T15:00:00",
      "group" : "Group D",
      "team1" : "Tunisia",
      "description" : "Group D",
      "class" : "round-group-d stadium-ecs team-tunisia team-france",
      "stadium" : "ECS",
      "result" : null
   },
   {
      "team2" : "Argentina",
      "date" : "2022-11-30T19:00:00",
      "team1" : "Poland",
      "group" : "Group C",
      "description" : "Group C",
      "class" : "round-group-c stadium-974 team-poland team-argentina",
      "stadium" : "974",
      "result" : null
   },
   {
      "description" : "Group C",
      "date" : "2022-11-30T19:00:00",
      "group" : "Group C",
      "team1" : "Saudi Arabia",
      "team2" : "Mexico",
      "result" : null,
      "stadium" : "LIS",
      "class" : "round-group-c stadium-lis team-saudi-arabia team-mexico"
   },
   {
      "team2" : "Belgium",
      "description" : "Group F",
      "team1" : "Croatia",
      "group" : "Group F",
      "date" : "2022-12-01T15:00:00",
      "stadium" : "AAS",
      "class" : "round-group-f stadium-aas team-croatia team-belgium",
      "result" : null
   },
   {
      "team2" : "Morocco",
      "description" : "Group F",
      "group" : "Group F",
      "team1" : "Canada",
      "date" : "2022-12-01T15:00:00",
      "stadium" : "ATS",
      "class" : "round-group-f stadium-ats team-canada team-morocco",
      "result" : null
   },
   {
      "stadium" : "KIS",
      "class" : "round-group-e stadium-kis team-japan team-spain",
      "result" : null,
      "team2" : "Spain",
      "description" : "Group E",
      "team1" : "Japan",
      "group" : "Group E",
      "date" : "2022-12-01T19:00:00"
   },
   {
      "date" : "2022-12-01T19:00:00",
      "team1" : "Costa Rica",
      "group" : "Group E",
      "description" : "Group E",
      "team2" : "Germany",
      "result" : null,
      "class" : "round-group-e stadium-abs team-costa-rica team-germany",
      "stadium" : "ABS"
   },
   {
      "team2" : "Uruguay",
      "date" : "2022-12-02T15:00:00",
      "team1" : "Ghana",
      "group" : "Group H",
      "description" : "Group H",
      "class" : "round-group-h stadium-ajs team-ghana team-uruguay",
      "stadium" : "AJS",
      "result" : null
   },
   {
      "team2" : "Portugal",
      "description" : "Group H",
      "date" : "2022-12-02T15:00:00",
      "team1" : "Korea Republic",
      "group" : "Group H",
      "stadium" : "ECS",
      "class" : "round-group-h stadium-ecs team-korea-republic team-portugal",
      "result" : null
   },
   {
      "description" : "Group G",
      "group" : "Group G",
      "team1" : "Serbia",
      "date" : "2022-12-02T19:00:00",
      "team2" : "Switzerland",
      "result" : null,
      "stadium" : "974",
      "class" : "round-group-g stadium-974 team-serbia team-switzerland"
   },
   {
      "description" : "Group G",
      "date" : "2022-12-02T19:00:00",
      "group" : "Group G",
      "team1" : "Cameroon",
      "team2" : "Brazil",
      "result" : null,
      "stadium" : "LIS",
      "class" : "round-group-g stadium-lis team-cameroon team-brazil"
   },
   {
      "team2" : "2B",
      "date" : "2022-12-03T15:00:00",
      "group" : null,
      "team1" : "1A",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-tba team-1a team-2b",
      "stadium" : "TBA",
      "result" : null
   },
   {
      "team2" : "2D",
      "date" : "2022-12-03T19:00:00",
      "team1" : "1C",
      "group" : null,
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-tba team-1c team-2d",
      "stadium" : "TBA",
      "result" : null
   },
   {
      "team2" : "2C",
      "description" : "Round of 16",
      "team1" : "1D",
      "group" : null,
      "date" : "2022-12-04T15:00:00",
      "stadium" : "TBA",
      "class" : "round-round-of-16 stadium-tba team-1d team-2c",
      "result" : null
   },
   {
      "result" : null,
      "stadium" : "TBA",
      "class" : "round-round-of-16 stadium-tba team-1b team-2a",
      "description" : "Round of 16",
      "date" : "2022-12-04T19:00:00",
      "group" : null,
      "team1" : "1B",
      "team2" : "2A"
   },
   {
      "team2" : "2F",
      "description" : "Round of 16",
      "team1" : "1E",
      "group" : null,
      "date" : "2022-12-05T15:00:00",
      "stadium" : "TBA",
      "class" : "round-round-of-16 stadium-tba team-1e team-2f",
      "result" : null
   },
   {
      "description" : "Round of 16",
      "date" : "2022-12-05T19:00:00",
      "team1" : "1G",
      "group" : null,
      "team2" : "2H",
      "result" : null,
      "stadium" : "TBA",
      "class" : "round-round-of-16 stadium-tba team-1g team-2h"
   },
   {
      "result" : null,
      "class" : "round-round-of-16 stadium-tba team-1f team-2e",
      "stadium" : "TBA",
      "team1" : "1F",
      "group" : null,
      "date" : "2022-12-06T15:00:00",
      "description" : "Round of 16",
      "team2" : "2E"
   },
   {
      "date" : "2022-12-06T19:00:00",
      "team1" : "1H",
      "group" : null,
      "description" : "Round of 16",
      "team2" : "2G",
      "result" : null,
      "class" : "round-round-of-16 stadium-tba team-1h team-2g",
      "stadium" : "TBA"
   },
   {
      "stadium" : "TBA",
      "class" : "round-quarter-finals stadium-tba team-tba team-tba",
      "result" : null,
      "team2" : "TBA",
      "description" : "Quarter Finals",
      "date" : "2022-12-09T15:00:00",
      "group" : null,
      "team1" : "TBA"
   },
   {
      "result" : null,
      "class" : "round-quarter-finals stadium-tba team-tba team-tba",
      "stadium" : "TBA",
      "date" : "2022-12-09T19:00:00",
      "group" : null,
      "team1" : "TBA",
      "description" : "Quarter Finals",
      "team2" : "TBA"
   },
   {
      "team2" : "TBA",
      "description" : "Quarter Finals",
      "group" : null,
      "team1" : "TBA",
      "date" : "2022-12-10T15:00:00",
      "stadium" : "TBA",
      "class" : "round-quarter-finals stadium-tba team-tba team-tba",
      "result" : null
   },
   {
      "team2" : "TBA",
      "date" : "2022-12-10T19:00:00",
      "group" : null,
      "team1" : "TBA",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-tba team-tba team-tba",
      "stadium" : "TBA",
      "result" : null
   },
   {
      "team2" : "TBA",
      "date" : "2022-12-13T19:00:00",
      "group" : null,
      "team1" : "TBA",
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-tba team-tba team-tba",
      "stadium" : "TBA",
      "result" : null
   },
   {
      "description" : "Semi Finals",
      "team1" : "TBA",
      "group" : null,
      "date" : "2022-12-14T19:00:00",
      "team2" : "TBA",
      "result" : null,
      "stadium" : "TBA",
      "class" : "round-semi-finals stadium-tba team-tba team-tba"
   },
   {
      "stadium" : "TBA",
      "class" : "round-finals stadium-tba team-tba team-tba",
      "result" : null,
      "team2" : "TBA",
      "description" : "Finals",
      "group" : null,
      "team1" : "TBA",
      "date" : "2022-12-17T15:00:00"
   },
   {
      "team2" : "TBA",
      "date" : "2022-12-18T15:00:00",
      "group" : null,
      "team1" : "TBA",
      "description" : "Finals",
      "class" : "round-finals stadium-tba team-tba team-tba",
      "stadium" : "TBA",
      "result" : null
   }
]
;

