import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ECNASA from './ECNASA'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'>
        
        <div className='absolute top-24 left-0 right-0 flex justify-center'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl p-5'>
            Experience
            </h3>
        </div>

        <div className='w-full h-fit flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory absolute top-36'>
            {/* ExperienceCard */}
            <ExperienceCard/>
            <ECNASA/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}