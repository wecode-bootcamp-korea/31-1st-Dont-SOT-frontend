import React, { useEffect, useRef, useState } from 'react';
import '../Main/Main.scss';
import SLIDE_LIST from './slideData';
import Slide from './Slide';
import Pagination from './Pagination';

const Main = () => {
  const slideRef = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(countValue => {
        if (count < SLIDE_LIST.length - 1) {
          setCount(count + 1);
          console.log(count);
        } else {
          setCount(0);
        }
      });

      slideRef.current.style.transform = `translateX(-${
        window.innerWidth * count
      }px)`;

      return () => clearTimeout(interval);
    }, 1000);
  });
  const handleSlider = () => {};
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
                setCount={setCount}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
