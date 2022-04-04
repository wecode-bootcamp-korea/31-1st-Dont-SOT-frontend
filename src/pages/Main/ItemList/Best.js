import React, { useEffect, useState, useRef } from 'react';
import './best.scss';

const Best = () => {
  const bestRef = useRef();
  const [bestCount, setBestCount] = useState(1);
  const [bestList, setBestList] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    fetch('/data/bestData.json')
      .then(res => res.json())
      .then(data => {
        setBestList(data);
      });
  });

  const handleBestDecrease = () => {
    setBestCount(bestCount - 1);
    bestRef.current.style.transform = `translateX(-${1200 * bestCount}px)`;
    if (0 === bestCount) {
      setBestCount(1);
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  };

  const handleBestIncrease = () => {
    setBestCount(bestCount + 1);
    bestRef.current.style.transform = `translateX(-${1200 * bestCount}px)`;
    if (bestList.length % 4 <= bestCount) {
      setBestCount(bestCount - 1);
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  return (
    <>
      <div className="best">
        <p className="itemTitle">베스트 메뉴</p>
        <ul ref={bestRef} className="itemList clear">
          {bestList.map(best => {
            return (
              <li key={best.id}>
                <div className="imgWrap">
                  <img src={best.src} alt={best.title} />
                </div>
                <dl className="textWrap">
                  <dt>{best.title}</dt>
                  <dd>{best.price}</dd>
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="buttonWrap">
        <button
          type="button"
          onClick={handleBestDecrease}
          disabled={!buttonActive}
          className="btnPrev"
        >
          이전
        </button>
        <button
          type="button"
          onClick={handleBestIncrease}
          disabled={buttonActive}
          className="btnNext"
        >
          다음
        </button>
      </div>
    </>
  );
};

export default Best;