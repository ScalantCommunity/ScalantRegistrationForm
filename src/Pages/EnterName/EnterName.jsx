import React from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/Context'

const EnterName = () => {
  const { formData, setFormData } = React.useContext(FormContext)
  return (
    <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[46px] text-center font-medium'>Enter your Full Name</p>
        <input value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Full Name' />
      <div className='mt-[1rem]'>
      <Link to={'/email'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>
    </div>
  )
}

export default EnterName