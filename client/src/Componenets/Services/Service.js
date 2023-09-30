import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div id="services">
       
      <div className="service">
        <div className="heading_ser">
            <h1>OUR SERVICES</h1>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
        </div>

        <div className="ser">
        <div className="service_data">
          <lord-icon
            src="https://cdn.lordicon.com/xbyoroeu.json"
            trigger="hover"
            colors="primary:#000000,secondary:#e88c30"
            stroke={30}
            style={{ width: 150, height: 150 }}
          ></lord-icon>

          <div className="sevice_info">
            <h2  className="ser_heading">Healthy Food</h2>
            <p className="ser_para">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>

        <div className="service_data">
          <lord-icon
            src="https://cdn.lordicon.com/uetqnvvg.json"
            trigger="hover"
            colors="primary:#e88c30,secondary:#000000"
            stroke={25}
            style={{ width: 150, height: 150 }}
          ></lord-icon>

          <div  className="sevice_info">
            <h2  className="ser_heading">Fastest Delivery</h2>
            <p className="ser_para">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>

        <div className="service_data">
          <lord-icon
            src="https://cdn.lordicon.com/jpdtnwas.json"
            trigger="hover"
            colors="primary:#000000,secondary:#e88c30"
            stroke={30}
            style={{ width: 150, height: 150 }}
          ></lord-icon>

          <div  className="sevice_info">
            <h2 className="ser_heading">Original Recipes</h2>
            <p className="ser_para">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
