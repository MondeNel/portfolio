import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import supabase from '../assets/supabase.png'
import javascript from '../assets/javascript.png'



const Skills = () => {
  return (
    <div name='skills' className='bg-[#120c2c] text-gray-300'>

        {/* conatiner */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Experience</p>
                <p className='py-4'>// These are the Technologies that I have good knowledge about</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html-icon" />
                    <p className='my-4'>HTML</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Skills