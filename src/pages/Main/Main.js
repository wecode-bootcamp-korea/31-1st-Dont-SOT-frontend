import React, { useEffect, useRef, useState } from 'react';
import '../Main/Main.scss';
import Best from './ItemList/Best';
import Slide from './Slide/Slide';

const Main = () => {
  const slideRef = useRef();
  const bestRef = useRef();
  const [count, setCount] = useState(1);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/slideData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSlideList(data);
      });
  });
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(countValue => {
        if (count < slideList.length) {
          setCount(count + 1);
        } else {
          setCount(1);
        }
      });

      handleSlider(count);

      return () => clearTimeout(interval);
    }, 6000);
  });

  const handleSlider = count => {
    if (count === 5) {
      slideRef.current.style.transform = 'translateX(0)';
    } else {
      slideRef.current.style.transform = `translateX(-${
        window.innerWidth * count
      }px)`;
    }
  };

  const handleCount = number => {
    setCount(number);
  };

  return (
    <main className="main">
      <div className="mainSlide">
        <Slide
          slideRef={slideRef}
          count={count}
          slideList={slideList}
          handleCount={handleCount}
          handleSlider={handleSlider}
        />
      </div>
      <div className="inner itemWrap">
        <Best bestRef={bestRef} />
      </div>
    </main>
  );
};

export default Main;
