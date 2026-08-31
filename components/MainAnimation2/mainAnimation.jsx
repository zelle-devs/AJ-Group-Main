'use client'

import React, {
  useEffect,
  useState,
} from "react";

import "./style.css";

const ROW_COUNT = 4;
const STRIPS_PER_ROW = 12;


const shouldShowIntro = () => {

  try {

    const stored =
      window.sessionStorage.getItem(
        "toShow"
      );

    return stored !== "false";

  } catch (err) {

    return true;
  }
};


export default function MainAnimation2() {

  /*
   * Decided once, on first render, before
   * anything animates — so a session that has
   * already seen the intro never even mounts
   * the black overlay for a single frame.
   */

  const [shouldRender] = useState(
    shouldShowIntro
  );

  const [iconVisible, setIconVisible] =
    useState(false);

  const [wordmarkOpen, setWordmarkOpen] =
    useState(false);

  const [closing, setClosing] =
    useState(false);

  const [finished, setFinished] =
    useState(!shouldRender);


  useEffect(() => {

    /*
     * Already shown this session — do nothing.
     * (finished is already true from the
     * initial state above, so nothing rendered
     * and the real site is visible immediately.)
     */

    if (!shouldRender) {
      return;
    }


    /*
     * About to show the intro — flip the flag
     * right away so even a refresh mid-animation
     * won't trigger it again this session.
     */

    try {

      window.sessionStorage.setItem(
        "toShow",
        "false"
      );

    } catch (err) {
      /* sessionStorage unavailable — ignore */
    }


    /*
     * Prevent website scrolling while
     * intro animation is active.
     */

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";


    /* ==========================================
       TIMELINE

       iconTimer     -> icon fades/scales in
                         at center
       wordmarkTimer -> wordmark starts growing
                         in, icon shifts left as
                         a side effect of the
                         centered flex row growing
       closeTimer    -> intro holds fully-formed
                         lockup this long, then
                         starts the row-by-row
                         slicing close
       finishTimer   -> closeTimer + collapse
                         duration, fully unmounts
                         the intro
       ========================================== */

    const ICON_DELAY = 300;
    const WORDMARK_DELAY = 1300;
    const CLOSE_DELAY = 3600;

    /*
     * Total time for the row-by-row,
     * strip-by-strip wipe to finish.
     * Must stay in sync with the CSS
     * timing (strip duration + max
     * possible stagger across a row).
     */

    const COLLAPSE_DURATION = 1300;

    const iconTimer =
      setTimeout(() => {

        setIconVisible(true);

      }, ICON_DELAY);


    const wordmarkTimer =
      setTimeout(() => {

        setWordmarkOpen(true);

      }, WORDMARK_DELAY);


    const closeTimer =
      setTimeout(() => {

        setClosing(true);

      }, CLOSE_DELAY);


    const finishTimer =
      setTimeout(() => {

        setFinished(true);

        document.body.style.overflow =
          previousOverflow;

      }, CLOSE_DELAY + COLLAPSE_DURATION);


    /* ==========================================
       CLEANUP
       ========================================== */

    return () => {

      clearTimeout(
        iconTimer
      );

      clearTimeout(
        wordmarkTimer
      );

      clearTimeout(
        closeTimer
      );

      clearTimeout(
        finishTimer
      );

      document.body.style.overflow =
        previousOverflow;
    };

  }, [shouldRender]);


  /*
   * Don't render anything after
   * intro has finished — or if this
   * session already saw it play.
   */

  if (finished) {
    return null;
  }


  return (
    <main
      className={`logo-reveal ${
        closing
          ? "intro-closing"
          : ""
      }`}
    >

      {!closing && (
        <div className="logo-lockup">

          <div className="icon-wrap">

            <span
              className={`icon-ring ${
                iconVisible
                  ? "icon-ring-pulse"
                  : ""
              }`}
            />

            <img
              src="/icon.png"
              alt="AJ Group"
              className={`icon-mark ${
                iconVisible
                  ? "icon-mark-show"
                  : ""
              }`}
            />

          </div>

          <img
            src="/wordmark.png"
            alt="AJ Group"
            className={`wordmark ${
              wordmarkOpen
                ? "wordmark-show"
                : ""
            }`}
          />

        </div>
      )}


      {/* ========================================
          SPLIT — 4 ROWS, EACH A LEFT/RIGHT
          ALTERNATING VERTICAL-BLINDS WIPE

          Row 0: sweeps left -> right
          Row 1: sweeps right -> left
          Row 2: sweeps left -> right
          Row 3: sweeps right -> left

          Every strip is a clipped "window" onto a
          full-viewport black background carrying a
          centered copy of the FINISHED lockup (icon
          + wordmark, no animation), shifted by its
          own column/row offset so all strips line up
          perfectly with the original scene before
          anything moves.
          ======================================== */}

      {closing && (
        <div className="split-container">
          {Array.from({
            length: ROW_COUNT,
          }).map((_, r) => {

            const sweepsRightToLeft =
              r % 2 === 1;

            return (
              <div
                key={r}
                className="split-row"
                style={{
                  top: `${
                    (r * 100) /
                    ROW_COUNT
                  }%`,
                  height: `${
                    100 / ROW_COUNT
                  }%`,
                }}
              >
                {Array.from({
                  length: STRIPS_PER_ROW,
                }).map((_, i) => {

                  /*
                   * Position in the wave.
                   * Row sweeps left -> right
                   * normally, or right -> left
                   * when reversed, but the
                   * DELAY GAP between
                   * consecutive strips stays
                   * small relative to the
                   * collapse duration — so
                   * neighboring strips are all
                   * mid-animation at once
                   * (strip 1 at 90%, strip 2
                   * at 80%, strip 3 at 70%...)
                   * instead of finishing one
                   * before the next starts.
                   */

                  const wavePosition =
                    sweepsRightToLeft
                      ? STRIPS_PER_ROW -
                        1 -
                        i
                      : i;

                  return (
                    <div
                      key={i}
                      className="split-strip"
                      style={{
                        left: `${
                          (i * 100) /
                          STRIPS_PER_ROW
                        }%`,
                        width: `${
                          100 /
                          STRIPS_PER_ROW
                        }%`,
                        animationDelay: `${
                          wavePosition *
                          45
                        }ms`,
                      }}
                    >
                      <div
                        className="split-strip-inner"
                        style={{
                          left: `${
                            -(i * 100) /
                            STRIPS_PER_ROW
                          }vw`,
                          top: `${
                            -(r * 100) /
                            ROW_COUNT
                          }vh`,
                        }}
                      >
                        <div className="frozen-logo-lockup">

                          <img
                            src="/icon.png"
                            alt=""
                            className="frozen-icon-mark"
                          />

                          <img
                            src="/wordmark.png"
                            alt=""
                            className="frozen-wordmark"
                          />

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

    </main>
  );
}