'use client'
import React from 'react'

function Form({
  value,
  onChange
}: {
  value: number
  onChange: (amount: number) => void
}) {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <label className='block space-y-2'>
        <span>Monto en ARS:</span>
        <input
          className='block rounded-full bg-gray-200 p-2 text-right text-2xl w-full'
          type='number'
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  )
}
export default Form
