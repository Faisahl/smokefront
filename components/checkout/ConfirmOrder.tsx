'use client'

import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const ConfirmOrder = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 h-screen">
        <div className="w-full max-w-3xl mx-auto p-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mt-20">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Place order for pickup</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                            {/* <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"> */}
                            <input 
                              type="text" 
                              placeholder="First name" {...register("First name", {required: true, maxLength: 80})} 
                              className='w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none' 
                              id='first_name'
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                            <input 
                              type="text" 
                              placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} 
                              className='w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none' 
                              id='last_name'
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-white mb-1">Email:</label>
                        <input 
                          type="text" 
                          placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
                          className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                          id='email'
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="tel" className="block text-gray-700 dark:text-white mb-1">Phone Number:</label>
                        <input 
                          type="tel" 
                          placeholder="Enter for text notifications" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} 
                          className="block text-gray-700 dark:text-white mb-1 p-2 rounded-lg"
                          id='tel'
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button className="bg-custo-51 text-white px-4 py-2 rounded-lg dark:text-white">Place Order</button>
                </div>
            </div>
        </div>
    </div>


      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

        <input type="submit" />
      </form> */}
    </>
  )
}

export default ConfirmOrder