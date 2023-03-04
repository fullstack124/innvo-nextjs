import React from 'react'
import facebook from '@/public/Facebook.png'
import github from '@/public/Github.png'
import instagram from '@/public/Instagram.png'
import linkedin from '@/public/Linkedin.png'
import snapchat from '@/public/Snapchat.png'
import twitter from '@/public/Twitter.png'
const Footer = () => {
    return (
        <div  className='text-center mt-[100px] mb-10'>
            <div className='flex items-center justify-center  '>
                <div className='flex items-center justify-center space-x-5'>
                    <img src={`${facebook.src}`} alt="" className='w-4' />
                    <img src={`${github.src}`} alt="" className='w-4' />
                    <img src={`${instagram.src}`} alt="" className='w-4' />
                    <img src={`${linkedin.src}`} alt="" className='w-4' />
                    <img src={`${snapchat.src}`} alt="" className='w-4' />
                    <img src={`${twitter.src}`} alt="" className='w-4' />
                </div>
            </div>
            <span className='mt-4 text-[16px] text-gray-400'>© Copyrights Innvo | All Rights Reserved</span>
        </div>
    )
}

export default Footer