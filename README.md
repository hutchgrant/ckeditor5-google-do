## File Upload to Google Cloud Storage or DigitalOcean Spaces Plugin for CKEditor5

This is a fork of https://github.com/mjadobson/ckeditor5-sss-upload, that substitutes amazon s3 upload support for Google Cloud Storage and DigitalOcean Spaces.

## Google Cloud Prerequisites

- [Create Project](https://console.cloud.google.com/project)
- [Enable Billing](https://support.google.com/cloud/answer/6293499#enable-billing)
- [Enable Cloud Storage API](https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com)
- [Create Service Account](https://cloud.google.com/docs/authentication/getting-started)
- [Configure your endpoint environment variables](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/examples/config/dev.env)
- [Add a upload signing route](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/examples/index.js)
- [Utilize @google-cloud/storage to presign uploads](https://github.com/googleapis/nodejs-storage)

## DigitalOcean Space Prerequisite

- [Create a DigitalOcean Space and API key](https://console.cloud.google.com/project)
- [Configure your endpoint environment variables](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/examples/config/dev.env)
- [Add a upload signing route](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/examples/index.js)
- [Utilize aws-sdk to presign DO uploads](https://github.com/aws/aws-sdk-js)

### Build Integration

https://docs.ckeditor.com/ckeditor5/latest/builds/guides/development/custom-builds.html

`npm install ckeditor5-google-do`

Add this plugin and remove the ckfinder and easyimage plugins

```javascript
// build-config.js

module.exports = {
  // ...

  plugins: [
    '@ckeditor/ckeditor5-essentials/src/essentials',
    // ...

    //'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
    //'@ckeditor/ckeditor5-easy-image/src/easyimage',

    'ckeditor5-google-go/src/upload'

    // ...
  ],

  // ...

  config: {
    toolbar: {
      items: [
        'headings',
        'bold',
        'italic',
        'imageUpload',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'undo',
        'redo'
      ]
    }
    // ...
  }
};
```

### Configuration

```javascript
ClassicEditor.create(document.querySelector('#editor'), {
  uploadGoogleDO: {
    policyUrl: 'http://127.0.0.1/my-upload-endpoint'
  }
});
```

### Backend

The endpoint will receive a filename and filetype as query parameters, and will need to respond with a presigned url, acl, and completed upload url in JSON format.

```json
{
  "endpoint_url": " ... ",
  "location": "https://url_of_completed_upload",
  "acl": " ... "
}
```
