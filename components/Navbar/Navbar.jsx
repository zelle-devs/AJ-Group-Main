'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/companies', label: 'Our Companies' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/industries', label: 'Industries' },
    { href: '/approach', label: 'Approach' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/careers', label: 'Careers' },
  ]

  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="navbar-logo" onClick={closeSidebar}>
            <Image 
              src="/AJ Icon+Wordmark Logo V2 .png"
              alt="AJ Group Logo" 
              className="navbar-logo-img"
              width={240}
              height={120}
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            <Link href="/contact" className="btn btn-gold navbar-cta">
              Start a Project
            </Link>
            
            <button 
              className="navbar-toggle"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div className={`navbar-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <Link href="/" className="navbar-logo" onClick={closeSidebar}>
            <Image 
              src="/AJ Icon+Wordmark Logo V2 .png"
              alt="AJ Group Logo" 
              className="navbar-logo-img"
              width={140}
              height={70}
              priority
              quality={100}
            />
          </Link>
          <button 
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="sidebar-links">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="sidebar-link"
              onClick={closeSidebar}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="btn btn-gold sidebar-cta"
            onClick={closeSidebar}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar