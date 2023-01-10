import React from "react";
import "./Footer.css";
import logo from "../../../Assets/Images/bpp shop logo fainal.png";
import playstoreIcon from "../../../Assets/Images/images-1.webp";
import appleIcon from "../../../Assets/Images/Apple_logo_grey.svg.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container_section">
        <div className="footer-content">
          <div className="brand_address_container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="address">
              <h5>Address</h5>
              <p>
                17 (9th Floor), Alhaz Shamsuddin Mansion, New Eskaton Road,
                Dhaka 1217
              </p>
            </div>
          </div>
          <div className="special_container">
            <h5>SPECIAL</h5>
            <div className="special_content_list">
              <ul>
                <li>Featured Products</li>
                <li>Latest Products</li>
                <li>Best Selling Products</li>
                <li>Top Rated Products</li>
              </ul>
            </div>
          </div>
          <div className="account_shipping_info_container">
            <h5>ACCOUNT & SHIPPING INFO</h5>
            <div className="account_shipping_info_list">
              <ul>
                <li>Profile Info</li>
                <li>Wish list</li>
                <li>Track order</li>
              </ul>
            </div>
          </div>
          <div className="downloadApp_newsletter_container">
            <h5>DOWNLOAD OUR APP</h5>
            <div className="downloadApp_newsletter_content">
              <button type="">
                <img width={30} src={playstoreIcon} alt="" />
                <div>
                  <small>Download on the</small>
                  <br />
                  <h6>App Store</h6>
                </div>
              </button>
              <button type="">
                <img width={30} src={appleIcon} alt="" />
                <div>
                  <small>Get it on</small>
                  <br />
                  <h6>Google Play</h6>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* </div> */}
      <div className="bottom_footer_container_section">
        <div className="bottom_footer_content">
          <div className="bottom_footer_left">© All Right Reserved BPPSHOP</div>
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
