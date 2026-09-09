'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import ContactFormSubmitApplication from '@/components/ContactPage/ContactFormSubmitApplication';
import './CTASection2ContactPage.css';

export default function CTASection2ContactPage({
  eyebrow = 'Get In Touch',
  headline = 'Built To Grow, Built To Last',
  body = "Tell us what you need to build or make. A.J Group will point you to the right capability and the right business.",

  primaryButtonText = 'Start a Project',
  primaryButtonLink = '/consultation',
  primaryButtonIcon = 'arrow',

  secondaryButtonText = 'Contact the Group',
  secondaryButtonLink = '/contact',
  secondaryButtonIcon = 'phone',

  showContactInfo = false,
  email = 'info@ajgrouphq.com',
  phone = '+1 (234) 567-890',
  location = 'Global Operations',

  showEyebrow = true,
  showHeadline = true,
  showBody = true,
  showPrimaryButton = true,
  showSecondaryButton = true,

  animationDelay = 0,

  // NEW — turns the primary button into an inline form instead of navigating
  expandable = false,
}) {
  // 'buttons'   -> both buttons visible
  // 'expanding' -> secondary hiding / primary taking full width
  // 'form'      -> primary area swapped for the embedded form
  const [stage, setStage] = useState('buttons');

  const getIcon = (iconType, size = 16) => {
    switch (iconType) {
      case 'arrow':
        return <ArrowRight size={size} />;
      case 'phone':
        return <Phone size={size} />;
      case 'mail':
        return <Mail size={size} />;
      default:
        return null;
    }
  };

  const handlePrimaryClick = (e) => {
    if (!expandable) return;
    e.preventDefault();
    if (stage !== 'buttons') return;
    setStage('expanding');
    window.setTimeout(() => setStage('form'), 480);
  };

  const handleClose = () => {
    setStage('expanding');
    window.setTimeout(() => setStage('buttons'), 480);
  };

    const smoothTransition = { duration: 0.48, ease: [0.22, 1, 0.36, 1] };


  return (
    <section className="aj-ctaSubmitApplicants-section">
      <div className="container2">
        <motion.div className="aj-ctaSubmitApplicants-wrapper" layout transition={smoothTransition}>
          <div className="aj-ctaSubmitApplicants-glow aj-ctaSubmitApplicants-glow--top" />
          <div className="aj-ctaSubmitApplicants-glow aj-ctaSubmitApplicants-glow--bottom" />

          {/* Row 1: Eyebrow + Headline (Left) | Body (Right) — stays visible throughout */}
          <motion.div
            className="aj-ctaSubmitApplicants-top-row"
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aj-ctaSubmitApplicants-heading-group">
              {showEyebrow && eyebrow && (
                <motion.span
                  className="aj-ctaSubmitApplicants-eyebrow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: animationDelay + 0.2 }}
                >
                  {eyebrow}
                </motion.span>
              )}

              {showHeadline && headline && (
                <motion.h2
                  className="aj-ctaSubmitApplicants-headline"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: animationDelay + 0.3 }}
                >
                  {headline}
                </motion.h2>
              )}
            </div>

            {showBody && body && (
              <motion.p
                className="aj-ctaSubmitApplicants-body2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: animationDelay + 0.4 }}
              >
                {body}
              </motion.p>
            )}
          </motion.div>

          {/* Row 2: Buttons — morphs into the form */}
          {(showPrimaryButton || showSecondaryButton) && (
            <motion.div className="aj-ctaSubmitApplicants-buttons-row" layout transition={smoothTransition}>
              <AnimatePresence mode="popLayout">
                {showSecondaryButton && secondaryButtonText && stage === 'buttons' && (
                  <motion.a
                    key="secondary-btn"
                    href={secondaryButtonLink}
                    className="btn btn-outline-gold aj-ctaSubmitApplicants-secondary-btn"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={smoothTransition}
                    whileTap={{ scale: 0.98 }}
                  >
                    {getIcon(secondaryButtonIcon, 16)} {secondaryButtonText}
                  </motion.a>
                )}
              </AnimatePresence>

              {showPrimaryButton && (
                <motion.div
                  layout
                  className={`aj-ctaSubmitApplicants-primary-panel${stage === 'form' ? ' is-open' : ''}`}
                  transition={smoothTransition}
                >
                  <AnimatePresence mode="wait">
                    {stage !== 'form' ? (
                      <motion.a
                        key="primary-btn"
                        href={primaryButtonLink}
                        onClick={handlePrimaryClick}
                        className="btn btn-gold aj-ctaSubmitApplicants-primary-btn"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={smoothTransition}
                        whileTap={{ scale: 0.98 }}
                      >
                        {primaryButtonText} {getIcon(primaryButtonIcon, 18)}
                      </motion.a>
                    ) : (
                        
                      <motion.div
                        key="primary-form"
                        className="aj-ctaSubmitApplicants-inline-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                      >
                        <ContactFormSubmitApplication embedded onClose={handleClose} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Row 3: Contact Info */}
          {showContactInfo && stage === 'buttons' && (
            <motion.div
              className="aj-ctaSubmitApplicants-info-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: animationDelay + 0.8 }}
            >
              <span className="aj-ctaSubmitApplicants-info-item">
                <Mail size={16} />
                {email}
              </span>
              <span className="aj-ctaSubmitApplicants-info-divider" />
              <span className="aj-ctaSubmitApplicants-info-item">
                <Phone size={16} />
                {phone}
              </span>
              <span className="aj-ctaSubmitApplicants-info-divider" />
              <span className="aj-ctaSubmitApplicants-info-item">
                <MapPin size={16} />
                {location}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}