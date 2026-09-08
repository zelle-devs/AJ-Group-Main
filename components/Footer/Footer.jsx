'use client';

import { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
 
const DEFAULT_COMPANIES = [
  { name: 'Forgentis Fabrications', href: '/our-portfolio#forgentis' },
  { name: 'Print Pack Advertising', href: '/our-portfolio#ppa' },
];
 
const DEFAULT_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Industries', href: '/industries' },
  { name: 'Approach', href: '/approach' },
  // { name: 'Leadership', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
];

const DEFAULT_SOCIALS = [
  { icon: BsLinkedin, href: 'https://www.linkedin.com/company/a.jgroup/ ', label: 'LinkedIn' },
  // { icon: BsInstagram, href: 'https://instagram.com', label: 'Instagram' },
  // { icon: BsFacebook, href: 'https://facebook.com', label: 'Facebook' },
  // { icon: BsYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

const DEFAULT_BUTTONS = [
  { label: 'Start a Project', href: '/consultation', variant: 'gold' },
  { label: 'Explore Our Portfolio', href: '/our-portfolio', variant: 'outline' },
  { label: 'Talk To Our Team', href: '/contact', variant: 'outline' },
  { label: 'Contact Us', href: '/contact', variant: 'outline' },
];

export default function Footer({
  description = 'AJ Group is an operating group building, owning and growing businesses with a long-term vision. We create opportunities, build businesses from the ground up and pursue strategic expansion across sectors.',
  companies = DEFAULT_COMPANIES,
  links = DEFAULT_LINKS,
  phone = '+92 21 111 254 111',
  email = 'info@ajgrouphq.com',
  address = 'A.J House, 23/1, Korangi Industrial Area, Karachi 74900, Pakistan',
  socials = DEFAULT_SOCIALS,
  buttons = DEFAULT_BUTTONS,
}) {
  const year = new Date().getFullYear();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="aj-footer">
      {/* Diagonal Image Panel */}
      <div className="aj-footer-diagonal-image" aria-hidden="true">
        <Image
          src="/footer-bg.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 70vw, (max-width: 900px) 55vw, (max-width: 1279px) 45vw, 33vw"
          className="aj-footer-diagonal-image-img"
        />
      </div>

      <div className="container">
        <div className="aj-footer-top">
          {/* Brand */}
          <div className="aj-footer-col aj-footer-brand">
            <Link href="/" className="aj-footer-logo">
              <Image
                src="Aj_Main_Footer_Logo_Leftside.png"
                alt="A.J Group of Companies"
                width={220}
                height={80}
                className="aj-footer-logo-image"
                unoptimized={true}
              />
            </Link>
            <p className="aj-footer-desc">{description}</p>
          </div>

          {/* Our Companies */}
          <div className="aj-footer-col">
            <div className="aj-footer-heading-wrapper" onClick={() => toggleSection('companies')}>
              <span className="aj-footer-heading">Our Portfolio</span>
              <button className="aj-footer-toggle">
                <ChevronDown size={16} className={`aj-toggle-icon ${openSection === 'companies' ? 'open' : ''}`} />
              </button>
            </div>
            <ul className={`aj-footer-list ${openSection === 'companies' ? 'open' : ''}`}>
              {companies.map((c) => (
                <li key={c.name || c}>
                  <Link href={c.href || '/our-portfolio'}>
                    <ChevronRight size={13} />
                    <span>{c.name || c}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="aj-footer-col">
            <div className="aj-footer-heading-wrapper" onClick={() => toggleSection('links')}>
              <span className="aj-footer-heading">Quick Links</span>
              <button className="aj-footer-toggle">
                <ChevronDown size={16} className={`aj-toggle-icon ${openSection === 'links' ? 'open' : ''}`} />
              </button>
            </div>
            <ul className={`aj-footer-list ${openSection === 'links' ? 'open' : ''}`}>
              {links.map((l) => (
                <li key={l.name || l}>
                  <Link href={l.href || '/'}>
                    <ChevronRight size={13} />
                    <span>{l.name || l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="aj-footer-col aj-footer-contact">
            <div className="aj-footer-heading-wrapper" onClick={() => toggleSection('contact')}>
              <span className="aj-footer-heading">Get In Touch</span>
              <button className="aj-footer-toggle">
                <ChevronDown size={16} className={`aj-toggle-icon ${openSection === 'contact' ? 'open' : ''}`} />
              </button>
            </div>
            <ul className={`aj-footer-contact-list ${openSection === 'contact' ? 'open' : ''}`}>
              {/* <li>
                <Phone size={15} />
                <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
              </li> */}
              <li>
                <Mail size={15} />
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              {/* <li>
                <MapPin size={15} />
                <span>{address}</span>
              </li> */}
            </ul>
          </div>

          {/* CTA */}
          <div className="aj-footer-col aj-footer-cta">
            <div className="aj-footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="aj-footer-social-btn" target="_blank" rel="noopener noreferrer">
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="aj-footer-buttons">
              {buttons.map((b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className={`aj-footer-btn ${b.variant === 'gold' ? 'is-gold' : 'is-outline'}`}
                >
                  <span>{b.label}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="aj-footer-bottom">
          <p className="aj-footer-copyright">
            © {year} A.J Group of Companies. All Rights Reserved.
          </p>
           <p className="aj-footer-copyright">
            Designed and Managed by <span className='zelle'><a href='https://zellesolutions.com' target='blank'>Zelle Solutions Pvt. Ltd.</a></span>
          </p>
          <div className="aj-footer-bottom-links">
            <Link href="/careers">Careers</Link>
            <span className="aj-footer-dot">|</span>
            <Link href="/contact">Contact</Link>
            <span className="aj-footer-dot">|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="aj-footer-dot">|</span>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}