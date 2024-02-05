import React from 'react';

const Newsletter = ()=>{
    return <div className='text-white py-20 w-full px-16'>
        <h1 className='text-4xl py-2'>Want tips and tricks to optimize the flow? </h1>
        <p className='py-2'>Sign up to our newsletter ans stay up to date.</p>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start'>
            <input placeholder='Enter your email'className='w-[200px] px-4 py-2 rounded-lg h-10 mr-4 text-black md:w-[500px]' type="email"/>
            <button className='bg-[#00df9a] px-4 py-2 my-4 rounded-lg w-[200px] text-black font-bold '>Get Started</button>
        </div>
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline underline-offset-1'>Privacy Policy.</span></p>
    </div>
}

export default Newsletter;