import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/Context'

const EnterGitHub = () => {
  const { formData, setFormData } = useContext(FormContext)
  return (
    <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[46px] text-center font-medium'>Enter your Full Github URL</p>
        <input value={formData.github} onChange={(e)=>setFormData({...formData, github:e.target.value})} type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Github URL' />
      <div className='mt-[1rem]'>
      <Link to={'/linkedin'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>
    </div>
  )
}

export default EnterGitHub