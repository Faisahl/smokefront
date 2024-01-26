'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import herodesk from '../../public/herotoasty-min.png'
// import heromobile from '../../public/herotoasty-m.png'

import herobambino from '../../public/herobino-min.jpg'

const Hero: React.FC = () => {
  let s: string = '/herotoasty.png';
  return (
    <div 
        className='relative w-full -z-50'
    >
        <Image 
          src={ herobambino }
          alt='Hero Image'
          style={{ objectFit: 'fill' }}
          className='m-auto -x-50 hidden md:block'  
          // fill={true}
          // height={800}
          // width={1020}
        />
        <Image 
          src={ herobambino }
          alt='Hero Image'
          style={{ objectFit: 'contain' }}
          className='m-auto -x-50 md:hidden'  
        />
    </div>
  )
}

export default Hero