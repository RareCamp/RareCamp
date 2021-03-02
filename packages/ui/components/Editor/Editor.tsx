import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const textDefault =
    'Understand if a knock in mouse model is necessary for your disease. It typically takes 9-12 months to develop a new knock-in model. You will need an expert to design the mouse model and then work with a lab to generate the model.Use this space to document your conversations, thoughts and bookmark links you can later refer back to.';

  const [text, setText] = useState(textDefault);

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <ReactQuill
      value={text}
      style={{ marginTop: '30px', height: '35vh' }}
      onChange={handleChange}
    />
  );
};

export default Editor;
