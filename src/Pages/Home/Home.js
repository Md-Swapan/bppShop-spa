import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../Components/SharedComponents/Nav/Nav";
import Sidebar from "../../Components/SharedComponents/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [cardDatas, setCardDatas] = useState([]);
  // console.log(cardDatas);
  useEffect(() => {
    axios.get("./homeCatagoryData.json").then((res) => setCardDatas(res.data));
  }, []);
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="header_container">
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
              <span className="">Seller Zone</span>
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
            </ul>
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
        </div>
      </div>
      <div className="catagory_container">
        <div className="catagory_containt">
          {cardDatas.map((item) => (
            <div key={item.id} class="card text-center">
              <div class="card-body">
                <img src="" class="card-img-top" alt="" />
              </div>
              <div class="card-footer">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
