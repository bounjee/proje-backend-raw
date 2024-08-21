import React from 'react';
import { useNavigate } from 'react-router-dom';
import landingCss from '../pages/landingPage.css';
import starIcon from '../images/stars.svg';
// import pathfinderLogo from '../images/pathfinder-new_logo.svg';
// import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Gezi1 from '../images/gaziantep-tarihi.jpg';
import Gezi2 from '../images/gastroantep.jpg';
import Gezi3 from '../images/gaziantep-dini.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/your-custom-route');
  };

  return (
    <>
      {/* // ## NAVBAR SECTION ## */}
      {/* <navbar className='navbar'>
        <div className='navbar-logo'>
          <a href='#'>
            <img src={pathfinderLogo} alt="Pathfinder Icon" className="icon" /> Pathfinder
          </a>
        </div>
        <div className='navbar-community'>
          <a href='#'>Topluluk Rotaları</a>
        </div>
        <div className='navbar-profile'>
          <a href='#'>Profil</a>
        </div>
      </navbar> */}

      {/* // ## MAIN SECTION ## */}
      <main className='main-section'>
      <h1 className='main-title'>Keşfetmeye Hazır Mısın?</h1>
        <div className='main-component'>
          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi1} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Tarihi Yapılar Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi2} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Gastronomi Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi3} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Dini Yapılar Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi1} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Tarihi Yapılar Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi1} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Tarihi Yapılar Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

          <div className='main-box'>
            <div className='main_box-pic'>
              <img src={Gezi1} alt="Ana Resim" />
            </div>
            <div className='main_box-title'>Gaziantep: Tarihi Yapılar Turu</div>
            <div className='main_box-date'>3 Günlük</div>
            <div className='main_box-new-event'>Yeni Etkinlik</div>
          </div>

        </div>
        
        <div className='custom-btn' onClick={handleButtonClick}>
          <img src={starIcon} alt="Star Icon" className="icon" />
          Özelleştirilmiş Rotanı Oluştur!
        </div>
      </main>

      {/* // ## FOOTER SECTION ## */}
      {/* <footer className="footer">
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
  );
};

export default LandingPage;
