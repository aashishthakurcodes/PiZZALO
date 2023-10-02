import React from "react";
import "./About.css";
import bg from "../../Images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="parallax">
        <div className="aboutus">
          <div className="abtIMg">
          <img src={bg} alt="bgimg" />
          </div>
          <div className="aboutdata">
            <h1 className="about_Heading">Welcome to our Pizza Resteraunt</h1>
            <p className="about_para">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
