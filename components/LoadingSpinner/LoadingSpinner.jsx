"use client"; // Client component hona zaroori hai JS document window access karne ke liye

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./LoadingSpinner.css";

export default function LoadingSpinner({
  fullScreen = true,
  label = "Loading",
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Component mount ho gaya hai
    setMounted(true);

    // 2. JS se Background Scroll Lock kar diya (Aapki pehli requirement)
    document.body.style.overflow = "hidden";

    // Cleanup function: Jab spinner hide hoga tw scroll wapas normal ho jayega
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Jab tak browser mein load nahi hota, tab tak kuch return na kare (Hydration error se bachne ke liye)
  if (!mounted) return null;

  // Ye aapka spinner ka UI hai
  const spinnerContent = (
    <div
      className={
        fullScreen
          ? "wrapperAjGroupMainLogoLoaderSpinner fullScreenAjGroupMainLogoLoaderSpinner"
          : "wrapperAjGroupMainLogoLoaderSpinner"
      }
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="cardAjGroupMainLogoLoaderSpinner">
        <div className="stageAjGroupMainLogoLoaderSpinner">
          {/* soft pulsing gold glow behind everything */}
          <div className="glowAjGroupMainLogoLoaderSpinner" />

          {/* rotating bezel rings */}
          <div className="ringOuterAjGroupMainLogoLoaderSpinner" />
          <div className="ringInnerAjGroupMainLogoLoaderSpinner" />
          <div className="ringDottedAjGroupMainLogoLoaderSpinner" />

          {/* the monogram itself */}
          <img src="/icon.png" width={60} alt="" />
        </div>
      </div>

      <span className="srOnlyAjGroupMainLogoLoaderSpinner">{label}…</span>
    </div>
  );

  // 3. createPortal JS function is UI ko direct <body> k andar phenk dega sab se upar!
  return createPortal(spinnerContent, document.body);
}