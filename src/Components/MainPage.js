import React, { useRef, useState } from 'react';
import Code_JS from './Code_JS';
import Code_HTML from './Code_HTML';
import Code_CSS from './Code_CSS';
import files from './Data';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaRegFileCode } from "react-icons/fa";

function MainPage() {
  const [htmlCode, setHtmlCode] = useState(files['index.html'].value);
  const [cssCode, setCssCode] = useState(files['style.css'].value);
  const [jsCode, setJsCode] = useState(files['script.js'].value);
  const [updatedHtmlCode, setUpdatedHtmlCode] = useState(files['index.html'].value);
  const [updatedCssCode, setUpdatedCssCode] = useState(files['style.css'].value);
  const [updatedJsCode, setUpdatedJsCode] = useState(files['script.js'].value);
  const iframeRef = useRef(null);

  const updateIframeContent = (updatedCode, fileType) => {
    if (fileType === 'index.html') {
      setUpdatedHtmlCode(updatedCode);
    } else if (fileType === 'style.css') {
      setUpdatedCssCode(updatedCode);
    } else if (fileType === 'script.js') {
      setUpdatedJsCode(updatedCode);
    }
  };

  const handlecoderun = () => {
    setHtmlCode(updatedHtmlCode);
    setCssCode(updatedCssCode);
    setJsCode(updatedJsCode);

    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${updatedCssCode}</style>
        </head>
        <body>
          ${updatedHtmlCode}
          <script>${updatedJsCode}</script>
        </body>
      </html>
    `);
    document.close();
  };

  return (
    <div className='h-full w-full rounded-md flex gap-2 xs:flex-col-reverse md:flex-row'>
      <div className='codeWindow md:h-full md:w-[60%] xs:h-[60%] xs:w-full rounded-md flex gap-2 xs:flex-col lg:flex-row xs:overflow-auto md:overflow-hidden'>
        <div className='xs:min-h-full w-[50%] xs:w-full xs:h-full md:min-h-[50%] rounded-md flex flex-col gap-2 md:flex-row lg:flex-col'>
          <div className='HTML w-full h-[50%] md:w-[50%] md:h-full lg:w-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md flex  items-center p-2 gap-2'>
              <IoLogoHtml5 size={30} color='orange'></IoLogoHtml5>
              <h1 className='font-bold font-mateSc'>HTML</h1>
            </div>
            <Code_HTML updateIframeContent={(code) => updateIframeContent(code, 'index.html')} />
          </div>
          <div className='CSS w-full h-[50%] md:w-[50%] lg:w-full md:h-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md flex  items-center p-2 gap-2'>
              <IoLogoCss3 size={30} color='skyblue'></IoLogoCss3>
              <h1 className='font-bold font-mateSc'>CSS</h1>

            </div>
            <Code_CSS updateIframeContent={(code) => updateIframeContent(code, 'style.css')} />
          </div>
        </div>
        <div className='JS xs:min-h-full w-[50%] xs:h-full xs:w-full md:min-h-[50%] bg-[#1e1e1e] rounded-md flex flex-col'>
          <div className='h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2'>
            <RiJavascriptFill size={35} color='yellow'></RiJavascriptFill>
            <h1 className='font-bold font-mateSc'>JS</h1>

          </div>
          <Code_JS updateIframeContent={(code) => updateIframeContent(code, 'script.js')} />
        </div>
      </div>
      <div className='UIwindow md:h-full md:w-[40%] xs:h-[40%] xs:w-full bg-blue-900  rounded-md overflow-hidden'>
        <div className='h-[5vh] w-full bg-white/30  rounded-y-md flex items-center gap-2 p-2'>
          <button onClick={handlecoderun} className='font-mateSc font-bold flex items-center gap-2'>
          <FaRegFileCode size={30}></FaRegFileCode>
            Run</button>
        </div>
        <iframe ref={iframeRef} className='bg-white h-[95%] w-full'></iframe>
      </div>
    </div>
  );
}

export default MainPage;



