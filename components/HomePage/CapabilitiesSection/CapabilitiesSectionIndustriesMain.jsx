'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CapabilitiesSection.css';

export default function CapabilitiesSectionPortfolioMain({
    // Content Props
    eyebrow = 'THE BIGGER VISION',
    title = 'AJ Group is building toward a portfolio that reaches beyond todays businesses and todays industries. Our ambition is to create a diversified enterprise capable of identifying opportunity, deploying resources and building businesses across sectors.',
    buttonText = 'See Full Capabilities',
    buttonLink = '/capabilities',

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

                    {body && <p className="aj-cap-body">{body}</p>}

                    {showButton && buttonText && (
                        <a href={buttonLink} className="btn btn-outline-gold aj-cap-btn">
                            {buttonText}
                            {showArrow && <ArrowRight size={16} />}
                        </a>
                    )}
                    <h2 className="aj-process-title" style={{ marginTop: '-10px', fontSize: '20px', display:'flex', gap:'20px' }}>
                        <span className="aj-ptm-line">
                            <span className="aj-ptm-word" style={{ '--i': 0 }}>The Industry</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 1 }}>May</span>{' '}<br/>
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 2 }}>Change</span>
                        </span>

                        <span className="aj-ptm-connector-mid" aria-hidden="true"></span>

                        <span className="aj-ptm-line">
                             <span className="aj-ptm-word" style={{ '--i': 0 }}>The Opportunity</span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 1 }}>May</span>{' '}<br/>
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 2 }}>Change</span>
                        </span>

                        <span className="aj-ptm-connector-mid" aria-hidden="true"></span>

                        <span className="aj-ptm-line">
                            <span className="aj-ptm-word" style={{ '--i': 6 }}>Our </span>{' '}
                            <span className="aj-ptm-word" style={{ '--i': 7 }}>Ambition</span>{' '} <br/>
                            <span className="aj-ptm-word aj-ptm-accent" style={{ '--i': 8 }}>Doesn't</span>
                        </span>
                    </h2>
                    {/* <span className="aj-ptm-connector" aria-hidden="true"></span> */}

                </motion.div>
            </div>
        </section>
    );
}
