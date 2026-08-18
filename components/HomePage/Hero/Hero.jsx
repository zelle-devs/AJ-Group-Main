'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  // Slider images - Industrial manufacturing shots
  const heroImages = [
    '/hero-1.jpg', // CNC sparks
    '/hero-2.jpg', // Large-format printing
    '/hero-3.jpg', // Finished installation
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play logic
  useEffect(() => {
    if (heroImages.length <= 1) {
      setIsAutoPlaying(false)
      return
    }

    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, heroImages.length])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [])

  return (
    <section className="hero">
      {/* Background Slider */}
      {heroImages.length > 1 ? (
        <div className="hero-slider">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slider-image ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      ) : (
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${heroImages[0] || '/hero-1.jpg'})` }}
        />
      )}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Built to <span>Specification.</span> Delivered to Standard.
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            A diversified manufacturing group: precision metalwork, high-definition 
            print and packaging, and consumer design brands. Whatever the medium, 
            the standard holds.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="/contact" className="btn btn-gold hero-primary-btn">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="/companies" className="btn btn-outline-light hero-secondary-btn">
              Explore Our Companies
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Box - Right Bottom Corner */}
      <motion.div 
        className="hero-video-box"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.8 }}
      >
        <button className="hero-video-play" aria-label="Play video">
          <Play size={18} fill="currentColor" />
        </button>
        <div className="hero-video-text">
          <span className="hero-video-title">Watch Full Video</span>
          <span className="hero-video-subtitle">Discover The Experience</span>
        </div>
      </motion.div>

      {/* Slider Dots - Centered Bottom */}
      {heroImages.length > 1 && (
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Hero