const program = require('commander');
const exec = require('child_process').execSync;

program
  .arguments('<bucket_name>')
  .action((bucketName) => {
    exec(`aws s3 mb s3://${bucketName}`);
    exec(`aws s3 website s3://${bucketName} --index-document index.html --error-document error.html`);
  });

program.parse(process.argv);
