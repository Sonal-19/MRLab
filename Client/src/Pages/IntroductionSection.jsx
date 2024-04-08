import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function IntroductionSection() {
  const slides = [
    {
      url: '/test.jpg',
    },
    {
      url: '/l1.jpg',
    },
    {
      url: '/l2.jpg',
    },
    {
      url: '/l3.jpg',
    },
    {
      url: '/l4.jpg',
    },
    {
      url: '/l5.jpg',
    },
    {
      url: '/l6.jpg',
    },
    {
      url: '/l7.jpg',
    },
    {
      url: '/l8.jpg',
    },
    {
      url: '/l9.jpg',
    },
    {
      url: '/l10.jpg',
    },
    {
      url: '/l11.jpg',
    },
    // {
    //   url: '/lab2.jpg',
    // },
    // {
    //   url: '/lab8.jpg',
    // },
    // {
    //   url: '/lab9.jpg',
    // },
    // {
    //   url: '/lab10.jpg',
    // },
    // {
    //   url: '/lab12.jpg',
    // },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <>
      <div className='w-full h-screen m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        > 
          {/* Welcome Message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-7xl mt-5 mb-4 font-medium">
              Welcome to our
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl mb-8 font-medium">
              Manufacturing Research Lab
            </h1>
            <Link
              className="text-white mt-2 font-medium border-2 border-white bg-none hover:bg-white hover:text-indigo-900 rounded-md px-6 py-2 text-xl md:text-2xl lg:text-3xl transition-all"
              to="/queryform"
            >
              Explore Now
            </Link>
          </div>
        </div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <IoChevronBack onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <IoChevronForward onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="creativesplanet-box-content-inner">
        <div className="flex flex-col items-center justify-center bg-neutral-800 h-full py-8">
          {/* Officials Section */}
          <h2 className="text-3xl font-bold text-white mb-8">Officials</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Officials details */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-100 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/head.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr.  Sehijpal Singh Khangura (Principal)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                BE (Mechanical) PU, Chandigarh (1991), ME (Mechanical) PU, Chandigarh (1993), PhD - IIT, Roorkee (2002)
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-100 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/hod.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr. Jasmaninder Singh Grewal (HOD)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Tribology, Surface Modification, Metal Forming, Engineering
                  Drawing, Strength of Materials and Manufacturing Processes
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/labincharge.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr. Amrinder Singh Pannu (Lab Incharge)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  B Tech (Mechanical) M Tech (Production) PhD (Mechanical),
                  Composite Materials, Designing and fabrication
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionSection;
