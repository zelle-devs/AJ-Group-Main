'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CapabilitiesSection.css';

export default function CapabilitiesSectionHomeMain({
    // Content Props
    eyebrow = 'Our capabilities',
    title = 'The People, Equipment and Experience Behind the Work',
    body = "Good work depends on the people and plant behind it. A.J Group brings together experienced people, capable equipment and established processes across its businesses and sectors, so the standard holds whether a job is a single component, a large production run or a new venture.",
    buttonText = 'See Full Capabilities',
    buttonLink = '/capabilities',

    align = 'center', 
    showButton = true,
    showArrow = true, 
    maxWidth = 900, 

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

                    {body && <p className="aj-cap-body">{body}</p>}

                    {showButton && buttonText && (
                        <a href={buttonLink} className="btn btn-outline-gold aj-cap-btn">
                            {buttonText}
                            {showArrow && <ArrowRight size={16} />}
                        </a>
                    )}
                    <h2 className="aj-process-title" style={{ marginTop: '-10px', fontSize: '20px', display:'flex'}}>
                        <span className="aj-ptm-line">
                            <span className="aj-ptm-word" style={{ '--i': 0 }}>Build</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 1 }}>With,</span>{' '}
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 2 }}>Purpose</span>
                        </span>

                        <span className="aj-ptm-connector-mid" aria-hidden="true"></span>

                        <span className="aj-ptm-line">
                            <span className="aj-ptm-word" style={{ '--i': 3 }}>Owned</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 4 }}>With,</span>{' '}
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 5 }}>Conviction</span>
                        </span>

                        <span className="aj-ptm-connector-mid" aria-hidden="true"></span>

                        <span className="aj-ptm-line">
                            <span className="aj-ptm-word" style={{ '--i': 6 }}>Developed</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 7 }}>For</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 8 }}>the,</span>{' '}
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 9 }}>Long Term</span>
                        </span>
                    </h2>
                    {/* <span className="aj-ptm-connector" aria-hidden="true"></span> */}

                </motion.div>
            </div>
        </section>
    );
}
