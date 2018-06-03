## standard image upload button

### build integration

https://docs.ckeditor.com/ckeditor5/latest/builds/guides/development/custom-builds.html

`npm install ckeditor5-s3-upload`

add this plugin and remove the ckfinder and easyimage plugins

```javascript
// build-config.js

module.exports = {
  // ...

  plugins: [
    "@ckeditor/ckeditor5-essentials/src/essentials",
    // ...

    //'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
    //'@ckeditor/ckeditor5-easy-image/src/easyimage',

    "ckeditor5-s3-upload/src/s3upload"

    // ...
  ],

  // ...

  config: {
    toolbar: {
      items: [
        "headings",
        "bold",
        "italic",
        "imageUpload",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "undo",
        "redo"
      ]
    }
    // ...
  }
};
```

### configuration

```javascript
ClassicEditor.create(document.querySelector("#editor"), {
  s3Upload: {
    policyUrl: "http://127.0.0.1/my-upload-endpoint"
  }
});
```

### backend

the endpoint will receive a filename as a query parameter, and will need to respond with s3 credentials JSON in the following format.

```json
{
    "endpoint_url": " ... ",
    "params": {
        "key": " ... ",
        "acl": " ... ",
        "success_action_status": " ... ",
        "policy": " ... ",
        "x-amz-algorithm": " ... ",
        "x-amz-credential": " ... ",
        "x-amz-date": " ... ",
        "x-amz-signature": " ... "
    }
}
```
