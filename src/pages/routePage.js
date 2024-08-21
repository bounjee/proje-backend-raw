import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routeCSS from '../pages/routePage.css';
import pathfinderLogo from '../images/pathfinder-new_logo.svg'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import gaziantekImage from '../images/gaziantep_header.png'



const RoutePage = () => {
  return (
    // ## NAVBAR SECTION ##
<>
    {/* <navbar className='navbar'>
        <div className='navbar-logo'>
        <a href='#'><img src={pathfinderLogo} alt="Pathfinder Icon" className="icon" />  Pathfinder</a>
        </div>
        <div className='navbar-community'>
            <a href='#'>Topluluk Rotaları</a>
            </div>
        <div className='navbar-profile'>
        <a href='#'>Profil</a>

        </div>
    </navbar> */}

    {/* MAIN SECTION */}

    <div className='main'>
      <header className='header'>
      <div className='header-content'>
        <div className='header-city-section'>
          <h1 className='header-city-text'>Gaziantep</h1>
          <div className='header-info'>
            <div className='header-date-text'>9 Eyl 24 - 10 Eyl 24</div>
            <div className='header-person-text'>2 Kişi</div>
          </div>
        </div>
        <div className='header-weather-wrapper'>
          <div className='header-weather-section'>
            <div className='header-weather-info'>
              <div className='header-weather-day-text'>Pazartesi</div>
              <div className='header-weather-temp-text'>24°, Yağmurlu</div>
            </div>
          </div>
          <div className='header-weather-section'>
            <div className='header-weather-info'>
              <div className='header-weather-day-text'>Salı</div>
              <div className='header-weather-temp-text'>32°, Güneşli</div>
            </div>
          </div>
        </div>
      </div>
    </header>

        <route className='route'>
          <div className="route-main">
            <div className='route-day-text'>Gaziantep Gezisinin İlk Günü</div>
            <div className='route-day-subtext'>Gezinin ilk gününe hoşgeldiniz, ilgi alanlarınıza göre oluşturulmuş rotamızı takip ederek, şehri istediğiniz şekilde gezebilirsiniz!</div>
            <div className='box-container'>
              <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>

            <div className='route-box'>
              <div className='route-content'>
                  <img src={gaziantekImage} alt='Gaziantep Kalesi' className='route-image-img'/>
                
                <p className='route-image-text'>
                  Lorem ipsum dolor sit amet, dolore ut labore et dolore labore et dolore magna magna magna magna magna magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className='route-buttons'>
                <button className='route-button'>Gaziantep Kalesi</button>
                <button className='route-button'>Konum</button>
                <button className='route-button'>Fiyat</button>
              </div>
            </div>
          </div>
            </div>
            
            
            
          </route>
    </div>

        

{/* // ## FOOTER SECTION ## */}
{/* 
<footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/services">Servislerimiz</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaLinkedin size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='social-icons'>
        <FaTwitter size={24} />
      </a>
    </div>
        <div className="footer-copyright">
          <p>2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer> */}

    </>
  )
}

export default RoutePage