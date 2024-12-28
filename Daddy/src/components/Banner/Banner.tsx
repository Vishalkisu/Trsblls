import { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/banner/4bce6ec2-59f2-4a09-b7c4-30f146447b46.jpeg',
    '/banner/a483bd68-18a1-4558-a8c7-d5a4db691472.jpeg',
    '/banner/48f52a1c-4b77-47c3-b1af-3582ba8cc8e6.jpeg',
    '/banner/6ebad082-47d3-44c7-9957-3c1d141cf9a7.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles.slide} ${index === currentImageIndex ? styles.active : ''}`}
          >
            <img 
              src={image} 
              alt="" 
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
