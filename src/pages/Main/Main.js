import React, { useEffect, useRef, useState } from 'react';
import '../Main/Main.scss';
import Slide from './Slide/Slide';
import Pagination from './Slide/Pagination';
import Best from './ItemList/Best';

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

  const countHandle = number => {
    setCount(number);
  };

  return (
    <main className="main">
      <div className="mainSlide">
        <ul ref={slideRef} className="slideWrap">
          {slideList.map(slide => (
            <Slide key={slide.id} {...slide} />
          ))}
        </ul>
        <div className="inner">
          <div className="pagination">
            {slideList.map(button => (
              <Pagination
                key={button.id}
                {...button}
                count={count}
                countHandle={countHandle}
                handleSlider={handleSlider}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="inner itemWrap">
        <Best bestRef={bestRef} />
      </div>
    </main>
  );
};

export default Main;
