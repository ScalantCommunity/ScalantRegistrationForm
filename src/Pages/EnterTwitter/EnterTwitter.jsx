import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/Context'

const EnterTwitter = () => {
  const { formData, setFormData } = useContext(FormContext)
  return (
    <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[30px] md:text-[46px] text-center font-medium'>Enter your Twitter URL</p>
        <input value={formData.twitter} onChange={(e)=>setFormData({...formData, twitter:e.target.value})} type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 text-center w-[20rem] md:w-[40vw] bg-sblack text-white' placeholder='Full Twitter URL' />
      <div className='mt-[1rem]'>
      <Link to={'/instagram'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>
    </div>
  )
}

export default EnterTwitter