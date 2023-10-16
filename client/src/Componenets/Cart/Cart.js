import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../Store/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartImg from "../../Images/kGZag9os6n.gif";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRem = (itemId) => {
    dispatch(remove(itemId));
    toast.success("Item Remove Successfully");
  };
  return (
    <div className="cart_cont">
      <ToastContainer />
      {items.length === 0 ? (
        <div className="cart_emp">
          <h1 className="emp_heading">  OOPS YOUR CART IS EMPTY....</h1>
          <img src={cartImg} alt="crtImg" />
        </div>
      ) : (
      
        <div className="demo">
         
          {items.map((item) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={item.uniqueId}
            >
              <div className="crd_img">
              <img
                src={`/api/v1/get-photo/${item._id}`}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = item.image; 
                }}
                className="card-img-top"
                alt={item.name}
              />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <button className="rmvbtn" onClick={() => handleRem(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
