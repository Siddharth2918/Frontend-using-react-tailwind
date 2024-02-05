import React from 'react';
import {ReactTyped} from 'react-typed';
const Hero = ()=>{
    return(
        <div className='text-white max-w-[800px] w-full h-screen mx-auto flex flex-col text-center mt-[-96px] justify-center mb-10'>
            <p className='text-[#00df9a] text-lg my-2'>Growing with data analytics</p>
            <h1 className='font-bold text-7xl my-2'>Grow with data</h1>
            <h3 className='font-bold text-3xl my-2'>Fast, flexible financing for <ReactTyped className='text-gray-500' strings={["BTB", "BTC", "SASS"]} typeSpeed={40} backSpeed={30} loop></ReactTyped></h3>
            <p className='text-gray-600 font-bold my-2'>Monitor your data analytics to increase revenue from BTB, BTC, SASS Platfrom</p>
            <button className='bg-[#00df9a] px-4 py-2 my-4 rounded-lg w-[200px] mx-auto text-black font-bold'>Get Started</button>
        </div>
    )
}

export default Hero;