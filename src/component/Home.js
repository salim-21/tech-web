import React, { Fragment } from "react";
import Swiper from "swiper";

import "./Home.css";
import b from "../1.jpg";
import d from "../1.jpg";
import e from "../2.jpg";
import f from "../3.jpg";


export default function Home() {
  return (
    <Fragment>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="div">Welcome to Your Website</h1>
        </div>
        <div className="hero-image-container">
          <img src={b} alt="Animated Image" className="animated-image" />
        </div>
      </div>

     
      <div id="card-container">
        <div id="card">
          <img src={f} alt="Image 1" />
          <div id="card-content">
            <h3>Google Ads</h3>
            <h6></h6>
            {/* <p>
              We have train PPC team. We are not a freelancer, but a registered
              company with in-house team of PPC experts. We will not only help
              you set up competitive pricing strategies but also help increase
              your sales.
            </p> */}
          </div>
        </div>

        <div id="card">
          <img src={e} alt="Image 2" />
          <div id="card-content">
            <h3>SEO</h3>
            {/* <p>
              If you own or run a business in this digital age, being online is
              not a choice but a necessity. Getting your business online not
              only adds value to it, but, also gives it credibility, and, helps
              you reach a wider audience.
            </p> */}
          </div>
        </div>

        <div id="card">
          <img src={d} alt="Image 1" />
          <div id="card-content">
            <h3>Email Marketing</h3>
            {/* <p>
              How many emails from businesses do you delete every day? Choose
              Thrive and let's make your email marketing campaigns stand out and
              work for your business. We create personalized email newsletters
              to keep your emails{" "}
            </p> */}
          </div>
        </div>

        <div id="card">
          <img src={e} alt="Image 2" />
          <div id="card-content">
            <h3>Facebook ads</h3>
            {/* <p>
              Facebook ads are a powerful marketing tool because they allow
              businesses to target their ads to specific demographics,
              interests, and behaviors. We have train Facebook Meta Expert team.
            </p> */}
          </div>
        </div>
      </div>

      {/* <div className='div'>Escape</div> 
<div className='div'> 
  <span>into amazing experiences</span>
</div> */}
      {/* 
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={e} class="d-block w-100"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={f} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={d} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

     
      <div class="form-card1">
        <div class="form-card2">
          <form class="form">
            <p class="form-heading">Get In Touch</p>

            <div class="form-field">
              <input
                required=""
                placeholder="Name"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <input
                required=""
                placeholder="Email"
                class="input-field"
                type="email"
              />
            </div>

            <div class="form-field">
              <input
                required=""
                placeholder="Subject"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <textarea
                required=""
                placeholder="Message"
                cols="30"
                rows="3"
                class="input-field"
              ></textarea>
            </div>

            <button class="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
      
    </Fragment>
  );
}
