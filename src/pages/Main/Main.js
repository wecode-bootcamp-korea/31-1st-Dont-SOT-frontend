import React, { useEffect, useRef, useState } from 'react';
import '../Main/Main.scss';
import SLIDE_LIST from './slideData';
import Slide from './Slide';
import Pagination from './Pagination';
import Best from './ItemList/Best';
import BEST_LIST from './bestData';
import MD_LIST from './mdData';
import MdChoice from './ItemList/MdChoice';

const Main = () => {
  const slideRef = useRef();
  const bestRef = useRef();
  const mdRef = useRef();
  const [count, setCount] = useState(1);
  const [bestCount, setBestCount] = useState(1);
  const [isDisabled, setDisabled] = useState(false);

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

  const countHandle = n => {
    setCount(n);
  };
  const handleBestDecrease = () => {
    setBestCount(bestCount - 1);
    bestRef.current.style.transform = `translateX(-${1200 * bestCount}px)`;
    if (0 === bestCount) {
      setBestCount(1);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleBestIncrease = () => {
    setBestCount(bestCount + 1);
    bestRef.current.style.transform = `translateX(-${1200 * bestCount}px)`;
    if (BEST_LIST.length % 4 <= bestCount) {
      setBestCount(bestCount - 1);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
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
          <p className="itemTitle">베스트 메뉴</p>
          <ul ref={bestRef} className="itemList clear">
            {BEST_LIST.map(best => (
              <Best key={best.id} {...best} />
            ))}
          </ul>
        </div>
        <div className="buttonWrap">
          <button
            type="button"
            onClick={handleBestDecrease}
            disabled={isDisabled ? false : true}
            className="btnPrev"
          >
            이전
          </button>
          <button
            type="button"
            onClick={handleBestIncrease}
            disabled={isDisabled ? true : false}
            className="btnNext"
          >
            다음
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
