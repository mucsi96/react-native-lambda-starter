const program = require('commander');
const exec = require('child_process').execSync;
const awsResource = require('./aws-resource');

program
  .arguments('<config_path> <client_name>')
  .action((configPath, clientName) => {
    if (awsResource.getResource('cognito-user-pool')) return;
    const createUserPoolResult = exec(`aws cognito-idp create-user-pool --cli-input-json file://${configPath}`)
    const userPoolId = createUserPoolResult.toString().split('\t')[3];
    const createUserPoolClientResult = exec(`aws cognito-idp create-user-pool-client --user-pool-id ${userPoolId} --client-name ${clientName}`);
    const clientId = createUserPoolClientResult.toString().split('\t')[1];
    awsResource.createResource('cognito-user-pool', {
      userPoolId,
      clientId
    });
  });

program.parse(process.argv);
