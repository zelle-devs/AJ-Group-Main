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
  ArrowRight
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
    desc: 'Design, fabrication, print, packaging, and finishing in one group: fewer suppliers, fewer handoffs, less risk.',
    image: '/End_to_end_roof_cards.png',
    clip: SHAPE_A,
  },
  {
    num: '02',
    icon: PenTool,
    title: 'We Can Invest',
    desc: 'We plan and prototype before production, so what leaves the floor matches what was promised.',
    image: '/Engineering_LED_Cards.jpeg',
    clip: SHAPE_B,
  },
  {
    num: '03',
    icon: Search,
    title: 'We Can Grow',
    desc: 'Our reputation lives in the details: clean welds, crisp print, considered edges.',
    image: '/Finish_survives_Cards.png',
    clip: SHAPE_C,
  },
  // {
  //   // YAHAN MAINE CUSTOM FLAG ADD KIYA HAI 4TH ITEM KE LIYE
  //   num: '04',
  //   isCustom: true, 
  // },
];

export default function WhyajgroupAboutMain({
  // Content Props
  eyebrow = 'The A.J Group',
  title = 'One Group, Multiple Opportunities',
  intro = "AJ Group brings together businesses and ventures across multiple sectors — united by a common approach to ownership, growth and long-term value creation",
  items = DEFAULT_ITEMS,
  
  // Layout Props
  columns = 4, // 1 | 2 | 3 | 4 | 5
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
      baseStyle.aspectRatio = '3 / 3.9';
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
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
          <div className="aj-why-head">
          {eyebrow && <span className="aj-why-eyebrow">{eyebrow}</span>}
          {title && <h2 className="aj-why-title">{title}</h2>}
          {showIntro && intro && <p className="aj-why-intro">{intro}</p>}
          
        </div>
        {/* <div>
          <a href='#' className="btn btn-outline-gold aj-cap2-btn">
            VIEW OUR PORTFOLIO <ArrowRight size={16} />
          </a>
        </div> */}
        </div>
        
        
        <div className="aj-why-grid" ref={gridRef} style={getGridStyle()}>
          {items.map((item, i) => {
            
            // --- YAHAN AAPKA 4TH CUSTOM ITEM RENDER HOGA ---
            // Agar isCustom true hai, toh sirf simple div, text aur button dikhayega
            if (item.isCustom) {
              return (
                <div
                  key={item.num ?? i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "transparent", // Light gray background
                    padding: '2rem',
                    textAlign: 'center',
                    borderRadius: '12px',
                    height: '100%',
                    minHeight: '300px' // Aap isko apne hisaab se adjust kar saktay hain
                  }}
                >
                 {/* <p className="why-choose-description" style={{fontSize:'25px', marginBottom:'20px', fontWeight:'800'}}>
                    We don't limit opportunity to a single industry
                  </p> */}
                  <a href='#' className="btn btn-outline-gold aj-cap2-btn">
             VIEW OUR PORTFOLIO <ArrowRight size={16} />
            </a>
                </div>
              );
            }
            // -----------------------------------------------

            // --- YAHAN BAAKI NORMAL 3 CARDS RENDER HONGAY ---
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

// 'use client';

// import { useEffect, useRef } from 'react';
// import './Whyajgroup.css';

// /* ---------- inline icons (stroke-based, match the gold outline style) ---------- */

// function IconHome() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 11.5L12 4l8 7.5" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function IconMark() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 4l7 16h-3.1l-1.5-3.6H9.6L8.1 20H5l7-16z" stroke="currentColor" strokeWidth="1.0" strokeLinejoin="round" />
//       <path d="M9.9 13.4h4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     </svg>
//   );
// }

// function IconSearch() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
//       <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     </svg>
//   );
// }

// function IconChart() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect x="5" y="13" width="3" height="7" rx="0.6" stroke="currentColor" strokeWidth="1.0" />
//       <rect x="10.5" y="9" width="3" height="11" rx="0.6" stroke="currentColor" strokeWidth="1.0" />
//       <rect x="16" y="5" width="3" height="15" rx="0.6" stroke="currentColor" strokeWidth="1.0" />
//     </svg>
//   );
// }

// /* ---------- reusable bottom-cut shape presets ----------
//    Pass any of these (or your own polygon string) as `clip`
//    on an item to control that card's shape independently. */
// // export const SHAPE_A = 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 0 100%)';
// // export const SHAPE_B = 'polygon(0 0, 100% 0, 100% 100%, 38% 100%, 0 82%)';
// // export const SHAPE_C = 'polygon(0 0, 100% 0, 100% 84%, 52% 100%, 0 100%)';
// // export const SHAPE_D = 'polygon(0 0, 100% 0, 100% 100%, 46% 100%, 0 76%)';

// export const SHAPE_A = 'polygon(0 0, 100% 0, 100% 88%, 80% 100%, 30% 100%, 0 78%)';
// export const SHAPE_B = 'polygon(0 0, 100% 0, 100% 100%, 38% 100%, 0 82%)';
// export const SHAPE_C = 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 20% 100%, 0 90%)';
// export const SHAPE_D = 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 0 100%)';

// const DEFAULT_ITEMS = [
//   {
//     num: '01',
//     icon: <IconHome />,
//     title: 'End-to-end under one roof.',
//     desc: 'Design, fabrication, print, packaging, and finishing in one group: fewer suppliers, fewer handoffs, less risk.',
//     image: '/turkey.jpg',
//     clip: SHAPE_A,
//   },
//   {
//     num: '02',
//     icon: <IconMark />,
//     title: 'Engineering-led.',
//     desc: 'We plan and prototype before production, so what leaves the floor matches what was promised.',
//     image: '/usa.jpg',
//     clip: SHAPE_B,
//   },
//   {
//     num: '03',
//     icon: <IconSearch />,
//     title: 'Finish that survives scrutiny.',
//     desc: 'Our reputation lives in the details: clean welds, crisp print, considered edges.',
//     image: '/malaysia.jpg',
//     clip: SHAPE_C,
//   },
//   {
//     num: '04',
//     icon: <IconChart />,
//     title: 'Scale with control.',
//     desc: 'Capacity for volume, with the discipline to hold quality across every unit.',
//     image: '/australia.jpg',
//     clip: SHAPE_D,
//   },
// ];

// export default function WhyAJGroup({
//   eyebrow = 'Why A.J Group',
//   title = 'The advantages of one group.',
//   intro = "Clients come to A.J Group when a project is too important, or too complex, to split across vendors who don't talk to each other.",
//   items = DEFAULT_ITEMS,
// }) {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const grid = gridRef.current;
//     if (!grid) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             grid.classList.add('in-view');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(grid);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="aj-why-section">
//       <div className="aj-why-container">
//         <div className="aj-why-head">
//           <span className="aj-why-eyebrow">{eyebrow}</span>
//           <h2 className="aj-why-title">{title}</h2>
//           <p className="aj-why-intro">{intro}</p>
//         </div>

//         <div className="aj-why-grid" ref={gridRef}>
//           {items.map((item, i) => (
//             <div
//               className="aj-why-card-wrap"
//               key={item.num ?? i}
//               style={{
//                 transitionDelay: `${i * 0.12}s`,
//                 // each card's bottom shape is fully independent — override
//                 // per item via `clip`, or edit the SHAPE_* presets above.
//                 '--aj-clip': item.clip || [SHAPE_A, SHAPE_B, SHAPE_C, SHAPE_D][i % 4],
                
//               }}
//             >
//               <div
//                 className="aj-why-card-inner"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               >
//                 <div className="aj-why-card-overlay" />

//                 <div className="aj-why-card-top">
//                   <div className="aj-why-card-num">
//                     {item.num}
//                     <span className="aj-why-num-dash" />
//                   </div>
//                   <div className="aj-why-card-icon">{item.icon}</div>
//                 </div>

//                 <div className="aj-why-card-content">
//                   <h3 className="aj-why-card-title">{item.title}</h3>
//                   <span className="aj-why-card-divider" />
//                   <p className="aj-why-card-desc">{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }