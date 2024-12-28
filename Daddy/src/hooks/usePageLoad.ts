import { useState, useEffect } from 'react';

export const usePageLoad = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Check if all images and stylesheets are loaded
      const images = Array.from(document.images);
      const stylesheets = Array.from(document.styleSheets);
      
      const imagePromises = images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      const stylePromises = stylesheets.map(stylesheet => {
        if (stylesheet.href) {
          return fetch(stylesheet.href)
            .then(response => {
              if (!response.ok) throw new Error('Failed to load stylesheet');
            })
            .catch(() => {
              console.warn(`Failed to load stylesheet: ${stylesheet.href}`);
            });
        }
        return Promise.resolve();
      });

      Promise.all([...imagePromises, ...stylePromises])
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        })
        .catch(error => {
          console.error('Error loading resources:', error);
          setIsError(true);
          setIsLoading(false);
        });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoading, isError };
};
