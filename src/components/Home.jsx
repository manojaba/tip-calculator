import React from 'react'
import Hero from './Hero'

function Home() {
    return (
        <div className='bg-f-grey-200 min-h-screen flex flex-col items-center pt-[50px] md:px-[80px] md:pb-[50px] xl:flex justify-center xl:px-[260px]  '>
            <img src='./images/logo.svg' className='mb-[40px] xl:mb-[87px]'></img>
            <Hero />
        </div>
    )
}

export default Home