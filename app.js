const electron = require('electron');
const keys = require(__dirname + '/keys.json');
const AWS = require('aws-sdk'); 

const {app} = electron;

console.log('checking to see if we managed to load =' + keys.region + "=");

AWS.config.update({"accessKeyId": keys.awsAccessKey, "secretAccessKey": keys.awsSecretKey, "region": keys.region});
const s3 = new AWS.S3(); 
const params = {
  "Bucket" : keys.bucketName,
  "Key" : keys.key,
};
s3.getObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
