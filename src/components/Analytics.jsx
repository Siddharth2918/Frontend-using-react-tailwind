import React from 'react';
import analytics from '../assets/analytics.png'

const Analytics = ()=>{
    return (
        <div className='bg-white w-full px-4 py-16 grid md:grid-cols-2'>
            <img className='col-span-1 w-[500px] mx-auto my-4' src={analytics} alt="img"/>
            <div className='col-span-1 flex flex-col justify-center'>
                <h3 className='text-[#00df9a] font-semibold uppercase py-2'>Data Analytics Dashboard</h3>
                <h1 className='font-bold text-4xl py2-2'>Manage Data Analytics Centrally</h1>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='bg-black px-4 py-2 my-4 rounded-lg w-[200px] text-[#00df9a] font-bold '>Get Started</button>
            </div>
        </div>
    )
}
export default Analytics;