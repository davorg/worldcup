var stadiums = {
   "974" : {
      "name" : "Stadium 974",
      "utcoffset" : "3",
      "timezone" : "Asia/Qatar",
      "city" : "Doha",
      "code" : "974"
   },
   "AAS" : {
      "name" : "Ahmad bin Ali Stadium",
      "utcoffset" : "3",
      "code" : "AAS",
      "timezone" : "Asia/Qatar",
      "city" : "Al Rayyan"
   },
   "LIS" : {
      "code" : "LIS",
      "timezone" : "Asia/Qatar",
      "city" : "Lusail",
      "name" : "Lusail Iconic Stadium",
      "utcoffset" : "3"
   },
   "ABS" : {
      "code" : "ABS",
      "timezone" : "Asia/Qatar",
      "city" : "Al Khor",
      "utcoffset" : "3",
      "name" : "Al Bait Stadium"
   },
   "KIS" : {
      "utcoffset" : "3",
      "name" : "Khalifa International Stadium",
      "code" : "KIS",
      "timezone" : "Asia/Qatar",
      "city" : "Al Rayyan"
   },
   "AJS" : {
      "utcoffset" : "3",
      "name" : "Al Janoub Stadium",
      "code" : "AJS",
      "city" : "Al Wakrah",
      "timezone" : "Asia/Qatar"
   },
   "ATS" : {
      "utcoffset" : "3",
      "name" : "Al Thumama Stadium",
      "code" : "ATS",
      "city" : "Doha",
      "timezone" : "Asia/Qatar"
   },
   "ECS" : {
      "utcoffset" : "3",
      "name" : "Education City Stadium",
      "city" : "Al Rayyan",
      "timezone" : "Asia/Qatar",
      "code" : "ECS"
   }
}
;

