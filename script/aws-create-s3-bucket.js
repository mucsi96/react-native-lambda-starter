const program = require('commander');
const exec = require('child_process').execSync;
const awsResource = require('./aws-resource');

program
  .arguments('<bucket_name>')
  .action((bucketName) => {
    if (awsResource.getResource('s3-bucket')) return;
    exec(`aws s3 mb s3://${bucketName}`);
    exec(`aws s3 website s3://${bucketName} --index-document index.html --error-document error.html`);
    const region = exec(`aws configure get region`).toString().trim();
    const endpoint = `http://${bucketName}.s3-website.${region}.amazonaws.com`;
    awsResource.createResource('s3-bucket', {endpoint});
  });

program.parse(process.argv);
