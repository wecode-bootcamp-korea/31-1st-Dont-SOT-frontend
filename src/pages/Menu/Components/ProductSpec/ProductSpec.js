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
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const fetchData = useCallback(() => {
    async function fetchAndSetDetail() {
      const response = await fetch(`${API.ProductSpec}${params.id}`);
      const data = await response.json();
      setDetail(data.results);
    }
    fetchAndSetDetail();
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!detail) return null;

  return (
    <div className="subPage">
      <div className="contentMenu inner">
        <section className="menuView">
          <div className="menuViewWrap">
            <div className="onTitle">
              <h2 className="title" onClick={goBack}>
                <a href="#none" className="headerTitle">
                  전체메뉴
                </a>
              </h2>
            </div>

            <div className="viewCont">
              <MenuDetail detail={detail} />
              <Quantity />
              <Allergy />
              <Country />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
