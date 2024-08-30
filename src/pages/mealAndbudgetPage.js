import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pathfinderLogo from '../images/pathfinder-new_logo.svg';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import MealAndBudgetCSS from './mealAndbudgetPage.css';
import starIcon from '../images/stars.svg';
import meatIcon from '../images/icons/meat_icon.svg';
import fishIcon from '../images/icons/fish_icon.svg';
import chickenIcon from '../images/icons/chicken_icon.svg';
import veganIcon from '../images/icons/vegan_icon.svg';
import sweetIcon from '../images/icons/sweet_icon.svg';
import allergyIcon from '../images/icons/allergy_icon.svg';

const MealAndBudgetPage = () => {
  const [budgetLevel, setBudgetLevel] = useState('');
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleSelectionClick = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const handleSliderChange = (e) => {
    setBudgetLevel(e.target.value);
  };

  const handleBudgetClick = (level) => {
    setBudgetLevel(level);
  };

  const handleMealClick = (meal) => {
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.includes(meal)
        ? prevSelectedMeals.filter((m) => m !== meal)
        : [...prevSelectedMeals, meal]
    );
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Seçilen yemekler ve bütçe seviyesini localStorage'a kaydet
    localStorage.setItem('selectedMeals', JSON.stringify(selectedMeals));
    localStorage.setItem('budgetLevel', budgetLevel);
    navigate('/progress');
  };

  const getPrices = (meal) => {
    switch (budgetLevel) {
      case 'Ucuz':
        return meal === 'Breakfast' ? '300₺' : meal === 'Lunch' ? '150₺' : '250₺';
      case 'Orta':
        return meal === 'Breakfast' ? '400₺' : meal === 'Lunch' ? '250₺' : '400₺';
      case 'Pahalı':
        return meal === 'Breakfast' ? '500₺' : meal === 'Lunch' ? '350₺' : '700₺';
      default:
        return '0₺';
    }
  };

  // Function to update the text file
  const updateTextFile = async () => {
    try {
      const response = await fetch('http://localhost:5000/update-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newText: 'yazi3' }),
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

  return (
    <>
      <main className='main-section'>
        <div className='main-components'>
          <div className='meal-preferences-section'>
            <div className='meal-preferences-text'>Yemek Tercihleriniz</div>
            <div className='meal-preferences-subtext'>Seyahatinize dahil etmek istediğiniz yemekleri, bütçenizi ve tercih ettiğiniz yemek türünü seçin.</div>
            <div className="foods-section">
              {[meatIcon, chickenIcon, fishIcon, sweetIcon, veganIcon, allergyIcon].map((icon, index) => (
                <div
                  key={index}
                  className={`food-preferences ${selectedIndexes.includes(index) ? 'selected' : ''}`}
                  onClick={() => handleSelectionClick(index)}
                >
                  <img src={icon} alt="Icon" className="icon" />
                  {index === 0 && "Et Yemekleri"}
                  {index === 1 && "Tavuk Yemekleri"}
                  {index === 2 && "Balık Yemekleri"}
                  {index === 3 && "Tatlı Yemekler"}
                  {index === 4 && "Vegan & Vejeteryan Yemekler"}
                  {index === 5 && "Alerjiniz varsa belirtiniz"}
                </div>
              ))}
            </div>
            <div className='budget-section'>
              <div className='budget-level-text'>Bütçenizi belirtiniz</div>
              <div className='budget-level-subtext'>Bütçe düzeyine göre en az veya daha pahalı restoranları seçeceğiz.</div>
              <div className='budget-box'>
                <div className={`budget-preferences ${budgetLevel === 'Ucuz' ? 'selected' : ''}`} onClick={() => handleBudgetClick('Ucuz')}>Ucuz</div>
                <div className={`budget-preferences ${budgetLevel === 'Orta' ? 'selected' : ''}`} onClick={() => handleBudgetClick('Orta')}>Orta</div>
                <div className={`budget-preferences ${budgetLevel === 'Pahalı' ? 'selected' : ''}`} onClick={() => handleBudgetClick('Pahalı')}>Pahalı</div>
              </div>
            </div>
          </div>
        </div>
        <div className="meals-section">
          <div className='m-level-text'>Dahil Edilecek Öğünler</div>
          <div className='m-level-subtext'>Fiyatlar 2 gün 1 kişi için her öğünün tahmini fiyatıdır.</div>
          <div className="meals-options">
            <div className={`meal-option ${selectedMeals.includes('Breakfast') ? 'selected' : ''}`} onClick={() => handleMealClick('Breakfast')}>
              <label>Kahvaltı</label>
              <span>{getPrices('Breakfast')}</span>
            </div>
            <div className={`meal-option ${selectedMeals.includes('Lunch') ? 'selected' : ''}`} onClick={() => handleMealClick('Lunch')}>
              <label>Öğle Yemeği</label>
              <span>{getPrices('Lunch')}</span>
            </div>
            <div className={`meal-option ${selectedMeals.includes('Dinner') ? 'selected' : ''}`} onClick={() => handleMealClick('Dinner')}>
              <label>Akşam Yemeği</label>
              <span>{getPrices('Dinner')}</span>
            </div>
          </div>
        </div>
        <div className='custom-btn' onClick={handleButtonClick}>
          <img src={starIcon} alt="Star Icon" className="icon" />
          Özelleştirilmiş Rotanı Oluştur!
        </div>
      </main>
    </>
  );
};

export default MealAndBudgetPage;