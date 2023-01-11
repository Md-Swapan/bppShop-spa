import React from "react";
import "./Sidebar.css";
import islamicIcon from '../../../Assets/Images/icons/islamic-icon-vector-27687758.jpg'
import groceryIcon from '../../../Assets/Images/icons/grocery.webp'
import fashionIcon from '../../../Assets/Images/icons/image 40.png'
import babyCareIcon from '../../../Assets/Images/icons/3731013.png'
import cosmeticsIcon from '../../../Assets/Images/icons/cosmetic.jpg'
import shoesIcon from '../../../Assets/Images/icons/shoes.jpg'
import watchIcon from '../../../Assets/Images/icons/watch.png'
import eyeCareIcon from '../../../Assets/Images/icons/eyecare.jpg'
import sportsIcon from '../../../Assets/Images/icons/Sport_balls.svg.png'
import pharmacyIcon from '../../../Assets/Images/icons/pharmacy-icon-3.jpg'
import electronicsIcon from '../../../Assets/Images/icons/electronics.jpg'
import furnitureIcon from '../../../Assets/Images/icons/furniture.jpeg'
import hardwareIcon from '../../../Assets/Images/icons/image 52 (1).png'
import homeDecorateIcon from '../../../Assets/Images/icons/image 50.png'
import vehicleIcon from '../../../Assets/Images/icons/image 53.png'
import usedProductsIcon from '../../../Assets/Images/icons/usedProduct.jfif'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-toggle-section">
      <input type="checkbox" name="" id="openSidebarMenu" />
        <label for="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="menu">
            <li className="homeIcon">
              <Link to ="/">
                <i className="bi bi-house-door-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="/islamic">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={islamicIcon}
                  alt=""
                />
                 Islamic
              </Link>

              <span><i className="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <Link to="/grocery">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={groceryIcon}
                  alt=""
                />
                Grocery (only in Dhaka city)
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="/fashion">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={fashionIcon}
                  alt=""
                />
                Fashion
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="/baby-care">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={babyCareIcon}
                  alt=""
                />
                Baby Care
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="/cosmetics">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={cosmeticsIcon}
                  alt=""
                />
                Cosmetics
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>    
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
            </li>
            
            
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            <li>
              <Link to="shoes">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={shoesIcon}
                  alt=""
                />
                Shoes
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <Link to="eye-care">
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={watchIcon}
                  alt=""
                />
                Watch
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={eyeCareIcon}
                  alt=""
                />
                Eye Care
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="sports">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={sportsIcon}
                  alt=""
                />
                Sports
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="watch">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={watchIcon}
                  alt=""
                />
<<<<<<< HEAD
                Watch
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
                Pharmacy
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="electronics">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={electronicsIcon}
                  alt=""
                />
                Electronics
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="furniture">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={furnitureIcon}
                  alt=""
                />
                Furniture
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="pharmacy">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={pharmacyIcon}
                  alt=""
                />
<<<<<<< HEAD
                Pharmacy
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
                Hardware, Cables & Sanitary
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="home-appliance-decorate">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={homeDecorateIcon}
                  alt=""
                />
                Home Appliance & Decorate
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="vehicle">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={vehicleIcon}
                  alt=""
                />
                Vehicle
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <Link to="hardware-cables-sanitary">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={hardwareIcon}
                  alt=""
                />
                Hardware, Cables & Sanitary
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
            <li>
              <Link to="used-product">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={usedProductsIcon}
                  alt=""
                />
                Used Products
<<<<<<< HEAD
              </Link>
              <span><i class="bi bi-chevron-right"></i></span>
=======
              </a>
              <span><i className="bi bi-chevron-right"></i></span>
>>>>>>> 8de99c9123d8c606c0bb1b84bfa5544b534b5c13
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
