import React from 'react'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-sign.png'

const Footer = () => {

  const handleScroll=(sectionId)=>{
    const section=document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  
  return (
    <section className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ' >
      <div className='container mx-auto text-center' >
        <h2 className='text-xl font-semibold text-purple-500 '>
          Balia Sahu
        </h2>

        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4' >
          {
            [
              {name:"About", id:"about" },
              {name:"Skills", id:"skills" },
              {name:"Experience", id:"experience"},
              {name:"Projects", id:"work"},
              {name:"Education", id:"education"}
            ].map((e,index)=>{
              return(<button
              key={index}
              onClick={()=> handleScroll(e.id)}
              className=' hover:text-purple-500 text-sm sm:text-base my-1 '
              >
                {e.name}
              </button>)
            })
          }
        </nav>

        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          <a href="https://www.linkedin.com/in/balia-sahu-385969299" target='_blank'  className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110 ' >
          <img className='bg-white rounded-full h-8 ' src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/baliasahu" target='_blank'  className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110 ' >
          <img className='bg-white rounded-full h-8 ' src={github} alt="Git Hub" />
          </a>
        </div>
        <a className='text-sm text-gray-400 mt-6 ' href="">© 2026 Balia Sahu. All rights reserved.</a>
      </div>
    </section>
  )
}

export default Footer