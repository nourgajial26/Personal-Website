import React from 'react';
import { motion } from 'framer-motion';

type ListItem = {
  title: string;
  description: string;
};

type Props = {
  src?: string;
  title?: string;
  role?: string;
  pic?: string[];
  summ?: ListItem[];
};

export default function ExperienceCard({
  src,
  title,
  role,
  pic,
  summ,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-900 p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center"
        src={src}
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{role}</p>
        <div className="flex space-x-2 my-2">
          {pic &&
            pic.map((item, index) => (
              <img
                key={index}
                className="h-6 w-6 rounded-full"
                src={item}
                alt=""
              />
            ))}
        </div>
        <ul className="list-disc space-y-3 ml-5 text-lg mt-6">
          {summ &&
            summ.map((item, index) => (
              <li key={index}>
                <p>{item.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
