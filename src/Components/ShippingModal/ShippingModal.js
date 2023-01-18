import React from "react";
import "./ShippingModal.css";

const ShippingModal = ({ closeModal }) => {
  const handleDefaultBtn = (e) => {
    console.log("clicked");
    const defaultBtn = document.getElementById("default_btn");
    const setDefaultBtn = document.getElementById("set_default_btn");
    setDefaultBtn.style.display="none";
    defaultBtn.style.display="block";
  };


  return (
    <>
      <div className="shipping_modal_container">
        <div className="shipping_modal_content">
          <div className="shipping_modal_header">Shipping Address</div>
          <div onClick={closeModal}>
            <span className="modalCloseBtn">
              <i class="bi bi-x-lg"></i>
            </span>
          </div>
        </div>
        <hr className="shipping_modal_line" />
        <div className="address_content_modal">
          <div className="row">
            <div className="col-md-6">
              <div className="shipping_modal_address_box">
                <div className="shipped_person">
                  <div>Delivery to : Md-Shuvo-miah</div>
                  <div onClick={() => handleDefaultBtn()}>
                    <div id="default_btn" className="default_btn">
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <div id="set_default_btn" className="set_default_btn">
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
        </div>
      </div>
    </>
  );
};

export default ShippingModal;
