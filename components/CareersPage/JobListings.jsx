'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  Building2, 
  Upload,
  Send,
  CheckCircle2,
  X,
  FileText,
  DollarSign,
  CalendarClock,
  BriefcaseBusiness,
} from 'lucide-react';
import './JobListings.css';

const DEFAULT_JOBS = [
  {
    id: 1,
    title: 'Designer',
    department: 'Designing',
    location: 'Karachi, Pakistan',
    type: 'Full-time',
    company: '[Company]',
    salary: '50k - 70k', // ← Add this
    timing: '[Working Hours]', // ← Add this
    description: 'We are looking for a talented individual to join our team. The ideal candidate will have relevant experience and a passion for quality work. You will work alongside experts in your field and contribute to meaningful projects across the Group.',
    responsibilities: [
      'Responsibility 1: Key duty or task',
      'Responsibility 2: Key duty or task',
      'Responsibility 3: Key duty or task',
      'Responsibility 4: Key duty or task',
    ],
    requirements: [
      'Requirement 1: Qualification or skill',
      'Requirement 2: Qualification or skill',
      'Requirement 3: Qualification or skill',
    ],
  },
  {
    id: 2,
    title: '[Job Title]',
    department: '[Department]',
    location: '[Location]',
    type: '[Full-time]',
    company: '[Company]',
    salary: '[Salary Range]', // ← Add this
    timing: '[Working Hours]', // ← Add this
    description: 'We are looking for a talented individual to join our team. The ideal candidate will have relevant experience and a passion for quality work. You will work alongside experts in your field and contribute to meaningful projects across the Group.',
    responsibilities: [
      'Responsibility 1: Key duty or task',
      'Responsibility 2: Key duty or task',
      'Responsibility 3: Key duty or task',
    ],
    requirements: [
      'Requirement 1: Qualification or skill',
      'Requirement 2: Qualification or skill',
    ],
  },
  {
    id: 3,
    title: '[Job Title]',
    department: '[Department]',
    location: '[Location]',
    type: '[Full-time]',
    company: '[Company]',
    salary: '[Salary Range]', // ← Add this
    timing: '[Working Hours]', // ← Add this
    description: 'We are looking for a talented individual to join our team. The ideal candidate will have relevant experience and a passion for quality work.',
    responsibilities: [
      'Responsibility 1: Key duty or task',
      'Responsibility 2: Key duty or task',
    ],
    requirements: [
      'Requirement 1: Qualification or skill',
      'Requirement 2: Qualification or skill',
    ],
  },
];

