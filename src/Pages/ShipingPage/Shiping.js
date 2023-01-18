import React from "react";
import "./Shiping.css";

const Shiping = () => {
  return (
    <div className="shiping-view-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="shiping-heading">SHIPPING AND BILLING ADDRESS</div>
            <hr />
            <div class="progress_container">
              <div
                class="progress_content"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="shiping_container">
              <div className="shiping-address-heading">
                Choose shipping address
              </div>
              <div className="shiping_address_box">
                <div className="shiped_name">Delivery to : Md-Shuvo-miah</div>
                <div className="shiped_address">
                  <span className="home_text">home</span> 01676667145 | 15,
                  Chandpai, Mongla, Bagerhat .{" "}
                  <span className="change_text">
                    <i class="bi bi-pencil-fill"></i> Change
                  </span>
                </div>
              </div>
            </div>
            <div className="billing_container">
              <div className="billing-address-heading">
                Choose billing address
              </div>
              <div className="billing_address_box">
                <div className="billing_name">Delivery to : Md-Shuvo-miah</div>
                <div className="billing_address">
                  <span className="home_text">home</span> 01676667145 | 15,
                  Chandpai, Mongla, Bagerhat .{" "}
                  <span className="change_text">
                    <i class="bi bi-pencil-fill"></i> Change
                  </span>
                </div>
              </div>
            </div>
            <div className="shop_payment_btn_content">
              <div className="shop_payment_btn">
                <div className="shop_cart_btn"><i class="bi bi-chevron-left"></i> Shop cart</div>
                <div className="proceed_payment_btn">Proceed payment <i class="bi bi-chevron-right"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, suscipit vitae earum doloribus asperiores blanditiis
            accusantium iste facere eos repellendus!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shiping;
