import {React, useState} from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = ()=>{
    const [ navbar, setNavbar ] = useState(false);

    return (
        <div className='text-white flex justify-between mx-10 my-4 item-center'>
            <h1 className='text-[#00df9a] font-bold text-3xl'>React.JS</h1>
            <ul className=' hidden md:flex font-bold text-l'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resourses</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {!navbar? <IoMenuOutline className='md:hidden' size={30} onClick={()=>{setNavbar(!navbar)}}/> : <RxCross2 className='md:hidden' size={30} onClick={()=>{setNavbar(!navbar)}}/>}
            <ul className={navbar?'font-bold text-l bg-[#000300] fixed left-0 top-0 h-full pl-10 pt-4 w-[60%] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <li className='text-[#00df9a] font-bold text-3xl pb-6'>React.JS</li>
                <li className='p-4 border-b border-gray-700 w-[90%]'>Home</li>
                <li className='p-4 border-b border-gray-700 w-[90%]'>Company</li>
                <li className='p-4 border-b border-gray-700 w-[90%]'>Resourses</li>
                <li className='p-4 border-b border-gray-700 w-[90%]'>About</li>
                <li className='p-4 w-[90%]'>Contact</li>
            </ul>
        </div>
    )
};

export default Navbar;