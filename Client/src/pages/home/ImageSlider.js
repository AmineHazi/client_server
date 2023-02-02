import { useState } from "react";

const slideStyles = {
  display: "block",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  display: "block",
  top: "50%",
  transform: "translate(0, 400%)",
  right: "32px",
  fontSize: "45px",
  color: "#55555",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  display: "block",
  top: "50%",
  transform: "translate(0, 400%)",
  left: "32px",
  fontSize: "45px",
  color: "#55555",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  display: "block",
  height: "100%",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  setTimeout(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, 20000);
  return (
    <div style={sliderStyles}>
      <div style={slideStylesWidthBackground}></div>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>    
    </div>
  );
};

export default ImageSlider;