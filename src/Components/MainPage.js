import React from 'react';
import Code_JS from './Code_JS';
import Code_HTML from './Code_HTML';
import Code_CSS from './Code_CSS';

function MainPage() {
  return (
    <div className='h-full w-full rounded-md flex gap-2 xs:flex-col md:flex-row'>
        <div className='codeWindow md:h-full md:w-[60%] xs:h-[60%] xs:w-full rounded-md flex gap-2 xs:flex-col lg:flex-row xs:overflow-auto md:overflow-hidden'>
        <div className='xs:min-h-full w-[50%] xs:w-full xs:h-full md:min-h-[50%] rounded-md flex flex-col gap-2  md:flex-row lg:flex-col'>
          <div className='HTML w-full h-[50%] md:w-[50%] md:h-full lg:w-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
            <Code_HTML />
          </div>
          <div className='CSS w-full h-[50%]  md:w-[50%] lg:w-full md:h-full bg-[#1e1e1e] rounded-md flex flex-col'>
            <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
            <Code_CSS />
          </div>
        </div>
        <div className='JS xs:min-h-full w-[50%] xs:h-full xs:w-full md:min-h-[50%] bg-[#1e1e1e] rounded-md flex flex-col'>
          <div className='h-[5vh] w-full bg-white/30 rounded-md'></div>
          <Code_JS />
        </div>
      </div>
      <div className='UIwindow md:h-full md:w-[40%] xs:h-[40%] xs:w-full bg-red-900 rounded-md'></div>
      
    </div>
  );
}

export default MainPage;
