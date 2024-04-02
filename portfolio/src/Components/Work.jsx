import React from 'react';
import bookConnect from '../assets/Work/bookCoonect1.png'
import quiz from '../assets/Work/quiz1.png'
import movie from '../assets/Work/movie1.png'
import weather from '../assets/Work/weather1.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#120c2c]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Work</p>
                <p className='py-4'>// check out my recent projects</p>
            </div>

            {/* grid container */}
            <div className='grid sm:grid-col-2 md:grid-col-3 gap-4'>


                {/* grid item 1 */}
                <div style={{ backgroundImage: `url(${bookConnect})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                BookConnect Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                </a>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* grid item 2 */}
                    <div style={{ backgroundImage: `url(${quiz})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Quiz Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                </a>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                      {/* grid item 3 */}
                      <div style={{ backgroundImage: `url(${movie})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Movie/Podcast Application
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href="/">
                                    </a>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* grid item 4 */}
                      <div style={{ backgroundImage: `url(${weather})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Weather Application
                                </span>

                                <div className='pt-8 text-center'>
                                    <a href="/">
                                    </a>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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