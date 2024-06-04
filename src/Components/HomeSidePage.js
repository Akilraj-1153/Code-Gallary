import React from 'react';

function HomeSidePage() {
  return (
    <div className='h-full w-full rotate-135 scale-150 flex flex-col gap-2 justify-center items-center select-none opacity'>
      <div className='h-[100vh] w-[100vh] flex items-center justify-center gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>Buttons</h1>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 1</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 2</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 3</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 4</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 5</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 6</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 7</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 8</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 9</button>
        <button className='rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-gray-600'>Button 10</button>
      </div>
      <div className='h-[100vh] w-[100vh]  flex items-center justify-center rotate-0 gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>Inputs</h1>
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='text' placeholder='Input 1' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='email' placeholder='Input 2' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='button' placeholder='Input 3' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='checkbox' placeholder='Input 4' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='date' placeholder='Input 5' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='file' placeholder='Input 6' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='month' placeholder='Input 7' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='password' placeholder='Input 8' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='time' placeholder='Input 9' />
        <input className='rotate-180 rounded-lg justify-center items-center flex h-[50%] w-[10vh] ' type='search' placeholder='Input 10' />
      </div>
      <div className='h-[100vh] w-[100vh]  flex items-center justify-center rotate-0 gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>Animations</h1>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-bounce'>Bounce</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-spin'>Spin</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-ping'>Ping</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-pulse'>Pulse</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-bounce'>Bounce 2</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-spin'>Spin 2</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-ping'>Ping 2</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-pulse'>Pulse 2</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-bounce'>Bounce 3</div>
        <div className='rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600 rotate-180 animate-spin'>Spin 3</div>
      </div>
      <div className='h-[100vh] w-[100vh] flex items-center justify-center rotate-0 gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>ToolTips</h1>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex 'title='Tooltip 1'>Element 1</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 2'>Element 2</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 3'>Element 3</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 4'>Element 4</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 5'>Element 5</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 6'>Element 6</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 7'>Element 7</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 8'>Element 8</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 9'>Element 9</div>
        <div className=' rotate-180 h-[70%] w-[30vh] bg-green-900 rounded-lg justify-center items-center flex'title='Tooltip 10'>Element 10</div>
      </div>
      <div className='h-[100vh] w-[100vh]  flex items-center justify-center rotate-0 gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>Loaders</h1>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 1</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 2</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 3</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 4</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 5</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 6</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 7</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 8</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 9</div>
        <div className='loader rotate-180 h-[70%] w-[20vh] bg-blue-900 rounded-lg justify-center items-center flex'>Loader 10</div>
      </div>
      <div className='h-[100vh] w-[100vh] flex items-center justify-center rotate-0 gap-2'>
        <h1 className='rotate-180 flex items-center justify-center'>Cards</h1>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 1</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 2</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 3</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 4</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 5</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 6</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 7</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 8</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 9</div>
        <div className='card rotate-180 h-[70%] w-[20vh] bg-red-900 rounded-lg flex justify-center items-center'>Card 10</div>
      </div>
      <div className='h-[100vh] w-[100vh]  flex items-center justify-center rotate-0'>
        <h1 className='rotate-180 flex items-center justify-center'>Boxes</h1>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 1</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 2</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 3</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 4</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 5</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 6</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 7</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 8</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 9</div>
        <div className='box rotate-180 rounded-lg justify-center items-center flex h-[70%] w-[20vh] bg-violet-600'>Box 10</div>
      </div>
    </div>
  );
}

export default HomeSidePage;
