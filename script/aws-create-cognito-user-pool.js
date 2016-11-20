const program = require('commander');
const exec = require('child_process').execSync;
const awsResource = require('./aws-resource');

program
  .arguments('<config_path>')
  .action((configPath) => {
    if (awsResource.getResource('cognito-user-pool')) return;
    const result = exec(`aws cognito-idp create-user-pool --cli-input-json file://${configPath}`).toString().split('\t');
    awsResource.createResource('cognito-user-pool', {id : result[3]});
  });

program.parse(process.argv);
