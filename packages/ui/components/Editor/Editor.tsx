import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './editor.module.css';
const Editor = () => {
  const textDefault =
    'Understand if a knock in mouse model is necessary for your disease. It typically takes 9-12 months to develop a new knock-in model. You will need an expert to design the mouse model and then work with a lab to generate the model.Use this space to document your conversations, thoughts and bookmark links you can later refer back to.';

  const [text, setText] = useState(textDefault);

  return (
    <div className={styles['editor']}>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
    </div>
  );
};

export default Editor;
