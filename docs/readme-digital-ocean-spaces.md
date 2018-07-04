## Create a DigitalOcean Space Presigning Endpoint

### Procedure

- [Create a DigitalOcean Space and API key](https://console.cloud.google.com/project)
- [Configure your endpoint environment variables](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/config/dev.env)
- [Add a upload signing route](https://github.com/hutchgrant/ckeditor5-google-do/blob/master/example/index.js)
- [Utilize aws-sdk to presign DO uploads](https://github.com/aws/aws-sdk-js)

## Digital Ocean Spaces CORS

To configure CORs to allow your specific domain and the headers required:

- Login and open the dashboard for your digital ocean spaces account on digitalocean.com.
- Select the space you're using
- Select the "Settings" tab.
- Under CORS Configurations, select the "More" dropdown and then click "Edit"
- In the popup modal under Origin, for example, set it to just: \*
- Under Allowed Methods set get and put
- Under Allowed Headers add both headers: Content-Type, x-amz-acl
- Click Save Options

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
