import React, { Component } from 'react';
import './App.css';
import CKEditor from './ckeditor';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CKConfig from './config.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>CKEditor 5 using custom build</h2>
        <CKEditor
          onChange={data => console.log(data)}
          config={CKConfig}
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5</p>"
        />
      </div>
    );
  }
}

export default App;
