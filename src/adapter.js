import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default class Adapter {
  constructor(loader, url, mapUrl) {
    this.loader = loader;
    this.url = url;
  }

  upload() {
    return this.getCredentials().then(this.uploadImage.bind(this));
  }

  abort() {
    source.cancel('Operation canceled by the user.');
  }

  getCredentials() {
    return new Promise(async (resolve, reject) => {
      let filename = this.loader.file.name;
      let filetype = this.loader.file.type;
      try {
        let res = await axios.get(
          `${this.url}?filename=${filename}&filetype=${filetype}`,
          {
            cancelToken: source.token
          }
        );
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadImage(s3creds) {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.put(s3creds.endpoint_url, this.loader.file, {
          headers: {
            'Content-Type': this.loader.file.type,
            'x-amz-acl': s3creds.acl
          },
          cancelToken: source.token
        });
        resolve({ default: s3creds.location });
      } catch (err) {
        return reject(err);
      }
    });
  }
}
