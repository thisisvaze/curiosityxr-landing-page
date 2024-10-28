import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';


function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialRef = useRef(null);

  const testimonials = [
    {
      image: TestimonialImage01,
      quote: "We're active beings in a 3D world, but modern education is passive and flat. CuriosityXR is active, 3D, and contextual learning, which is how the next generation will be educated.",
      name: "Cayden Pierce",
      title: "MIT Media Lab"
    },
    {
      image: TestimonialImage02,
      quote: "CuriosityXR is as if you have a personal assistant right on your shoulder, ever-ready to educate you on topics you're passionate about, based on your context.",
      name: "Alexis Morris",
      title: "OCAD University"
    },
    {
      image: TestimonialImage03,
      quote: "As a science teacher, CuriosityXR made my eyes light up! Teaching in 3D without having to leave the classroom would be game changing for my younger students!",
      name: "Jonathan B",
      title: "Founder, Scooli"
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length),
  });

  useEffect(() => {
    if (isMobile && testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
  }, [currentTestimonial, isMobile]);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 lg:py-20 border-t border-primary">
          {/* Section header */}
          <div className="max-w-3xl mx-auto  text-center pb-12 lg:pb-20">
            <h1 className="text-3xl font-architects-daughter text-white mb-5 px-5">Why is learning to walk so natural?</h1>
            <h2 className="h2 text-tertiary mb-5 opacity-30 px-5">"We are not meant to sit on a chair and learn about the world, we are meant to explore the world itself."</h2>
            <p className="text-xl font-bold opacity-30 text-secondary"> - Bret Victor -</p>
          </div>

          {/* Testimonials */}
          <div className={`max-w-sm mx-auto lg:max-w-none ${isMobile ? 'overflow-hidden' : ''}`}>
            <div 
              {...handlers}
              ref={testimonialRef}
              className={`flex ${isMobile ? 'transition-transform duration-300 ease-in-out' : 'lg:grid lg:grid-cols-3 lg:gap-6'}`}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`w-full ${isMobile ? 'flex-shrink-0' : ''} px-4`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="flex flex-col h-full p-6 bg-secondary">
                    <div>
                      <div className="relative inline-flex flex-col mb-4">
                        <img className="rounded-full" src={testimonial.image} width="48" height="48" alt={`Testimonial 0${index + 1}`} />
                      </div>
                    </div>
                    <blockquote className="text-lg text-secondary grow">{testimonial.quote}</blockquote>
                    <div className="text-secondary font-medium mt-6 pt-5 border-t border-primary">
                      <cite className="text-primary not-italic">{testimonial.name}</cite> / {testimonial.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile pagination dots */}
          {isMobile && (
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 mx-4 rounded-full ${index === currentTestimonial ? 'bg-white' : 'bg-white/30'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;