import React from 'react';
import Typewriter from 'typewriter-effect';
import HeroImage from '../assets/heroImage.png';
import {GiMedicalPack} from 'react-icons/gi';


const Home = () => {
  return (
   <div name="home" className='h-screen w-full bg-gradient-to-b from-black via to-gray-900 to-gray-800' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-white text-4xl sm:text-7xl font-bold  sm:text-white'>I'm <span className='text-yellow-500'>SHEENA MARIE</span> BOFILL</h2>
          
          <p className='text-gray-500 text-3xl font-bold py-4 max-w-md '>
            <Typewriter
                options={{
                strings: ['I am Registered Nurse','and','Licensed Professional Teacher'],
                autoStart: true,
                loop: true,
                }} />
          </p>
          
          <div>
            <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-fuchsia-800 via-violet-500 to-blue-500 cursor-pointer'>
              My Resume 
              <span className='group-hover:rotate-90 duration-300'>
                <GiMedicalPack size={15} className='ml-1' />
              </span>
           
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt='my profile' className=' rounded-3xl mx-auto w-2/3 md:w-full md:rounded-md md:bg-gradient-to-b from-black via-slate-700 to-white'/>
        </div>
      </div>
   </div>
  )
}

export default Home