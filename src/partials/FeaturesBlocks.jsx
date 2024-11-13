import React, { useState, useEffect } from 'react';
import feature1 from '../images/1.svg';
import feature2 from '../images/2.svg';
import feature3 from '../images/3.svg';
import Teaser1 from '../images/Screenshot_1.webp';
import Teaser2 from '../images/Screenshot_2.webp';
import Teaser3 from '../images/Screenshot_3.webp';
import Teaser4 from '../images/Screenshot_4.webp';
import Teaser5 from '../images/Screenshot_5.webp';
function FeaturesBlocks() {
  const images = [Teaser1, Teaser2, Teaser3, Teaser4, Teaser5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
      <div className="max-w-6xl bg-slate-900/50 mx-auto px-4 mt-12 pt-12 rounded-3xl lg:py-0 sm:px-6 ">
        
        <div className="lg:py-20 py-12 border-primary"> 
        <div className=" lg:pb-24 pb-12">
        <h1 className="font-architects-daughter text-primary mb-1 text-center text-2xl">What is CuriosityXR?</h1>
        <p className="text-secondary text-center text-xl pt-4">It's like ChatGPT with 1M+ 3D models in your hands.</p>



          {/* Section header */}
          <div className="relative mt-12 w-full h-96 mx-auto"> {/* Set a fixed height for the container */}
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 w-auto h-full mx-auto object-contain transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                src={image}
                alt={`Teaser ${index + 1}`}
              />
            ))}
          </div>

         </div>
          {/* Section header */}

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            
            <img className="mx-auto mb-1 md:mb-4 h-10 md:h-28" src={feature1} alt="Feature 1" />
              <h4 className="text-md text-center font-semibold lg:text-lg text-secondary mb-1
              ">No lessons or quizzes</h4>
              <p className="lg:text-lg font-semibold text-tertiary hidden md:block  text-center">Self-direct your learning with AI.

              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img className="mx-auto mb-4 h-10 md:h-28" src={feature2}  alt="Feature 2" />
              <h4 className="text-md text-center font-semibold lg:text-lg text-secondary mb-1">Visualize 1M+ models</h4>
              <p className="lg:text-lg font-semibold text-tertiary hidden md:block  text-center">You say it and it's there in your palm.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img className="mx-auto mb-4 h-10 md:h-28" src={feature3}  alt="Feature 3" />

              <h4 className="text-md text-center font-semibold lg:text-lg text-secondary mb-1">Voice & Hand interactions</h4>
              <p className="lg:text-lg font-semibold text-tertiary hidden md:block  text-center">No limits to what you want to explore.</p>
            </div>

          </div>

          <div className="mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <a className="btn w-full mt-12 lg:mt-24 sm:w-auto sm:mb-0 text-white bg-accent hover:bg-accent-dark" target="_blank" rel="noopener noreferrer" href="https://vr.meta.me/s/2Rgf0BFArrcy5sf">
                  Get on Meta Quest
                </a>
              </div>
              <p className="text-secondary text-center text-md pt-4 font-bold">Join 1000+ curious explorers</p>

        </div>
      </div>

    </section>
  );
}

export default FeaturesBlocks;
