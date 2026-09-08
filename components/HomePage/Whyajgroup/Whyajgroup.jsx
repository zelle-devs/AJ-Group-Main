'use client';

import { useEffect, useRef } from 'react';
import { 
  Home, 
  PenTool, 
  Search, 
  BarChart3,
  Target,
  Award,
  Shield,
  Star,
  Handshake,
  Eye,
  TrendingUp,
  Users,
  Globe,
  Cog,
  Package,
  Truck,
  Factory,
  ArrowRight,
  Bubbles,
  Lightbulb
} from 'lucide-react';
import './Whyajgroup.css';

/* ---------- Shape Presets ---------- */
export const SHAPE_A = 'polygon(0 0, 100% 0, 100% 88%, 80% 100%, 30% 100%, 0 78%)';
export const SHAPE_B = 'polygon(0 0, 100% 0, 100% 100%, 38% 100%, 0 82%)';
export const SHAPE_C = 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 20% 100%, 0 90%)';
export const SHAPE_D = 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 0 100%)';

export const SHAPES = [SHAPE_A, SHAPE_B, SHAPE_C, SHAPE_D];

// Default Items
const DEFAULT_ITEMS = [
  {
    num: '01',
    icon: Home,
    title: 'We Can Build',
    desc: 'Creating businesses, platforms and ventures designed for long-term relevance.',
    image: '/WeCanBuildFinalUpdatedImage.jpeg',
    clip: SHAPE_A,
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'We Can Innovate',
    desc: 'Exploring new ideas and better ways of doing things to create meaningful progress and lasting value.',
    image: '/WeCanInnovateFinalUpdatedImage.jpeg',
    clip: SHAPE_B,
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'We Can Grow',
    desc: 'Scaling businesses and entering markets where sustainable growth can compound over time.',
    image: '/WeCanGrowFinalUpdatedImage.jpeg',
    clip: SHAPE_C,
  }, 
];

