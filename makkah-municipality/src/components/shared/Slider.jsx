import React, { useEffect, useState, useMemo } from 'react';
import { DgaCard } from 'platformscode-new-react';

function Slider() {
  const numberInView = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState([]);
  const [inLeftView, setInLeftView] = useState([]);
  const [inRightView, setInRightView] = useState([]);

  // Memoize the cards array so it doesn't change on every render.
  const cards = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  useEffect(() => {
    const start = currentIndex * numberInView;
    const end = start + numberInView;
    setInView(cards.slice(start, end));
    setInLeftView(cards.slice(-numberInView));
    setInRightView(cards.slice(end, end + numberInView));
  }, [currentIndex, cards, numberInView]);

  const handleNext = () => {
    if ((currentIndex + 1) * numberInView < cards.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.floor((cards.length - 1) / numberInView));
    }
  };

  return (
    <div>
      <div className="slider-container">
        <div className="cards flex gap-[16px] overflow-hidden">
          {inView.map((cardValue, i) => (
            <DgaCard
              key={i.toString()}
              cardTitle={`Card ${cardValue}`}
              description={`Description for card ${cardValue}`}
              primaryActionLabel="Action"
              secondaryActionLabel="Action"
            />
          ))}
        </div>
      </div>
      <div className="controls mt-4 flex justify-between">
        <button onClick={handlePrev} className="prev-button">Prev</button>
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
      <div className="dots mt-[36px] flex justify-center items-center gap-[8px]">
        {Array.from({ length: Math.ceil(cards.length / numberInView) }).map((_, index) => (
          <span
            key={index}
            className={`w-[16px] h-[16px] rounded-full cursor-pointer ${index === currentIndex ? 'bg-[var(--stepper-button-completed,#1B8354)]' : 'bg-[var(--background-neutral-200,#E5E7EB)]'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
