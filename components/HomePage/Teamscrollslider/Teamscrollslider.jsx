"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import "./Teamscrollslider.css";

/**
 * TeamScrollSlider
 * -----------------------------------------------------------------
 * Scroll-driven, 3D premium card carousel.
 * Left side: Leadership content (eyebrow, headline, body, button)
 * Right side: 3D card carousel
 * -----------------------------------------------------------------
 */

const DEFAULT_CARDS = [
  { id: 1, image: "/ceo.jpg", name: "Dr. Ahmed Khan", designation: "Chief Medical Officer" },
  { id: 2, image: "/lead.jpg", name: "Bilal Ahmed", designation: "Head of Claims" },
  { id: 3, image: "/3.jpg", name: "Jawad Farooq", designation: "Provider Relations Lead" },
  { id: 4, image: "/ceo.jpg", name: "Omar Sheikh", designation: "Director of Operations" },
  { id: 5, image: "/lead.jpg", name: "Hamza Malik", designation: "Head of Customer Care" },
];

export default function TeamScrollSlider({
  eyebrow = "Leadership",
  titleLine1 = "Led by people who",
  titleLine2 = "know how things are made.",
  body = "A.J Group is guided by a leadership team with deep roots in manufacturing, design, and commercial delivery. Their focus is simple: keep raising the standard of what the group makes, and build companies clients return to.",
  buttonText = "Meet Our Leadership",
  cards = DEFAULT_CARDS,
}) {
  const count = cards.length;

  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const canvasRef = useRef(null);

  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const rafId = useRef(null);
  const dims = useRef({ cardW: 0, cardH: 0, step: 0 });
  const reducedMotion = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------------- scroll -> target progress ---------------- */
  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const styles = getComputedStyle(stage);
    dims.current = {
      cardW: parseFloat(styles.getPropertyValue("--tss-card-w")) || 300,
      cardH: parseFloat(styles.getPropertyValue("--tss-card-h")) || 380,
      step: parseFloat(styles.getPropertyValue("--tss-step")) || 220,
    };
  }, []);

  const setWrapperHeight = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const vh = window.innerHeight;
    const perCard = Math.max(420, vh * 0.85);
    wrapper.style.height = `${vh + Math.max(0, count - 1) * perCard}px`;
  }, [count]);

  const onScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const total = wrapper.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    let p = total > 0 ? scrolled / total : 0;
    p = Math.min(1, Math.max(0, p));
    targetProgress.current = p * Math.max(0, count - 1);
  }, [count]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    measure();
    setWrapperHeight();
    onScroll();

    const handleResize = () => {
      measure();
      setWrapperHeight();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [measure, onScroll, setWrapperHeight]);

  // /* ---------------- GSAP driven per-frame transform loop ---------------- */
  // useEffect(() => {
  //   const ease = reducedMotion.current ? 1 : 0.085;

  //   const applyTransforms = (p) => {
  //     const track = trackRef.current;
  //     if (!track) return;
  //     const { step } = dims.current;
  //     const children = track.children;

  //     for (let i = 0; i < children.length; i++) {
  //       const el = children[i];
  //       const dist = i - p;
  //       const abs = Math.abs(dist);

  //       const x = dist * step;
  //       const scale = gsap.utils.clamp(0.6, 1, 1 - abs * 0.22);
  //       const rotateY = gsap.utils.clamp(-26, 26, dist * -16);
  //       const translateZ = -abs * 90;
  //       const opacity = gsap.utils.clamp(0, 1, 1 - abs * 0.45);
  //       const blur = Math.min(6, abs * 2.6);

  //       gsap.set(el, {
  //         x,
  //         scale,
  //         rotateY,
  //         z: translateZ,
  //         opacity,
  //         filter: `blur(${blur}px)`,
  //         zIndex: 200 - Math.round(abs * 10),
  //       });
  //     }
  //   };

  //   const tick = () => {
  //     smoothProgress.current = gsap.utils.interpolate(
  //       smoothProgress.current,
  //       targetProgress.current,
  //       ease
  //     );
  //     if (Math.abs(smoothProgress.current - targetProgress.current) < 0.0008) {
  //       smoothProgress.current = targetProgress.current;
  //     }
  //     applyTransforms(smoothProgress.current);

  //     const idx = Math.round(smoothProgress.current);
  //     setActiveIndex((prev) => (prev !== idx ? idx : prev));

  //     rafId.current = requestAnimationFrame(tick);
  //   };

  //   rafId.current = requestAnimationFrame(tick);
  //   return () => cancelAnimationFrame(rafId.current);
  // }, [count]);


  /* ---------------- GSAP driven per-frame transform loop ---------------- */
