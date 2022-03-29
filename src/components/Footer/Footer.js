import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footMain inner">
        <div className="footerMenu">
          <ul className="footerUl">
            <li className="footerLifirst">
              <a className="footerAtag medium" href="/">
                인재채용
              </a>
            </li>
            <li className="footerLi">
              <a className="footerAtag medium" href="/">
                협력업체등록
              </a>
            </li>
            <li className="footerLi">
              <a className="footerAtag medium" href="/">
                공지사항
              </a>
            </li>
            <li className="footerLi">
              <a className="footerAtag medium" href="/">
                고객 센터
              </a>
            </li>
            <li className="footerLi">
              <a className="footerAtag medium" href="/">
                개인정보처리방침
              </a>
            </li>
            <li className="footerLi">
              <a className="footerAtag medium" href="/">
                이용약관
              </a>
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <p className="footerPtag bold">
            COPYRIGHT©솥지마요. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="sns">
          <a className="footerInsta" href="/" />
          <a className="footerFace" href="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
