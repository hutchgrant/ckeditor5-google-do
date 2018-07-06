import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

import Adapter from './adapter';

export default class UploadGoogleDO extends Plugin {
  static get requires() {
    return [FileRepository];
  }

  static get pluginName() {
    return 'UploadGoogleDO';
  }

  init() {
    const url = this.editor.config.get('uploadGoogleDO.policyUrl');

    if (!url) {
      console.warn('uploadGoogleDO.policyUrl is not configured');
      return;
    }

    this.editor.plugins.get('FileRepository').createUploadAdapter = loader =>
      new Adapter(loader, url);
  }
}