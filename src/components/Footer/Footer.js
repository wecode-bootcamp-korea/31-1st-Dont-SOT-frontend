import React from 'react';
import { Link } from 'react-router-dom';
import FooterLi from './footerLi/footerLi';
import '../Footer/Footer.scss';

const Footer = () => {
  const FOOTER_DATA = [
    {
      id: 1,
      data: '협력업체등록',
    },
    { id: 2, data: '공지사항' },
    {
      id: 3,
      data: '고객센터',
    },
    { id: 4, data: '개인정보처리방침' },
    {
      id: 5,
      data: '이용약관',
    },
  ];

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
          <a className="footerInsta" href="/" />
          <a className="footerFace" href="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
