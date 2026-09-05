"use client";

import React from 'react';
import { Compass, ShieldCheck, Layers } from 'lucide-react';
import './ViewOurPortfolioDesign.css';

export default function ViewOurPortfolioDesignAboutMain() {
    return (
        <section className="aj-process-section portfolio-sectionViewOurPortfolioDesign">

            <div className="content-containerViewOurPortfolioDesign">

                <div className="text-contentViewOurPortfolioDesign">
                    <div className="section-subtitleViewOurPortfolioDesign fade-in-delay-1ViewOurPortfolioDesign">
                        <span className="aj-focus-eyebrow">OUR THINKING</span>
                    </div>


                    <h2 className="aj-process-title fade-in-delay-2ViewOurPortfolioDesign">
                        Think Long Term <span className="aj-process-title-accent">Build With Purpose</span>
                    </h2>

                    <p className="descriptionViewOurPortfolioDesign fade-in-delay-3ViewOurPortfolioDesign">
                        We don't believe in building businesses simply to make them bigger.
                        We believe in building them better.That means making thoughtful investments, developing strong operations, creating capable teams and continuously looking for opportunities to expand.
                        Our businesses may operate in different sectors, but the principles behind them remain the same:

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
                        <h3>Grow with<br />purpose.</h3>
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
                        <h3>Operate With<br />Discipline </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}