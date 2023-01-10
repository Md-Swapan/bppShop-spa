import React from 'react';
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
                </div>
            </div>
           </div>
        </>
    );
};

export default Footer;