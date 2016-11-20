const program = require('commander');
const exec = require('child_process').execSync;
const open = require('opn');
const awsResource = require('./aws-resource');

program
  .arguments('<bucket_name>')
  .action((bucketName) => {
    getAwsS3Endpoint(bucketName);
  });

program.parse(process.argv);


function getAwsS3Endpoint (bucketName) {
  const bucket = awsResource.getResource('s3-bucket');
  if (!bucket) {
    return console.error(`AWS S3 bucket ${bucketName} is not created yet!`);
  }
  open(bucket.endpoint);
}
