import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

export default function HomePage() {
    return (
        <div className="h-full w-full justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-md flex gap-2 xs:flex-col lg:flex-row">
            <div className="lg:h-full lg:w-1/3 xs:h-2/3 bg-stone-900 rounded-lg xs:w-full border- p-5 flex flex-col justify-center items-center">
                <div className="flex flex-co justify-center gap-1 pt-10">
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">C</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">O</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">D</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">E</h1>
                    <span className="p-1"></span>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">G</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">A</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">L</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">L</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">E</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">R</h1>
                    <h1 className="xs:text-4xl lg:text-5xl text-white  font-mateSc">Y</h1>
                </div>
                <div className="w-fit flex flex-col justify-center items-center">
                    <h1 className="text-white xs;text-md lg:text-lg mt-4 text-justify font-mate text-wrap">
                        Welcome to Code Gallery! Here, you'll find a collection of amazing projects and resources to level up your coding skills. Whether you're a beginner looking to learn the basics or an experienced developer seeking inspiration, you're in the right place. Explore our gallery to discover fascinating code snippets created by our talented community.
                    </h1>
                    <div className="p-5">
                        <button className="p-3 bg-red-900 rounded-lg h-fit w-fit font-bold">Visit Gallery</button>
                    </div>
                    <div className="flex gap-5 p-4">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                            <BsGithub size={30} />
                        </a>
                        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaXTwitter size={30} />
                        </a>
                        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-full w-2/3 lgborder-2"></div>
        </div>
    );
}
