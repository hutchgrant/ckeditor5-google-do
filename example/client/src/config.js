import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import UploadGoogleDO from 'ckeditor5-google-do/src/upload';

export default {
  uploadGoogleDO: {
    policyUrl: '/api/upload-google'
  },
  plugins: [
    Bold,
    Clipboard,
    Enter,
    Heading,
    Image,
    ImageStyle,
    ImageToolbar,
    Italic,
    Link,
    List,
    Paragraph,
    Typing,
    Undo,
    ImageUpload,
    ImageCaption,
    UploadGoogleDO
  ],
  toolbar: [
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'undo',
    'redo',
    'imageUpload'
  ],
  image: {
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:alignLeft',
      'imageStyle:side',
      'imageStyle:full',
      'imageStyle:alignCenter',
      'imageStyle:alignRight'
    ],

    styles: ['full', 'alignLeft', 'alignRight', 'alignCenter', 'side']
  }
};
