import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Education from './components/Education/Education.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
import Work from './components/Work/Work.jsx'
import Footer from './components/Footer/Footer.jsx'
import BlurBlob from './BlurBlob.jsx'
function App() {


  return (
    <div className='bg-[#050414]'>
      <BlurBlob position={{top:"35%",left:"20%",}} size={{width:"30%",height:"40%"}} ></BlurBlob>
      <div style={{
        maskImage:
          'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
      }} 
      className='absolute inset-0 
bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
bg-[size:14px_24px]'>
      </div>

      <div className='relative pt-20'>
        <Navbar></Navbar>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Work></Work>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
