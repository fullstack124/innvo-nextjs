import React from 'react'
import vector from '@/public/Vector.png'

const Header = () => {
  return (
    <div>
      <h1 className=' mx-auto pt-[88px] pl-[100px] text-[#FF9900] font-bold text-4xl' > <img src={`${vector.src}`} alt="" className='w-24' /></h1>

     
    </div>
  )
}

export default Header