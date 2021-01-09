import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Project extends Component {
  render() {
    return (
      <section className='get-project s4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='featured-post animate-element wow delay5 fadeZooming'
                data-wow-delay='0.5s'
              >
                <img src='images/DJ/DJ3.jpg' alt='images' width='425px' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='content-inner animate-element wow delay5 fadeInUp'
                data-wow-delay='0.5s'
              >
                <h2 className='title mg-b14 color-d11'>Say Hello!</h2>
                <div className='site-list has-border'>
                  <a
                    href='https://www.facebook.com/dhiraj.sharma.54/'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-s1'
                  >
                    <i className='fa fa-facebook' aria-hidden='true' />
                  </a>
                  <a
                    href='https://www.instagram.com/_dhiraj_sharma__/'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-s2'
                  >
                    <i className='fa fa-instagram' aria-hidden='true' />
                  </a>
                  <a
                    href='https://twitter.com/just_dhiraj'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-s3'
                  >
                    <i className='fa fa-twitter' aria-hidden='true' />
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
