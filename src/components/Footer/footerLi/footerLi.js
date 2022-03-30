import { Link } from 'react-router-dom';

const FooterLi = ({ data }) => {
  return (
    <li className="footerLi">
      <Link className="footerAtag medium" to="/">
        {data}
      </Link>
    </li>
  );
};

export default FooterLi;
