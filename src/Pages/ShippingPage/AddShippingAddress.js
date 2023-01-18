import React, { useState } from 'react';
import './AddShippingAddress.css';
import Modal from "react-modal";
import ShippingModal from '../../Components/ShippingModal/ShippingModal';
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "../../BaseUrl/BaseUrl";
import { token } from '../../BaseUrl/BaseUrl';
Modal.setAppElement('#root');



const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      paddingBottom: "20px",
    },
  };

const AddShippingAddress = () => {
    const [shippingAddress,setShippingAddress]=useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    console.log(shippingAddress);
    useEffect(() => {
      axios
        .get(baseUrl + "/shipping-address", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setShippingAddress(res.data.data);
        });
    }, []);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    const handleDefaultBtn = (e) => {
        // console.log("clicked");
        const defaultBtn = document.getElementById("default_btn");
        const setDefaultBtn = document.getElementById("set_default_btn");
        setDefaultBtn.style.display = "none";
        defaultBtn.style.display = "block";
      };
    return (
        <>
      <div className="shipping_container">
        <div className="shipping_content">
          <div className="shipping_header">Shipping Address</div>
        </div>
        <hr className="shipping_line" />
        <div className="address_content">
          <div className="row">
            <div className="col-md-6">
              <div className="shipping_address_box">
                <div className="shipped_person">
                  <div>Delivery to : Md-Shuvo-miah</div>
                  <div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="default_btn"
                      className="default_btn"
                    >
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="set_default_btn"
                      className="set_default_btn"
                    >
                      <i class="bi bi-check"></i> Set default
                    </div>
                  </div>
                </div>
                <div class="shiped_address">
                  <span class="home_text">home</span> 01676667145 | 15, Basabo,
                  Basabo, Dhaka.{" "}
                  <span class="change_text">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shipping_address_box">
                <div className="shipped_person">
                  <div>Delivery to : Md-Shuvo-miah</div>
                  <div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="default_btn"
                      className="default_btn"
                    >
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="set_default_btn"
                      className="set_default_btn"
                    >
                      <i class="bi bi-check"></i> Set default
                    </div>
                  </div>
                </div>
                <div class="shiped_address">
                  <span class="home_text">home</span> 01676667145 | 15, Basabo,
                  Basabo, Dhaka.{" "}
                  <span class="change_text">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shipping_address_box">
                <div className="shipped_person">
                  <div>Delivery to : Md-Shuvo-miah</div>
                  <div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="default_btn"
                      className="default_btn"
                    >
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="set_default_btn"
                      className="set_default_btn"
                    >
                      <i class="bi bi-check"></i> Set default
                    </div>
                  </div>
                </div>
                <div class="shiped_address">
                  <span class="home_text">home</span> 01676667145 | 15, Basabo,
                  Basabo, Dhaka.{" "}
                  <span class="change_text">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shipping_address_box">
                <div className="shipped_person">
                  <div>Delivery to : Md-Shuvo-miah</div>
                  <div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="default_btn"
                      className="default_btn"
                    >
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <div
                      onClick={() => handleDefaultBtn()}
                      id="set_default_btn"
                      className="set_default_btn"
                    >
                      <i class="bi bi-check"></i> Set default
                    </div>
                  </div>
                </div>
                <div class="shiped_address">
                  <span class="home_text">home</span> 01676667145 | 15, Basabo,
                  Basabo, Dhaka.{" "}
                  <span class="change_text">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={openModal} className="row">
            <div class="add_more_address_btn">
              <div>
                <i class="bi bi-plus"></i>
              </div>
              <div>Add More</div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ShippingModal closeModal={closeModal}/>
      </Modal>
    </>
    );
};

export default AddShippingAddress;