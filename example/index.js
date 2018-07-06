const express = require('express');
const app = express();
// Credentials
const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.parse(fs.readFileSync('./config/dev.env'));
// Override process.env by default will skip pre-existing variables
// e.g. GOOGLE_APPLICATION_CREDENTIALS set by gcloud etc not recommended but necessary in my case
// use require('dotenv').config({ path: './config/dev.env' }); instead
for (var k in envConfig) {
  process.env[k] = envConfig[k];
}
const keys = require('./config/keys');

// Google Cloud Storage requirements
const Storage = require('@google-cloud/storage');
const storage = Storage({
  keyFilename: keys.s3.keyfile
});

// DigitalOcean/AWS requirements
const AWS = require('aws-sdk');
const spacesEndpoint = new AWS.Endpoint(keys.s3.endpoint);
const s3 = new AWS.S3({
  accessKeyId: keys.s3.accessKeyId,
  secretAccessKey: keys.s3.secretAccessKey,
  signatureVersion: keys.s3.signature,
  region: keys.s3.region,
  endpoint: spacesEndpoint // DO Spaces specific
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/*
* Google Cloud Storage Buckets get pre-signed url
*/
app.get('/api/upload-google', (req, res) => {
  // const filename = 'File to access, e.g. file.txt';
  const filename = `${req.query.filename}`;

  // These options will allow temporary read access to the file
  const options = {
    action: keys.s3.policy,
    expires: keys.s3.expiry,
    contentType: req.query.filetype
  };

  // Get a signed URL for the file
  storage
    .bucket(keys.s3.bucket)
    .file(filename)
    .getSignedUrl(options)
    .then(results => {
      const url = results[0];
      res.send({
        endpoint_url: url,
        location: `${keys.s3.endpoint}/${keys.s3.bucket}/${filename}`,
        acl: keys.s3.policy
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

/*
* DigitalOcean Spaces get pre-signed url
*/
app.get('/api/upload-do', (req, res) => {
  const key = `${req.query.filename}`;
  // Get a signed URL for the file
  s3.getSignedUrl(
    'putObject',
    {
      Bucket: keys.s3.bucket,
      ContentType: req.query.filetype,
      Key: key,
      ACL: keys.s3.policy
    },
    (err, url) =>
      res.send({
        endpoint_url: url,
        location: `https://${keys.s3.bucket}.${keys.s3.endpoint}/${key}`,
        acl: keys.s3.policy
      })
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
