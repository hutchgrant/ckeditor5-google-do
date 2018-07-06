module.exports = {
  s3: {
    accessKeyId: process.env.ACCESSKEY_ID,
    secretAccessKey: process.env.SECRET_ACCESSKEY,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    bucket: process.env.S3_BUCKET,
    policy: process.env.S3_POLICY,
    signature: process.env.S3_SIGNATURE,
    expiry: process.env.S3_EXPIRY,
    keyfile: process.env.GOOGLE_APPLICATION_CREDENTIALS
  }
};
