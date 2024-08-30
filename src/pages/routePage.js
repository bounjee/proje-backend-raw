import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routeCSS from '../pages/routePage.css';
import pathfinderLogo from '../images/pathfinder-new_logo.svg';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const RoutePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [personCount, setPersonCount] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [budgetLevel, setBudgetLevel] = useState('orta');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const itemsPerPage = 6;

  // Function to update the text file
  const updateTextFile = async () => {
    try {
      const response = await fetch('http://localhost:5000/update-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newText: 'yazi5' }),
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
    const updateAndFetchData = async () => {
      try {
        await updateTextFile();
        
        const fetchData = async () => {
          const selectedActivities = JSON.parse(localStorage.getItem('selectedActivities')) || [];
          const personCount = localStorage.getItem('personCount') || 1;
          const selectedCity = localStorage.getItem('selectedCity') || 'antalya';
          const startDate = localStorage.getItem('startDate') || '';
          const endDate = localStorage.getItem('endDate') || '';
          const budgetLevel = localStorage.getItem('budgetLevel') || 'orta';
          const category = selectedActivities.length > 0 ? selectedActivities[0] : 'gastronomi_gezisi';
  
          setPersonCount(personCount);
          setSelectedCity(selectedCity);
          setStartDate(startDate);
          setEndDate(endDate);
          setBudgetLevel(budgetLevel);
          setSelectedActivities(selectedActivities);
  
          const response = await fetch('http://127.0.0.1:5050/query', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              city: selectedCity,
              category: selectedActivities,
              price_range: budgetLevel,
              start_date: startDate,  // Include startDate
              end_date: endDate ,
              

            }),
          });
  
          const result = await response.json();
          setData(result);
  
          const weatherResponse = await fetch('http://127.0.0.1:5050/weatherAPI', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: selectedCity }),
          });
  
          const weatherResult = await weatherResponse.json();
          setWeatherData(weatherResult.result.slice(0, 2)); // Only take the first two days
        };
  
        fetchData();
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    updateAndFetchData();
  }, []); // Empty dependency array, runs only once on mount

  const organizeData = (data) => {
    if (!data || data.length === 0 || !data[0] || !data[1]) {
      return [];
    }

    const days = [];
    const itemsPerCategory = 3;

    for (let i = 0; i < data[0].length; i += itemsPerCategory) {
      const day = {
        food: data[0].slice(i, i + itemsPerCategory),
        places: data[1].slice(i, i + itemsPerCategory)
      };
      days.push(day);
    }

    return days;
  };

  const organizedData = organizeData(data);
  const currentDay = organizedData[currentPage - 1] || { food: [], places: [] };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const images = require.context('../images', true);

  const getImagePath = (city, category, imageName) => {
    try {
      return images(`./${city}/${category}/${imageName}`);
    } catch (e) {
      console.error("Resim bulunamadı: ", e);
      return null; // Hata durumunda geri döndürülecek varsayılan bir yol koyabilirsiniz.
    }
  };

  return (
    <>
      <div className='main'>
        <header className='header'>
          <div className='header-content'>
            <div className='header-city-section'>
              <h1 className='header-city-text'>{selectedCity}</h1>
              <div className='header-info'>
                <div className='header-date-text'>{startDate} - {endDate}</div>
                <div className='header-person-text'>{personCount} kişi</div>
              </div>
            </div>
            <div className='header-weather-wrapper'>
              {weatherData.map((weather, index) => (
                <div className='header-weather-section' key={index}>
                  <div className='header-weather-info'>
                    <div className='header-weather-day-text'>{weather.day}</div>
                    <div className='header-weather-temp-text'>{weather.degree}°, {weather.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className='route'>
          <div className="route-main">
            <div className='route-day-text'>{selectedCity} Gezisinin İlk Günü</div>
            <div className='route-day-subtext'>Gezinin ilk gününe hoşgeldiniz, ilgi alanlarınıza göre oluşturulmuş rotamızı takip ederek, şehri istediğiniz şekilde gezebilirsiniz!</div>
            
            <h2>{selectedActivities[0]} Yerleri</h2>
            <div className='box-container'>
              {currentDay.food.map((item, index) => (
                <div className='route-box' key={index}>
                  <div className='route-content'>
                    <img src={getImagePath(selectedCity, selectedActivities[0], item[3])} alt={item[3]} className='route-image-img'/>
                    <p className='route-image-text'>{item[1]}</p>
                  </div>
                  <div className='route-buttons'>
                    <button className='route-button'>{item[0]}</button>
                    <button className='route-button' onClick={() => window.open(item[2], '_blank')}>Konum</button>
                    <button className='route-button'>Fiyat: {budgetLevel}</button>
                  </div>
                </div>
              ))}
            </div>

            <h2>{selectedActivities[1]} Yerleri</h2>
            <div className='box-container'>
              {currentDay.places.map((item, index) => (
                <div className='route-box' key={index}>
                  <div className='route-content'>
                    <img src={getImagePath(selectedCity, selectedActivities[1], item[3])} alt={item[3]} className='route-image-img'/>
                    <p className='route-image-text'>{item[1]}</p>
                  </div>
                  <div className='route-buttons'>
                    <button className='route-button'>{item[0]}</button>
                    <button className='route-button' onClick={() => window.open(item[2], '_blank')}>Konum</button>
                    <button className='route-button'>Fiyat: {budgetLevel}</button>
                  </div>
                </div>
              ))}
            </div>

            <div className='pagination'>
              {Array.from({ length: organizedData.length }, (_, i) => (
                <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutePage;