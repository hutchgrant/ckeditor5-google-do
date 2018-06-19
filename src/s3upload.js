import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

import Adapter from './adapter';

export default class S3Upload extends Plugin {

    static get requires() {
        return [FileRepository];
    }

    static get pluginName() {
        return 'S3Upload';
    }

    init() {
        const url = this.editor.config.get('s3Upload.policyUrl');

        if (!url) {
            console.warn('s3Upload.policyUrl is not configured')
            return;
        }

        const mapUrl = this.editor.config.get('s3Upload.mapUrl');

        this.editor.plugins.get('FileRepository').createUploadAdapter = loader => new Adapter(loader, url, mapUrl);
    }
}
