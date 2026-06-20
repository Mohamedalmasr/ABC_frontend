import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const images = [
    "./images/Designer.jpeg",
    "./images/Designer (1).jpeg",
    "./images/Designer (3) .jpeg",
    "./images/Designer (2).jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="cards-section">
      <div className="cards-container">
        <div className="card">
          <img src="./images/4.jpg" alt="Card 1" className="card-image" />
          <div className="card-content">
            <h4>Bookkeeping</h4>
            <p>
              Bookkeeping contributes immensely to the success of a business.{" "}
            </p>
            <Link to="/bookkeeping" className="card-button">
              {" "}
              More Info
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="./images/3.jpg" alt="Card 2" className="card-image" />
          <div className="card-content">
            <h4>Business Registration</h4>
            <p>
              At Alpha Business Center, we know that registering a business
              requires numerous processes.
            </p>
            <Link to="/businessregistration" className="card-button">
              {" "}
              More Info
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="./images/2.jpg" alt="Card 3" className="card-image" />
          <div className="card-content">
            <h4>Business Support Services</h4>
            <p>
              Business support services are fundamental to providing continuous
              operation and success of your business.
            </p>
            <Link to="/BusinessSupportServices" className="card-button">
              {" "}
              More Info
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="./images/1.jpg" alt="Card 4" className="card-image" />
          <div className="card-content">
            <h4>Expertise Placement</h4>
            <p>
              We assist your company to achieve their workforce aspirations and
              to assemble human resources.
            </p>
            <Link to="/ExpertisePlacement" className="card-button">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
