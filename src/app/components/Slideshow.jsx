"use client"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

export default function Slideshow() {
const images = [
    "1.webp",
    "2.webp",
    "3.webp",
]

const zoomInProperties = {
    scale:1, // how large image can transform
    duration:5000, // image change duration
    transitionDuration:300, // transition per image duration
    infinity:true, //loop the transition infinity

    //icons
    prevArrow:(
        <div className="ml-10 top-40 md:top-72">
            <IoIosArrowDropleftCircle className="h-8 w-8 text-white cursor-pointer" />
        </div>
    ),
    nextArrow:(
        <div className="mr-10 top-40 md:top-72">
            <IoIosArrowDroprightCircle className="h-8 w-8 text-white cursor-pointer" />
        </div>
    ),
}

  return (
    <div className="w-full h-screen">
        <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
                <div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">  
                <img className="w-screen" src={each}/>
                <h1 className="absolute md:top-60 top-24 -inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">Welcome</h1>
                <p className="absolute md:top-70 top-36 -inset-x-1/4 text-center z-10 md:text-4xl text-2xl bold text-white">Welcome</p>
                </div>
            ))}
        </Zoom>
    </div>
  )
}
