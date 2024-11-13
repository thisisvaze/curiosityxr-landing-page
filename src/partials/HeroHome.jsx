import React, { useState } from 'react';
import Modal from '../utils/Modal';
import metaQuestLogo from '../images/metaQuestlogo.png';
import HeroImage from '../images/hero-image-02.webp';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="mx-auto   relative">

        {/* Hero content */}
        <div className="relative  lg:pb-16">
            {/* Hero image */}
            <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto mb-10 header-image" src={HeroImage} width="100%" alt="Hero" />
              {/* <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a> */}
            </div>

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}
          </div>
          {/* Section header */}
          <div className="max-w-3xl mx-auto px-1 lg:px-5 text-center pb-2 md:pb-2">

          <div className="flex justify-center mt-1" data-aos="fade-up" data-aos-delay="600">
              <a href="https://www.producthunt.com/posts/curiosityxr?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-curiosityxr" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=597583&theme=light" 
                  alt="CuriosityXR - Learn with 1M+ 3D models & AI in Mixed Reality | Product Hunt"
                  style={{ width: '180px', height: '54px' }}
                  width="180"
                  height="34"
                />
              </a>
            </div>
            <h1 className="font-semibold lg:text-4xl text-3xl lg:mb-2  lg:mt-6 text-primary" data-aos="fade-up">
              Experience Learning like Magic
            </h1>
            <p className="lg:text-xl text-secondary mb-8 w-3/4 mx-auto" data-aos="fade-up" data-aos-delay="200">
              Learn with 1M+ 3D models & AI in Mixed Reality
            </p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pb-1 md:space-y-0 space-y-4">
             
              <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn hover:opacity-80 transition duration-250 ease-in-out w-full lg:mt-4 lg:mb-4 sm:w-auto sm:mb-0 text-white border border-white" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=um-3guz9FO0">
              Watch Trailer
            </a>
              </div>
              <div className='mx-2'></div>
              <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn w-full lg:mt-4 lg:mb-4 sm:w-auto sm:mb-0 text-white bg-accent" target="_blank" rel="noopener noreferrer" href="https://vr.meta.me/s/2Rgf0BFArrcy5sf">
              Get on Meta Quest
            </a>
              </div>
              {/* Product Hunt Badge */}
           
            
            </div>
            
          </div>
          <div className='max-w-3xl mx-auto place-content-center text-primary pb-1 md:pb-1 flex items-center'  data-aos="fade-up" data-aos-delay="400">
            <img src={metaQuestLogo}alt="Quest Logo" className="w-48" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
