import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, my name is Nour Gajial", 
                "Girl-who-loves-to-make-art", 
                "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-7-9 items-center justify-center text-central overflow-hidden bg-gradient-to-b from-gray-950 to-gray-700' >
            <BackgroundCircles/>
            <img className="relative rounded-full  h-36 w-36 mx-auto object-cover" 
                src="/nour2.png" 
                alt='Headshot'
            />
        
            <div className='z-20'>
                <h2 
                    className=" pt-5 text-sm uppercase text-gray-400 pb-2 tracking-[15px]"
                    >Software Engineer
                </h2>
            </div>
            <div className='z-20'>
                <h1 className="text-3xl lg:text-6xl font-semibold px-10">
                    <span className='mr-2'>{text}</span>
                    <Cursor cursorColor="#0edaff" />  
                </h1>
            </div>
                <div className='pt-5 z-20 text-gray-400'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Gallery</button>
                    </Link>
                </div>
            
       </div>
    )
}
