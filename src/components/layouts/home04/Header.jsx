import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';
// import bloglinks from '../bloglinks';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id='header' className='header header-style4 has-menu-model'>
        <div className='container'>
          <div className='flex-header d-flex justify-content-between align-items-center'>
            <div id='logo' className='logo'>
              <Link
                to='/'
                onClick={() => {
                  window.location.href = '/';
                }}
                title='Logo'
              >
                <img
                  src='images/logo/03.jpeg'
                  alt='images'
                  data-width={122}
                  data-height={34}
                  data-retina='images/logo/03.jpeg'
                  width="200px"
                />
              </Link>
            </div>
            <div dir='rtl' className='btn-menu mobile-header__menu-button'>
              <div className='line line-1' />
              <div className='line line-2' />
              <div className='line line-3' />
              <div className='line line-4' />
            </div>
            <div className='content-menu d-lg-flex'>
              <div className='nav-wrap'>
                <nav id='mainnav' className='mainnav'>
                  <ul
                    className='menu ace-responsive-menu'
                    data-menu-style='horizontal'
                  >
                    <li>
                      <Link to='#home' className='active'>
                        Home
                      </Link>
                    </li>
                    {menus.map((menu) => (
                      <li key={menu.id}>
                        <Link to={menu.tomenu} className='click-model'>
                          {menu.namemenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className='socials-list-hd s3 hv2'>
              <a
                href='https://www.facebook.com/dhiraj.sharma.54/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-facebook' aria-hidden='true' />
              </a>
              <a
                href='https://www.instagram.com/_dhiraj_sharma__/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-instagram' aria-hidden='true' />
              </a>
              <a
                href='https://twitter.com/just_dhiraj'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-twitter' aria-hidden='true' />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
