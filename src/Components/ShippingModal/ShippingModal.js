import React from "react";
import "./ShippingModal.css";

const ShippingModal = ({ closeModal }) => {
  
  return (
    <>
      <div className="shipping_modal_container">
        <div className="shipping_modal_content">
          <div className="shipping_modal_header">Add New Address</div>
        </div>
        <hr className="shipping_modal_line" />

        <div className="shipping_address_input_container">
          <div className="form-group">
            <span>Contact person name *</span>
            <input
              className="shipping_address_input"
              type="text"
              placeholder="Md-Shuvo-miah"
            />
          </div>
          <div className="form-group">
            <span>Area*</span>
            <select
              class=" shipping_address_input"
              aria-label="Default select example"
            >
              <option selected>------Select Area------</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-group">
            <span>Phone *</span>
            <input
              className="shipping_address_input"
              type="text"
              placeholder="01676667145"
            />
          </div>
          <div className="form-group">
            <span>Address *</span>
            <input
              className="shipping_address_input"
              type="text"
              placeholder="House no. / Building /Street /Area"
            />
          </div>
          {/* <div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                Address Select a label for effective delivery:
              </label>
              <br />
             <div className="d-flex">
             <div class="form-check m-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Home
                </label>
              </div>
              <div class="form-check m-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Office
                </label>
              </div>
             </div>
            </div>
           
          </div> */}
          <div className="form-group">
              <span>District/City*</span>
              <select
                class="shipping_address_input"
                aria-label="Default select example"
              >
                <option selected>------Select District/City------</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <span>Upazila/Thana*</span>
              <select
                class="shipping_address_input"
                aria-label="Default select example"
              >
                <option selected>------Select Upazila/Thana------</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

          {/* <div>
            <div class="form-group">
              <label for="">Default Address (Optional)</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="save_default_address"
                  id="check_default_address"
                  value="checked"
                  checked
                />
                <label class="form-check-label" for="exampleCheck1">
                  Default shipping address
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="save_billing_address"
                  id="check_billing_address"
                  value="checked"
                  checked
                />
                <label class="form-check-label" for="exampleCheck1">
                  Default billing address
                </label>
              </div>

              <p class="mt-2">
                Your existing default address setting will be replaced if you
                make some changes here.
              </p>
            </div>
          </div> */}
        </div>

        <div onClick={closeModal} className="shipping_modal_close">
          <div className="shipping_modal_close_btn m-2">close</div>
          <div className="shipping_modal_save_btn m-2">save</div>
        </div>
      </div>
    </>
  );
};

export default ShippingModal;
