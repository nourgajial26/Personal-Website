import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    src?: string;
    prof?: string;
}

const images = ['/python.png', '/star.png', '/nasa.png']; 

export default function Skill({directionLeft, src, prof}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 200,
                opacity:0,
            }}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
            src={src}
            className='rounded-full border border-gray-300 object-cover 
            w-28 h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500
            ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-[#0edaff] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100 '> {prof}</p>
            </div>
        </div>
    </div>
  )
}