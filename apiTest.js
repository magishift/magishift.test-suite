const automaticApiTest = require('./core');
const server = require('../server/server.js');
const path = require('path');
const fs = require('fs');

const url = 'http://localhost:3000/api/v1';

// Load testing environment
const testFolder = path.resolve(__dirname, './configs/');
// ------------------------

function runAutoTest(testFolder) {
  console.info(`Run product testing, on dir: ${testFolder}`);

  var files = fs.readdirSync(testFolder);

  var testConfigs = [];

  files.forEach(file => {
    const testConfig = require(`${testFolder}/${file}`);

    testConfigs = testConfigs.concat(testConfig);
  });

  automaticApiTest.run(testConfigs, server, url, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

runAutoTest(testFolder);
