import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import supabase from '../assets/supabase.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/typescript.png'
import git from '../assets/git.png'
import figma from '../assets/figma.png'



const Skills = () => {
  return (
    <div name='skills' className='bg-[#120c2c] text-gray-300'>

        {/* conatiner */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Experience</p>
                <p className='py-4'>// Tech stack</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html-icon" />
                    <p className='my-4'>HTML</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '85%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="html-icon" />
                    <p className='my-4'>CSS</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '90%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="html-icon" />
                    <p className='my-4'>JavaScript</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '75%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html-icon" />
                    <p className='my-4'>REACT</p>
                    <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '70%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={supabase} alt="html-icon" />
                    <p className='my-4'>SUPABASE</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '80%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={typescript} alt="html-icon" />
                    <p className='my-4'>TypeScript</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '60%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={git} alt="html-icon" />
                    <p className='my-4'>Git</p>
                <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '90%' }}></div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={figma} alt="html-icon" />
                    <p className='my-4'>Figma</p>
                    <div className="bg-gray-500 h-2 rounded-lg mt-2">
                    <div className="bg-blue-800 h-full rounded-lg" style={{ width: '73%' }}></div>
                </div>
            </div>

        </div>

        </div>

    </div>
  )
}

export default Skills