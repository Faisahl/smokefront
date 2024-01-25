'use client'

import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


type Props = {
    data: ReviewType
}

const Review: React.FC<Props> = ({ data }) => {
  return (
    <>
        <div className="text-left mx-auto max-w-sm">
            <div className="mb-4 text-black">
                <FormatQuoteIcon
                    fontSize='large'
                    className='text-custo-51 md:hover:text-custo-50'
                />
                <p className="mt-2 text-base leading-6">
                    {data.content}
                </p>
                <div className="text-sm mt-5">
                    <p 
                        className="font-medium leading-none text-custo-51 hover:text-black transition duration-500 ease-in-out"
                    >
                        {data.name}
                    </p>
                </div>
            </div>
        </div>
    
        
        
        
    
    </>
    
  )
}

export default Review