useEffect(() => {
  const ease = reducedMotion.current ? 1 : 0.085;

  const applyTransforms = (p) => {
    const track = trackRef.current;
    if (!track) return;
    const { step } = dims.current;
    const children = track.children;

    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      const dist = i - p;
      const abs = Math.abs(dist);

      const x = dist * step;
      const scale = gsap.utils.clamp(0.6, 1, 1 - abs * 0.22);
      const rotateY = gsap.utils.clamp(-26, 26, dist * -16);
      const translateZ = -abs * 90;
      const opacity = gsap.utils.clamp(0, 1, 1 - abs * 0.45);
      const blur = Math.min(6, abs * 2.6);

      gsap.set(el, {
        x,
        scale,
        rotateY,
        z: translateZ,
        opacity,
        filter: `blur(${blur}px)`,
        zIndex: 200 - Math.round(abs * 10),
      });
    }
  };

  const tick = () => {
    smoothProgress.current = gsap.utils.interpolate(
      smoothProgress.current,
      targetProgress.current,
      ease
    );
    if (Math.abs(smoothProgress.current - targetProgress.current) < 0.0008) {
      smoothProgress.current = targetProgress.current;
    }
    applyTransforms(smoothProgress.current);

    const idx = Math.round(smoothProgress.current);
    setActiveIndex((prev) => (prev !== idx ? idx : prev));

    rafId.current = requestAnimationFrame(tick);
  };

  rafId.current = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId.current);
}, [count]);

  /* ---------------- Optimized per-frame transform loop ---------------- */
// useEffect(() => {
//   const ease = reducedMotion.current ? 1 : 0.085;
//   let lastUpdate = 0;
//   const UPDATE_INTERVAL = 16; // ~60fps throttle

//   const applyTransforms = (p) => {
//     const track = trackRef.current;
//     if (!track) return;
//     const { step } = dims.current;
//     const children = track.children;

//     for (let i = 0; i < children.length; i++) {
//       const el = children[i];
//       const dist = i - p;
//       const abs = Math.abs(dist);

//       const x = dist * step;
//       const scale = gsap.utils.clamp(0.6, 1, 1 - abs * 0.22);
//       const rotateY = gsap.utils.clamp(-26, 26, dist * -16);
//       const translateZ = -abs * 90;
//       const opacity = gsap.utils.clamp(0, 1, 1 - abs * 0.45);
//       const blur = Math.min(6, abs * 2.6);

//       // Use CSS custom properties instead of direct style manipulation
//       el.style.setProperty('--tss-x', `${x}px`);
//       el.style.setProperty('--tss-scale', scale);
//       el.style.setProperty('--tss-rotateY', `${rotateY}deg`);
//       el.style.setProperty('--tss-z', `${translateZ}px`);
//       el.style.setProperty('--tss-opacity', opacity);
//       el.style.setProperty('--tss-blur', `${blur}px`);
//       el.style.setProperty('--tss-zIndex', Math.round(200 - abs * 10));
//     }
//   };

