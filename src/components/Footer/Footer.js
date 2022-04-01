import React from 'react';
import { Link } from 'react-router-dom';
import FooterLi from './footerLi/footerLi';
import FOOTER_DATA from './footerData';
import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footMain inner">
        <div className="footerMenu">
          <ul className="footerUl">
            <li className="footerLifirst">
              <Link className="footerAtag medium" to="/">
                인재채용
              </Link>
            </li>
            {FOOTER_DATA.map(list => {
              return <FooterLi id={list.id} key={list.id} data={list.data} />;
            })}
          </ul>
        </div>
        <div className="footerInfo">
          <p className="footerPtag bold">
            COPYRIGHT©솥지마요. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="sns">
          <Link className="footerInsta" to="/" />
          <Link className="footerFace" to="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
