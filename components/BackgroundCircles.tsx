import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0]
        }}
        transition={{
            duration: 5,
        }}
    
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#0edaff]/20 rounded-full h-[200px] w-[200px] mt-52
         animate-ping'/>
        <div className='rounded-full border border-gray-900 opacity-50 h-[300px] w-[300px] mt-52 absolute'/>
        <div className='rounded-full border border-gray-900 opacity-50 h-[500px] w-[500px] mt-52 absolute'/>
        <div className='rounded-full border border-[#0edaff] opacity-20 h-[650px] w-[650px] absolute mt-52
        animate-pulse'/>
        <div className='rounded-full border border-[#0edaff]/20 h-[800px] w-[800px] mt-52 absolute animate-pulse'/>

    </motion.div>
   
  )
}

export default BackgroundCircles