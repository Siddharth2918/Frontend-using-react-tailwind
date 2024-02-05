import React from 'react';
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'

const Pricing = ()=>{
    return (
        <div className='w-full px-4 py-[10rem] bg-white text-black'>
            <div className='grid max-w-[1240px] mx-auto md:grid-cols-3 gap-8'>
                <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150'>
                    <img className='w-20 mt-[-3rem] bg-white mx-auto' src={single} alt="" />
                    <h2 className='text-2xl font-bold text-center my-4'>Single User</h2>
                    <p className='mx-auto text-4xl font-bold my-6'>$149</p>
                    <div className='font-medium text-center'>
                        <p className='border-b py-2 mt-8'>500 GB</p>
                        <p className='border-b py-2'>1 Granted User</p>
                        <p className='border-b py-2'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] px-4 py-2 my-4 mx-auto rounded-lg w-[200px] text-black font-bold'>Start Trial</button>
                </div>
                <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150 bg-gray-100'>
                    <img className='w-20 mt-[-3rem] bg-white mx-auto bg-transparent' src={double} alt="" />
                    <h2 className='text-2xl font-bold text-center my-4'>Partnership</h2>
                    <p className='mx-auto text-4xl font-bold my-6'>$199</p>
                    <div className='font-medium text-center'>
                        <p className='border-b py-2 mt-8'>1 TB</p>
                        <p className='border-b py-2'>3 Granted User</p>
                        <p className='border-b py-2'>Send upto 5 GB</p>
                    </div>
                    <button className='bg-black px-4 py-2 my-4 mx-auto rounded-lg w-[200px] text-[#00df9a] font-bold'>Start Trial</button>
                </div>
                <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150'>
                    <img className='w-20 mt-[-3rem] bg-white mx-auto' src={triple} alt="" />
                    <h2 className='text-2xl font-bold text-center my-4'>Group Users</h2>
                    <p className='mx-auto text-4xl font-bold my-6'>$299</p>
                    <div className='font-medium text-center'>
                        <p className='border-b py-2 mx-8 mt-8'>5 TB</p>
                        <p className='border-b py-2 mx-8'>10 Granted User</p>
                        <p className='border-b py-2 mx-8'>Send upto 10 GB</p>
                    </div>
                    <button className='bg-[#00df9a] px-4 py-2 my-4 mx-auto rounded-lg w-[200px] text-black font-bold'>Start Trial</button>
                </div>
            </div>    
        </div>
    )
}

export default Pricing;