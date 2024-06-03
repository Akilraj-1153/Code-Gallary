
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import files from './Data';

function Code_HTML({ updateIframeContent }) {
  const [code, setCode] = useState(files['index.html'].value);
  const file = files['index.html'];

  const handleEditorChange = (value) => {
    setCode(value);
    updateIframeContent(value, 'index.html');
  };

  return (
    <div className='h-full w-full overflow-scroll p-1 '>
      <Editor
        height='calc(100% - 1vh)'
        width='100%'
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={handleEditorChange}
        className='text-wrap'
      />
    </div>
  );
}

export default Code_HTML;