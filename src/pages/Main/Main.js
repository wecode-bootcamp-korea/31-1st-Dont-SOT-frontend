import React, { useEffect, useRef, useState } from 'react';
import '../Main/Main.scss';
import SLIDE_LIST from './slideData';
import Slide from './Slide';
import Pagination from './Pagination';

const Main = () => {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(countValue => {
        if (count < SLIDE_LIST.length) {
          setCount(count + 1);
        } else {
          setCount(1);
        }
      });

      handleSlider(count);

      return () => clearTimeout(interval);
    }, 3000);
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

  const countHandle = n => {
    setCount(n);
  };

  return (
    <main className="main">
      <div className="mainSlide">
        <ul ref={slideRef} className="slideWrap">
          {SLIDE_LIST.map(slide => (
            <Slide key={slide.id} {...slide} />
          ))}
        </ul>
        <div className="inner">
          <div className="pagination">
            {SLIDE_LIST.map(button => (
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
        <div className="bestItem">
          <ul className="bestItemList">
            <li>아이템</li>
          </ul>
        </div>
        <div className="mdItem">
          <ul className="mdItemList">
            <li>아이템</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
