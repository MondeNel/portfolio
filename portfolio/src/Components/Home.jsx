import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#120c2c]'>

        {/* Container */}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-800'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Monde Nel</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>As a junior level software developer, I bring key skills to a team, including
                JavaScript, React, HTML, CSS. I have a strong problem-solving ability, and I'm known
                for my excellent communication skills, which facilitate effective communication.
            </p>
            <div>
                <Link to='work' smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800'>
                        View work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <ArrowForwardIcon className='ml-3'/>
                        </span>
                    </button>
                </Link>
            </div>
         </div>


    </div>
  )
}

export default Home;
