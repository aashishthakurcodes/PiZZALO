import React, { useEffect, useState } from "react";
import "./More.css";
import gallery1 from "../../Images/gallery-1.jpg";
import gallery2 from "../../Images/gallery-2.jpg";
import gallery3 from "../../Images/gallery-3.jpg";
import gallery4 from "../../Images/gallery-4.jpg";

const MoreInfo = () => {
  const [value, setValue] = useState(0);
  const [customer, setcustomer] = useState(0);
  const [staff, setstaff] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 354) {
        setValue(value + 1);
      }
      if (customer < 1000) {
        setcustomer(customer + 1);
      }
      if (staff < 452) {
        setstaff(staff + 1);
      }
      if (value >= 500 && customer >= 562 && staff >= 452) {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval as needed
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [value, staff, customer]);
  
  return (
    <div id="about">
      <div className="parallaxo">
        
        <div className="main_data">
          <div className="info_container ">
            <lord-icon
              src="https://cdn.lordicon.com/jpdtnwas.json"
              trigger="hover"
              colors="primary:#e88c30,secondary:#d1faf0"
              stroke={30}
              style={{ width: 150, height: 150 }}
            ></lord-icon>
            <h1 className="about_Heading">{value}</h1>
            <p className="brief">Pizza Branches</p>
          </div>

          <div className="info_container">
            <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="hover"
              colors="primary:#e88c30,secondary:#d1faf0"
              style={{ width: 150, height: 150 }}
            ></lord-icon>

            <h1 className="about_Heading">{customer}</h1>
            <p className="brief">Happy Customers</p>
          </div>

          <div className="info_container">
            <lord-icon
              src="https://cdn.lordicon.com/uukerzzv.json"
              trigger="hover"
              colors="primary:#e88c30,secondary:#d1faf0"
              style={{ width: 150, height: 150 }}
            ></lord-icon>

            <h1 className="about_Heading">{staff}</h1>
            <p className="brief">Staff</p>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default MoreInfo;
