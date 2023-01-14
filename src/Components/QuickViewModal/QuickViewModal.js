import React, { useState } from "react";
import prodimg from "../../Assets/Images/categoryImg/download (5).png";
import "./QuickViewModal.css";

const QuickViewModal = () => {
  const [quantityCount, setQuantityCount] = useState(1);
  return (
    <>
      <div className="modal-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="imageView">
                <div className="detailImgCarousel">
                  <img src={prodimg} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="detail-content-view">
                <div className="productName_wishlist">
                  <h4 className="productName"> Product Name </h4>
                  <span>
                    <i class="bi bi-heart"></i>
                  </span>
                </div>
                <div className="price_Stock_Code">
                  <h4 className="prices">৳400</h4>
                  <p>
                    Product Code: <strong>#SRG56gtr</strong>
                    <span>
                      {" "}
                      Stock: <strong>Available</strong>
                    </span>
                  </p>
                </div>
                <div className="pc-size-color">
                  <h5>Pc: 1</h5>

                  <div className="d-flex size">
                    <h5>Size: </h5>
                    <div className="size1">S</div>
                    <div className="size1">M</div>
                    <div className="size1">L</div>
                    <div className="size1">XL</div>
                    <div className="size1">XXL</div>
                  </div>
                  <div className="d-flex color">
                    <h5>Color: </h5>
                    <div className="color1"></div>
                    <div className="color2"></div>
                  </div>
                </div>
                <div className="quantity-content">
                  <div className="d-flex">
                    <h4>Quantity: </h4>
                    <div className="quantity">
                      <span
                        onClick={() =>
                          setQuantityCount(
                            quantityCount > 1
                              ? quantityCount - 1
                              : quantityCount
                          )
                        }
                        className="minus"
                      >
                        -
                      </span>
                      <span className="count-number">{quantityCount}</span>
                      <span
                        onClick={() => setQuantityCount(quantityCount + 1)}
                        className="plus"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="totalPrice">
                    <h5>Total Price: ৳400</h5>
                  </div>
                </div>
                <div className="about-div" style={{ margin: "10px 0px" }}>
                  <h5>About this item</h5>

                  <span>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 img-carousel-item">
              <img width={70} src={prodimg} alt="img" />
              <img width={70} src={prodimg} alt="img" />
              <img width={70} src={prodimg} alt="img" />
              <img width={70} src={prodimg} alt="img" />
            </div>
            <div className="col-md-8 buyNowBtn_addToCartBtn_container">
              <button type="">Buy Now</button>
              <button type="">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
