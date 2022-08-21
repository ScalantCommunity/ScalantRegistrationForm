import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/Context'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const EnterPhoneNumber = () => {
  const { formData, setFormData } = useContext(FormContext)
  const [value, setValue] = useState(formData.phoneNumber)

  useEffect(()=>{
    setFormData({...formData, phoneNumber:value})
  },[value])
  return (
    <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop md:text-[46px] text-[30px] text-center font-medium'>Enter your Mobile Number</p>
        {/* <input value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Full Name' />
         */}
          <PhoneInput
          country="IN"
          international
          defaultCountry="IN"
          // inputComponent={<input  type='text' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Full Name' />}
      placeholder="Enter phone number"
      value={value} onChange={setValue}/>

      <div className='mt-[1rem]'>
      <Link to={'/domain'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>
    </div>
  )
}

export default EnterPhoneNumber