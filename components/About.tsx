import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex flex-col relative text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >

    
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl pd-5'>
            About
        </h3>

        <motion.img
            initial={{
                x: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{opacity: 1, x:0}}
            // viewport={{once:true}}
            
            src='/cornell.png'
            className=" rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px]  mx-auto object-cover" 
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold text-gray-200'>
                A <span className='underline decoration-[#0edaff]/50'>little</span> background
            </h4>
            <p className='text-base text-gray-300'>
                I am a sophmore at Cornell University College of Engineering studying Computer Science. 
                I am deeply passionate about the intersection of technology and art, and I am committed to exploring the uncharted territory where these two realms meet.
                As a software developer, I find immense joy in building projects from scratch and bringing ideas to life through code. 
                The process of creating something tangible from mere concepts fascinates me, and I constantly strive to improve my skills and expand my knowledge. 
                Hackathons have become a significant part of my journey as a developer, as they provide the perfect platform for me to challenge myself, 
                collaborate with other creators, and learn new technologies.
                I am particularly excited about the world of Augmented Reality and Virtual Reality. 
                I am eager to delve deeper into these spaces and leverage their potential to create innovative solutions 
                and unforgettable user experiences.
            </p>
        </div>
    
     </motion.div>
    
  )
}