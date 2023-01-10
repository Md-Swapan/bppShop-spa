import React from "react";
import "./Footer.css";
import logo from "../../../Assets/Images/bpp shop logo fainal.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container_section">
        <div className="footer-content">
          <div className="brand_address">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="address">
              <h4>Address</h4>
              <p>
                17 (9th Floor), Alhaz Shamsuddin Mansion, New Eskaton Road,
                Dhaka 1217
              </p>
            </div>
          </div>
          <div className="account_shipping_info">
            <div className="logo">ACCOUNT & SHIPPING INFO</div>
            <div className="address">
              <h4>Address</h4>
              <p>
                17 (9th Floor), Alhaz Shamsuddin Mansion, New Eskaton Road,
                Dhaka 1217
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer_container_section">
        <div className="bootom_footer_containt">
          <div className="bottom_footer_left">© All Right Reserved BPPSHOPS</div>
          <div className="bottom_footer_right">
            <div className="bottom_term_text">Terms & conditions</div>
            <div className="bottom_privacy_text">Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
