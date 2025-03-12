import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import User from './components/User'

const App = () => {
  const [formData, setFormData] = useState({
    fullName:'',
    password:'',
    ConfirmPassword:'',
    email:''
  })
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const handleChanges = (e)=>{
    const {name,value} = e.target 
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const submitHandler =(e) => {
    e.preventDefault();
    
    console.log('Submitted');
    if(formData.password.length <6){
      setError('Password must be at least 6 characters long')
      return
    }
    if(formData.password != formData.ConfirmPassword){
      setError('Password does not match')
      return
    }
    if(!/[!@#$%^&*()<>,.""]/.test(formData.password)){
      setError('Password must contain a special character')
      return
    }
    if(!/[0-9]/.test(formData.password)){
      setError('Password must contain a number')
      return
    }
    if(!/[A-Z]/.test(formData.password)){
      setError('Password must contain an uppercase letter')
      return
    }

    setUsers((prevUsers)=>[
      ...prevUsers,{
        fullName:formData.fullName,
        email:formData.email,
        password:formData.password
      }
    ])
    setError('')
    setFormData({
      fullName:'',
      email:'',
      password:'',
      ConfirmPassword:''
    })
    

    toast.success('Login Succesfull!!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }
  return ( 
    <>
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96 '>

          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'>
            <h2 className='text-gray-800 text-center text-2xl font-bold mb-4'>Create an Account</h2>
            <form
             onSubmit={(e) => {submitHandler(e)}}
             className='flex flex-col gap-4'>
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="text" 
              placeholder='Enter Name Here'
              name='fullName'
              value={formData.fullName}
              onChange={handleChanges} 
              />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Email" 
              placeholder='Enter Email Here'
              name='email'
              value={formData.email}
              onChange={handleChanges}
               />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Password" 
              placeholder='Enter Password Here'
              name='password'
              value={formData.password}
              onChange={handleChanges} 
              />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Password" 
              placeholder='Confirm Password'
              name='ConfirmPassword' 
              value={formData.ConfirmPassword}
              onChange={handleChanges} />
              {error && <p className='text-red-600 text-sm text-center'>{error}</p>}
              <button
              className='bg-indigo-600 text-white rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              >Submit</button>
            </form>
            <p className='text-xs text-gray-600 text-center mt-4'>By registering, you agree to our <span className='text-purple-600 font-semibold'>Terms & Conditions</span> and <span className='text-purple-600 font-semibold'>privacy policy</span></p>
        </div>
        <ToastContainer>

        </ToastContainer>
      </div>
    </div>
    {users.map(function(elem,idx){
        return <User key={idx} elem={elem}/>
      })}
    </>
  )
}

export default App
