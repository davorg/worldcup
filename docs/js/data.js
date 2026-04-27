var stadiums = {
   "ATL" : {
      "city" : "Atlanta, USA",
      "code" : "ATL",
      "name" : "Mercedes-Benz Stadium",
      "timezone" : "America/New_York",
      "utcoffset" : "-4"
   },
   "BOS" : {
      "city" : "Boston, USA",
      "code" : "BOS",
      "name" : "Gillette Stadium",
      "timezone" : "America/New_York",
      "utcoffset" : "-4"
   },
   "DAL" : {
      "city" : "Dallas, USA",
      "code" : "DAL",
      "name" : "AT&T Stadium",
      "timezone" : "America/Chicago",
      "utcoffset" : "-5"
   },
   "EWR" : {
      "city" : "New York/New Jersey, USA",
      "code" : "EWR",
      "name" : "MetLife Stadium",
      "timezone" : "America/New_York",
      "utcoffset" : "-4"
   },
   "GDL" : {
      "city" : "Guadalajara, Mexico",
      "code" : "GDL",
      "name" : "Estadio Akron",
      "timezone" : "America/Mexico_City",
      "utcoffset" : "-6"
   },
   "IAH" : {
      "city" : "Houston, USA",
      "code" : "IAH",
      "name" : "NRG Stadium",
      "timezone" : "America/Chicago",
      "utcoffset" : "-5"
   },
   "LAX" : {
      "city" : "Los Angeles, USA",
      "code" : "LAX",
      "name" : "SoFi Stadium",
      "timezone" : "America/Los_Angeles",
      "utcoffset" : "-7"
   },
   "MCI" : {
      "city" : "Kansas City, USA",
      "code" : "MCI",
      "name" : "Arrowhead Stadium",
      "timezone" : "America/Chicago",
      "utcoffset" : "-5"
   },
   "MEX" : {
      "city" : "Mexico City, Mexico",
      "code" : "MEX",
      "name" : "Estadio Azteca",
      "timezone" : "America/Mexico_City",
      "utcoffset" : "-6"
   },
   "MIA" : {
      "city" : "Miami, USA",
      "code" : "MIA",
      "name" : "Hard Rock Stadium",
      "timezone" : "America/New_York",
      "utcoffset" : "-4"
   },
   "MTY" : {
      "city" : "Monterrey, Mexico",
      "code" : "MTY",
      "name" : "Estadio BBVA",
      "timezone" : "America/Monterrey",
      "utcoffset" : "-6"
   },
   "PHL" : {
      "city" : "Philadelphia, USA",
      "code" : "PHL",
      "name" : "Lincoln Financial Field",
      "timezone" : "America/New_York",
      "utcoffset" : "-4"
   },
   "SEA" : {
      "city" : "Seattle, USA",
      "code" : "SEA",
      "name" : "Lumen Field",
      "timezone" : "America/Los_Angeles",
      "utcoffset" : "-7"
   },
   "SFO" : {
      "city" : "San Francisco Bay Area, USA",
      "code" : "SFO",
      "name" : "Levi's Stadium",
      "timezone" : "America/Los_Angeles",
      "utcoffset" : "-7"
   },
   "YVR" : {
      "city" : "Vancouver, Canada",
      "code" : "YVR",
      "name" : "BC Place",
      "timezone" : "America/Vancouver",
      "utcoffset" : "-7"
   },
   "YYZ" : {
      "city" : "Toronto, Canada",
      "code" : "YYZ",
      "name" : "BMO Field",
      "timezone" : "America/Toronto",
      "utcoffset" : "-4"
   }
}
;

