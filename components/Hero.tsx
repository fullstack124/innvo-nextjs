import React from 'react'
import hero from '@/public/hero.png'
const Hero = () => {
    console.log(hero.src)
  return (
    <div className='md:px-[100px] px-[30px] mt-[70px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
            <div>
                <h1 className='md:text-[72px] text-[50px] text-[#0F415E] font-bold tracking-wide	' style={{lineHeight:'1'}}>We are Coming Very Soon!</h1>
                <p className='text-[20px] font-[400] mt-[41px]'>Transform your business with the power of AI technology, maximizing efficiency and elevating customer experience</p>
                <div className='mt-[50px]'>
                    <h1 className='font-bold text-xl'>Get notified when we launch</h1>
                    <div className='sm:flex block'>
                        <input type="text" placeholder='Email' className='px-2 py-3 text-[16px] font-semibold sm:rounded-tl-md
                        sm:rounded-bl-md
                        rounded-md
                        w-[300px] outline-none border placeholder:text-[#0F415E] text-[#0F415E]  border-[#0F415E]' />
                        <button className='px-2 py-3 text-[16px] font-semibold  my-2 sm:my-0
                        sm:rounded-tr-md
                        sm:rounded-br-md
                        rounded-md
                         w-[200px] outline-none border text-white bg-[#0F415E]  border-[#0F415E]'>subscribe</button>
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