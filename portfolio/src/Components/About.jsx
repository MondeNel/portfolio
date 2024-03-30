import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#120c2c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-800'>About</p>
                </div>

                <div>
                </div>
                </div>
                
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Monde, nice to meet you. Please take a look around.</p>
                    </div>

                    <div  className='text-1xl'>
                    <p>
                        I'm a junior developer passionate about building excellent software that improves the lives of those around me. I enjoy tackling complex problems and crafting elegant solutions using the latest technologies. I'm eager to learn and grow as a developer, and I'm excited about the opportunity to contribute to innovative projects.
                    </p>

                    </div>
                </div>

            </div>
        </div>
  )
}

export default About