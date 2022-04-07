import React, { useEffect, useState, useRef } from 'react';
import API from '../../../config';
import './best.scss';

const Best = () => {
  const bestRef = useRef();
  const [bestCount, setBestCount] = useState(1);
  const [bestList, setBestList] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [test, setTest] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch(`${API.Best}`)
      .then(res => res.json())
      .then(data => {
        setBestList(data.results);
      });
  }, []);

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
    if (bestList.length % 4 < bestCount) {
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
                  <img src={best.image} alt={best.name} />
                </div>
                <dl className="textWrap">
                  <dt>{best.name}</dt>
                  <dd>{best.price}</dd>
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
      <ul>
        {test.map(allegy => (
          <li key={allegy.id}>
            <p>{allegy.id}</p>
            <p>{allegy.allergen_name}</p>
            <p>{allegy.status}</p>
          </li>
        ))}
      </ul>
      <ul>
        {tests.map(country => (
          <li key={country.id}>
            <p>{country.id}</p>
            <p>{country.name}</p>
            <p>{country.made_in}</p>
          </li>
        ))}
      </ul>
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
