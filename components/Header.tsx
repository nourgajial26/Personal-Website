import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center'>
       {/* social icons */}
        <motion.div 
          initial={{ 
              x: -500,
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
              x:0,
              opacity: 1,
              scale: 1,
          }}
          transition={{
              duration: 1.5,
          }}
          className="flex flex-row items-center">
        
          <SocialIcon 
              url="https://instagram.com/nours_palette"
              fgColor='gray'
              bgColor='transparent' 
          />
          <SocialIcon 
              url="https://www.linkedin.com/in/nour-gajial-a0233522b/"
              fgColor='gray'
              bgColor='transparent' 
          />
          {/* <SocialIcon 
              url="https://drive.google.com/drive/folders/18G2yqeJcEYF4M9tHEEw8SJ0HRRYiQ7iv?usp=drive_link"
              fgColor='gray'
              bgColor='transparent' 
          /> */}
        </motion.div>
        
        {/* <Link href="#contact"> */}
        <Link href='#contact'>
        <motion.div 
          initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
              x:0,
              opacity: 1,
              scale: 1,
          }}
          transition={{
              duration: 1.5,
          }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
              className="cursor-pointer"
              network="email"
              fgColor='gray'
              bgColor='transparent' 
          />

            <button className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</button>
          
        
          {/* <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p> */}
        </motion.div>
        </Link>
   
      {/* </Link> */}
    </header>
  )
}