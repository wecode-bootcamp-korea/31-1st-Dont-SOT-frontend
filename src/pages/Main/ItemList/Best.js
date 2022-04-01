import React, { useEffect, useState } from 'react';
import BestItemList from './BestItemList';
import './best.scss';

const Best = ({ bestRef }) => {
  const [bestCount, setBestCount] = useState(1);
  const [bestList, setBestList] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/bestData.json', {
      method: 'GET',
    })
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
      <div className="bestItem">
        <p className="itemTitle">베스트 메뉴</p>
        <ul ref={bestRef} className="itemList clear">
          {bestList.map(best => (
            <BestItemList key={best.id} {...best} />
          ))}
        </ul>
      </div>
      <div className="buttonWrap">
        <button
          type="button"
          onClick={handleBestDecrease}
          disabled={buttonActive ? false : true}
          className="btnPrev"
        >
          이전
        </button>
        <button
          type="button"
          onClick={handleBestIncrease}
          disabled={buttonActive ? true : false}
          className="btnNext"
        >
          다음
        </button>
      </div>
    </>
  );
};

export default Best;
