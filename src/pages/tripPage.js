import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tripCss from '../pages/tripPage.css';
import starIcon from '../images/stars.svg';
import pathfinderLogo from '../images/pathfinder-new_logo.svg'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import artIcon from '../images/icons/art.svg'
import culturIcon from '../images/icons/cultur.svg'
import foodIcon from '../images/icons/food.svg'
import funIcon from '../images/icons/fun.svg'
import natureIcon from '../images/icons/nature.svg'
import shoppingIcon from '../images/icons/shopping.svg'
import CustomSelectBox from '../components/selectBox';
import CustomSelectBox2 from '../components/selectBox_2';





const TripPage = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [personCount, setPersonCount] = useState(1);

  const handleSelectionClick = (index) => {
    if (selectedIndexes.includes(index)) {
      // Eğer tıklanan kutucuk zaten seçiliyse, onu diziden çıkar
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      // Eğer tıklanan kutucuk seçili değilse, dizinin içine ekle
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/meal');
  };
  

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

        {/* // ## MAIN SECTION ## */}

        <main>
  <section>
    <div className="main-title">Rotanızı Oluşturun</div>
    <div className="secondary-title">Nereye Gitmek İstersiniz?</div>
    <div className='select-box'> 
      <CustomSelectBox />
      <CustomSelectBox2 />
    </div>


    <div className="search-container">

      {/* <select name="city" className="city-textinput">
        <option value="">Şehir Seçin</option>
        <option value="gaziantep">Gaziantep</option>
        <option value="antalya">Antalya</option>
      </select> */}
      
      {/* <input 
        type="date" 
        name="date" 
        className="date-textinput" 
        min={new Date().toISOString().split("T")[0]} 
        max={new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split("T")[0]} 
        placeholder="Tarih Seçin" 
      /> */}
    </div>
    {/* <div className="main-title">Rotanızı Oluşturun</div>
    <input type="text" placeholder="Nereye Gitmek İstersiniz?" className="selection" />
    <input type="text" placeholder="Tarih Seçiniz?" className="selection" /> */}


  </section>
     <section>
          <div className="selection-title">Yapmak İstediğiniz Aktiviteleri İşaretleyin</div>
          <div className="selection-container">
            {[culturIcon, shoppingIcon, natureIcon, foodIcon, artIcon, funIcon].map((icon, index) => (
              <div
                key={index}
                className={`selection ${selectedIndexes.includes(index) ? 'selected' : ''}`}
                onClick={() => handleSelectionClick(index)}
              >
                <img src={icon} alt="Icon" className="icon" />
                {index === 0 && "Kültürel Gezi"}
                {index === 1 && "Alışveriş Gezisi"}
                {index === 2 && "Doğa Gezisi"}
                {index === 3 && "Gastronomi Gezisi"}
                {index === 4 && "Sanat Etkinlikleri"}
                {index === 5 && "Eğlence Etkinlikleri"}
              </div>
            ))}
          </div>
        </section>
        <section className='count-container'>
            <div className='number-text'>Kişi Sayısı?</div>
            <div className='person-counter'>
              <div className="person-display">
                <div className="person-number">{personCount}</div>
                <div className='person-text'>Kişi</div>
              </div>
              <div className="counter-buttons">
              <button className="counter-btn" onClick={() => setPersonCount(Math.max(personCount - 1, 1))}>-</button>
              <button className="counter-btn" onClick={() => setPersonCount(personCount + 1)}>+</button>
              </div>
            </div>
</section>

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
  )
}

export default TripPage; // Ensure this matches the component name
