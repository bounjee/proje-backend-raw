import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import tripCss from '../pages/tripPage.css';
import starIcon from '../images/stars.svg';
import pathfinderLogo from '../images/pathfinder-new_logo.svg';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import artIcon from '../images/icons/art.svg';
import culturIcon from '../images/icons/cultur.svg';
import foodIcon from '../images/icons/food.svg';
import funIcon from '../images/icons/fun.svg';
import natureIcon from '../images/icons/nature.svg';
import shoppingIcon from '../images/icons/shopping.svg';
import CustomSelectBox from '../components/selectBox';
import CustomDateRangePicker from '../components/selectBox_2';

const activityNames = [
  'kültürel_gezi',
  'alışveriş_gezisi',
  'doğa_gezisi',
  'gastronomi_gezisi',
  'sanat_etkinlikleri',
  'eğlence_etkinlikleri'
];

const TripPage = () => {

  // Function to update the text file
  const updateTextFile = async () => {
    try {
      const response = await fetch('http://localhost:5000/update-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newText: 'yazi2' }),
      });

      const data = await response.json();
      if (response.ok) {
        // alert(data.message); // Show success message
      } else {
        // alert('Error: ' + data.message); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    updateTextFile();
  }, []);

  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [personCount, setPersonCount] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSelectionClick = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Seçilen aktiviteleri uygun formata dönüştür
    const selectedActivities = selectedIndexes.map(index => activityNames[index]);

    // Seçilen aktiviteleri, kişi sayısını, şehir ve tarihleri localStorage'a kaydet
    localStorage.setItem('selectedActivities', JSON.stringify(selectedActivities));
    localStorage.setItem('personCount', personCount);
    localStorage.setItem('selectedCity', selectedCity ? selectedCity.value : null);
    localStorage.setItem('startDate', startDate ? startDate.format('DD/MM/YYYY') : null);
    localStorage.setItem('endDate', endDate ? endDate.format('DD/MM/YYYY') : null);
    navigate('/meal');
  };

  return (
    <>
      <main className='main-section'>
        <section>
          <div className="main-title">Rotanızı Oluşturun</div>
          <div className="secondary-title">Nereye Gitmek İstersiniz?</div>
          <div className='select-box'>
            <CustomSelectBox onChange={setSelectedCity} />
            <CustomDateRangePicker className="date-container"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
            />
          </div>
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
    </>
  );
};

export default TripPage;