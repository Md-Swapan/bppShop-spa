import React from "react";
import Nav from "../../Components/SharedComponents/Nav/Nav";
import Sidebar from "../../Components/SharedComponents/Sidebar/Sidebar";
import "./Home.css";
import islamic from "../../Assets/Images/categoryImg/islamic.png";
import grocery from "../../Assets/Images/categoryImg/grocery.png";
import fashion from "../../Assets/Images/categoryImg/fashion.png";
import babycare from "../../Assets/Images/categoryImg/babycare.png";
import electronics from "../../Assets/Images/categoryImg/electronics.png";
import furniture from "../../Assets/Images/categoryImg/furniture.png";
import shoe from "../../Assets/Images/categoryImg/shoe.png";
import cosmetic from "../../Assets/Images/categoryImg/cosmetic.png";
import pharmacy from "../../Assets/Images/categoryImg/pharmacy.png";
import eyecare from "../../Assets/Images/categoryImg/eyecare.png";
import sports from "../../Assets/Images/categoryImg/sports.png";
import homeappliance from "../../Assets/Images/categoryImg/homeappliance.png";
import vehicle from "../../Assets/Images/categoryImg/vehicle.png";
import hardware from "../../Assets/Images/categoryImg/hardware.png";
import usedproducts from "../../Assets/Images/categoryImg/usedproducts.png";
import watch from "../../Assets/Images/categoryImg/watch.png";

const datas =[
  {
      "id":1,
      "title":"Islamic",
      "img":islamic
  },
  {
      "id":2,
      "title":"Grocery (only in Dhaka city)",
      "img":grocery
  },
  {
      "id":3,
      "title":"Fashion",
      "img":fashion
  },
  {
      "id":4,
      "title":"Baby Care",
      "img":babycare
  },
  {
      "id":5,
      "title":"Electronics",
      "img":electronics
  },
  {
      "id":6,
      "title":"Furniture",
      "img":furniture
  },
  {
      "id":7,
      "title":"Shoe",
      "img":shoe
  },
  {
      "id":8,
      "title":"Cosmetic",
      "img":cosmetic
  },
  {
      "id":9,
      "title":"Pharmacy",
      "img":pharmacy
  },
  {
      "id":10,
      "title":"Eye Care",
      "img":eyecare
  },
  {
      "id":11,
      "title":"Sports",
      "img":sports
  },
  {
      "id":12,
      "title":"Home Appliance & Decorate",
      "img":homeappliance
  },
  {
      "id":13,
      "title":"Vehicle",
      "img":vehicle
  },
  {
      "id":14,
      "title":"Hardware, Cables & Sanitary",
      "img":hardware
  },
  {
      "id":15,
      "title":"Used Products",
      "img":usedproducts
  },
  {
      "id":16,
      "title":"Watch",
      "img":watch
  }
]

const Home = () => {
  // const [cardDatas, setCardDatas] = useState([]);
  // // console.log(cardDatas);
  // useEffect(() => {
  //   axios.get("./homeCatagoryData.json").then((res) => setCardDatas(res.data));
  // }, []);
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
          {datas.map((item) => (
            <div key={item.id} class="card text-center">
              <div class="card-body">
                <img src={item.img} class="card-img-top" alt="" />
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