export default function JobListings({
  eyebrow = 'Open Roles',
  headline = 'Current Opportunities',
  body = "Explore roles open across A.J Group's businesses. New positions are added as the Group grows, so if nothing fits today, submit your CV and we'll keep you in mind.",
  jobs = DEFAULT_JOBS,
}) {
  const [openJobId, setOpenJobId] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    cvFile: null,
    coverLetter: '',
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const toggleJob = (jobId) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
    setApplicationSubmitted(false);
    setApplicationData({ name: '', email: '', phone: '', cvFile: null, coverLetter: '' });
  };

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setApplicationData((prev) => ({ ...prev, cvFile: e.target.files[0] }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (applicationData.name && applicationData.email && applicationData.cvFile) {
      setApplicationSubmitted(true);
    }
  };

  return (
    <section className="aj-jobs-section">
      <div className="container2">
        <motion.div 
          className="aj-jobs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <span className="aj-jobs-eyebrow">{eyebrow}</span>}
          {headline && <h2 className="aj-jobs-headline">{headline}</h2>}
          {body && <p className="aj-jobs-body">{body}</p>}
        </motion.div>

        <div className="aj-jobs-list">
          {jobs.map((job, index) => {
            const isOpen = openJobId === job.id;
            
            return (
              <div key={job.id || index} className="aj-job-wrapper">
                {/* Job Card Header */}
                <motion.div
                  className={`aj-job-card ${isOpen ? 'is-open' : ''}`}
                  initial={{ opacity: 0, y: 30, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="aj-job-card-glow" />
                  <div className="aj-job-card-shine" />

                  <div className="aj-job-card-icon">
                    <BriefcaseBusiness size={22} />
                  </div>

                  <div className="aj-job-info">
                    <h3 className="aj-job-title">{job.title}</h3>
                    {/* Job Meta - Salary aur Timing add karo */}
<div className="aj-job-meta">
  <span className="aj-job-meta-item">
    <Building2 size={13} />
    {job.department}
  </span>
  <span className="aj-job-meta-item">
    <MapPin size={13} />
    {job.location}
  </span>
  <span className="aj-job-meta-item">
    <Clock size={13} />
    {job.type}
  </span>
  {/* {job.salary && (
    <span className="aj-job-meta-item">
      <DollarSign size={13} />
      {job.salary}
    </span>
  )}
  {job.timing && (
    <span className="aj-job-meta-item">
      <CalendarClock size={13} /> 
      {job.timing}
    </span>
  )} */}
</div>
                  </div>

                  <button 
                    className={`btn btn-outline-gold aj-job-btn ${isOpen ? 'is-open' : ''}`}
                    onClick={() => toggleJob(job.id)}
                  >
                    {isOpen ? 'Close' : 'View Role'} 
                    {isOpen ? <X size={14} /> : <ArrowRight size={14} />}
                  </button>
                </motion.div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="aj-job-accordion"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="aj-job-accordion-inner">
                        {/* Left - Job Details */}
                        <div className="aj-job-details">
                          <h4 className="aj-job-details-title">Job Description</h4>
                          <p className="aj-job-details-desc">{job.description}</p>
                          
                          
                          <h5 className="aj-job-details-subtitle">Responsibilities</h5>
                          <ul className="aj-job-details-list">
                            {job.responsibilities?.map((item, i) => (
                              <li key={i} className="aj-job-details-item">
                                <ArrowRight size={12} />
                                {item}
                              </li>
                            ))}
                          </ul>
                          
                          <h5 className="aj-job-details-subtitle">Requirements</h5>
                          <ul className="aj-job-details-list">
                            {job.requirements?.map((item, i) => (
                              <li key={i} className="aj-job-details-item">
                                <ArrowRight size={12} />
                                {item}
                              </li>
                            ))}
                          </ul>

                          {/* Salary & Timing Info */}
  <div className="aj-job-details-info">
    {job.salary && (
      <span className="aj-job-details-info-item">
        <DollarSign size={14} />
        <strong>Salary:</strong> {job.salary}
      </span>
    )}
    {job.timing && (
      <span className="aj-job-details-info-item">
        <CalendarClock size={14} />
        <strong>Timing:</strong> {job.timing}
      </span>
    )}
  </div>
                        </div>

                        {/* Right - Application Form */}
                        <div className="aj-job-application">
                          {applicationSubmitted ? (
                            <motion.div 
                              className="aj-job-application-success"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                            >
                              <CheckCircle2 size={40} />
                              <h4>Application Submitted!</h4>
                              <p>Thank you for applying. We'll review your CV and get back to you.</p>
                            </motion.div>
                          ) : (
                            <form className="aj-job-application-form" onSubmit={handleApplicationSubmit}>
                              <h4 className="aj-job-application-title">Apply for this Role</h4>
                              
                              <div className="aj-job-application-group">
                                <label className="aj-job-application-label">Full Name *</label>
                                <input
                                  type="text"
                                  name="name"
                                  value={applicationData.name}
                                  onChange={handleApplicationChange}
                                  className="aj-job-application-input"
                                  required
                                />
                              </div>
                              
                              <div className="aj-job-application-group">
                                <label className="aj-job-application-label">Email *</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={applicationData.email}
                                  onChange={handleApplicationChange}
                                  className="aj-job-application-input"
                                  required
                                />
                              </div>
                              
                              <div className="aj-job-application-group">
                                <label className="aj-job-application-label">Phone</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={applicationData.phone}
                                  onChange={handleApplicationChange}
                                  className="aj-job-application-input"
                                />
                              </div>
                              
                              {/* CV Upload group ke baad ye add karo */}
<div className="aj-job-application-group">
  <label className="aj-job-application-label">Cover Letter</label>
  <textarea
    name="coverLetter"
    value={applicationData.coverLetter}
    onChange={handleApplicationChange}
    className="aj-job-application-input"
    rows="4"
    placeholder="Tell us why you're a good fit (optional)"
  />
</div>

                              <div className="aj-job-application-group">
                                <label className="aj-job-application-label">Upload CV *</label>
                                <div className="aj-job-application-upload">
                                  <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="aj-job-application-file"
                                    required
                                  />
                                  <Upload size={16} />
                                  <span>{applicationData.cvFile ? applicationData.cvFile.name : 'Choose File'}</span>
                                </div>
                              </div>
                              
                              <button type="submit" className="btn btn-gold aj-job-application-submit">
                                Submit Application <Send size={14} />
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}