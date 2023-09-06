import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
            <h2 className="h2 opacity-20 mb-10 px-5">"We are not meant to sit on a chair and learn about the world, we are meant to explore the world itself."</h2>
            <p className="text-xl text-gray-400"> - Bret Victor</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col  h-full p-6 bg-gray-900" data-aos="fade-up">
              <div>
                <div className="relative  inline-flex flex-col mb-4">
                  <img className="rounded-full text-center" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
               
                        </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow"> We're active beings in a 3D world, but modern education is passive and flat. CuriosityXR is active, 3D, and contextual learning, which is how the next generation will be educated.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Cayden Pierce</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">MIT Media Lab</a>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-900" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
               
                        </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">CuriosityXR is as if you have a personal assistant right on your shoulder, seamlessly integrated into your surroundings, ever-ready to educate you on topics you're passionate about, based on your context. </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Alexis Morris</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">OCAD University</a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-900" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
              
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow"> As a science teacher, CuriosityXR made my eyes light up! Teaching in 3D without having to leave the classroom would be game changing for my younger students!</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Jonathan Bloomfield</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Founder, Scooli</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
