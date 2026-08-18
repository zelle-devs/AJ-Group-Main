'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp, Globe, Share2, Camera, Briefcase } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Our Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/contact', label: 'Contact' },
    ],
    services: [
      { href: '/services', label: 'Web Development' },
      { href: '/services', label: 'Mobile Apps' },
      { href: '/services', label: 'Digital Marketing' },
      { href: '/services', label: 'Consulting' },
    ],
  }

  // Social media icons ke alternatives use karein
  const socialLinks = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Share2, href: '#', label: 'Share' },
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: Briefcase, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <Link href="/" className="footer-logo">
              <span className="logo-text">AJ</span>
              <span className="logo-highlight">Group</span>
            </Link>
            <p className="footer-description">
              We provide innovative solutions to help your business grow and succeed in the digital world.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>123 Business Street, City, Country</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:info@ajgroup.com">info@ajgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AJ Group. All rights reserved.</p>
          <button className="footer-scroll-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer