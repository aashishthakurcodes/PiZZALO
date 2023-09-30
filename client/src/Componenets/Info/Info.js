import React from "react";
import "./info.css";
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const Info = () => {
    const iconColorStyle = {
        color: 'orange', // Change this color to your desired color
      };
  return (
    <div>
      <div className="info_cont">
        <div className="info_data">
          <AddIcCallRoundedIcon style={iconColorStyle} />
          <div>
            <h5 className="heading">000 (123) 456 7890</h5>
            <p className="desc">
              A small river named <br />
              Duden flows
            </p>
          </div>
        </div>

        <div className="info_data">
          <LocationCityOutlinedIcon  style={iconColorStyle}  />
          <div>
            <h5 className="heading">198 West 21th Street</h5>
            <p className="desc">
            Suite 721 New York NY <br />
              1006
            </p>
          </div>
        </div>

        <div className="info_data">
          <AccessTimeOutlinedIcon  style={iconColorStyle} />
          <div>
            <h5 className="heading">Open Monday-Friday</h5>
            <p className="desc">
            8:00am - 9:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
