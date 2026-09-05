"use client";

import React from 'react';
import { Compass, ShieldCheck, Layers } from 'lucide-react';
import './ViewOurPortfolioDesign.css';

export default function ViewOurPortfolioDesign() {
  return (
    <section className="aj-process-section portfolio-sectionViewOurPortfolioDesign">
  
      <div className="content-containerViewOurPortfolioDesign">
         
        <div className="text-contentViewOurPortfolioDesign">
          <div className="section-subtitleViewOurPortfolioDesign fade-in-delay-1ViewOurPortfolioDesign">
           <span className="aj-focus-eyebrow">Portfolio</span>
          </div>

           
          <h2 className="aj-process-title fade-in-delay-2ViewOurPortfolioDesign">
            A Portfolio in <span className="aj-process-title-accent">Motion</span>
          </h2>
          
          <p className="descriptionViewOurPortfolioDesign fade-in-delay-3ViewOurPortfolioDesign">
            Our portfolio is growing. Across businesses, sectors and markets, each venture represents another step 
            in the evolution of AJ Group.
          </p>
        </div>
 
        <div className="cards-containerViewOurPortfolioDesign">
           <div className="info-cardViewOurPortfolioDesign fade-in-delay-4ViewOurPortfolioDesign">
            <div className="card-glowViewOurPortfolioDesign"></div>
             <div className="bg-icon-wrapperViewOurPortfolioDesign">
              <Compass size={140} strokeWidth={1} />
            </div>
             <div className="icon-wrapperViewOurPortfolioDesign">
              <Compass size={46} strokeWidth={1.5} />
            </div>
            <h3>Built with<br />purpose.</h3>
          </div>

           <div className="info-cardViewOurPortfolioDesign fade-in-delay-5ViewOurPortfolioDesign">
            <div className="card-glowViewOurPortfolioDesign"></div>
             <div className="bg-icon-wrapperViewOurPortfolioDesign">
              <ShieldCheck size={140} strokeWidth={1} />
            </div>
             <div className="icon-wrapperViewOurPortfolioDesign">
              <ShieldCheck size={46} strokeWidth={1.5} />
            </div>
            <h3>Owned with<br />conviction.</h3>
          </div>

           <div className="info-cardViewOurPortfolioDesign fade-in-delay-6ViewOurPortfolioDesign">
            <div className="card-glowViewOurPortfolioDesign"></div>
             <div className="bg-icon-wrapperViewOurPortfolioDesign">
              <Layers size={140} strokeWidth={1} />
            </div>
             <div className="icon-wrapperViewOurPortfolioDesign">
              <Layers size={46} strokeWidth={1.5} />
            </div>
            <h3>Developed for<br />the long term.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}