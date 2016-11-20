const program = require('commander');
const exec = require('child_process').execSync;
const fs = require('fs');

program
  .arguments('<config_path>')
  .action((configPath) => {
    exec(`aws cognito-idp create-user-pool --cli-input-json file://${configPath}`);
  });

program.parse(process.argv);
