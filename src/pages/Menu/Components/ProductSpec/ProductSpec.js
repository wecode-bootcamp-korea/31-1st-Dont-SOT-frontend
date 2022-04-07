import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Quantity from './Components/Quantity';
import MenuDetail from './Components/MenuDetail';
import Allergy from './Components/Allergy';
import Country from './Components/Country';

import API from '../../../../config';
import './ProductSpec.scss';

const Product = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const fetchData = useCallback(() => {
    async function fetchAndSetDetail() {
      const response = await fetch(`${API.ProductSpec}${id}`);
      const data = await response.json();
      setDetail(data.results);
    }
    fetchAndSetDetail();
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {detail && (
        <div className="subPage">
          <div className="contentMenu inner">
            <section className="menuView">
              <div className="menuViewWrap">
                <div className="onTitle">
                  <h2 className="title">
                    <div className="headerTitle" onClick={goBack}>
                      전체메뉴
                    </div>
                  </h2>
                </div>
                <div className="viewCont">
                  <MenuDetail {...detail} />
                  <Quantity calory={detail.calory} />
                  <Allergy allergen={detail.allergen} />
                  <Country ingredient={detail.ingredient} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
