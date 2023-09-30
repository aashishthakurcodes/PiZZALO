import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import "./Homepage.css";
import { add } from "../../Store/CartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loader/Loading";

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch =useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(
          "http://localhost:8080/api/v1/getItems"
        );
        setInfo(response.data.items);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd =(item)=>{
  dispatch(add(item))
  console.log(item);
  toast.success("Item Add to Cart");
  }


  // Split the info array into two arrays: leftColumn and rightColumn
  const middleIndex = Math.ceil(info.length / 2);
  const leftColumn = info.slice(0, middleIndex);
  const rightColumn = info.slice(middleIndex);

  return (
    <div class="parallax" id="products">

      {/* {loading && <Loader/>} */}
      <ToastContainer/>
      <div  >
      {loading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
        
        <h1 className="card_heading">Hot Pizza Meals</h1>
        <p className="card_para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="hm_cont">
        <div className="hm_main">
          <div className="hm_column">
            {leftColumn.map((item) => (
              <div className="hm_data" key={item.id}>
                <img
                  src={`http://localhost:8080/api/v1/get-photo/${item._id}`}
                  className="card-img-top"
                  alt={item.name}
                  
                />
                <div className="card_cont">
                  <span className="title_hm">{item.name}</span>
                  <span className="desc_hm">{item.desc}</span>
                  <div className="prc_hm">
                    <span className="prc">${item.price}</span>
                    <button className="order_btn" onClick={()=>handleAdd(item)}>Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hm_column">
            {rightColumn.map((item) => (
              <div className="hm_data row" key={item.id}>
                <img
                  src={`http://localhost:8080/api/v1/get-photo/${item._id}`}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card_cont">
                  <span className="title_hm">{item.name}</span>
                  <span className="desc_hm">{item.desc}</span>
                  <div className="prc_hm">
                    <span className="prc">${item.price}</span>
                    <button className="order_btn" onClick={()=>handleAdd(item)}>Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
