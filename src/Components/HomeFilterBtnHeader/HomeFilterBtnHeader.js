import React from "react";
import './HomeFilterBtnHeader.css';


const HomeFilterBtnHeader = () => {
  return (
    <>
      <div className="homeFilterBtnHeader-container-section">
        <div className="header_btn">
          <div>
            <button>Brand</button>
          </div>
          <div>
            <button>Discounted Products</button>
          </div>
          
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="">Hot Items</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  New Arrival
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Top Rated
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Best Selling
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="">Partner Zone</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Become a seller
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Seller Login
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Become a Agent
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Agent Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFilterBtnHeader;
