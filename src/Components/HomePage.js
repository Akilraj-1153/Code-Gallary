import React from "react";

export default function HomePage(){
    return(
        <div className="h-full w-full justify-center items-center bg-gradient-to-br from-zinc-400 via-zinc-500 to-neutral-900 rounded-md flex gap-2 xs:flex-col lg:flex-row">
           
            <div className="h-full w-full rounded-md flex justify-center items-center ">
            <div className=" h-fit w-full p-5 flex flex-col justify-center items-center">
                <h1 className="text-6xl text-white font-mateSc">Code Gallery</h1>
                    <p className="text-white text-lg mt-4 text-center">
                    Welcome to  Code Gallery! Here, you'll find a collection of amazing projects and resources to level up your coding skills.
                    </p>
                    <p className="text-white text-lg mt-4 text-center" >
                    Whether you're a beginner looking to learn the basics or an experienced developer seeking inspiration, you're in the right place.
                    </p>
                    <p className="text-white text-lg mt-4 text-center">
                    Explore our gallery to discover fascinating code snippets created by our talented community.
                    </p> 
            </div>

            </div>
        </div>
    )
}