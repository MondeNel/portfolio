import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#120c2c]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Work</p>
                <p className='py-4'>// check out my recent projects</p>
            </div>

            {/* grid container */}
            <div>
                <div>
                    <div>
                        <span></span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>

                            <a href="/">
                                <button></button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Work