import React from 'react'

const EmailVerifyOtp = ({otp, setOtp,verifyOtp}) => {
  return (
    <div>
      <div className='w-[100vw] h-[100vh] flex left-[0] fixed top-[0] justify-center items-center'>
        <div className='max-h-[40rem] h-[20rem] flex items-center justify-center bg-sblack border border-white'>
          <div className='w-[90%] h-[90%] flex flex-col items-center'>
              <p className='text-white font-pop text-[30px] text-center'>Enter OTP</p>
              <p className='text-white font-pop text-[20px] text-center'>In case you don't recieve in the inbox try checking in the <span className='text-red-600 border-b border-yellow font-bold'>Spam Folder</span></p>
              <input value={otp} onChange={(e)=>setOtp(e.target.value)}  type='email' className='text-[24px] text-center py-[1rem] my-[1rem] border-white border-b focus:outline-0 w-[40%] bg-sblack text-white' placeholder='Enter OTP' />
              <button onClick={verifyOtp} className='h-[3rem] w-[8rem] text-sblack font-pop bg-white'>Verify OTP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerifyOtp