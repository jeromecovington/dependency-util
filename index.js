#!/usr/bin/env node

'use strict';

var fs = require("fs");


// See http://stackoverflow.com/a/13381344/62983
fs.readdir("./node_modules", function (err, dirs) {
  if (err) {
    console.log(err);
    return;
  }
  dirs.forEach(function (dir) {
    if (dir.indexOf(".") !== 0) {
      var packageJsonFile = "./node_modules/" + dir + "/package.json";
      if (fs.existsSync(packageJsonFile)) {
        fs.readFile(packageJsonFile, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            var json = JSON.parse(data);
            console.log('"' + json.name + '": "' + json.version + '",');
          }
        });
      }
    }
  });
});

