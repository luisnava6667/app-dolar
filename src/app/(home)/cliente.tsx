'use client'
import { useState } from 'react'
import Form from '../../components/Form'
import type { Cotizacion } from '../types'

export default function HomeClient({
  cotizaciones
}: {
  cotizaciones: Cotizacion[]
}) {
  const [amount, setamount] = useState(0)
  return (
    <main className='grid gap-8 '>
      <section className='flex-1 '>
        <Form
          value={amount}
          onChange={(_amount: number) => setamount(_amount)}
        />
      </section>
      <section className='flex-1 rounded-3xl bg-emerald-800 p-8 text-white'>
        <ul className='flex flex-col gap-4'>
          {cotizaciones.map(({ nombre, venta }) => {
            const total = amount ? Number(amount / venta) : venta
            return (
              <li
                key={nombre}
                className='flex items-center gap-4 justify-between'>
                <div className='text-emerald-100'>{nombre}</div>
                <div className='flex items-center gap-4'>
                  {amount ? (
                    <div className='text-emerald-500 text-xl font-bold'>
                      {Number(total).toLocaleString('es-Ar', {
                        style: 'currency',
                        currency: 'ARS'
                      })}
                    </div>
                  ) : null}
                  <div className='text-emerald-300 text-3xl font-bold'>
                    {Number(venta).toLocaleString('es-Ar', {
                      style: 'currency',
                      currency: 'ARS'
                    })}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
