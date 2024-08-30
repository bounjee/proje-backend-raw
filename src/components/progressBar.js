import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import progressGif from '../images/gif/progress.gif'
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;

    if (progress < 20) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 20) {
            return prevProgress + 0.2;
          } else {
            clearInterval(interval);
            return prevProgress;
          }
        });
      }, 20);
    } else if (progress < 50) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 50) {
            return prevProgress + 0.3;
          } else {
            clearInterval(interval);
            return prevProgress;
          }
        });
      }, 20);
    } else if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 0.5;
          } else {
            clearInterval(interval);
            return prevProgress;
          }
        });
      }, 20);
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        navigate('/trip');
      }, 1000);
    }
  }, [progress, navigate]);

  const getMessage = () => {
    if (progress >= 100) {
      return "Rotanız Oluşturuldu!";
    } else if (progress < 40) {
      return "Rotanız Yapay Zeka Desteği İle Oluşturuluyor...";
    } else if (progress < 70) {
      return "Kişisel Zevklerinize Göre Rota Oluşturuluyor...";
    } else {
      return "Rotanız Oluşturulmak Üzere...";
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
        body: JSON.stringify({ newText: 'yazi4' }),
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
    <div style={styles.container}>
      <img 
        src={progressGif} 
        alt="Loading Gif"
        style={styles.gif} 
      />
      <h3 style={styles.message}>{getMessage()}</h3>
      <div style={styles.progressBarBackground}>
        <div
          style={{
            ...styles.progressBarFill,
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5em', // Tüm öğeler arasındaki boşluk 8px
  },
  gif: {
    width: '150px', // Gif'in genişliği
    height: '150px', // Gif'in yüksekliği
  },
  message: {
    fontSize: '24px',
    textAlign: 'center',
    fontWeight: 400,
  },
  progressBarBackground: {
    width: '60em',
    backgroundColor: '#ddd',
    height: '30px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#030f3f',
    transition: 'width 0.2s ease-in-out',
  },
};

export default ProgressBar;
