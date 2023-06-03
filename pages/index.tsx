import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-[rgb(60,60,60)] text-white h-screen snap-y snap-mandatory
       overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        <Head>
          <title> Nours Portfolio</title>
        </Head>

        {/* Header */}
        <Header/>
        
        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero/>
        </section>

        {/* About */}
        <section id='about' className='snap-center'>
          <About/>
        </section>

        {/* Experience */}
        {/* <section id='experience' className='snap-center'>
          <Experience/>
        </section> */}

        {/* Skills */}
        {/* <section id="skills" className='snap-start'>
          <Skills/>
        </section> */}

        {/* Projects */}
        {/* <section id='projects' className='snap-start'>
          <Projects/>
        </section> */}

        {/* Contact */}
        {/* <section id='contact' className='snap-start'>
          <Contact/>
        </section> */}
      </div>

      
    </main>
  )
}
