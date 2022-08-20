import React, { createContext } from 'react'

const FormContext = createContext()

const ContextProvider = ({children}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phoneNumber:'',
    github:'NA',
    linkedin:'NA',
    twitter:'NA',
    instagram:'NA',
    profileImage:'',
    domain:'NA',
  })
  return (
    <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>
  )
}

export {FormContext}
export default ContextProvider