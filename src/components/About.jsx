import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Oleksandr, nice to meet you. Let me introduce myself.</p>
          </div>
          <div className="font-bold">
            <p>I am a dedicated Front-end Developer with experience in helping companies develop user-friendly web applications,
              a strong eye for innovative design, and a keen understanding of modern techniques.
              I am specializing in React, HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About