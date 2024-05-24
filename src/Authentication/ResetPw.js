import React from 'react'

const ResetPw = () => {
    return (

        < div className='flex items-center h-screen bg-gray-100'>
            <div className='text-3xl flex flex-1 items-center justify-center mt-5 mb-2 text-center '>
                <div className='border-4 bg-gray-200 w-3/5 border-blue-900 p-10 rounded-md shadow-slate-500 shadow-2xl'>

                    <div className='flex justify-center items-center mb-3'>
                        <p className='text-black mb-3 text-opacity-70 font-semibold text-3xl text-left'>Reset New Password</p>
                    </div>

                    <div className='flex flex-row justify-center items-center mb-0'>
                        <input className='w-2/3 p-2 px-2 border-2 mr-4 mb-2 text-xl gap-10 rounded-md border-gray-300 outline-none'
                            type='password' placeholder='Type Your New Password' />
                    </div>
                    <div className='flex flex-row justify-center items-center mb-0'>
                        <input className='w-2/3 p-2 px-2 border-2 mr-4 mb-2 text-xl gap-10 rounded-md border-gray-300 outline-none'
                            type='password' placeholder='Confirm Your New Password' />
                    </div>
                    <button className=' bg-gray-500 h-12 text-white text-xl w-1/3 py-1 font-semibold hover:bg-blue-800 duration-300'>
                        Set Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResetPw
