'use client'
import React, { useLayoutEffect } from 'react'
import ConfirmOrder from '@/components/checkout/ConfirmOrder'
import { isAuthenticated } from '@/utils/Auth';
import { redirect } from 'next/navigation';

type Props = {}

const page = (props: Props) => {
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