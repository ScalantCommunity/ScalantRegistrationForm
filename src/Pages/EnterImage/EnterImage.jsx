import React, { useContext, useState } from 'react'



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
  const { formData, setFormData } = useContext(FormContext)
  const [loading, setLoading] = useState(false)
  const [baseimage, setBaseImage] = useState('')

  const uploadHandler = async ()=>{
    const {data} = await axios.post("https://apiscalant.live/api/imgupload", {
        data:baseimage
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
  const uploadImage = async (e) => {
    
    const file = e.target.files[0];
    if(file.size>2097152){
      toast.error('Image size should be less than 2MB')
      return
    }
    const type = file.type.split('/')[0];
    
    if(type.toLowerCase()==='image'){
      const base64 = await convertBase64(file);
    console.log(base64)
    setBaseImage(base64)
    }else{
      toast.error('Please upload an image')
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return  (
      <div className='bg-sblack text-white flex-col h-[100vh] w-[100vw] flex items-center justify-center'>
      <p className='font-pop text-[46px] text-center font-medium'>Select Your Profile Image</p>
            <div class="flex justify-center items-center w-[80%] mt-[3rem]">
              <label for="dropzone-file" class="flex flex-col justify-center items-center w-[13rem] text-center h-[10rem] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  </div>
                  <input onChange={uploadImage} id="dropzone-file" type="file" class="hidden" />
              </label>
            </div> 
        {baseimage && <img src={baseimage} className='w-[5rem] mt-[2rem]'/>}
        {formData.profileImage===''&&baseimage!=''&&<button onClick={uploadHandler} className='bg-white font-pop font-medium text-sblack h-[2rem] w-[6rem] mt-[1rem]'>Upload</button>}
      {formData.profileImage!=''&& <div className='mt-[1rem]'>

      <button onClick={handleComplete} disabled={loading} className='flex items-center justify-center h-[3rem] px-[1rem] my-[1.5rem] max-w-[16rem] text-sblack font-pop bg-white'>
          {loading?<Loading/>: 'Complete the Registration'}
          </button>

      </div>}
    </div>
  )
}
export default EnterImage