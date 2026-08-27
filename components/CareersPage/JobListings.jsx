'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, Building2, Search, ChevronRight } from 'lucide-react';
import './JobListings.css';

const DEFAULT_JOBS = [
  {
    id: 1,
    title: '[Job Title]',
    department: '[Department]',
    location: '[Location]',
    type: '[Full-time]',
    company: '[Company]',
  },
  {
    id: 2,
    title: '[Job Title]',
    department: '[Department]',
    location: '[Location]',
    type: '[Full-time]',
    company: '[Company]',
  },
  {
    id: 3,
    title: '[Job Title]',
    department: '[Department]',
    location: '[Location]',
    type: '[Full-time]',
    company: '[Company]',
  },
];

export default function JobListings({
  eyebrow = 'Open Roles',
  headline = 'Current Opportunities.',
  body = "Explore roles open across A.J Group's businesses. New positions are added as the Group grows, so if nothing fits today, submit your CV and we'll keep you in mind.",
  jobs = DEFAULT_JOBS,
}) {
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
          {jobs.map((job, index) => (
            <motion.div
              key={job.id || index}
              className="aj-job-card"
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Glow Effect */}
              <div className="aj-job-card-glow" />

              {/* Shine Effect */}
              <div className="aj-job-card-shine" />

              {/* Left - Icon */}
              <div className="aj-job-card-icon">
                <Briefcase size={22} />
              </div>

              {/* Middle - Info */}
              <div className="aj-job-info">
                <h3 className="aj-job-title">{job.title}</h3>
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
                </div>
              </div>

              {/* Right - Button */}
              <a href={`/careers/${job.id}`} className="btn btn-outline-gold aj-job-btn">
                View Role <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}