import React from "react";
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

export default function HomeSidePage(){

useGSAP(()=>{
const tl= gsap.timeline()
tl.fromTo('.box',{opacity:0,rotate:0},{opacity:1,rotate:360,stagger:0.1,repeat:-1,speed:200000})
})

  return (
    <div className="text-white h-full w-full flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[50%] w-[40%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">
      <div className="box rounded-3xl border-2 border-black/30 h-[90%] w-[90%] bg-white flex justify-center items-center">

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>
    </div>
  )
}