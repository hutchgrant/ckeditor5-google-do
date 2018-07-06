## Create a Google Cloud Bucket Presigning Endpoint

### Procedure

- [Create Project](https://console.cloud.google.com/project)
- [Enable Billing](https://support.google.com/cloud/answer/6293499#enable-billing)
- [Enable Cloud Storage API](https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com)
- [Create Service Account](https://cloud.google.com/docs/authentication/getting-started)
- Set Bucket Permission - see below
- [Configure your endpoint environment variables](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/config/dev.env)
- Configure CORS with gsutils - see below
- [Add a upload signing route](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/index.js)
- [Utilize @google-cloud/storage to presign uploads](https://github.com/googleapis/nodejs-storage)

### Bucket CORS Config

- [Install GCloud SDK](https://cloud.google.com/sdk/docs/)

We need a tool called gsutil to set the CORS configuration. Once installed run:

```bash
cd example
gsutil cors set cors.json gs://your-bucket-name
```

Which will set the cors config on the bucket to:

```
[
    {
      "origin": "*",
      "responseHeader": ["Content-Type", "x-amz-acl"],
      "method": ["GET", "PUT", "DELETE"],
      "maxAgeSeconds": 3600
    }
]
```

### Bucket Permissions

Back in your cloud bucket browser, on the right of the bucket item click the "..." for more options, then select "edit bucket permissions".

Under "Add Members" type: allUsers (case sensitive) select a role dropdown click "storage" then "storage object viewer". Basically you're giving the public permission to view your bucket.

### Configure Environment

edit the config/dev.env with your bucket credentials:

```
# Google Cloud Storage
S3_ENDPOINT=https://storage.googleapis.com
S3_REGION=northamerica-northeast1
S3_BUCKET=your-bucket-name
S3_POLICY=write
S3_EXPIRY='03-17-2025'
GOOGLE_APPLICATION_CREDENTIALS=/home/user/Downloads/your-service-account.json
```

### Install Example

```bash
cd ./example
npm install && npm install --prefix client
```

### Run Example

```bash
npm run dev
```

You can view the dev client at http://localhost:3000

You can access the server at http://localhost:5000
