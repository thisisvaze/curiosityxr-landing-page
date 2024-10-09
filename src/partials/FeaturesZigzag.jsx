import React, { useState, useEffect } from 'react';
import { FaBrain, FaQuestion, FaLightbulb, FaEye, FaComments, FaUserCog, FaSearch, FaHeadphones, FaHandsHelping } from 'react-icons/fa';

import FeatImage01 from '../images/features-03-image-01.webp';
import FeatImage02 from '../images/features-03-image-02.webp';
import FeatImage03 from '../images/features-03-image-03.webp';

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="py-6 md:py-10">
        <h1 className="h2 mt-12 lg:mt-24 text-primary mb-1 text-center ">What drives learning?</h1>
        <p className="lg:text-xl text-secondary text-center pt-4">Curiosity and active immersion.</p>

          {/* Items */}
          
          <div className="grid mt-5 md:mt-20 gap-20 md:gap-40">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="460" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-tertiary mb-2">How does a rocket look like from the inside?</div>
                  <h3 className="h3  text-primary mb-3">Limitless curiosity</h3>
                  {/* <p className="text-xl text-gray-400 mb-4">Active learning </p> */}
                  <ul className="text-md hidden md:block lg:text-lg text-tertiary -mb-2">
                <li className="flex items-center mb-2">
                  <FaBrain className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
                  <span>Active learning helps better knowledge recall</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaLightbulb className="w-5 h-5 text-yellow-500 mr-2 shrink-0" />
                  <span>Curiosity-based learning is the ultimate experience</span>
                </li>
                <li className="flex items-center">
                  <FaQuestion className="w-5 h-5 text-purple-500 mr-2 shrink-0" />
                  <span>No questions are dumb questions</span>
                </li>
              </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="460" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-tertiary mb-2">Oh! I want to learn everything about everything</div>
                  <h3 className="h3 text-primary mb-3">Active Immersion</h3>
                  <ul className="text-lg hidden md:block text-tertiary -mb-2">
                <li className="flex items-center mb-2">
                  <FaEye className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                  <span>See what you want to see - Powered by 1M+ models</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaComments className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
                  <span>Ask what you want - Powered by OpenAI</span>
                </li>
                <li className="flex items-center">
                  <FaUserCog className="w-5 h-5 text-purple-500 mr-2 shrink-0" />
                  <span>Personalize what you want to learn</span>
                </li>
              </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="460" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-tertiary mb-2">A Plant cell coming out of a plant?</div>
                  <h3 className="h3 text-primary mb-10">A Digital Microscope</h3>
                 <ul className="text-lg text-tertiary -mb-2 hidden md:block">
                <li className="flex items-center mb-2">
                  <FaSearch className="w-5 h-5 text-indigo-500 mr-2 shrink-0" />
                  <span>A new way to explore digital information</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaHeadphones className="w-5 h-5 text-red-500 mr-2 shrink-0" />
                  <span>Learn about it when you see, touch, smell and hear it</span>
                </li>
                <li className="flex items-center">
                  <FaHandsHelping className="w-5 h-5 text-orange-500 mr-2 shrink-0" />
                  <span>Connecting reality with knowledge</span>
                </li>
              </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="md:hidden max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pb-12">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn w-full lg:mt-4 lg:mb-4 sm:w-auto sm:mb-0 text-white bg-accent hover:bg-accent-dark" target="_blank" rel="noopener noreferrer" href="https://vr.meta.me/s/2Rgf0BFArrcy5sf">
                  Get Started for Free
                </a>
              </div>
            
            </div>
    </section>
  );
}

export default FeaturesZigzag;