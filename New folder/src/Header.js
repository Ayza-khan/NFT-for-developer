import React from "react";
import image1 from "./image/image1.jpg"
function Header() {
    
  return (
    <div className="container d-flex p-4"> 
      <div className="container p-4 mt-4 text-center justify-content-center">
        <h1>Inspirational Personality.</h1>
        <p>
            Inspirationals have a strong inner motivation to influence people and circumstances.
            What makes someone inspirational is about more than creativity. Inspiration is not solely about creativity either. It is an influence that comes when your senses, emotions and intellect are stimulated.
            This invigoration can come from a person’s words or from watching another human do something amazing.
        </p>
      </div>
      <div className="container d-flex p-4">
        <img src={image1} className="img-fluid" alt="img"/>
      </div>
    </div>
  );
}

export default Header;
