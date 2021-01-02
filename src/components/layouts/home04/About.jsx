import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../home02/about/index';
import { NumberCount } from './about/index';

class About extends Component {
  render() {
    return (
      <section className='about-me t2 s3 shape-am position-relative' id='about'>
        <div className='section-icons'>
          <Icon />
        </div>
        <div className='container'>
          <div className='row position-relative'>
            <div className='col-lg-7 animate-element wow delay5 fadeInDown'>
              <div className='flat-title t2'>
                <h4 className='sub-title mg-b22'>About Me!!!</h4>
                <h2 className='title-section color-d11 mg-b41'>
                  Hi, I am here to help your next project!
                </h2>
                <div className='description'>
                  <p className='color-d13 lt-sp01'>
                    I currently am working as a Web Developer at Accenture,
                    which is where my passion for development and design
                    converge. I am also working on a few side projects. Since
                    beginning of my journey as a Web Developer nearly 8 years
                    ago, I've done remote work for agencies, consulted for
                    startups, and collaborated with talented people to create
                    digital products for both business and consumer use. I'm
                    quietly confident, naturally curious, and perpetually
                    working on improving my chops one design problem at a time.
                    Check my portfolio.
                  </p>
                  <p className='color-d13 lt-sp01'>
                    If you need any type of Website or any kind of Mobile app,
                    landing page or Website design within a day? then you can
                    tell me, I'm here to help you.
                  </p>
                </div>
              </div>
            </div>
            <div className='fact'>
              <NumberCount />
              <div className='btn-contact bg-s2 text-center'>
                <h4 className='title color-d11'>Get a project? Let’s talk.</h4>
                <a
                  href='mailto:dhisharma7@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='email color-s2 color-d15'
                >
                  dhisharma7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='featured-post animate-element wow delay5 fadeInUp'
          data-wow-delay='0.5s'
        >
          <img src='images/section/51.png' alt='images' />
        </div>
      </section>
    );
  }
}

export default About;
