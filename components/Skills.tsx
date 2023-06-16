import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center min-h-screen z-0"
    >
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl mb-4">Skills</h3>

      <h3 className="uppercase tracking-[3px] text-gray-400 text-sm mb-8">Hover over a skill for current proficiency</h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill src="/skills/python.png" prof="100%" />
        <Skill src="/skills/java.png" prof="100%" />
        <Skill src="/skills/viro.png" prof="100%" />
        <Skill src="/skills/js.png" prof="75%" />
        <Skill src="/skills/8.png" prof="75%" />
        <Skill src="/skills/sql.png" prof="60%" />
        <Skill src="/skills/ms.png" prof="50%" />
        <Skill src="/skills/blender.png" prof="30%" />
      </div>

      <div className="mt-8 text-center">
        <h3 className="uppercase tracking-[3px] text-gray-400 text-sm">
          There is so much more to learn!
        </h3>
      </div>
      
    </motion.div>
  );
}

export default Skills;
