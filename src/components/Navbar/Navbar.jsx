import React, { useEffect, useState } from 'react'
import github from '../../assets/github-sign.png'
import linkedin from '../../assets/linkedin.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ]

  // Scroll effect + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      menuItems.forEach(item => {
        const section = document.getElementById(item.id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll handler
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <div
      className={`fixed top-0 w-full z-50 transition duration-300 
      px-[7vw] lg:px-[20vw]
      ${isScrolled ? "bg-[#050414]/60 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Balia</span>
          <span className="text-[#8245ec]"> </span>
          <span>Sahu</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map(item => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec]
              ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/baliasahu" target="_blank" rel="noreferrer">
            <img className="bg-white rounded-lg h-8" src={github} alt="github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img className="bg-white rounded-lg h-8" src={linkedin} alt="linkedin" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img
            src={isOpen ? close : menu}
            className="bg-white h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5
        bg-[#050414]/70 backdrop-blur-lg rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map(item => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white
                ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/baliasahu" target="_blank" rel="noreferrer">
                <img className="bg-white rounded-lg h-8" src={github} alt="github" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img className="bg-white rounded-lg h-8" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
