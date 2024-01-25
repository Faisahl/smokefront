'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import herodesk from '../../public/herotoasty-min.png'
import heromobile from '../../public/herotoasty-m.png'

const Hero: React.FC = () => {
  let s: string = '/herotoasty.png';
  return (
    <div 
        className='relative w-full -z-50'
    >
        <Image 
          src={ herodesk }
          alt='Hero Image'
          style={{ objectFit: 'contain' }}
          className='m-auto -x-50 hidden md:block'  
          // height={}
          // width={1020}
        />
        <Image 
          src={ heromobile }
          alt='Hero Image'
          style={{ objectFit: 'contain' }}
          className='m-auto -x-50 md:hidden'  
        />
    </div>
  )
}

export default Hero