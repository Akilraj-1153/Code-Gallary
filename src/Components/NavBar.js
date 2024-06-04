import React, { useState } from 'react'

function NavBar() {
  const [Logo]=useState(require('../Assets/CG.png'))
  return (
    <div className='sticky h-[8vh] w-full bg-gradient-to-r from-slate-900 to-slate-700  rounded-md  '>
        <img src={Logo} className='h-full w-auto scale-150 ml-5'></img>
    </div>
  )
}

export default NavBar