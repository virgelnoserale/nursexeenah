import React from 'react'

const contact = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black pt-10'>
      
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 pt-20 '>
            <p className='text-4xl font-bold inline text-red-500 '> Contact</p>
            <p className='text-white py-4'> Submit the form to get in touch with me.</p>
        </div>
            <div className=' flex justify-center items-center'>
                <form action="https://getform.io/f/fa2458c3-afa7-48d1-bbb2-5b5c84867003" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Type your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name='email' placeholder='Type your email' className=' my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' placeholder='Type you message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className=' bg-gradient-to-b from-blue-400 to-pink-600 px-6 py-2 my-8 font-bold text-white mx-auto rounded-md flex items-center hover:scale-105 duration-300  '>Lets Talk</button>
                </form>
            </div>
      </div>
    </div>
  )
}

export default contact
