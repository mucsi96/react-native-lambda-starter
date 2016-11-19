const program = require('commander');
const exec = require('child_process').execSync;
const open = require('opn');

program
  .arguments('<bucket_name>')
  .action((bucketName) => {
    getAwsS3Endpoint(bucketName);
  });

program.parse(process.argv);


function getAwsS3Endpoint (bucketName) {
  const region = exec(`aws configure get region`).toString().trim();
  const endpoint = `http://${bucketName}.s3-website.${region}.amazonaws.com`;
  console.log(endpoint);
  open(endpoint);
}
