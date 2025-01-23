import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './FirstPage.css';

const FirstPage = () => {
  const oPositiveRef = useRef(null);
  const pageRef = useRef(null);
  const directorsRef = useRef(null);
  const indiumRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const [showPage, setShowPage] = useState(false);
  const [indiumMoved, setIndiumMoved] = useState(false);

  useLayoutEffect(() => {
    if (oPositiveRef.current) {
      const letters = oPositiveRef.current.children;
      gsap.fromTo(
        letters,
        {
          x: (index) => (index % 2 === 0 ? -200 : 200),
          y: (index) => (index % 2 === 0 ? 200 : -200),
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () => {
            setShowPage(true);
          },
        }
      );
    }
  }, []);

  useLayoutEffect(() => {
    if (showPage) {
      gsap.to(imagesContainerRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.to(indiumRef.current, {
        x: '-40vw',
        y: '-40vh',
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          setIndiumMoved(true);
        },
      });
    }
  }, [showPage]);

  useLayoutEffect(() => {
    if (indiumMoved) {
      const letters = directorsRef.current.children;

      gsap.fromTo(
        letters,
        { y: 200, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      );

      const hoverAnimationIn = () => {
        gsap.to(letters, {
          color: 'red',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        });
      };
      const hoverAnimationOut = () => {
        gsap.to(letters, {
          color: 'white',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      directorsRef.current.addEventListener('mouseenter', hoverAnimationIn);
      directorsRef.current.addEventListener('mouseleave', hoverAnimationOut);
    }
  }, [indiumMoved]);

  // Parallax effect for background images based on cursor movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const offsetX = (clientX / innerWidth - 0.5) * 30;
    const offsetY = (clientY / innerHeight - 0.5) * 30;
    
    gsap.to(imagesContainerRef.current, {
      x: offsetX,
      y: offsetY,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <div className="main-container" onMouseMove={handleMouseMove}>
      <div className="images-container" ref={imagesContainerRef}>
        {/* Add multiple images here for the grid background */}
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        <img src="images/flower.jpg" alt="" className="bg-image" />
        {/* Add more images as needed */}
      </div>

      {!showPage && (
        <div className="centered-o-positive">
          <div className="o-positive" ref={oPositiveRef}>
            {'Indium'.split('').map((char, index) => (
              <span key={index} className="letter">
                {char}
              </span>
            ))}
          </div>
        </div>
      )}

      {showPage && (
        <div ref={pageRef} className="page-container">
          <div className="content">
            <div className="directors-container">
              <div className="indium-top-left" ref={indiumRef}>
                {'Indium'.split('').map((char, index) => (
                  <span key={index} className="letter">
                    {char}
                  </span>
                ))}
              </div>
              {indiumMoved && (
                <div className="directors" ref={directorsRef}>
                  {'APP-ENGINEERING'.split('').map((char, index) => (
                    <span key={index} className="director-letter">
                      {char}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstPage;

// import React, { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import './FirstPage.css';

// const FirstPage = () => {
//   const oPositiveRef = useRef(null);
//   const pageRef = useRef(null);
//   const directorsRef = useRef(null);
//   const indiumRef = useRef(null);
//   const imagesRef = useRef(null);
//   const [showPage, setShowPage] = useState(false);
//   const [indiumMoved, setIndiumMoved] = useState(false);

//   useLayoutEffect(() => {
//     if (oPositiveRef.current) {
//       const letters = oPositiveRef.current.children;
//       gsap.fromTo(
//         letters,
//         {
//           x: (index) => (index % 2 === 0 ? -200 : 200),
//           y: (index) => (index % 2 === 0 ? 200 : -200),
//           opacity: 0,
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 0.8,
//           ease: 'power3.out',
//           onComplete: () => {
//             setShowPage(true);
//           },
//         }
//       );
//     }
//   }, []);

//   useLayoutEffect(() => {
//     if (showPage) {
//       // Images animation from the left
//       gsap.fromTo(
//         imagesRef.current.children,
//         { x: '-100%', opacity: 0 },
//         { x: '0%', opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
//       );

//       // Move "Indium" to top left
//       gsap.to(indiumRef.current, {
//         x: '-40vw',
//         y: '-40vh',
//         duration: 1,
//         ease: 'power3.out',
//         onComplete: () => {
//           setIndiumMoved(true);
//         },
//       });
//     }
//   }, [showPage]);

//   useLayoutEffect(() => {
//     if (indiumMoved) {
//       const letters = directorsRef.current.children;
      
//       // Staggered animation for "APP-ENGINEERING"
//       gsap.fromTo(
//         letters,
//         { y: 200, opacity: 0 ,scale:0.8 },
//         { y: 0, opacity: 1,scale:1 ,stagger: 0.1, duration: 0.5, ease: 'power3.out' }
//       );

//       // Hover effect on "APP-ENGINEERING" text
//       const hoverAnimationIn = () => {
//         gsap.to(letters, {
//           color: 'red',
//           stagger: 0.1,
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       };
//       const hoverAnimationOut = () => {
//         gsap.to(letters, {
//           color: 'white',
//           stagger: 0.1,
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       };
      
//       directorsRef.current.addEventListener('mouseenter', hoverAnimationIn);
//       directorsRef.current.addEventListener('mouseleave', hoverAnimationOut);
//     }
//   }, [indiumMoved]);

//   return (
//     <div className="main-container">
//       {!showPage && (
//         <div className="centered-o-positive">
//           <div className="o-positive" ref={oPositiveRef}>
//             {'Indium'.split('').map((char, index) => (
//               <span key={index} className="letter">
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {showPage && (
//         <div ref={pageRef} className="page-container">
//           <div className="content">
//             <div className="directors-container">
//               <div className="indium-top-left" ref={indiumRef}>
//                 {'Indium'.split('').map((char, index) => (
//                   <span key={index} className="letter">
//                     {char}
//                   </span>
//                 ))}
//               </div>
//               {indiumMoved && (
//                 <div className="directors" ref={directorsRef}>
//                   {'APP-ENGINEERING'.split('').map((char, index) => (
//                     <span key={index} className="director-letter">
//                       {char}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="images-container" ref={imagesRef}>
//               <img src="images/flower.jpg" alt="" className="image" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FirstPage;

// import React, { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import './FirstPage.css';


// const FirstPage = () => {
//   const oPositiveRef = useRef(null);
//   const pageRef = useRef(null);
//   const directorsRef = useRef(null);
//   const indiumRef = useRef(null);
//   const imagesRef = useRef(null);
//   const [showPage, setShowPage] = useState(false);
//   const [indiumMoved, setIndiumMoved] = useState(false);

//   useLayoutEffect(() => {
//     if (oPositiveRef.current) {
//       const letters = oPositiveRef.current.children;
//       gsap.fromTo(
//         letters,
//         {
//           x: (index) => (index % 2 === 0 ? -200 : 200),
//           y: (index) => (index % 2 === 0 ? 200 : -200),
//           opacity: 0,
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 0.8,
//           ease: 'power3.out',
//           onComplete: () => {
//             setShowPage(true);
//           },
//         }
//       );
//     }
//   }, []);

//   useLayoutEffect(() => {
//     if (showPage) {
//       // Images animation from the left
//       gsap.fromTo(
//         imagesRef.current.children,
//         { x: '-100%', opacity: 0 },
//         { x: '0%', opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
//       );

//       // Move "Indium" to top left
//       gsap.to(indiumRef.current, {
//         x: '-40vw',
//         y: '-40vh',
//         duration: 1,
//         ease: 'power3.out',
//         onComplete: () => {
//           setIndiumMoved(true);
//         },
//       });
//     }
//   }, [showPage]);

//   useLayoutEffect(() => {
//     if (indiumMoved) {
//       // App-Engineering text appears from below after Indium moves
//       const letters = directorsRef.current.children;
//       const hoverAnimationIn = () => {
//         gsap.to(letters, {
//           color: 'red',
//           stagger: 0.1,
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       };
//       const hoverAnimationOut = () => {
//         gsap.to(letters, {
//           color: 'white',
//           stagger: 0.1,
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       };
//       directorsRef.current.addEventListener('mouseenter', hoverAnimationIn);
//       directorsRef.current.addEventListener('mouseleave', hoverAnimationOut);

//       gsap.fromTo(
//         directorsRef.current,
//         { y: '100%', opacity: 0 },
//         { y: '0%', opacity: 1, duration: 1.2, ease: 'power2.out' }
//       );
//     }
//   }, [indiumMoved]);

//   return (
//     <div className="main-container">
//       {/* Initial O Positive screen */}
//       {!showPage && (
//         <div className="centered-o-positive">
//           <div className="o-positive" ref={oPositiveRef}>
//             {'Indium'.split('').map((char, index) => (
//               <span key={index} className="letter">
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* The next page content */}
//       {showPage && (
//         <div ref={pageRef} className="page-container">
//           {/* Main content */}
//           <div className="content">
//             <div className="directors-container">
//               {/* Indium moves to top left */}
//               <div className="indium-top-left" ref={indiumRef}>
//                 {'Indium'.split('').map((char, index) => (
//                   <span key={index} className="letter">
//                     {char}
//                   </span>
//                 ))}
//               </div>
//               {/* App-Engineering comes from below */}
//               {indiumMoved && (
//                 <div className="directors" ref={directorsRef}>
//                   {'APP-ENGINEERING'.split('').map((char, index) => (
//                     <span key={index} className="director-letter">
//                       {char}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {/* Images container */}
//             <div className="images-container" ref={imagesRef}>
//               <img src="images\flower.jpg" alt="" className="image" />
//               {/* Add more images as needed */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FirstPage;




