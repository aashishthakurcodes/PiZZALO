import React, { useState } from "react";
import "./Collection.css";
import bg from "../../Images/about.jpg";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { ToastContainer, toast } from 'react-toastify';

import burger1 from "../../Images/burger-1.jpg";
import burger2 from "../../Images/burger-2.jpg";
import burger3 from "../../Images/burger-3.jpg";

import pasta1 from "../../Images/pasta-1.jpg";
import pasta2 from "../../Images/pasta-2.jpg";
import pasta3 from "../../Images/pasta-3.jpg";

import pizza1 from "../../Images/pizza-1.jpg";
import pizza2 from "../../Images/pizza-2.jpg";
import pizza3 from "../../Images/pizza-3.jpg";

import drink1 from "../../Images/drink-1.jpg";
import drink2 from "../../Images/drink-2.jpg";
import drink3 from "../../Images/drink-3.jpg";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const dispatch =useDispatch();

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const productData = {
    pizza: [
      {
        image: pizza1,
        heading: "Italian Pizza",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"3.9"
      },
      {
        image: pizza2,
        heading: "American Pizza",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"3.2"
      },
      {
        image: pizza3,
        heading: "Garlic Pizza",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.5"
      },
    ],
    burger: [
      {
        image: burger1,
        heading: "Big Mac",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"3.4"
      },
      {
        image: burger2,
        heading: "CheeseBurger",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.1"
      },
      {
        image: burger3,
        heading: "HumBurger",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.9"
      },
    ],
    pasta: [
      {
        image: pasta1,
        heading: "Bucatini Pasta",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.7"
      },
      {
        image: pasta2,
        heading: "Fusilli Pasta",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"4.9"
      },
      {
        image: pasta3,
        heading: " Italian Pasta",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"3.8"
      },

      
    ],
    drink: [
      {
        image: drink1,
        heading: "Lemonade Juice",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"1.9"
      },
      {
        image: drink2,
        heading: "Pineapple Juice",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.85"
      },
      
      {
        image: drink3,
        heading: "Soda drink",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        prc:"2.76"
      },
    ],
  };
  const handleAdd = (item, index) => {
    const selectedProducts = productData[selectedCategory];
  
    if (selectedProducts && selectedProducts[index]) {
      const itemWithImage = {
        ...item,
        image: selectedProducts[index].image,
        name:selectedProducts[index].heading,
        price:selectedProducts[index].prc,
        _id:selectedProducts[index].prc
        
      };
      // console.log(itemWithImage,"Collection");
  
      dispatch(add(itemWithImage));
      toast.success("Item Add to Cart");
    } else {
      console.error("Selected category or product not found.");
    }
  };
  

  return (
    <div className="parallax_col">
      
      <div className="collection">
        <div className="left_cont">
          <img src={bg} alt="bg-img" />
        </div>
        <div className="right_cont">
          <div className="col_btn">
            <button className="cat_btn" onClick={() => handleButtonClick("pizza")}>Pizza</button>
            <button className="cat_btn" onClick={() => handleButtonClick("burger")}>Burger</button>
            <button className="cat_btn" onClick={() => handleButtonClick("pasta")}>Pasta</button>
            <button className="cat_btn" onClick={() => handleButtonClick("drink")}>Drink</button>
          </div>
          {selectedCategory && (
            <div className="col_data">
              {productData[selectedCategory].map((product, index) => (
                <div className="col_info" key={product.id}>
                  
                  <img src={product.image} alt={product.heading} />
                  
                  <div className="text_col">
                  <h2 className="prc">{product.heading}</h2>
                  <p className="desc_hm">{product.desc}</p>
                  <p className="prc">${product.prc}</p>
                  <button className="order_btn" onClick={()=>handleAdd(product,index)}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    
  );
};

export default Collection;