//   const tick = (timestamp) => {
//     // Throttle updates to 60fps max
//     if (timestamp - lastUpdate >= UPDATE_INTERVAL) {
//       lastUpdate = timestamp;
      
//       smoothProgress.current = gsap.utils.interpolate(
//         smoothProgress.current,
//         targetProgress.current,
//         ease
//       );
      
//       if (Math.abs(smoothProgress.current - targetProgress.current) < 0.0008) {
//         smoothProgress.current = targetProgress.current;
//       }
      
//       applyTransforms(smoothProgress.current);

//       const idx = Math.round(smoothProgress.current);
//       setActiveIndex((prev) => (prev !== idx ? idx : prev));
//     }

//     rafId.current = requestAnimationFrame(tick);
//   };

//   rafId.current = requestAnimationFrame(tick);
//   return () => cancelAnimationFrame(rafId.current);
// }, [count]);


  /* ---------------- click a side card to jump to it ---------------- */
  const goToIndex = (i) => {
  const wrapper = wrapperRef.current;
  if (!wrapper) return;
  const rect = wrapper.getBoundingClientRect();
  const wrapperTop = rect.top + window.scrollY;
  const total = wrapper.offsetHeight - window.innerHeight;
  const p = count > 1 ? i / (count - 1) : 0;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const top = Math.min(wrapperTop + p * total, maxScroll);

  window.scrollTo({ top, behavior: "smooth" });
};

  const active = cards[activeIndex] || cards[0];

  return (
    <section className="tss-wrapper" ref={wrapperRef}>
      <div className="tss-sticky">
        <canvas ref={canvasRef} className="tss-grain" aria-hidden="true" />

        <div className="tss-inner container2">
          {/* Left Content - Leadership */}
          <motion.div
            className="tss-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tss-eyebrow">{eyebrow}</span>
            <h2 className="tss-title">
              <span className="tss-title-line">{titleLine1}</span>
              <span className="tss-title-line tss-title-line--accent">{titleLine2}</span>
            </h2>
            
            <p className="tss-body-text">{body}</p>

            <a href="/leadership" className="btn btn-outline-gold tss-btn">
              {buttonText} <ArrowRight size={16} />
            </a>

            {/* <AnimatePresence mode="wait">
              <motion.div
                key={active.id ?? activeIndex}
                className="tss-active-panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="tss-active-rule"
                  initial={{ width: 0 }}
                  animate={{ width: 28 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <p className="tss-active-name">{active.name}</p>
                <p className="tss-active-role">{active.designation}</p>
              </motion.div>
            </AnimatePresence> */}

            <div className="tss-dots">
              {cards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to card ${i + 1}`}
                  className="tss-dot-btn"
                  onClick={() => goToIndex(i)}
                >
                  {activeIndex === i && (
                    <motion.span
                      layoutId="tss-active-dot"
                      className="tss-dot tss-dot--active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {activeIndex !== i && <span className="tss-dot" />}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - 3D Card Carousel */}
          <div className="tss-stage" ref={stageRef}>
            <div className="tss-track" ref={trackRef}>
              {cards.map((card, i) => (
                <button
                  type="button"
                  key={card.id ?? i}
                  className={`tss-card${i === activeIndex ? " is-active" : ""}`}
                  onClick={() => goToIndex(i)}
                  aria-label={`${card.name}, ${card.designation}`}
                >
                  <span className="tss-card-frame">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="tss-card-img"
                      draggable={false}
                    />
                    {i === activeIndex && <span className="tss-card-dot" />}
                    <span className="tss-card-caption">
                      <span className="tss-card-name">{card.name}</span>
                      <span className="tss-card-role">{card.designation}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="tss-hint"
            animate={{ opacity: activeIndex >= count - 1 ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          >
            <span className="tss-hint-icon" aria-hidden="true">
              <ChevronDown size={15}/>
            </span>
            SCROLL TO CONTINUE
          </motion.div>
        </div>
      </div>
    </section>
  );
}
