import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Crausal.css'
import data from './crausalJSON'

const Crausaldata = () => {
  const handleMenu = () => {
    // Scroll to the "products" section smoothly
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };
  const handleProduct = () => {
    // Scroll to the "products" section smoothly
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };
  const settings = {
    // dots: true,
    infinite: true,
    fade: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
    <div  className="demo1"  >
      <Slider {...settings}>
        
      {data.map((item, index) => (
          <div key={index}   className="demo2" style={{background:`url(${item.bg})` ,border:"2px solid yellow"}}>
            <div className="card_body" style={{background:`url(${item.bg})`}} >
            <div className="card_data">
              <div className="card_info">
                <h3 className="title">{item.title}</h3>
                <h2 className="heading">Italian Pizza</h2>
                <p className="desc">{item.disc}</p>
                <div className="btn">
                <button className="btn1" onClick={handleProduct}>Order</button>
            <button className="btn2" onClick={handleMenu}>Menu</button>
            </div>
              </div>
              <img className="card_img" src={item.img} alt="bgimg" />
            </div>
            
            </div>
          </div>
        ))}
       
      </Slider>
      </div>
     
      </>

    
  );
};

export default Crausaldata;
