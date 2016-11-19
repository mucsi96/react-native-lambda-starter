const program = require('commander');
const exec = require('child_process').execSync;

program
  .arguments('<from> <bucket_name>')
  .action((from, bucketName) => {
    exec(`aws s3 sync ${from} s3://${bucketName} --acl public-read`);
  });

program.parse(process.argv);
