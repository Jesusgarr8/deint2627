import React, { useState } from 'react'

type NoResultsProps = {
    onReset: (query: string) => void,
    message: string,
    resetLabel: string,
    
}

export default function NoResults ({onReset, message, resetLabel} : NoResultsProps) {
   
  return (
    <div>
     <div className='border border-dashed rounded-2xl flex flex-col p-5 m-5 items-center'>
      <p>{message}</p>
       <button onClick={() => onReset('')} className='border border-gray-700 rounded-2xl  p-5 m-5 text-blue-600'>{resetLabel}</button>
    </div>
    </div>
  )
}
