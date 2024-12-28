import { useState, useEffect } from 'react';
import styles from './NewBanner.module.css';

const NewBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = [
    { image: '/banner/1717750819159.jpeg' },
    { image: '/banner/1725483226373.jpg' },
    { image: '/banner/1726263961740.jpg' },
    { image: '/banner/1726263988757.jpg' },
    { image: '/banner/1729080923852.jpg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        {bannerData.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <img 
              src={slide.image} 
              alt="" 
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBanner;
