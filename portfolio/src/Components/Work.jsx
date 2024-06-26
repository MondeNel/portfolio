import React from 'react';
import bookConnect from '../assets/Work/bookCoonect_1.png'
import quiz from '../assets/Work/quiz1.png'
import movie from '../assets/Work/movie1.png'
import weather from '../assets/Work/weather1.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#120c2c]'>


       {/* conatiner */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Work</p>
                <p className='py-4'>// Check projects</p>
            </div>

            {/* grid container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>

                {/* grid item 1 */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${bookConnect})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '280px' }}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>BookConnect Application</span>
                        <div className='pt-8 text-center'>
                            <a href="https://bookbrowser.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                            </a>
                            <a href="https://github.com/MondeNel/Bookbrowser_application" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 

                    {/* grid item 2 */}
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${quiz})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '280px' }}>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Quiz Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://quizsimplify.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href="https://github.com/MondeNel/Quiz_application" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>

                      {/* grid item 3 */}
                      <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${movie})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '280px' }}>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Movie/Podcast Application
                                </span>

                                <div className='pt-8 text-center'>
                                <a href="https://Moonshoot3000.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href="https://github.com/MondeNel/Moonshoot3000" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
                                </a>
                            </div>
                            </div>
                        </div>

                        {/* grid item 4 */}
                        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${weather})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '280px' }}>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Weather Application
                                </span>

                                <div className='pt-8 text-center'>
                                <a href="https://checkanycityweather.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Demo</button>
                                </a>
                                <a href="https://github.com/MondeNel/Weather_Application" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>Code</button>
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