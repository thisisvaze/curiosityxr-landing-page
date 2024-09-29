import React from 'react';
import feature1 from '../images/1.svg';
import feature2 from '../images/2.svg';
import feature3 from '../images/3.svg';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 pt-12 lg:py-0 sm:px-6 ">
        <div className="md:py-20 lg:border-none py-12 border-t border-primary"> 

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

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
