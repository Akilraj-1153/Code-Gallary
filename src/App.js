import React from 'react'
import NavBar from './Components/NavBar'
import MainPage from './Components/MainPage'
import HomePage from './Components/HomePage'

function App() {
  return (
    <div className='h-screen w-screen bg-black overflow-hidden'>
      <div className='p-1 rounded-lg h-[8vh] w-full' >
      <NavBar></NavBar>
      </div><div className='h-[91vh] w-full rounded-lg p-1'>
<HomePage>
  </HomePage>      </div>
      {/* <div className='h-[91vh] w-full rounded-lg p-1'>
        <MainPage></MainPage>
      </div> */}
      </div>
  )
}

export default App