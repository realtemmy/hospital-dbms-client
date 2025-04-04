import React from 'react'
import { Link } from 'react-router'

const AppointmentList = () => {
  return (
    <div>
      <div className='flex justify-between'>
          <h2 className='text-xl font-semibold text-slate-700'>Appointments</h2>
          <Link to="/" className='font-semibold text-blue-800'>View all</Link>
      </div>
    
    </div>
  )
}

export default AppointmentList
