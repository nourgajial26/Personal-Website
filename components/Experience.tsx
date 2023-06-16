import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

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
            <h3 className='uppercase tracking-[20px] text-gray-300 text-2xl p-5'>
            Experience
            </h3>
        </div>

        <div className='w-full h-fit flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory absolute top-36'>
            {/* ExperienceCard */}
            <ExperienceCard 
              src="/invisible.png" 
              title="Invisible Thread"
              role="AR Technical Artist"
              pic={["/blue.png", "/blue.png", "/blue.png", "/blue.png", "/blue.png"]}
              summ={[
                { title: 'Item 1', description: 'Worked on client based projects focused on increassing accesiblility to AR products' },
                { title: 'Item 2', description: 'Collaborated with a team of developers to successfully launch an AR application on 8th Wall' },
                { title: 'Item 3', description: 'Utilized Blender to create 3D mockups for project assets' },
              ]}
            />
            <ExperienceCard
              src="/nasa.png" 
              title="NASA Hackathon"
              role="Global Nominee"
              pic={['/star2.png', '/star2.png', '/star2.png', '/star2.png', '/star2.png']}
              summ={[
                { title: 'Item 1', description: 'Utilized AI to sort 20,000 NASA Datasets and 10,000 NASA Images' },
                { title: 'Item 2', description: 'Implemented GTP3 & Stable Diffusion AI Inpainting to Enable Explanation & Creativity' },
                { title: 'Item 3', description: 'Deployed live to datawithoutlimits.earth' },
              ]}
            />
            <ExperienceCard
              src="/cornell2.png" 
              title="Cornell Health Hackathon"
              role="Finalist"
              pic={['/herb.png','/herb.png', '/herb.png', '/herb.png', '/herb.png']}       
              summ={[
                { title: 'Item 1', description: 'Utilized generative AI to develop personalized environments to individuals overcome their phobias.' },
                { title: 'Item 2', description: 'Leveraged AR and VR technologies to simulate immersive exposure therapy sessions.' },
                { title: 'Item 3', description: 'Created an accessible and cost effective structure for launching this app' },
              ]}
            
            />
        </div>
    </motion.div>
  )
}