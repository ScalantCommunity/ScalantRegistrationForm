import React from 'react'

import { ReactImgInput } from 'react-img-input'
import 'react-img-input/dist/index.css'
import { FormContext } from '../../Context/Context'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../assets/Loading';
import { toast } from 'react-hot-toast';

const config = {
  size: 200,
  captureBtn: {
    bg: 'crimson',
    color: '#fff',
  },
  cropBtn: {
    bg: '#F4B230',
    color: '#fff',
  },
  defaultImg: '',
  theme: 'light',
  compression: {
    maxSizeMB: 2,
    maxWidthOrHeight: 800,
    useWebWorker: true,
  }
}



const EnterImage = () => {
  const { formData, setFormData } = React.useContext(FormContext)
  const [base64imgUrl, setBase64imgUrl] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const uploadHandler = async ()=>{
    const {data} = await axios.post("https://apiscalant.live/api/imgupload", {
        data:base64imgUrl
      })
      console.log(data)
      toast.success('Image Uploaded Successfully')
      setFormData({...formData, profileImage:data})
      
  }

  const handleComplete = async ()=>{
    setLoading(true)
    if(formData.email !== ''
        && formData.name !== ''
        && formData.email !== ''
        && formData.phoneNumber !== ''
        && formData.github !== ''
        && formData.linkedin !== ''
        && formData.twitter !== ''
        && formData.instagram !== ''
        && formData.domain !== ''
        && formData.profileImage !== ''){

          const {data} = await axios.post('https://apiscalant.live/api/upload', formData)

          if(data.status){
            setLoading(false)
            toast.success(data.info)
            setTimeout(()=>{
              window.open('https://scalant.in')
            },[1000])
          }else{
            setLoading(false)
            toast.error(data.info)
          }

        }
        

  }

  return  (
      <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[46px] text-center font-medium'>Select Your Profile Image</p>
      <ReactImgInput config={config} maxIteration={5} setOutput={(e)=>setBase64imgUrl(e)} />
        {formData.profileImage===''&&<button onClick={uploadHandler} className='bg-white font-pop font-medium text-sblack h-[2rem] w-[6rem] mt-[1rem]'>Upload</button>}
      {formData.profileImage!=''&& <div className='mt-[1rem]'>

      <button onClick={handleComplete} disabled={loading} className='flex items-center justify-center h-[3rem] px-[1rem] my-[1.5rem] max-w-[16rem] text-sblack font-pop bg-white'>
          {loading?<Loading/>: 'Complete the Registration'}
          </button>

      </div>}
    </div>
  )
}
export default EnterImage