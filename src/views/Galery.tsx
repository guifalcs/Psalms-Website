import { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import './Galery.scss';

const Galery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sliderRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const imageUrls = [
      "src/assets/img1.jpg",
      "src/assets/img2.jpg",
      "src/assets/img3.jpg",
      "src/assets/img4.jpg",
      "src/assets/img5.jpg",
      "src/assets/img6.jpg",
      "src/assets/img7.jpg",
      "src/assets/img8.jpg",
      "src/assets/img9.jpg",
    ];

    let loadedImagesCount = 0;

    const handleImageLoad = () => {
      loadedImagesCount++;
      if (loadedImagesCount === imageUrls.length) {
        setImagesLoaded(true);
      }
    };

    const handleImageError = () => {
      // Handle image loading errors if needed
    };

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
    });
  }, []);

  useEffect(() => {
    showSlider();
  }, [currentSlide]);

  const hideSlider = () => {
    sliderRefs.current.forEach(item => item?.classList.remove('on'));
  };

  const showSlider = () => {
    if (sliderRefs.current[currentSlide]) {
      sliderRefs.current[currentSlide].classList.add('on');
    }
  };

  const nextSlider = () => {
    hideSlider();
    if (currentSlide === sliderRefs.current.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlider = () => {
    hideSlider();
    if (currentSlide === 0) {
      setCurrentSlide(sliderRefs.current.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <NavBar />

      {imagesLoaded ? (
        <div className="galeryContainer">
          <div className='containerSlider'>
            <button id='prevButton' onClick={prevSlider}>
              <img src="src/assets/arrow.png" alt="Previous" />
            </button>
            <div className="containerImages">
              <img
                className='slider on'
                src="src/assets/img1.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[0] = el)}
              />
              <img
                className='slider'
                src="src/assets/img2.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[1] = el)}
              />
              <img
                className='slider'
                src="src/assets/img3.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[2] = el)}
              />
              <img
                className='slider'
                src="src/assets/img4.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[3] = el)}
              />
              <img
                className='slider'
                src="src/assets/img5.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[4] = el)}
              />
              <img
                className='slider'
                src="src/assets/img6.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[5] = el)}
              />
              <img
                className='slider'
                src="src/assets/img7.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[6] = el)}
              />
              <img
                className='slider'
                src="src/assets/img8.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[7] = el)}
              />
              <img
                className='slider'
                src="src/assets/img9.jpg"
                alt=""
                ref={(el) => (sliderRefs.current[8] = el)}
              />
            </div>
            <button id='nextButton' onClick={nextSlider}>
              <img src="src/assets/arrow.png" alt="Next" />
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // Customize this loading message as needed
      )}
    </>
  );
};

export default Galery;
