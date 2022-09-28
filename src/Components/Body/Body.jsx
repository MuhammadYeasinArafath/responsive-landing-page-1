import React from 'react';
import "./Body.css";
import Feature from "../../Assets/img.png";
import Back from "../../Assets/back-arrow.png";
import Next from "../../Assets/next-arrow.png";

const Body = () => {
    return (
        <>
          <div className="content">
            <a href="#" className='btn'>2020 Collections</a>
            <h1>You should always <br />feel pretty</h1>
            <p>Clothes that are sure to heat up your winter.</p>
          
            <div className="arrow-icons">
              <img src={Back} alt="back arrow" />
              <img src={Next} alt="next arrow" />
            </div>
          </div>
          <img src={Feature} alt="feature" className='feature-img'/>  
        </>
    );
};

export default Body;