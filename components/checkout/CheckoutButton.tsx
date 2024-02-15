'use client'

import { removeSS, setSS } from '@/utils/storage'
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { handleAlert } from '@/utils/utils'
import { OrderType } from '@/app/types/OrderTypes'
import { useRouter } from 'next/navigation'
import { AuthActionType, AuthContextType } from '@/app/types/auth'
import { AuthContext } from '../ctx/AuthProvider'

type Props = {
  data?: OrderType[],
  setter: Dispatch<SetStateAction<boolean>>
}

const CheckoutButton: React.FC<Props> = ({  data, setter }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useContext(AuthContext);
  const router = useRouter()
  useEffect(()=>{
    console.log(auth);
    if(data && data?.length !== 0){
      setSS('checkout', data);
    }
    if(data?.length === 0){
      removeSS('checkout');
    }
  },[data])

  const placeOrder = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(data?.length === 0){
      handleAlert(setter)
    }
    if(data && data.length !== 0){
      setLoading(true);
      setTimeout(() => {
        // dispatch({ type: 'AUTHORIZE', payload: true });
        setLoading(false);
        router.push(`/basket/checkout/customer-contact`);
      }, 1000);
    }

  }

  return (
    <div className="flex">
      <button 
        onClick={(e)=>placeOrder(e)} 
        className="bg-custo-50 text-white hover:opacity-90 shadow-sm font-medium md:text-lg text-center py-2 px-4 rounded-full mt-4 w-full"
      >
        {loading 
        ? 
        <svg className='animate-spin mx-auto font-semibold' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21a9 9 0 0 1-7.441-3.949 9 9 0 0 1-.915-8.375 9 9 0 0 1 6.414-5.462A9 9 0 0 1 18.18 5.45a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.224.74.74 0 0 1-.53-.224 7.51 7.51 0 0 0-9.456-.654A7.51 7.51 0 0 0 5.1 14.982a7.51 7.51 0 0 0 8.413 4.367A7.51 7.51 0 0 0 19.5 12a.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75 9 9 0 0 1-9 9z" fill="#FBFD8A"/>
        </svg>  
        : 
        'Checkout'}
      </button>
    </div>
  )
}

export default CheckoutButton