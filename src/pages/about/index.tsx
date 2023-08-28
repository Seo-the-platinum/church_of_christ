import React from 'react'
import Image from 'next/image'

const About= () => {
  return (
    <div className='flex flex-col items-center w-screen'>
        <h1 className='text-xl italic'>
            And I say unto thee, that thou art Peter, and upon this rock I will build church and the gates of hell shall not prevail against it.
            (Matthew 16:18)
        </h1>
        <div>
            <Image className='flex' src='/images/aboutBanner1.jpg' alt='about banner' width={600} height={600} />
            <p className='text-center'>By: <span className='text-blue-600'>Batsell Barrett Baxter</span></p>
        </div>
    </div>
  )
}

export default About