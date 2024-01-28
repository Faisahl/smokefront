'use client'
import ConfirmOrder from '@/components/checkout/ConfirmOrder'
import { isAuthenticated } from '@/utils/Auth';
import { redirect } from 'next/navigation';
import React, { useLayoutEffect } from 'react'

// type Props = {}

const page: React.FC = ({ }) => {

  useLayoutEffect(()=>{
    const isAuth = isAuthenticated;
    if(!isAuth){
      redirect('/');
    }
  },[]);

  return (
    <ConfirmOrder />
  )
}

export default page