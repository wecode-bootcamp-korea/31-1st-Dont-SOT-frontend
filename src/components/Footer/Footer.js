import React from 'react';
import '../Footer/Footer.scss';
import { Link } from 'react-router-dom';

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
            <li className="footerLi">
              <Link className="footerAtag medium" to="/">
                협력업체등록
              </Link>
            </li>
            <li className="footerLi">
              <Link className="footerAtag medium" to="/">
                공지사항
              </Link>
            </li>
            <li className="footerLi">
              <Link className="footerAtag medium" to="/">
                고객 센터
              </Link>
            </li>
            <li className="footerLi">
              <Link className="footerAtag medium" to="/">
                개인정보처리방침
              </Link>
            </li>
            <li className="footerLi">
              <Link className="footerAtag medium" to="/">
                이용약관
              </Link>
            </li>
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