var games = [
   {
      "class" : "round-group-a stadium-mex team-mexico team-south-africa",
      "date" : "2026-06-11T21:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "MEX",
      "team1" : "Mexico",
      "team2" : "South Africa"
   },
   {
      "class" : "round-group-a stadium-gdl team-south-korea team-czechia",
      "date" : "2026-06-12T04:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "GDL",
      "team1" : "South Korea",
      "team2" : "Czechia"
   },
   {
      "class" : "round-group-b stadium-yyz team-canada team-bosnia-and-herzegovina",
      "date" : "2026-06-12T19:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Canada",
      "team2" : "Bosnia and Herzegovina"
   },
   {
      "class" : "round-group-d stadium-lax team-usa team-paraguay",
      "date" : "2026-06-13T04:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "LAX",
      "team1" : "USA",
      "team2" : "Paraguay"
   },
   {
      "class" : "round-group-b stadium-sfo team-qatar team-switzerland",
      "date" : "2026-06-13T22:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Qatar",
      "team2" : "Switzerland"
   },
   {
      "class" : "round-group-c stadium-ewr team-brazil team-morocco",
      "date" : "2026-06-13T22:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Brazil",
      "team2" : "Morocco"
   },
   {
      "class" : "round-group-c stadium-bos team-haiti team-scotland",
      "date" : "2026-06-14T01:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Haiti",
      "team2" : "Scotland"
   },
   {
      "class" : "round-group-d stadium-yvr team-australia team-türkiye",
      "date" : "2026-06-14T07:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "YVR",
      "team1" : "Australia",
      "team2" : "Türkiye"
   },
   {
      "class" : "round-group-e stadium-iah team-germany team-curaçao",
      "date" : "2026-06-14T18:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Germany",
      "team2" : "Curaçao"
   },
   {
      "class" : "round-group-f stadium-dal team-netherlands team-japan",
      "date" : "2026-06-14T21:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Netherlands",
      "team2" : "Japan"
   },
   {
      "class" : "round-group-e stadium-phl team-côte-d'ivoire team-ecuador",
      "date" : "2026-06-14T23:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "PHL",
      "team1" : "Côte d'Ivoire",
      "team2" : "Ecuador"
   },
   {
      "class" : "round-group-f stadium-mty team-sweden team-tunisia",
      "date" : "2026-06-15T04:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "MTY",
      "team1" : "Sweden",
      "team2" : "Tunisia"
   },
   {
      "class" : "round-group-h stadium-atl team-spain team-cabo-verde",
      "date" : "2026-06-15T16:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Spain",
      "team2" : "Cabo Verde"
   },
   {
      "class" : "round-group-g stadium-sea team-belgium team-egypt",
      "date" : "2026-06-15T22:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "SEA",
      "team1" : "Belgium",
      "team2" : "Egypt"
   },
   {
      "class" : "round-group-h stadium-mia team-saudi-arabia team-uruguay",
      "date" : "2026-06-15T22:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Saudi Arabia",
      "team2" : "Uruguay"
   },
   {
      "class" : "round-group-g stadium-lax team-ir-iran team-new-zealand",
      "date" : "2026-06-16T04:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "LAX",
      "team1" : "IR Iran",
      "team2" : "New Zealand"
   },
   {
      "class" : "round-group-i stadium-ewr team-france team-senegal",
      "date" : "2026-06-16T19:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "EWR",
      "team1" : "France",
      "team2" : "Senegal"
   },
   {
      "class" : "round-group-i stadium-bos team-iraq team-norway",
      "date" : "2026-06-16T22:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Iraq",
      "team2" : "Norway"
   },
   {
      "class" : "round-group-j stadium-mci team-argentina team-algeria",
      "date" : "2026-06-17T02:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Argentina",
      "team2" : "Algeria"
   },
   {
      "class" : "round-group-j stadium-sfo team-austria team-jordan",
      "date" : "2026-06-17T07:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Austria",
      "team2" : "Jordan"
   },
   {
      "class" : "round-group-k stadium-iah team-portugal team-congo-dr",
      "date" : "2026-06-17T18:00:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Portugal",
      "team2" : "Congo DR"
   },
   {
      "class" : "round-group-l stadium-dal team-england team-croatia",
      "date" : "2026-06-17T21:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "DAL",
      "team1" : "England",
      "team2" : "Croatia"
   },
   {
      "class" : "round-group-l stadium-yyz team-ghana team-panama",
      "date" : "2026-06-17T23:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Ghana",
      "team2" : "Panama"
   },
   {
      "class" : "round-group-k stadium-mex team-uzbekistan team-colombia",
      "date" : "2026-06-18T04:00:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "MEX",
      "team1" : "Uzbekistan",
      "team2" : "Colombia"
   },
   {
      "class" : "round-group-a stadium-atl team-czechia team-south-africa",
      "date" : "2026-06-18T16:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Czechia",
      "team2" : "South Africa"
   },
   {
      "class" : "round-group-b stadium-lax team-switzerland team-bosnia-and-herzegovina",
      "date" : "2026-06-18T22:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Switzerland",
      "team2" : "Bosnia and Herzegovina"
   },
   {
      "class" : "round-group-b stadium-yvr team-canada team-qatar",
      "date" : "2026-06-19T01:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "YVR",
      "team1" : "Canada",
      "team2" : "Qatar"
   },
   {
      "class" : "round-group-a stadium-gdl team-mexico team-south-korea",
      "date" : "2026-06-19T03:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "GDL",
      "team1" : "Mexico",
      "team2" : "South Korea"
   },
   {
      "class" : "round-group-d stadium-sea team-usa team-australia",
      "date" : "2026-06-19T22:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "SEA",
      "team1" : "USA",
      "team2" : "Australia"
   },
   {
      "class" : "round-group-c stadium-bos team-scotland team-morocco",
      "date" : "2026-06-19T22:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Scotland",
      "team2" : "Morocco"
   },
   {
      "class" : "round-group-c stadium-phl team-brazil team-haiti",
      "date" : "2026-06-20T01:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "PHL",
      "team1" : "Brazil",
      "team2" : "Haiti"
   },
   {
      "class" : "round-group-d stadium-sfo team-türkiye team-paraguay",
      "date" : "2026-06-20T07:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Türkiye",
      "team2" : "Paraguay"
   },
   {
      "class" : "round-group-f stadium-iah team-netherlands team-sweden",
      "date" : "2026-06-20T18:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Netherlands",
      "team2" : "Sweden"
   },
   {
      "class" : "round-group-e stadium-yyz team-germany team-côte-d'ivoire",
      "date" : "2026-06-20T20:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Germany",
      "team2" : "Côte d'Ivoire"
   },
   {
      "class" : "round-group-e stadium-mci team-ecuador team-curaçao",
      "date" : "2026-06-21T01:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Ecuador",
      "team2" : "Curaçao"
   },
   {
      "class" : "round-group-f stadium-mty team-tunisia team-japan",
      "date" : "2026-06-21T06:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "MTY",
      "team1" : "Tunisia",
      "team2" : "Japan"
   },
   {
      "class" : "round-group-h stadium-atl team-spain team-saudi-arabia",
      "date" : "2026-06-21T16:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Spain",
      "team2" : "Saudi Arabia"
   },
   {
      "class" : "round-group-g stadium-lax team-belgium team-ir-iran",
      "date" : "2026-06-21T22:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Belgium",
      "team2" : "IR Iran"
   },
   {
      "class" : "round-group-h stadium-mia team-uruguay team-cabo-verde",
      "date" : "2026-06-21T22:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Uruguay",
      "team2" : "Cabo Verde"
   },
   {
      "class" : "round-group-g stadium-yvr team-new-zealand team-egypt",
      "date" : "2026-06-22T04:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "YVR",
      "team1" : "New Zealand",
      "team2" : "Egypt"
   },
   {
      "class" : "round-group-j stadium-dal team-argentina team-austria",
      "date" : "2026-06-22T18:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Argentina",
      "team2" : "Austria"
   },
   {
      "class" : "round-group-i stadium-phl team-france team-iraq",
      "date" : "2026-06-22T21:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "PHL",
      "team1" : "France",
      "team2" : "Iraq"
   },
   {
      "class" : "round-group-i stadium-ewr team-norway team-senegal",
      "date" : "2026-06-23T00:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Norway",
      "team2" : "Senegal"
   },
   {
      "class" : "round-group-j stadium-sfo team-jordan team-algeria",
      "date" : "2026-06-23T06:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Jordan",
      "team2" : "Algeria"
   },
   {
      "class" : "round-group-k stadium-iah team-portugal team-uzbekistan",
      "date" : "2026-06-23T18:00:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Portugal",
      "team2" : "Uzbekistan"
   },
   {
      "class" : "round-group-l stadium-bos team-england team-ghana",
      "date" : "2026-06-23T20:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "BOS",
      "team1" : "England",
      "team2" : "Ghana"
   },
   {
      "class" : "round-group-l stadium-yyz team-panama team-croatia",
      "date" : "2026-06-23T23:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Panama",
      "team2" : "Croatia"
   },
   {
      "class" : "round-group-k stadium-gdl team-colombia team-congo-dr",
      "date" : "2026-06-24T04:00:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "GDL",
      "team1" : "Colombia",
      "team2" : "Congo DR"
   },
   {
      "class" : "round-group-b stadium-yvr team-switzerland team-canada",
      "date" : "2026-06-24T22:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "YVR",
      "team1" : "Switzerland",
      "team2" : "Canada"
   },
   {
      "class" : "round-group-b stadium-sea team-bosnia-and-herzegovina team-qatar",
      "date" : "2026-06-24T22:00:00Z",
      "description" : "Group B",
      "group" : "Group B",
      "result" : null,
      "stadium" : "SEA",
      "team1" : "Bosnia and Herzegovina",
      "team2" : "Qatar"
   },
   {
      "class" : "round-group-c stadium-mia team-scotland team-brazil",
      "date" : "2026-06-24T22:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Scotland",
      "team2" : "Brazil"
   },
   {
      "class" : "round-group-c stadium-atl team-morocco team-haiti",
      "date" : "2026-06-24T22:00:00Z",
      "description" : "Group C",
      "group" : "Group C",
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Morocco",
      "team2" : "Haiti"
   },
   {
      "class" : "round-group-a stadium-mex team-czechia team-mexico",
      "date" : "2026-06-25T03:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "MEX",
      "team1" : "Czechia",
      "team2" : "Mexico"
   },
   {
      "class" : "round-group-a stadium-mty team-south-africa team-south-korea",
      "date" : "2026-06-25T03:00:00Z",
      "description" : "Group A",
      "group" : "Group A",
      "result" : null,
      "stadium" : "MTY",
      "team1" : "South Africa",
      "team2" : "South Korea"
   },
   {
      "class" : "round-group-e stadium-phl team-curaçao team-côte-d'ivoire",
      "date" : "2026-06-25T20:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "PHL",
      "team1" : "Curaçao",
      "team2" : "Côte d'Ivoire"
   },
   {
      "class" : "round-group-e stadium-ewr team-ecuador team-germany",
      "date" : "2026-06-25T20:00:00Z",
      "description" : "Group E",
      "group" : "Group E",
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Ecuador",
      "team2" : "Germany"
   },
   {
      "class" : "round-group-f stadium-dal team-japan team-sweden",
      "date" : "2026-06-26T00:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Japan",
      "team2" : "Sweden"
   },
   {
      "class" : "round-group-f stadium-mci team-tunisia team-netherlands",
      "date" : "2026-06-26T00:00:00Z",
      "description" : "Group F",
      "group" : "Group F",
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Tunisia",
      "team2" : "Netherlands"
   },
   {
      "class" : "round-group-d stadium-lax team-türkiye team-usa",
      "date" : "2026-06-26T05:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Türkiye",
      "team2" : "USA"
   },
   {
      "class" : "round-group-d stadium-sfo team-paraguay team-australia",
      "date" : "2026-06-26T05:00:00Z",
      "description" : "Group D",
      "group" : "Group D",
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Paraguay",
      "team2" : "Australia"
   },
   {
      "class" : "round-group-i stadium-bos team-norway team-france",
      "date" : "2026-06-26T19:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Norway",
      "team2" : "France"
   },
   {
      "class" : "round-group-i stadium-yyz team-senegal team-iraq",
      "date" : "2026-06-26T19:00:00Z",
      "description" : "Group I",
      "group" : "Group I",
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Senegal",
      "team2" : "Iraq"
   },
   {
      "class" : "round-group-h stadium-iah team-cabo-verde team-saudi-arabia",
      "date" : "2026-06-27T01:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Cabo Verde",
      "team2" : "Saudi Arabia"
   },
   {
      "class" : "round-group-h stadium-gdl team-uruguay team-spain",
      "date" : "2026-06-27T02:00:00Z",
      "description" : "Group H",
      "group" : "Group H",
      "result" : null,
      "stadium" : "GDL",
      "team1" : "Uruguay",
      "team2" : "Spain"
   },
   {
      "class" : "round-group-g stadium-sea team-egypt team-ir-iran",
      "date" : "2026-06-27T06:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "SEA",
      "team1" : "Egypt",
      "team2" : "IR Iran"
   },
   {
      "class" : "round-group-g stadium-yvr team-new-zealand team-belgium",
      "date" : "2026-06-27T06:00:00Z",
      "description" : "Group G",
      "group" : "Group G",
      "result" : null,
      "stadium" : "YVR",
      "team1" : "New Zealand",
      "team2" : "Belgium"
   },
   {
      "class" : "round-group-l stadium-ewr team-panama team-england",
      "date" : "2026-06-27T21:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Panama",
      "team2" : "England"
   },
   {
      "class" : "round-group-l stadium-phl team-croatia team-ghana",
      "date" : "2026-06-27T21:00:00Z",
      "description" : "Group L",
      "group" : "Group L",
      "result" : null,
      "stadium" : "PHL",
      "team1" : "Croatia",
      "team2" : "Ghana"
   },
   {
      "class" : "round-group-k stadium-mia team-colombia team-portugal",
      "date" : "2026-06-27T23:30:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Colombia",
      "team2" : "Portugal"
   },
   {
      "class" : "round-group-k stadium-atl team-congo-dr team-uzbekistan",
      "date" : "2026-06-27T23:30:00Z",
      "description" : "Group K",
      "group" : "Group K",
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Congo DR",
      "team2" : "Uzbekistan"
   },
   {
      "class" : "round-group-j stadium-mci team-algeria team-austria",
      "date" : "2026-06-28T03:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Algeria",
      "team2" : "Austria"
   },
   {
      "class" : "round-group-j stadium-dal team-jordan team-argentina",
      "date" : "2026-06-28T03:00:00Z",
      "description" : "Group J",
      "group" : "Group J",
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Jordan",
      "team2" : "Argentina"
   },
   {
      "class" : "round-round-of-32 stadium-lax",
      "date" : "2026-06-28T22:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Runner-up Group A",
      "team2" : "Runner-up Group B"
   },
   {
      "class" : "round-round-of-32 stadium-iah",
      "date" : "2026-06-29T18:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Winner Group C",
      "team2" : "Runner-up Group F"
   },
   {
      "class" : "round-round-of-32 stadium-bos team-third-place-group-a/b/c/d/f",
      "date" : "2026-06-29T20:30:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Winner Group E",
      "team2" : "Third place Group A/B/C/D/F"
   },
   {
      "class" : "round-round-of-32 stadium-mty",
      "date" : "2026-06-30T03:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "MTY",
      "team1" : "Winner Group F",
      "team2" : "Runner-up Group C"
   },
   {
      "class" : "round-round-of-32 stadium-dal",
      "date" : "2026-06-30T18:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Runner-up Group E",
      "team2" : "Runner-up Group I"
   },
   {
      "class" : "round-round-of-32 stadium-ewr team-third-place-group-c/d/f/g/h",
      "date" : "2026-06-30T21:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Winner Group I",
      "team2" : "Third place Group C/D/F/G/H"
   },
   {
      "class" : "round-round-of-32 stadium-mex team-third-place-group-c/e/f/h/i",
      "date" : "2026-07-01T03:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "MEX",
      "team1" : "Winner Group A",
      "team2" : "Third place Group C/E/F/H/I"
   },
   {
      "class" : "round-round-of-32 stadium-atl team-third-place-group-e/h/i/j/k",
      "date" : "2026-07-01T16:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Winner Group L",
      "team2" : "Third place Group E/H/I/J/K"
   },
   {
      "class" : "round-round-of-32 stadium-sea team-third-place-group-a/e/h/i/j",
      "date" : "2026-07-01T23:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "SEA",
      "team1" : "Winner Group G",
      "team2" : "Third place Group A/E/H/I/J"
   },
   {
      "class" : "round-round-of-32 stadium-sfo team-third-place-group-b/e/f/i/j",
      "date" : "2026-07-02T03:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "SFO",
      "team1" : "Winner Group D",
      "team2" : "Third place Group B/E/F/I/J"
   },
   {
      "class" : "round-round-of-32 stadium-lax",
      "date" : "2026-07-02T22:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Winner Group H",
      "team2" : "Runner-up Group J"
   },
   {
      "class" : "round-round-of-32 stadium-yyz",
      "date" : "2026-07-02T23:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "YYZ",
      "team1" : "Runner-up Group K",
      "team2" : "Runner-up Group L"
   },
   {
      "class" : "round-round-of-32 stadium-yvr team-third-place-group-e/f/g/i/j",
      "date" : "2026-07-03T06:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "YVR",
      "team1" : "Winner Group B",
      "team2" : "Third place Group E/F/G/I/J"
   },
   {
      "class" : "round-round-of-32 stadium-dal",
      "date" : "2026-07-03T19:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Runner-up Group D",
      "team2" : "Runner-up Group G"
   },
   {
      "class" : "round-round-of-32 stadium-mia",
      "date" : "2026-07-03T22:00:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Winner Group J",
      "team2" : "Runner-up Group H"
   },
   {
      "class" : "round-round-of-32 stadium-mci team-third-place-group-d/e/i/j/l",
      "date" : "2026-07-04T02:30:00Z",
      "description" : "Round of 32",
      "group" : null,
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Winner Group K",
      "team2" : "Third place Group D/E/I/J/L"
   },
   {
      "class" : "round-round-of-16 stadium-iah",
      "date" : "2026-07-04T18:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "IAH",
      "team1" : "Winner Match 73",
      "team2" : "Winner Match 75"
   },
   {
      "class" : "round-round-of-16 stadium-phl",
      "date" : "2026-07-04T21:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "PHL",
      "team1" : "Winner Match 74",
      "team2" : "Winner Match 77"
   },
   {
      "class" : "round-round-of-16 stadium-ewr",
      "date" : "2026-07-05T20:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Winner Match 76",
      "team2" : "Winner Match 78"
   },
   {
      "class" : "round-round-of-16 stadium-mex",
      "date" : "2026-07-06T02:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "MEX",
      "team1" : "Winner Match 79",
      "team2" : "Winner Match 80"
   },
   {
      "class" : "round-round-of-16 stadium-dal",
      "date" : "2026-07-06T20:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Winner Match 83",
      "team2" : "Winner Match 84"
   },
   {
      "class" : "round-round-of-16 stadium-sea",
      "date" : "2026-07-07T03:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "SEA",
      "team1" : "Winner Match 81",
      "team2" : "Winner Match 82"
   },
   {
      "class" : "round-round-of-16 stadium-atl",
      "date" : "2026-07-07T16:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Winner Match 86",
      "team2" : "Winner Match 88"
   },
   {
      "class" : "round-round-of-16 stadium-yvr",
      "date" : "2026-07-07T23:00:00Z",
      "description" : "Round of 16",
      "group" : null,
      "result" : null,
      "stadium" : "YVR",
      "team1" : "Winner Match 85",
      "team2" : "Winner Match 87"
   },
   {
      "class" : "round-quarterfinals stadium-bos",
      "date" : "2026-07-09T20:00:00Z",
      "description" : "Quarterfinals",
      "group" : null,
      "result" : null,
      "stadium" : "BOS",
      "team1" : "Winner Match 89",
      "team2" : "Winner Match 90"
   },
   {
      "class" : "round-quarterfinals stadium-lax",
      "date" : "2026-07-10T22:00:00Z",
      "description" : "Quarterfinals",
      "group" : null,
      "result" : null,
      "stadium" : "LAX",
      "team1" : "Winner Match 93",
      "team2" : "Winner Match 94"
   },
   {
      "class" : "round-quarterfinals stadium-mia",
      "date" : "2026-07-11T21:00:00Z",
      "description" : "Quarterfinals",
      "group" : null,
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Winner Match 91",
      "team2" : "Winner Match 92"
   },
   {
      "class" : "round-quarterfinals stadium-mci",
      "date" : "2026-07-12T02:00:00Z",
      "description" : "Quarterfinals",
      "group" : null,
      "result" : null,
      "stadium" : "MCI",
      "team1" : "Winner Match 95",
      "team2" : "Winner Match 96"
   },
   {
      "class" : "round-semifinals stadium-dal",
      "date" : "2026-07-14T20:00:00Z",
      "description" : "Semifinals",
      "group" : null,
      "result" : null,
      "stadium" : "DAL",
      "team1" : "Winner Match 97",
      "team2" : "Winner Match 98"
   },
   {
      "class" : "round-semifinals stadium-atl",
      "date" : "2026-07-15T19:00:00Z",
      "description" : "Semifinals",
      "group" : null,
      "result" : null,
      "stadium" : "ATL",
      "team1" : "Winner Match 99",
      "team2" : "Winner Match 100"
   },
   {
      "class" : "round-third-place-playoff stadium-mia",
      "date" : "2026-07-18T21:00:00Z",
      "description" : "Third Place Playoff",
      "group" : null,
      "result" : null,
      "stadium" : "MIA",
      "team1" : "Runner-up Match 101",
      "team2" : "Runner-up Match 102"
   },
   {
      "class" : "round-final stadium-ewr",
      "date" : "2026-07-19T19:00:00Z",
      "description" : "Final",
      "group" : null,
      "result" : null,
      "stadium" : "EWR",
      "team1" : "Winner Match 101",
      "team2" : "Winner Match 102"
   }
]
;

