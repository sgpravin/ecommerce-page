import "./App.css";
import React, { useEffect, useState } from "react";
import headset from "./headset.png";
import offerIcon from "./offer.png";
import orderIcon from "./order.png";
import truckIcon from "./truck.png";
import outletIcon from "./outlet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGlobe,
  faTruck,
  faPhone,
  faUser,
  faCartShopping,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [showOthers, setShowOthers] = useState(true);

  const handleClick = () => {
    console.log("Clicked");
  };

  const handleShow = () => {
    setShowProduct(true);
    setShowOthers(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("loading false");
      }
    };

    fetchData();
  }, []);
  console.log("dddd", data);

  return (
    <div className="App">
      <div className="Header">
        <ul className="navHeader">
          <li>
            <div className="Country">
              <FontAwesomeIcon icon={faLocationDot} inverse />
              <select name="country" id="country">
                <option value="Dubai">Dubai</option>
              </select>
            </div>
          </li>
          <li>
            <div className="Lang">
              <FontAwesomeIcon icon={faGlobe} inverse />
              <select name="lang" id="lang">
                <option value="Eng">ENG</option>
              </select>
            </div>
          </li>
          <li>
            <div className="Shipping">
              <FontAwesomeIcon icon={faTruck} inverse />
              <select name="shipping" id="shipping">
                <option value="Shipping">Shipping</option>
              </select>
            </div>
          </li>
          <li>
            <div className="Service">
              <FontAwesomeIcon icon={faPhone} inverse />
              <select name="service" id="service">
                <option value="Customer Service">Customer Service</option>
              </select>
            </div>
          </li>
        </ul>
      </div>

      <div className="SubHeader">
        <ul className="navSubHeader">
          <li>
            <div className="Logo">
              <span>LOGO</span>
            </div>
          </li>

          <li>
            <div className="Menu">
              <ul className="navMenu">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="grid-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-grid-2 fa-lg"
                  >
                    <path
                      fill="currentColor"
                      d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
                      class=""
                    ></path>
                  </svg>
                  <button>ALL</button>
                </li>
                <li>
                  <button>Products</button>
                </li>
                <li>
                  <button>SALE</button>
                </li>
                <li>
                  <button>Brands</button>
                </li>
                <li>
                  <button>Outlets</button>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="search">
              <ul className="navSearch">
                <li></li>
                <li>
                  <span className="svgSearch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                  </span>
                  <span>Search</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUser} className="userIcon" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faHeart} className="heartIcon" />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="shoppingIcon"
                  />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {showOthers && 
      <><div className="productAd">
          <div className="leftAd">
            <span className="prdAdContent">SHOP COMPUTERS & ACCESSORIES</span>
            <p className="prdAdd">
              Shop Laptops, desktops, smartphones, tablets, Shop Laptops,
              desktops, smartphones, tablets
            </p>
            <button>Shop Sales</button>
            <button onClick={handleShow}>All Products</button>
          </div>
          <div className="rightAd">
            <img src={headset} className="imgAd" alt="imgAd" />
          </div>
        </div><div className="offerZone">
            <ul className="offerZoneList">
              <li>
                <div>
                  <img src={truckIcon} className="imgAd" alt="imgAd" />
                  <span>Free shipping</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={orderIcon} className="imgAd" alt="imgAd" />
                  <span>Your Orders</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={offerIcon} className="imgAd" alt="imgAd" />
                  <span>Best Sellers</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={outletIcon} className="imgAd" alt="imgAd" />
                  <span>Outlets</span>
                </div>
              </li>
            </ul>
          </div></>
}
      {showProduct &&
      <div className="productSec">
        <ul className="navProductList">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.image}>
                <img
                  src={item.image}
                  alt="Girl in a jacket"
                  width="300"
                  height="300"
                ></img>
                <p>{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
}
      <div className="footernav">
        <footer>
          <ul className="navFooter">
            <li>
              <div className="col-40">
                <span className="footerLogo">LOGO</span>
                <p>
                  Lorem ipsum dolotr sit amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore er dolorre magna aliqua
                </p>
                <button onClick={handleClick} className="contactButton">
                  Contact Us
                </button>
              </div>
            </li>
            <li>
              <div className="col-40">
                <ul className="navCus">
                  <li>Customer Support</li>
                  <li>Rturns & Warranty</li>
                  <li>Payments</li>
                  <li>Shipping</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </li>
            <li>
              <ul className="navCard">
                <li>GIFT CARD</li>
                <li>Buy Gift Cards</li>
                <li>Redeem Card</li>
              </ul>
            </li>
            <li>
              <ul className="navLocation">
                <li>LOCATION</li>
                <li>
                  <select className="locationDrop">
                    <option value="Dubai">Dubai</option>
                  </select>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