export default function WhyAJGroup({
  // Content Props
  eyebrow = 'The A.J Group',
  title = 'One Group, Multiple Opportunities',
  subhead2= 'We don\'t limit opportunity to a single industry',
  intro = "AJ Group brings together businesses and ventures across multiple sectors — united by a common approach to ownership, growth and long-term value creation",
  items = DEFAULT_ITEMS,
  
  // Layout Props
  columns = 3, // 1 | 2 | 3 | 4 | 5
  showIntro = true,
  showNumbers = true,
  showIcons = true,
}) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  // ---------- Mobile Slider: autoplay (3s) + drag-to-scroll (mobile only, desktop untouched) ----------
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mq = window.matchMedia('(max-width: 767px)');
    let isMobile = mq.matches;
    let autoplayTimer = null;
    let resumeTimeout = null;
    let isDown = false;
    let startX = 0;
    let scrollLeftStart = 0;

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

   const startAutoplay = () => {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    if (!grid) return;
    const firstCard = grid.querySelector('.aj-why-card-wrap');
    if (!firstCard) return;
    const cardStyle = window.getComputedStyle(firstCard);
    const cardWidth = firstCard.offsetWidth + parseFloat(cardStyle.marginRight || 0);
    const gap = parseFloat(window.getComputedStyle(grid).gap || 14);
    const step = cardWidth + gap;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    let nextScroll = grid.scrollLeft + step;
    if (nextScroll >= maxScroll - 5) {
      nextScroll = 0;
    }
    grid.scrollTo({ left: nextScroll, behavior: 'smooth' });
  }, 3000);
};

    const pauseThenResume = () => {
      if (!isMobile) return;
      stopAutoplay();
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        if (isMobile) startAutoplay();
      }, 4000);
    };

    // ---- Drag-to-scroll handlers (only ever act when isMobile is true) ----
    const onPointerDown = (e) => {
      if (!isMobile) return;
      isDown = true;
      grid.classList.add('aj-dragging');
      startX = e.pageX - grid.offsetLeft;
      scrollLeftStart = grid.scrollLeft;
    };

    const onPointerUpOrLeave = () => {
      if (!isDown) return;
      isDown = false;
      grid.classList.remove('aj-dragging');
    };

    const onPointerMove = (e) => {
      if (!isMobile || !isDown) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      const walk = (x - startX) * 1.2;
      grid.scrollLeft = scrollLeftStart - walk;
    };

    const attachMobileListeners = () => {
      grid.addEventListener('mousedown', onPointerDown);
      grid.addEventListener('mouseleave', onPointerUpOrLeave);
      grid.addEventListener('mouseup', onPointerUpOrLeave);
      grid.addEventListener('mousemove', onPointerMove);
      grid.addEventListener('mousedown', pauseThenResume);
      grid.addEventListener('touchstart', pauseThenResume, { passive: true });
    };

    const detachMobileListeners = () => {
      grid.removeEventListener('mousedown', onPointerDown);
      grid.removeEventListener('mouseleave', onPointerUpOrLeave);
      grid.removeEventListener('mouseup', onPointerUpOrLeave);
      grid.removeEventListener('mousemove', onPointerMove);
      grid.removeEventListener('mousedown', pauseThenResume);
      grid.removeEventListener('touchstart', pauseThenResume);
    };

    const handleMQ = (e) => {
      isMobile = e.matches;
      if (isMobile) {
        startAutoplay();
        attachMobileListeners();
      } else {
        stopAutoplay();
        if (resumeTimeout) clearTimeout(resumeTimeout);
        detachMobileListeners();
        grid.classList.remove('aj-dragging');
      }
    };

    if (isMobile) {
      startAutoplay();
      attachMobileListeners();
    }

    if (mq.addEventListener) {
      mq.addEventListener('change', handleMQ);
    } else {
      mq.addListener(handleMQ);
    }

    return () => {
      stopAutoplay();
      if (resumeTimeout) clearTimeout(resumeTimeout);
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handleMQ);
      } else {
        mq.removeListener(handleMQ);
      }
      detachMobileListeners();
    };
  }, []);

  // Grid columns style
  const getGridStyle = () => {
    if (columns === 5) {
      return { gridTemplateColumns: 'repeat(5, 1fr)' };
    }
    if (columns === 3) {
      return { gridTemplateColumns: 'repeat(3, 1fr)' };
    }
    if (columns === 2) {
      return { gridTemplateColumns: 'repeat(2, 1fr)' };
    }
    if (columns === 1) {
      return { gridTemplateColumns: '1fr' };
    }
    return {}; // Default 4 (CSS handle karega)
  };

  // Card aspect ratio based on columns
  const getCardStyle = (index) => {
    const baseStyle = {
      transitionDelay: `${index * 0.12}s`,
      '--aj-clip': items[index]?.clip || SHAPES[index % SHAPES.length],
    };
    
    if (columns === 5) {
      baseStyle.aspectRatio = '3 / 3.5';
    }
    if (columns === 3) {
      baseStyle.aspectRatio = '3 / 3.8';
    }
    if (columns === 2) {
      baseStyle.aspectRatio = '3 / 3.2';
    }
    if (columns === 1) {
      baseStyle.aspectRatio = '4 / 3';
    }
    
    return baseStyle;
  };

  return (
    <section className="aj-why-section">
      <div className="aj-why-container">
        <div className='AJWHYContainerMainPage' style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%' }}>
          <div className="aj-why-head">
          {eyebrow && <span className="aj-why-eyebrow">{eyebrow}</span>}
          {title && <h2 className="aj-why-title">{title}</h2>}
          {showIntro && intro && <p className="aj-why-intro">{intro}   {eyebrow && <span className="aj-why-eyebrow" style={{textTransform:'capitalize', letterSpacing:'1px', fontSize:'15px'}}>{subhead2}</span>}</p>}
        
          
        </div>
        <div>
          <a href='/our-portfolio' className="btn btn-outline-gold aj-cap2-btn">
            VIEW OUR PORTFOLIO <ArrowRight size={16} />
          </a>
        </div>
        </div>
        
        <div className="aj-why-grid" ref={gridRef} style={getGridStyle()}>
          {items.map((item, i) => {
            
            // --- YAHAN BAAKI NORMAL CARDS RENDER HONGAY ---
            const Icon = item.icon || Award;
            return (
              <div
                className="aj-why-card-wrap"
                key={item.num ?? i}
                style={getCardStyle(i)}
              >
                <div
                  className="aj-why-card-inner"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="aj-why-card-overlay" />

                  <div className="aj-why-card-top">
                    {showNumbers && (
                      <div className="aj-why-card-num">
                        {item.num}
                        <span className="aj-why-num-dash" />
                      </div>
                    )}
                    {showIcons && (
                      <div className="aj-why-card-icon">
                        <Icon size={38} />
                      </div>
                    )}
                  </div>

                  <div className="aj-why-card-content">
                    <h3 className="aj-why-card-title">{item.title}</h3>
                    <span className="aj-why-card-divider" />
                    {item.desc && <p className="aj-why-card-desc">{item.desc}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}