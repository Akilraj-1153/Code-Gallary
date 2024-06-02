import React from 'react';
import Editor from '@monaco-editor/react';

function Code_HTML() {
  return (
    <div className='h-full w-full overflow-scroll  p-1'>
      <Editor height='calc(100% - 1vh)' defaultLanguage="html" defaultValue="// some comment" theme="vs-dark" />
    </div>
  );
}

export default Code_HTML;
