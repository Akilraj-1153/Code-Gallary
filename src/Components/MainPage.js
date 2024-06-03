import React, { useRef, useState } from 'react';
import Code_JS from './Code_JS';
import Code_HTML from './Code_HTML';
import Code_CSS from './Code_CSS';
import files from './Data';

function MainPage() {
  const [htmlCode, setHtmlCode] = useState(files['index.html'].value);
  const [cssCode, setCssCode] = useState(files['style.css'].value);
  const [jsCode, setJsCode] = useState(files['script.js'].value);
  const iframeRef = useRef(null);

  const updateIframeContent = (updatedCode, fileType) => {
    if (fileType === 'index.html') {
      setHtmlCode(updatedCode);
    } else if (fileType === 'style.css') {
      setCssCode(updatedCode);
    } else if (fileType === 'script.js') {
      setJsCode(updatedCode);
    }

    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${fileType === 'style.css' ? updatedCode : cssCode}</style>
        </head>
        <body>
          ${fileType === 'index.html' ? updatedCode : htmlCode}
          <script>${fileType === 'script.js' ? updatedCode : jsCode}</script>
        </body>
      </html>
    `);
    document.close();
  };

  return (
    <div className='h-full w-full rounded-md flex gap-2 xs:flex-col md:flex-row'>
      <div className='codeWindow md:h-full md:w-[60%] xs:h-[60%] xs:w-full rounded-md flex gap-2 xs:flex-col lg:flex-row xs:overflow-auto md:overflow-hidden'>
        <div className='xs:min-h-full w-[50%] xs:w-full xs:h-full md:min-h-[50%] rounded-md flex flex-col gap-2  md:flex-row lg:flex-col'>
          <div className='HTML w-full h-[50%] md:w-[50%] md:h-full lg:w-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
            <Code_HTML updateIframeContent={updateIframeContent} />
          </div>
          <div className='CSS w-full h-[50%]  md:w-[50%] lg:w-full md:h-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
            <Code_CSS updateIframeContent={updateIframeContent} />
          </div>
        </div>
        <div className='JS xs:min-h-full w-[50%] xs:h-full xs:w-full md:min-h-[50%] bg-[#1e1e1e] rounded-md flex flex-col'>
          <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
          <Code_JS updateIframeContent={updateIframeContent} />
        </div>
      </div>
      <div className='UIwindow md:h-full md:w-[40%] xs:h-[40%] xs:w-full bg-red-900 rounded-md overflow-hidden'>
      <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
        <iframe ref={iframeRef} className='bg-blue-300 h-[100%] w-full'></iframe>
      </div>
    </div>
  );
}

export default MainPage;

