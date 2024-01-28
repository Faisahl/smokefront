'use client'

import React from 'react'

const Custom401: React.FC = ({}) => {
  return (
    <section className="flex items-center h-screen w-full p-10 bg-gray-50 dark:bg-gray-800">
      <div className="container flex flex-col mx-auto text-center">
        <h1 className='text-8xl md:text-9xl text-gray-600 dark:text-gray-100'>
          401
        </h1>
        <h2 className='text-gray-600 dark:text-gray-100 text-2xl mt-6'>
          Unauthorized Access. Being redirected to Home Page.
        </h2>
      </div>
    </section>
  )
}

export default Custom401