import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "./Button";
import "./Footer.css";


function Footer() {
  return(
   <div className='footer-container'>
<section className="footer-subscription">
    <p className="footer-subscription-heading">
        Join the Adventure newsletter to receive our best vacation deals
    </p>
    <p className="footer-subscription-text">
        You can unsubscribe at any time.
    </p>

    <div className="input-areas">
        <form >

<input type="email"  name="email" placeholder='Your Email'
className='footer-input'/>
<Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
    </div>
</section>

<div className="footer-links">
    <div className="footer-link-wrapper">
        <div className="footer-link-items">
<h2>About us</h2>
<Link to="/sign-up">How it works</Link>
<Link to="/">Testimonials</Link>
<Link to="/">Careers</Link>
<Link to="/">Investors</Link>
<Link to="/">Terms of Services</Link>

        </div>
        <div className="footer-link-items">
<h2>Contact us</h2>
<Link to="/">Contact</Link>
<Link to="/">Support</Link>
<Link to="/">Destinations</Link>
<Link to="/">Sponsorships</Link>


        </div>
    
        </div>

       <div className="footer-link-wrapper">
           <div className="footer-link-items">
               <h2>Videos</h2>
               <Link to="/">Submit Video</Link>
<Link to="/">Ambassadors</Link>
<Link to="/">Agency</Link>
<Link to="/">Inluencer</Link>
           </div>
           <div className="footer-link-items">
               <h2>Social Media</h2>
<Link to="/">Instagram</Link>
<Link to="/">Facebook</Link>
<Link to="/">Youtube</Link>
<Link to="/">Twitter</Link>
           </div>

       </div>
    
        </div>
        <section className="social-media">
<div className="social-media-wrap">
    <div className="footer-logo">
        <Link to="/" className="social-logo">
            TRVL <i className='fab fa-typo3'/>
        </Link>
    </div>
    <small className="website-right">TRVL &copy; 2022</small>
    <div className="social-icons">
    <Link  target="_blank" aria-label='Facebook' to="/"className="social-icon-link facebook">
<i className="fab fa-facebook-f"></i>
    </Link>

    <Link  target="_blank" aria-label='Instagram' to="/"className="social-icon-link instagram">
<i className="fab fa-instagram"></i>
    </Link>

    <Link  target="_blank" aria-label='Youtube' to="/"className="social-icon-link yotube">
<i className="fab fa-youtube"></i>
    </Link>

    <Link  target="_blank" aria-label='Twitter' to="/"className="social-icon-link twitter">
<i className="fab fa-twitter"></i>
    </Link>
   
    <Link  target="_blank" aria-label='Linkedin' to="/"className="social-icon-link linkedin">
<i className="fab fa-linkedin"></i>
    </Link>
    </div>

</div>



        </section>
        

    </div>
  );
}

export default Footer;


