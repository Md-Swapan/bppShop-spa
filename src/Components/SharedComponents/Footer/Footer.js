import React from 'react';
import './Footer.css'
import logo from '../../../Assets/Images/bpp shop logo fainal.png'

const Footer = () => {
    return (
        <>
           <div className='footer_container_section'>
            <div className='footer-content'>
                <div className='brand_address'>
                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='address'>
                        <h4>Address</h4>
                        <p>17 (9th Floor), Alhaz Shamsuddin Mansion, New Eskaton Road, Dhaka 1217</p>
                    </div>
                </div>
                <div className='account_shipping_info'>
                    <div className='logo'>
                    ACCOUNT & SHIPPING INFO
                    </div>
                    <div className='address'>
                        <h4>Address</h4>
                        <p>17 (9th Floor), Alhaz Shamsuddin Mansion, New Eskaton Road, Dhaka 1217</p>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default Footer;