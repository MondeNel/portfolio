import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#120c2c] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/pbmqkwdb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email - Mondenel1996@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2'/>
            <input type="text" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 p-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact