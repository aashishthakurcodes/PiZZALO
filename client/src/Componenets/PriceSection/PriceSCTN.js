import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Price.css";
import Loading from "../../Componenets/Loader/Loading";

const PriceSCTN = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading set to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/getItems");
        setInfo(response.data.items);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="parallax" id="menu">
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <>
          <div className="card_text">
            <h1 className="card_heading">OUR MENU PRICING</h1>
            <p className="card_para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="prc_main">
            <div className="cont_1">
              {info.map((item) => (
                <div className="cont_dt" key={item.id}>
                  <img
                    src={`/api/v1/get-photo/${item._id}`}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div>
                    <div className="price_cont">
                      <span className="title_hm">{item.name}</span>
                      <span className="sty" style={{ color: "orange" }}>
                        ................................
                      </span>
                      <span className="prc">${item.price}</span>
                    </div>
                    <div className="prc_sctn">
                      <span className="prc_01">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceSCTN;
