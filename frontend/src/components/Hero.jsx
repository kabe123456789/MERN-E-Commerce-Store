import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Design Your Life, Design Your Style.</h1>
      <p>
        Minaye Design blends organic clothing with purposeful life coaching to 
        help you live authentically.
      </p>
      <div className="hero-buttons">
        <Link to="/shop" className="btn btn-shop">Shop Now</Link>
        <Link to="/coaching" className="btn btn-coaching">Join Coaching</Link>
      </div>
    </section>
  );
};

export default Hero;