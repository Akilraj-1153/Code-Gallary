import React from 'react'
import NavBar from './Components/NavBar'
import MainPage from './Components/MainPage'
import HomePage from './Components/HomePage'

function App() {
  return (
    <div className='h-screen w-screen bg-black gap-1 flex flex-col  overflow-hidden '>
      <div className='p-1 rounded-lg h-[8vh] w-full  ' >
      <NavBar></NavBar>
      </div>
      <div className='p-1 rounded-lg h-[91vh]  w-full'>
      <HomePage></HomePage>
      </div>
      </div>
  )
}

export default App