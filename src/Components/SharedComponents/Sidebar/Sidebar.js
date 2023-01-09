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
              <a href="">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={islamicIcon}
                  alt=""
                />
                 Islamic
              </a>

              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={groceryIcon}
                  alt=""
                />
                Grocery (only in Dhaka city)
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={fashionIcon}
                  alt=""
                />
                Fashion
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={babyCareIcon}
                  alt=""
                />
                Baby Care
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={cosmeticsIcon}
                  alt=""
                />
                Cosmetics
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            
            
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={shoesIcon}
                  alt=""
                />
                Shoes
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
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
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={eyeCareIcon}
                  alt=""
                />
                Eye Care
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={sportsIcon}
                  alt=""
                />
                Sports
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={pharmacyIcon}
                  alt=""
                />
                Pharmacy
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={electronicsIcon}
                  alt=""
                />
                Electronics
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={furnitureIcon}
                  alt=""
                />
                Furniture
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={hardwareIcon}
                  alt=""
                />
                Hardware, Cables & Sanitary
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={homeDecorateIcon}
                  alt=""
                />
                Home Appliance & Decorate
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={vehicleIcon}
                  alt=""
                />
                Vehicle
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src={usedProductsIcon}
                  alt=""
                />
                Used Products
              </a>
              <span><i class="bi bi-chevron-right"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