var games = [
   {
      "result" : null,
      "team2" : "Ecuador",
      "group" : "Group A",
      "stadium" : "ABS",
      "team1" : "Qatar",
      "class" : "round-group-a stadium-abs team-qatar team-ecuador",
      "description" : "Group A",
      "date" : "2022-11-20T16:00:00"
   },
   {
      "class" : "round-group-b stadium-kis team-england team-iran",
      "description" : "Group B",
      "date" : "2022-11-21T13:00:00",
      "group" : "Group B",
      "team1" : "England",
      "stadium" : "KIS",
      "result" : null,
      "team2" : "Iran"
   },
   {
      "team2" : "Netherlands",
      "result" : null,
      "team1" : "Senegal",
      "stadium" : "ATS",
      "group" : "Group A",
      "date" : "2022-11-21T16:00:00",
      "description" : "Group A",
      "class" : "round-group-a stadium-ats team-senegal team-netherlands"
   },
   {
      "group" : "Group B",
      "stadium" : "AAS",
      "team1" : "USA",
      "team2" : "Wales",
      "result" : null,
      "description" : "Group B",
      "class" : "round-group-b stadium-aas team-usa team-wales",
      "date" : "2022-11-21T19:00:00"
   },
   {
      "class" : "round-group-c stadium-lis team-argentina team-saudi-arabia",
      "description" : "Group C",
      "date" : "2022-11-22T10:00:00",
      "result" : null,
      "team2" : "Saudi Arabia",
      "group" : "Group C",
      "stadium" : "LIS",
      "team1" : "Argentina"
   },
   {
      "date" : "2022-11-22T13:00:00",
      "class" : "round-group-d stadium-ecs team-denmark team-tunisia",
      "description" : "Group D",
      "team1" : "Denmark",
      "stadium" : "ECS",
      "group" : "Group D",
      "result" : null,
      "team2" : "Tunisia"
   },
   {
      "group" : "Group C",
      "stadium" : "974",
      "team1" : "Mexico",
      "team2" : "Poland",
      "result" : null,
      "description" : "Group C",
      "class" : "round-group-c stadium-974 team-mexico team-poland",
      "date" : "2022-11-22T16:00:00"
   },
   {
      "result" : null,
      "team2" : "Australia",
      "group" : "Group D",
      "team1" : "France",
      "stadium" : "AJS",
      "class" : "round-group-d stadium-ajs team-france team-australia",
      "description" : "Group D",
      "date" : "2022-11-22T19:00:00"
   },
   {
      "group" : "Group F",
      "team1" : "Morocco",
      "stadium" : "ABS",
      "result" : null,
      "team2" : "Croatia",
      "class" : "round-group-f stadium-abs team-morocco team-croatia",
      "description" : "Group F",
      "date" : "2022-11-23T10:00:00"
   },
   {
      "stadium" : "KIS",
      "team1" : "Germany",
      "group" : "Group E",
      "team2" : "Japan",
      "result" : null,
      "date" : "2022-11-23T13:00:00",
      "description" : "Group E",
      "class" : "round-group-e stadium-kis team-germany team-japan"
   },
   {
      "result" : null,
      "team2" : "Costa Rica",
      "group" : "Group E",
      "stadium" : "ATS",
      "team1" : "Spain",
      "class" : "round-group-e stadium-ats team-spain team-costa-rica",
      "description" : "Group E",
      "date" : "2022-11-23T16:00:00"
   },
   {
      "stadium" : "AAS",
      "team1" : "Belgium",
      "group" : "Group F",
      "result" : null,
      "team2" : "Canada",
      "date" : "2022-11-23T19:00:00",
      "class" : "round-group-f stadium-aas team-belgium team-canada",
      "description" : "Group F"
   },
   {
      "team2" : "Cameroon",
      "result" : null,
      "group" : "Group G",
      "stadium" : "AJS",
      "team1" : "Switzerland",
      "description" : "Group G",
      "class" : "round-group-g stadium-ajs team-switzerland team-cameroon",
      "date" : "2022-11-24T10:00:00"
   },
   {
      "team1" : "Uruguay",
      "stadium" : "ECS",
      "group" : "Group H",
      "team2" : "Korea Republic",
      "result" : null,
      "date" : "2022-11-24T13:00:00",
      "description" : "Group H",
      "class" : "round-group-h stadium-ecs team-uruguay team-korea-republic"
   },
   {
      "result" : null,
      "team2" : "Ghana",
      "group" : "Group H",
      "team1" : "Portugal",
      "stadium" : "974",
      "class" : "round-group-h stadium-974 team-portugal team-ghana",
      "description" : "Group H",
      "date" : "2022-11-24T16:00:00"
   },
   {
      "team2" : "Serbia",
      "result" : null,
      "team1" : "Brazil",
      "stadium" : "LIS",
      "group" : "Group G",
      "date" : "2022-11-24T19:00:00",
      "description" : "Group G",
      "class" : "round-group-g stadium-lis team-brazil team-serbia"
   },
   {
      "description" : "Group B",
      "class" : "round-group-b stadium-aas team-wales team-iran",
      "date" : "2022-11-25T10:00:00",
      "group" : "Group B",
      "team1" : "Wales",
      "stadium" : "AAS",
      "team2" : "Iran",
      "result" : null
   },
   {
      "date" : "2022-11-25T13:00:00",
      "class" : "round-group-a stadium-ats team-qatar team-senegal",
      "description" : "Group A",
      "result" : null,
      "team2" : "Senegal",
      "team1" : "Qatar",
      "stadium" : "ATS",
      "group" : "Group A"
   },
   {
      "group" : "Group A",
      "stadium" : "KIS",
      "team1" : "Netherlands",
      "result" : null,
      "team2" : "Ecuador",
      "class" : "round-group-a stadium-kis team-netherlands team-ecuador",
      "description" : "Group A",
      "date" : "2022-11-25T16:00:00"
   },
   {
      "class" : "round-group-b stadium-abs team-england team-usa",
      "description" : "Group B",
      "date" : "2022-11-25T19:00:00",
      "group" : "Group B",
      "team1" : "England",
      "stadium" : "ABS",
      "result" : null,
      "team2" : "USA"
   },
   {
      "team2" : "Australia",
      "result" : null,
      "group" : "Group D",
      "team1" : "Tunisia",
      "stadium" : "AJS",
      "description" : "Group D",
      "class" : "round-group-d stadium-ajs team-tunisia team-australia",
      "date" : "2022-11-26T10:00:00"
   },
   {
      "date" : "2022-11-26T13:00:00",
      "class" : "round-group-c stadium-ecs team-poland team-saudi-arabia",
      "description" : "Group C",
      "team1" : "Poland",
      "stadium" : "ECS",
      "group" : "Group C",
      "result" : null,
      "team2" : "Saudi Arabia"
   },
   {
      "date" : "2022-11-26T16:00:00",
      "class" : "round-group-d stadium-974 team-france team-denmark",
      "description" : "Group D",
      "result" : null,
      "team2" : "Denmark",
      "stadium" : "974",
      "team1" : "France",
      "group" : "Group D"
   },
   {
      "class" : "round-group-c stadium-lis team-argentina team-mexico",
      "description" : "Group C",
      "date" : "2022-11-26T19:00:00",
      "result" : null,
      "team2" : "Mexico",
      "group" : "Group C",
      "stadium" : "LIS",
      "team1" : "Argentina"
   },
   {
      "team2" : "Costa Rica",
      "result" : null,
      "group" : "Group E",
      "team1" : "Japan",
      "stadium" : "AAS",
      "description" : "Group E",
      "class" : "round-group-e stadium-aas team-japan team-costa-rica",
      "date" : "2022-11-27T10:00:00"
   },
   {
      "description" : "Group F",
      "class" : "round-group-f stadium-ats team-belgium team-morocco",
      "date" : "2022-11-27T13:00:00",
      "group" : "Group F",
      "stadium" : "ATS",
      "team1" : "Belgium",
      "team2" : "Morocco",
      "result" : null
   },
   {
      "stadium" : "KIS",
      "team1" : "Croatia",
      "group" : "Group F",
      "team2" : "Canada",
      "result" : null,
      "date" : "2022-11-27T16:00:00",
      "description" : "Group F",
      "class" : "round-group-f stadium-kis team-croatia team-canada"
   },
   {
      "class" : "round-group-e stadium-abs team-spain team-germany",
      "description" : "Group E",
      "date" : "2022-11-27T19:00:00",
      "result" : null,
      "team2" : "Germany",
      "group" : "Group E",
      "stadium" : "ABS",
      "team1" : "Spain"
   },
   {
      "date" : "2022-11-28T10:00:00",
      "class" : "round-group-g stadium-ajs team-cameroon team-serbia",
      "description" : "Group G",
      "result" : null,
      "team2" : "Serbia",
      "stadium" : "AJS",
      "team1" : "Cameroon",
      "group" : "Group G"
   },
   {
      "class" : "round-group-h stadium-ecs team-korea-republic team-ghana",
      "description" : "Group H",
      "date" : "2022-11-28T13:00:00",
      "result" : null,
      "team2" : "Ghana",
      "group" : "Group H",
      "stadium" : "ECS",
      "team1" : "Korea Republic"
   },
   {
      "description" : "Group G",
      "class" : "round-group-g stadium-974 team-brazil team-switzerland",
      "date" : "2022-11-28T16:00:00",
      "team2" : "Switzerland",
      "result" : null,
      "group" : "Group G",
      "team1" : "Brazil",
      "stadium" : "974"
   },
   {
      "date" : "2022-11-28T19:00:00",
      "class" : "round-group-h stadium-lis team-portugal team-uruguay",
      "description" : "Group H",
      "result" : null,
      "team2" : "Uruguay",
      "stadium" : "LIS",
      "team1" : "Portugal",
      "group" : "Group H"
   },
   {
      "class" : "round-group-a stadium-kis team-ecuador team-senegal",
      "description" : "Group A",
      "date" : "2022-11-29T15:00:00",
      "result" : null,
      "team2" : "Senegal",
      "group" : "Group A",
      "stadium" : "KIS",
      "team1" : "Ecuador"
   },
   {
      "description" : "Group A",
      "class" : "round-group-a stadium-abs team-netherlands team-qatar",
      "date" : "2022-11-29T15:00:00",
      "group" : "Group A",
      "stadium" : "ABS",
      "team1" : "Netherlands",
      "team2" : "Qatar",
      "result" : null
   },
   {
      "description" : "Group B",
      "class" : "round-group-b stadium-aas team-wales team-england",
      "date" : "2022-11-29T19:00:00",
      "team2" : "England",
      "result" : null,
      "group" : "Group B",
      "stadium" : "AAS",
      "team1" : "Wales"
   },
   {
      "class" : "round-group-b stadium-ats team-iran team-usa",
      "description" : "Group B",
      "date" : "2022-11-29T19:00:00",
      "group" : "Group B",
      "stadium" : "ATS",
      "team1" : "Iran",
      "result" : null,
      "team2" : "USA"
   },
   {
      "date" : "2022-11-30T15:00:00",
      "class" : "round-group-d stadium-ajs team-australia team-denmark",
      "description" : "Group D",
      "team1" : "Australia",
      "stadium" : "AJS",
      "group" : "Group D",
      "result" : null,
      "team2" : "Denmark"
   },
   {
      "date" : "2022-11-30T15:00:00",
      "description" : "Group D",
      "class" : "round-group-d stadium-ecs team-tunisia team-france",
      "team2" : "France",
      "result" : null,
      "team1" : "Tunisia",
      "stadium" : "ECS",
      "group" : "Group D"
   },
   {
      "team2" : "Argentina",
      "result" : null,
      "group" : "Group C",
      "team1" : "Poland",
      "stadium" : "974",
      "description" : "Group C",
      "class" : "round-group-c stadium-974 team-poland team-argentina",
      "date" : "2022-11-30T19:00:00"
   },
   {
      "description" : "Group C",
      "class" : "round-group-c stadium-lis team-saudi-arabia team-mexico",
      "date" : "2022-11-30T19:00:00",
      "team2" : "Mexico",
      "result" : null,
      "group" : "Group C",
      "team1" : "Saudi Arabia",
      "stadium" : "LIS"
   },
   {
      "team2" : "Belgium",
      "result" : null,
      "stadium" : "AAS",
      "team1" : "Croatia",
      "group" : "Group F",
      "date" : "2022-12-01T15:00:00",
      "description" : "Group F",
      "class" : "round-group-f stadium-aas team-croatia team-belgium"
   },
   {
      "team2" : "Morocco",
      "result" : null,
      "stadium" : "ATS",
      "team1" : "Canada",
      "group" : "Group F",
      "date" : "2022-12-01T15:00:00",
      "description" : "Group F",
      "class" : "round-group-f stadium-ats team-canada team-morocco"
   },
   {
      "team2" : "Spain",
      "result" : null,
      "team1" : "Japan",
      "stadium" : "KIS",
      "group" : "Group E",
      "date" : "2022-12-01T19:00:00",
      "description" : "Group E",
      "class" : "round-group-e stadium-kis team-japan team-spain"
   },
   {
      "date" : "2022-12-01T19:00:00",
      "description" : "Group E",
      "class" : "round-group-e stadium-abs team-costa-rica team-germany",
      "team2" : "Germany",
      "result" : null,
      "team1" : "Costa Rica",
      "stadium" : "ABS",
      "group" : "Group E"
   },
   {
      "description" : "Group H",
      "class" : "round-group-h stadium-ajs team-ghana team-uruguay",
      "date" : "2022-12-02T15:00:00",
      "team2" : "Uruguay",
      "result" : null,
      "group" : "Group H",
      "stadium" : "AJS",
      "team1" : "Ghana"
   },
   {
      "date" : "2022-12-02T15:00:00",
      "class" : "round-group-h stadium-ecs team-korea-republic team-portugal",
      "description" : "Group H",
      "result" : null,
      "team2" : "Portugal",
      "team1" : "Korea Republic",
      "stadium" : "ECS",
      "group" : "Group H"
   },
   {
      "team2" : "Switzerland",
      "result" : null,
      "group" : "Group G",
      "stadium" : "974",
      "team1" : "Serbia",
      "description" : "Group G",
      "class" : "round-group-g stadium-974 team-serbia team-switzerland",
      "date" : "2022-12-02T19:00:00"
   },
   {
      "team2" : "Brazil",
      "result" : null,
      "team1" : "Cameroon",
      "stadium" : "LIS",
      "group" : "Group G",
      "date" : "2022-12-02T19:00:00",
      "description" : "Group G",
      "class" : "round-group-g stadium-lis team-cameroon team-brazil"
   },
   {
      "date" : "2022-12-03T15:00:00",
      "class" : "round-round-of-16 stadium-kis team-netherlands team-united-states",
      "description" : "Round of 16",
      "result" : null,
      "team2" : "United States",
      "stadium" : "KIS",
      "team1" : "Netherlands",
      "group" : null
   },
   {
      "team2" : "2D",
      "result" : null,
      "team1" : "1C",
      "stadium" : "AAS",
      "group" : null,
      "date" : "2022-12-03T19:00:00",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-aas team-1c team-2d"
   },
   {
      "class" : "round-round-of-16 stadium-ats team-1d team-2c",
      "description" : "Round of 16",
      "date" : "2022-12-04T15:00:00",
      "result" : null,
      "team2" : "2C",
      "group" : null,
      "stadium" : "ATS",
      "team1" : "1D"
   },
   {
      "class" : "round-round-of-16 stadium-abs team-england team-senegal",
      "description" : "Round of 16",
      "date" : "2022-12-04T19:00:00",
      "group" : null,
      "stadium" : "ABS",
      "team1" : "England",
      "result" : null,
      "team2" : "Senegal"
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-ajs team-1e team-2f",
      "date" : "2022-12-05T15:00:00",
      "group" : null,
      "team1" : "1E",
      "stadium" : "AJS",
      "team2" : "2F",
      "result" : null
   },
   {
      "team2" : "2H",
      "result" : null,
      "group" : null,
      "stadium" : "974",
      "team1" : "1G",
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-974 team-1g team-2h",
      "date" : "2022-12-05T19:00:00"
   },
   {
      "date" : "2022-12-06T15:00:00",
      "class" : "round-round-of-16 stadium-ecs team-1f team-2e",
      "description" : "Round of 16",
      "team1" : "1F",
      "stadium" : "ECS",
      "group" : null,
      "result" : null,
      "team2" : "2E"
   },
   {
      "description" : "Round of 16",
      "class" : "round-round-of-16 stadium-lis team-1h team-2g",
      "date" : "2022-12-06T19:00:00",
      "group" : null,
      "team1" : "1H",
      "stadium" : "LIS",
      "team2" : "2G",
      "result" : null
   },
   {
      "date" : "2022-12-09T15:00:00",
      "class" : "round-quarter-finals stadium-ecs team-tba team-tba",
      "description" : "Quarter Finals",
      "result" : null,
      "team2" : "TBA",
      "team1" : "TBA",
      "stadium" : "ECS",
      "group" : null
   },
   {
      "date" : "2022-12-09T19:00:00",
      "class" : "round-quarter-finals stadium-lis team-tba team-tba",
      "description" : "Quarter Finals",
      "team1" : "TBA",
      "stadium" : "LIS",
      "group" : null,
      "result" : null,
      "team2" : "TBA"
   },
   {
      "class" : "round-quarter-finals stadium-ats team-tba team-tba",
      "description" : "Quarter Finals",
      "date" : "2022-12-10T15:00:00",
      "group" : null,
      "stadium" : "ATS",
      "team1" : "TBA",
      "result" : null,
      "team2" : "TBA"
   },
   {
      "stadium" : "ABS",
      "team1" : "TBA",
      "group" : null,
      "team2" : "TBA",
      "result" : null,
      "date" : "2022-12-10T19:00:00",
      "description" : "Quarter Finals",
      "class" : "round-quarter-finals stadium-abs team-tba team-tba"
   },
   {
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-lis team-tba team-tba",
      "date" : "2022-12-13T19:00:00",
      "team2" : "TBA",
      "result" : null,
      "group" : null,
      "team1" : "TBA",
      "stadium" : "LIS"
   },
   {
      "description" : "Semi Finals",
      "class" : "round-semi-finals stadium-abs team-tba team-tba",
      "date" : "2022-12-14T19:00:00",
      "group" : null,
      "team1" : "TBA",
      "stadium" : "ABS",
      "team2" : "TBA",
      "result" : null
   },
   {
      "description" : "Finals",
      "class" : "round-finals stadium-kis team-tba team-tba",
      "date" : "2022-12-17T15:00:00",
      "group" : null,
      "team1" : "TBA",
      "stadium" : "KIS",
      "team2" : "TBA",
      "result" : null
   },
   {
      "date" : "2022-12-18T15:00:00",
      "description" : "Finals",
      "class" : "round-finals stadium-lis team-tba team-tba",
      "team2" : "TBA",
      "result" : null,
      "team1" : "TBA",
      "stadium" : "LIS",
      "group" : null
   }
]
;

