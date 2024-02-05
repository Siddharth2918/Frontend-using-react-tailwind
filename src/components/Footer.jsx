import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Footer = ()=>{
    return (
        <div className='text-white grid grid-cols-4 px-10 py-10 '>
            <div className='col-span-4 sm:col-span-2 md:col-span-1 my-4 mx-2'>
                <h2 className='text-[#00df9a] font-bold text-xl py-2'>REACT,JS</h2>
                <p className='text-md py-4'>mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus</p>
                <div className='flex flex-row py-2'>
                    <FaFacebookSquare className='mr-2' size={22}/>
                    <FaInstagram className='mx-2' size={22}/>
                    <FaSquareXTwitter className='mx-2' size={22}/>
                    <FaGithub className='mx-2' size={22}/>
                </div>
            </div>
            <div className='col-span-4 sm:col-span-2 md:col-span-1 my-4 mx-2'>
                <ul>
                    <li className='text-gray-500 font-bold text-md'>Solutions</li>
                    <li className='py-2 '>Analytics</li>
                    <li className='py-2 '>Marketing</li>
                    <li className='py-2 '>Commerce</li>
                    <li className='py-2 '>Insights</li>
                </ul>
            </div>
            <div className='col-span-4 sm:col-span-2 md:col-span-1 my-4 mx-2'>
                <ul>
                    <li className='text-gray-500 font-bold text-md'>Support</li>
                    <li className='py-2 '>Pricing</li>
                    <li className='py-2 '>Documentation</li>
                    <li className='py-2 '>Guides</li>
                    <li className='py-2 '>API Status</li>
                </ul>
            </div>
            <div className='col-span-4 sm:col-span-2 md:col-span-1 my-4 mx-2'>
                <ul>
                    <li className='text-gray-500 font-bold text-md'>Company</li>
                    <li className='py-2 '>About</li>
                    <li className='py-2 '>Blog</li>
                    <li className='py-2 '>Press</li>
                    <li className='py-2 '>Jobs</li>
                    <li className='py-2 '>Partners</li>
                </ul>
            </div>
        </div>
    )

}
export default Footer;