import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-900 text-white'
     >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
         justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl'>
                    Hi! I'm Alan
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                  I am a third year Software Engineering student at
                  Concordia University in Montreal  
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                              <MdKeyboardArrowRight size={15} className
                              />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home