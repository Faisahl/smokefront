
import React from 'react'
import ConfirmCheckout from '@/components/checkout/confirmation/ConfirmCheckout';
import { retrieve } from '@/utils/api';
import { cookies } from 'next/headers';

const page = async ({ params }: { params: { slug: string }}) => {

  const customer = await retrieve(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/customers/${params.slug}`
    );
    
  
  return (
    <ConfirmCheckout 
      customer={customer}
    />
  )
}

export default page