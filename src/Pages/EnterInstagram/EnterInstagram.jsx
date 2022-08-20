import React from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/Context'

const EnterInstagram = () => {
  const { formData, setFormData } = React.useContext(FormContext)
  return (
    <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[46px] text-center font-medium'>Enter your Instagram URL</p>
        <input value={formData.instagram} onChange={(e)=>setFormData({...formData, instagram:e.target.value})} type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Full Instagram' />
      <div className='mt-[1rem]'>
      <Link to={'/image'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>
    </div>
  )
}

export default EnterInstagram