'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CapabilitiesSection.css';

export default function CapabilitiesSectionCareers2Main({
    // Content Props
    eyebrow = 'Our capabilities',
    title = 'The People, Equipment and Experience Behind the Work',
    body = "Good work depends on the people and plant behind it. A.J Group brings together experienced people, capable equipment and established processes across its businesses and sectors, so the standard holds whether a job is a single component, a large production run or a new venture.",
    title2 = 'LEARN, CONTRIBUTE, TAKE OWNERSHIP, GROW',
    dec2 = 'As new opportunities emerge, AJ Group will continue to build, acquire and develop businesses that strengthen the Group and contribute to its long-term vision',
    buttonText = 'Explore Our Portfolio',
    buttonLink = '/our-portfolio',

    align = 'center', // 'center' | 'left' | 'right'
    showButton = true,
    showArrow = true, // Button mein arrow icon
    maxWidth = 900, // Content max width

    // Animation Props
    animationDelay = 0,
}) {

    // Alignment Style
    const getAlignmentStyle = () => {
        switch (align) {
            case 'left':
                return {
                    marginLeft: 0,
                    marginRight: 'auto',
                    textAlign: 'left',
                    alignItems: 'flex-start'
                };
            case 'right':
                return {
                    marginLeft: 'auto',
                    marginRight: 0,
                    textAlign: 'right',
                    alignItems: 'flex-end'
                };
            default: // center
                return {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    alignItems: 'center'
                };
        }
    };

    return (
        <section className="aj-cap-section">
            <div className="aj-cap-container">
                <motion.div
                    className="aj-cap-wrapper"
                    style={{
                        ...getAlignmentStyle(),
                        maxWidth: maxWidth,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                        duration: 0.8,
                        delay: animationDelay,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {eyebrow && <span className="aj-cap-eyebrow">{eyebrow}</span>}

                    <h2 className="aj-cap-title">{title}</h2>

                    {body && <p className="aj-cap-body" >{body}</p>}

                <h2 className="aj-cap-title" style={{color:'var(--color-gold)', fontSize:'24px', whiteSpace:'pre-line', lineHeight:'20px'}}>{title2}</h2>
                {/* {body && <p className="aj-cap-body" style={{width:'500px'}}>{dec2}</p>} */}
                {showButton && buttonText && (
                    <a href={buttonLink} className="btn btn-outline-gold aj-cap-btn">
                        {buttonText}
                        {showArrow && <ArrowRight size={16} />}
                    </a>
                )}
            </motion.div>
        </div>
    </section >
  );
}
