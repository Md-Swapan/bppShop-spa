import React from "react";
import "./Shipping.css";
import delivery from "../../Assets/Images/shiping-icons/delivery.png";
import money from "../../Assets/Images/shiping-icons/money.png";
import Genuine from "../../Assets/Images/shiping-icons/Genuine.png";
import Payment from "../../Assets/Images/shiping-icons/Payment.png";
import Modal from "react-modal";
import ShippingModal from './../../Components/ShippingModal/ShippingModal';
Modal.setAppElement("#root");

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

const Shipping = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="shiping-view-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shiping-heading">
                SHIPPING AND BILLING ADDRESS
              </div>
              <hr className="shippin_billing_header_line"/>
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
                    <span onClick={openModal} className="change_text">
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
                  <div className="billing_name">
                    Delivery to : Md-Shuvo-miah
                  </div>
                  <div className="billing_address">
                    <span className="home_text">home</span> 01676667145 | 15,
                    Chandpai, Mongla, Bagerhat .{" "}
                    <span onClick={openModal} className="change_text">
                      <i class="bi bi-pencil-fill"></i> Change
                    </span>
                  </div>
                </div>
              </div>
              <div className="shop_payment_btn_content">
                <div className="shop_payment_btn">
                  <div className="shop_cart_btn">
                    <i class="bi bi-chevron-left"></i> Shop cart
                  </div>
                  <div className="proceed_payment_btn">
                    Proceed payment <i class="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shiping_amount_container">
                <div className="shiping_amount_content">
                  <div>Sub Total</div>
                  <div className="amount_text">৳945.00</div>
                </div>
                <div className="shiping_amount_content">
                  <div>Tax</div>
                  <div className="amount_text">৳0.00</div>
                </div>
                <div className="shiping_amount_content">
                  <div>Shiping</div>
                  <div className="amount_text">৳120.00</div>
                </div>
                <div className="shiping_amount_content">
                  <div>Discount on product</div>
                  <div className="amount_text">-৳45.00</div>
                </div>
                <div>
                  <input
                    className="coupon_input"
                    type="text"
                    placeholder="Coupon code"
                  />
                </div>
                <div>
                  <button className="coupon_btn">Apply code</button>
                </div>
                <hr />
                <div className="shiping_amount_content">
                  <div>Total</div>
                  <div className="amount_text">৳1,020.00</div>
                </div>
                <div class="container mt-4">
                  <div class="row">
                    <div class="col-md-3 p-0 text-center ">
                      <img
                        class="order-summery-footer-image"
                        src={delivery}
                        alt=""
                      />
                      <div class="deal-title">3 Days free delivery </div>
                    </div>

                    <div class="col-md-3 p-0 text-center">
                      <img
                        class="order-summery-footer-image"
                        src={money}
                        alt=""
                      />
                      <div class="deal-title">Money back guarantee</div>
                    </div>
                    <div class="col-md-3 p-0 text-center">
                      <img
                        class="order-summery-footer-image"
                        src={Genuine}
                        alt=""
                      />
                      <div class="deal-title">100% Genuine Product</div>
                    </div>
                    <div class="col-md-3 p-0 text-center">
                      <img
                        class="order-summery-footer-image"
                        src={Payment}
                        alt=""
                      />
                      <div class="deal-title">Authentic payment</div>
                    </div>
                  </div>
                </div>
              </div>
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
        <br />
      </Modal>
    </>
  );
};

export default Shipping;
