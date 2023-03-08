import React from 'react'
import hero from '@/public/hero.png'
const Hero = () => {
    console.log(hero.src)
  return (
    <div className='md:px-[100px] px-[30px] mt-[70px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
            <div>
                <h1 className='md:text-[62px] text-[50px] text-[#0F415E] font-semibold tracking-wide hero-section' style={{lineHeight:'1'}}>We are Coming Very Soon!</h1>
                <p className='text-[20px] font-thin mt-[41px]'>Transform your business with the power of AI technology, maximizing efficiency and elevating customer experience</p>
                <div className='mt-[50px]'>
                    <h1 className='font-bold text-lg my-2'>Get notified when we launch</h1>
                    <div className='sm:flex block'>
                        <input type="text" placeholder='Email' className='px-2 py-3 text-[16px] font-semibold rounded-tl-md
                        rounded-bl-md
                        w-[300px] outline-none border placeholder:text-[#0F415E] text-[#0F415E] bg-red-100/100 border-[#0F415E]' />
                        <button className='px-2 py-3 text-[16px] font-semibold  my-2 sm:my-0
                       rounded-tr-md
                       rounded-br-md
                         w-[150px] outline-none border text-white bg-[#0F415E]  border-[#0F415E]'>subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={`${hero.src}`} className='w-[400px] h-[400px] md:ml-auto mx-auto' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero