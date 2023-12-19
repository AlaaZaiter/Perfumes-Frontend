import React, { useState } from 'react';
import '../ComponentCSS/FooterAndOurClients.css';

function OurClients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Valentino',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Mohammad Rahal'
    },
    {
      name: 'Nice',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Fatima'
    },
    {
      name: 'Perfect',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Alaa '
    }
  ];

  const nextTestimonial = () => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    setCurrentTestimonial(nextIndex);
  };
  const prevTestimonial = () => {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    setCurrentTestimonial(prevIndex);
  };
  return (
    <div className='m-4'>
      <h1 className='best_title'>Our clients Say</h1>
      <div className='FooterAndOurClientsContainer'>
        <div className='flex items-center gap-3'>
          <div className='subOurClients'>
            <p>{testimonials[currentTestimonial].name}</p>
            <p>{testimonials[currentTestimonial].text}</p>
            <p>{testimonials[currentTestimonial].author}</p>
          </div>
        </div>
        <div className='subOurClientsBTN'>
        <button onClick={prevTestimonial}></button>
          <button onClick={nextTestimonial}></button>
        </div>
      </div>
    </div>
  );
}

export default OurClients;