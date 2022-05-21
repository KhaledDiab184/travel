import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><a href='/'>About Us</a></h2>
          </div>
          <div class='footer-link-items'>
            <h2><a href='/'>Contact Us</a></h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><a href='/'>Videos</a></h2>
          </div>
          <div class='footer-link-items'>
            <h2><a href='/'>Social Media</a></h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='logo-wrap'>
          <div class='footer-logo'>
            <a href='/' className='site-logo'>
              TRAVEL
              <i class='fas fa-plane' />
            </a>
          </div>         
          </div>
      </section>
    </div>
  );
}

export default Footer;
