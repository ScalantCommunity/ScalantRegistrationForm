import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../assets/Loading';
import { FormContext } from '../../Context/Context'
import EmailVerifyOtp from './EmailVerifyOtp';
import { toast } from 'react-hot-toast';

const EnterEmail = () => {
  const { formData, setFormData } = React.useContext(FormContext)
  const [showPopup, setShowPopup] = React.useState(false)
  const [otp, setOtp] = React.useState('')
  const [verified, setVerified] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleVerify = async ()=>{
    console.log(formData.email)
    setLoading(true)
    const {data} = await axios.post('https://apiscalant.live/api/getotp', {
      email:formData.email
    })

    if(data.status){
      setLoading(false)
      setShowPopup(true)
    }else{
      setLoading(false)
      alert('Something went wrong')
    }
  }

  const verifyOtp = async ()=>{
    const {data} = await axios.post('https://apiscalant.live/api/verifyotp', {
      otp:otp
    })
    if(data.status){
      setVerified(true)
      setShowPopup(false)
      toast.success('Verified Successfully')
    }else{
      setVerified(false)
      toast.error(data.info)
    }
  }

  return (
    <div className='bg-sblack relative text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
     {showPopup && <EmailVerifyOtp verifyOtp={verifyOtp} otp={otp} setOtp={setOtp}/>}
      <p className='font-pop text-[46px] text-center font-medium'>Enter your Email</p>
        <input readOnly={verified} value={formData.email} onChange={(e)=> setFormData({...formData, email:e.target.value})} type='email' className='text-[24px] py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40vw] bg-sblack text-white' placeholder='Email' />
        {!verified && <button disabled={loading} onClick={handleVerify} className='flex items-center justify-center h-[3rem] my-[1.5rem] w-[12rem] text-sblack font-pop bg-white'>
          {loading?<Loading/>: 'Send OTP to Verify'}
          </button>}
      {verified && <div className='mt-[1rem]'>
      <Link to={'/phone'}>
      <i className="fa-solid fa-2x fa-circle-chevron-right"></i>
      </Link>
      </div>}
    </div>
  )
}

export default EnterEmail