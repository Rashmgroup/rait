// import { gsap, Linear } from "gsap";
// import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const QuoteSection = () => {
//   const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
//   const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

//   const [willChange, setwillChange] = useState(false);

//   const initQuoteAnimation = (
//     quoteRef: MutableRefObject<HTMLDivElement>,
//     targetSection: MutableRefObject<HTMLDivElement>
//   ): ScrollTrigger => {
//     const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
//     timeline
//       .from(quoteRef.current, { opacity: 0, duration: 2 })
//       .to(quoteRef.current.querySelector(".text-strong"), {
//         backgroundPositionX: "100%",
//         duration: 1,
//       });

//     return ScrollTrigger.create({
//       trigger: targetSection.current,
//       start: "center bottom",
//       end: "center center",
//       scrub: 0,
//       animation: timeline,
//       onToggle: (self) => setwillChange(self.isActive),
//     });
//   };

//   useEffect(() => {
//     const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

//     return quoteAnimationRef.kill;
//   }, [quoteRef, targetSection]);

//   const renderQuote = (): React.ReactNode => (
//     <div className="tall:py-60 py-72 section-container">
//       <h1
//         ref={quoteRef}
//         className={`font-medium text-4xl md:text-5xl text-center ${
//           willChange ? "will-change-opacity" : ""
//         }`}
//       >
//         Todays Learn 📚 Tommarow's <span className="text-strong font-bold">Earn</span> 💸 
//         ~RAIT
//       </h1>
//     </div>
//   );

//   return (
//     <section className="w-full relative select-none" ref={targetSection}>
//       {renderQuote()}
//     </section>
//   );
// };

// export default QuoteSection;
import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { isSmallScreen, NO_MOTION_PREFERENCE_QUERY } from "pages";

const COLLABORATION_STYLE = {
  SLIDING_TEXT: "opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap",
  SECTION:
    "w-full relative select-none tall:py-36 py-48 section-container flex flex-col",
  TITLE: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center",
};

const QuoteSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initTextGradientAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  const initSlidingTextAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ) => {
    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent: isSmallScreen() ? -500 : -150,
      })
      .from(
        targetSection.current.querySelector(".ui-right"),
        { xPercent: isSmallScreen() ? -500 : -150 },
        "<"
      );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  useEffect(() => {
    const textBgAnimation = initTextGradientAnimation(targetSection);
    let slidingAnimation: ScrollTrigger | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    if (matches) {
      slidingAnimation = initSlidingTextAnimation(targetSection);
    }

    return () => {
      textBgAnimation.kill();
      slidingAnimation?.kill();
    };
  }, [quoteRef, targetSection]);

  const renderSlidingText = (text: string, layoutClasses: string) => (
    <p className={`${layoutClasses} ${COLLABORATION_STYLE.SLIDING_TEXT}`}>
      {Array(5)
        .fill(text)
        .reduce((str, el) => str.concat(el), "")}
    </p>
  );

  const renderTitle = () => (
    <h1
      ref={quoteRef}
      className={`${COLLABORATION_STYLE.TITLE} ${
        willChange ? "will-change-opacity" : ""
      }`}
    >
      Todays Learn 📚 Tommarow&apos;s <span className="text-strong font-bold">Earn</span> 💸  ~RAIT
    </h1>
  );

  return (
    <section className={COLLABORATION_STYLE.SECTION} ref={targetSection}>
      {renderSlidingText(
        "    DCA   ADCA   DFA   ADFA   CCC   BCC   Olevel   ",
        "ui-left"
      )}

      {renderTitle()}

      {renderSlidingText(
        "   Olevel   BCC   CCC   ADFA   DFA   ADCA   DCA   ",
        "mt-6 md:mt-8 ui-right"
      )}
    </section>
  );
};

export default QuoteSection;
