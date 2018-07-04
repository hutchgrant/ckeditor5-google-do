## Create a Google Cloud Bucket Presigning Endpoint

### Procedure

- [Create Project](https://console.cloud.google.com/project)
- [Enable Billing](https://support.google.com/cloud/answer/6293499#enable-billing)
- [Enable Cloud Storage API](https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com)
- [Create Service Account](https://cloud.google.com/docs/authentication/getting-started)
- [Configure your endpoint environment variables](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/config/dev.env)
- [Add a upload signing route](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/index.js)
- [Utilize @google-cloud/storage to presign uploads](https://github.com/googleapis/nodejs-storage)

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
