import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import files from './Data';

function Code_CSS({ updateIframeContent }) {
  const [code, setCode] = useState(files['style.css'].value);
  const file = files['style.css'];

  const handleEditorChange = (value) => {
    setCode(value);
    updateIframeContent(value, 'style.css');
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
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
      }}
    />
  </div>
  );
}

export default Code_CSS;
