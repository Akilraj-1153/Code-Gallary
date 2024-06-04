import React from "react";

export default function HomePage(){
    return(
        <div className="h-full w-full bg-white rounded-md flex gap-2">
            <div className="h-1/2 w-full lg:h-full lg:w-1/3 bg-red-900 rounded-md"></div>
            <div className="h-1/2 w-full lg:h-full lg:w-2/3 bg-red-900 rounded-md flex ">
            <div className="bg-blue-900 h-fit w-full p-5">
                <h1 className="text-6xl font-mateSc">Code Gallery</h1>
                <ul className="list-disc  ml-5 font-mate">
                    <li className="text-white text-lg mt-4">
                    Welcome to our Code Gallery! Here, you'll find a collection of amazing projects and resources to level up your coding skills.
                    </li>
                    <li className="text-white text-lg mt-4" >
                    Whether you're a beginner looking to learn the basics or an experienced developer seeking inspiration, you're in the right place.
                    </li>
                    <li className="text-white text-lg mt-4">
                    Explore our gallery to discover fascinating code snippets created by our talented community.
                    </li>

                </ul>  
            </div>

            </div>
        </div>
    )
}