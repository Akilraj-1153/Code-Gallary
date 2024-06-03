import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import files from './Data';

function Code_JS({ updateIframeContent }) {
  const [code, setCode] = useState(files['script.js'].value);
  const file = files['script.js'];

  const handleEditorChange = (value) => {
    setCode(value);
    updateIframeContent(value, 'script.js');
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

export default Code_JS;
