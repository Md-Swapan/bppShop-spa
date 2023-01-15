import React from "react";
import "./ProductCard.css";
import addToCartImg from "../../../Assets/Images/icons/addToCart.png";
import Modal from "react-modal";
import QuickViewModal from "../../QuickViewModal/QuickViewModal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    paddingBottom: "20px"
  },
};

const ProductCard = (props) => {
  const { id, title, image, price } = props.product;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="product_card_content">
        <div className=" product-card">
          <div className=" product-card-body">
            <img src={image} className="card-img-top" alt="" />
            <div className="product-card-body-content">
              <small>{title.toString().substring(0, 18)}...</small>
              <br />
              Each
              <br />
              <strong> ৳ {price}</strong>
            </div>
            <div className="quickView_AddToCart_overlay">
              <div className="overlayAddToCartBtn">
                {/* <h5>Add <br/> To <br/> Cart</h5>
                <i class="bi bi-cart-plus-fill"></i> */}
                <img src={addToCartImg} alt="" />
              </div>
              <button onClick={openModal}>
                <i className="bi bi-eye-fill"></i> <span>Quick View</span>
              </button>
            </div>
          </div>

          <div className="card-footer product-card-footer">
            <button type="">
              <i className="bi bi-cart-plus"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <span onClick={closeModal} className="modalCloseBtn"><i class="bi bi-x-lg"></i></span>
        <br/>
        <QuickViewModal />
        <br/>
      </Modal>
    </>
  );
};

export default ProductCard;
