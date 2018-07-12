# Serving URLs with Google App Engine API

### Why serve URLs through Google?

It's faster, less work on your server, and it's free. You can instantly scale an image to any desired size and crop it.

For example, a serving url:

```
https://lh3.googleusercontent.com/IC3N2oUyv50NrYwAZ52WAtiOL5Md9qAiebPks0XscbfycuYjLQULRQrHfG-4t1bDvVm1XaRge1DbnB2zjkyJFFaH=s250-c
```

The last 6 characters can be adjusted for scale(pixels "s250") and crop(the "-c".

### Why isn't everyone using this?

The catch is the serving URL isn't private and you must access the App Engine Image API through app engine only(it won't work entirely locally). Though the image url contains a token which is difficult to guess, google likely has cached copies of your image as well. You can remove a serving url from google after its created, but that's not included with this ckeditor5-google-do plugin. However, [an example for deleting the serving url is still provided](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/index.js#L110) for the endpoint to connect to a DynamicImageClient on App Engine.

### How do I set it up?

See [DynamicImageClient](https://github.com/hutchgrant/DynamicImageClient) sample project for information about setting up a Dynamic Image Client to use with Google's App Engine API

## Modifing the CKEditor5 Configuration with a serveUrl

Modify your ckeditor config with the location of an api endpoint that you will use to handle calls to your app engine java client:

example/client/src/config.js

```js
...
  uploadGoogleDO: {
    policyUrl: '/api/upload-google',
    serveUrl: '/api/serve'
  },
...
```

If you're using the example provided, make sure the following environment variables are uncommented in example/config/dev.env

```
# Serving URLs
DEFAULT_SIZE=512
DEFAULT_CROP=true
PROJECTID=your-project
```
