'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, User, Building2, X, FileUser } from 'lucide-react';
import './ContactFormSubmitApplication.css';
import SubmitApllicationResumeButton from './SubmitApllicationResumeButton/SubmitApllicationResumeButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const API_URL = 'https://ajgrouphqapi.zellehost.com/api/applications';
const MAX_CV_SIZE = 2 * 1024 * 1024; // 2MB

export default function ContactFormSubmitApplication({
  eyebrow = 'Submit Application',
  headline = 'Join Us.',
  embedded = false,
  onClose = null,
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [cvFile, setCvFile] = useState(null);
  const [cvError, setCvError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    if (name === 'phone') {
      const onlyNumbers = value.replace(/[^0-9]/g, '');  
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCvSelected = (file) => {
    setSubmitError('');
    if (!file) {
      return;
    }

    if (file.type !== 'application/pdf') {
      setCvError('Only PDF files are allowed.');
      setCvFile(null);
      return;
    }

    if (file.size > MAX_CV_SIZE) {
      setCvError('File size must not exceed 2 MB.');
      setCvFile(null);
      return;
    }

    setCvError('');
    setCvFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      return;
    }

    if (!cvFile) {
      setCvError('Please upload your CV (PDF only, max 2 MB).');
      return;
    }

    setSubmitting(true);
    
    try {
      const payload = new FormData();
      payload.append('first_name', formData.firstName);
      payload.append('last_name', formData.lastName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('subject', formData.subject);
      payload.append('cover_letter', formData.message);
      payload.append('cv', cvFile);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Submission failed (status ${response.status}). Please try again.`);
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      setCvFile(null);
      setCvError('');
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper
      className={
        embedded
          ? 'aj-contactSubmitApplicants-form-embedded'
          : 'aj-contactSubmitApplicants-form-section'
      }
    >
      <div 
        className={embedded ? '' : 'container2'} 
        style={{ position: 'relative' }} // Added relative positioning for the absolute loader overlay
      >
        {onClose && (
          <button
            type="button"
            className="aj-contactSubmitApplicants-form-close"
            onClick={onClose}
            aria-label="Close form"
            disabled={submitting} // Disable close button while submitting
          >
            <X size={18} />
          </button>
        )}

        {/* Loader Overlay */}
        {submitting && (
          <div
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 99,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LoadingSpinner />
          </div>
        )}

        <div 
          className="aj-contactSubmitApplicants-content-grid"
          style={{
            opacity: submitting ? 0.4 : 1, // Dims the component when submitting
            pointerEvents: submitting ? 'none' : 'auto', // Prevents clicks while loading
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* LEFT COLUMN: Header & Form */}
          <div className="aj-contactSubmitApplicants-left-col">
            {!embedded && (
              <motion.div
                className="aj-contactSubmitApplicants-form-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {eyebrow && <span className="aj-contactSubmitApplicants-form-eyebrow">{eyebrow}</span>}
                {headline && <h2 className="aj-contactSubmitApplicants-form-headline">{headline}</h2>}
              </motion.div>
            )}

            {submitted ? (
              <motion.div
                className="aj-contactSubmitApplicants-form-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="aj-contactSubmitApplicants-form-success-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h3>Application Submitted!</h3>
                <p>Your application has been received successfully. Our team will review it and get back to you shortly.</p>
                {/* <button
                  className="btn btn-outline-gold aj-contactSubmitApplicants-form-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button> */}
              </motion.div>
            ) : (
              <motion.form
                className="aj-contactSubmitApplicants-form"
                onSubmit={handleSubmit}
                initial={embedded ? { opacity: 0 } : { opacity: 0, y: 30, rotateX: -5 }}
                animate={embedded ? { opacity: 1 } : undefined}
                whileInView={embedded ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                viewport={embedded ? undefined : { once: true }}
                transition={{
                  duration: embedded ? 0.4 : 0.8,
                  delay: embedded ? 0.15 : 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Row 1: First Name | Last Name */}
                <div className="aj-contactSubmitApplicants-form-row">
                  <div className="aj-contactSubmitApplicants-form-group">
                    <label className="aj-contactSubmitApplicants-form-label">
                      <User size={14} /> First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="aj-contactSubmitApplicants-form-input"
                      required
                    />
                  </div>
                  <div className="aj-contactSubmitApplicants-form-group">
                    <label className="aj-contactSubmitApplicants-form-label">
                      <User size={14} /> Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="aj-contactSubmitApplicants-form-input"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email (single row) */}
                <div className="aj-contactSubmitApplicants-form-group">
                  <label className="aj-contactSubmitApplicants-form-label">
                    <Mail size={14} /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="aj-contactSubmitApplicants-form-input"
                    required
                  />
                </div>

                {/* Row 3: Phone | Company */}
                <div className="aj-contactSubmitApplicants-form-row">
                  <div className="aj-contactSubmitApplicants-form-group">
                    <label className="aj-contactSubmitApplicants-form-label">
                      <Phone size={14} /> Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="aj-contactSubmitApplicants-form-input"
                    />
                  </div>
                  <div className="aj-contactSubmitApplicants-form-group">
                    <label className="aj-contactSubmitApplicants-form-label">
                      <Building2 size={14} /> Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="aj-contactSubmitApplicants-form-input"
                    />
                  </div>
                </div>

                {/* Row 4: Subject (single row) */}
                <div className="aj-contactSubmitApplicants-form-group">
                  <label className="aj-contactSubmitApplicants-form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="aj-contactSubmitApplicants-form-input"
                    required
                  />
                </div>

                {/* Cover Letter */}
                <div className="aj-contactSubmitApplicants-form-group">
                  <label className="aj-contactSubmitApplicants-form-label">Cover Letter *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="aj-contactSubmitApplicants-form-textarea"
                    rows="5"
                    required
                  />
                </div>

                <div style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'10px'}}>
               <SubmitApllicationResumeButton onFileSelected={handleCvSelected} />
                <p className='aj-contactSubmitApplicants-form-label' style={{fontWeight:'700'}}>Max File Size Allowed 2 MBs</p>
                </div>

                {cvFile && !cvError && (
                  <p className="aj-contactSubmitApplicants-form-label" style={{ color: '#2e7d32', marginTop: '4px' }}>
                    Selected: {cvFile.name}
                  </p>
                )}
                {cvError && (
                  <p className="aj-contactSubmitApplicants-form-label" style={{ color: '#c62828', marginTop: '4px' }}>
                    {cvError}
                  </p>
                )}

                {submitError && (
                  <p className="aj-contactSubmitApplicants-form-label" style={{ color: '#c62828', marginTop: '10px' }}>
                    {submitError}
                  </p>
                )}

                {/* Consent */}
                {/* <div className="aj-contactSubmitApplicants-form-consent">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="aj-contactSubmitApplicants-form-checkbox"
                    required
                  />
                  <span className="aj-contactSubmitApplicants-form-consent-text">
                    I agree to A.J Group processing my personal data in accordance with the privacy policy.
                  </span>
                </div> */}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-gold aj-contactSubmitApplicants-form-submit"
                  style={{ marginTop: '20px' }}
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'} <Send size={16} />
                </button>
              </motion.form>
            )}
          </div>

          {/* RIGHT COLUMN: Image */}
          <motion.div
            className="aj-contactSubmitApplicants-right-col"
            initial={embedded ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={embedded ? { opacity: 1 } : undefined}
            whileInView={embedded ? undefined : { opacity: 1, x: 0 }}
            viewport={embedded ? undefined : { once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <img
              src="/logo2.png"
              alt="Application Process"
              className="aj-contactSubmitApplicants-image"
            />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}