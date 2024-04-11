import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Right Path Predictor Pvt. Ltd. All rights reserved.</p>
      <ul>
        <li>
          <Link to="/terms-of-services">
            <p>Terms of Services</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
