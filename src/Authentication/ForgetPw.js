import React from 'react'
//import logo from '../Assets/logonew.svg';

const ForgetPw = () => {
  return (
    <div className='flex items-center h-screen bg-white'>
    <div className='text-3xl flex flex-1 items-center justify-center mt-10 mb-2 text-center '>
        <div className='border-4 bg-orange-100 w-3/5 mt-2 border-orange-900 p-14 rounded-md shadow-slate-500 shadow-2xl'>

            <div className='flex justify-center items-center mb-5'>
                <p className='text-orange-900 mb-5 text-opacity-70 font-semibold text-3xl text-left'>Forgot Your Password?</p>
            </div>
            <div className='flex justify-center items-center mb-5'>
                <p className='text-orange-800 mb-5 text-opacity-70 font-semibold text-xl text-left'>Enter your Email below and we will send your reset link</p>
            </div>
             <div className='flex flex-row justify-center items-center mb-0'>
                <input className='w-1/2 p-2 border-2 mr-4 mb-2 text-xl gap-10 rounded-md border-gray-300 outline-none'
                    type='email' placeholder='Enter your Email' />
                    <button className=' bg-orange-800 h-12 text-white text-xl gap-10 px-10 py-1 font-semibold hover:bg-blue-800 duration-300'>
                    Send</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgetPw
