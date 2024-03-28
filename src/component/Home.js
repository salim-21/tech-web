import React, { Fragment } from "react";
// import { useEffect } from 'react';

import Contact from "./contact";
import Skills from "./Skills";
import "./Home.css";
import b from "../s.jpg";
import d from "../1.jpg";
import e from "../2.jpg";
import f from "../3.jpg";
import g from "../001.jpeg";
import h from "../002.jpeg";
import i from "../003.jpeg";
import j from "../004.jpeg";



let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
export default function Home() {
  return (
    <Fragment>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="div">Welcome Salim WEB</h1>
        </div>
        <div className="hero-image-container">
          <img src={g} alt="Animated Image" className="animated-image" />
        </div>
      </div>

      <div id="card-container">
        <div id="card">
          <img src={f} alt="Image 1" />
          <div id="card-content">
            <h3>Google Ads</h3>
            <h6></h6>
          </div>
        </div>

        <div id="card">
          <img src={e} alt="Image 2" />
          <div id="card-content">
            <h3>SEO</h3>
          </div>
        </div>

        <div id="card">
          <img src={d} alt="Image 1" />
          <div id="card-content">
            <h3>Email Marketing</h3>
          </div>
        </div>

        <div id="card">
          <img src={e} alt="Image 2" />
          <div id="card-content">
            <h3>Facebook ads</h3>
          </div>
        </div>
      </div>

      {/* kjhgfds */}
      <div class="container-xl">
        <div class="row">
          <div class="col-md-9  mx-auto">
           
            <div
              id="myCarousel"
              class="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-4">

                      <div class="img-box">
                        <img src={b} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={e} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={i} class="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={g} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={h} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={i} class="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={i} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={j} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="img-box">
                        <img src={g} class="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-chevron-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <Skills />
      <Contact />
    </Fragment>
  );
}
