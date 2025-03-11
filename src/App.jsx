import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96 '>

          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'>
            <h2 className='text-gray-800 text-center text-2xl font-bold mb-4'>Create an Account</h2>
            <form className='flex flex-col gap-4'>
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="text" 
              placeholder='Enter Name Here' />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Email" 
              placeholder='Enter Email Here' />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Password" 
              placeholder='Enter Password Here' />
              <input 
              className='border border-gray-300 rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              type="Password" 
              placeholder='Confirm Password' />
              <button
              className='bg-indigo-600 text-white rounded-md py-2 px-4 w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              >Submit</button>
            </form>
            <p className='text-xs text-gray-600 text-center mt-4'>By registering, you agree to our <span className='text-purple-600 font-semibold'>Terms & Conditions</span> and <span className='text-purple-600 font-semibold'>privacy policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
