import React from "react";
import "../pageCss/PageOurServices.css";

function BusinessSupportServices() {
  return (
    <div className="container_P">
      <div className="text-content_P">
        <h1>Business Support Services</h1>
        <p>
          Businesses of all sizes need trustworthy advice to grow and
          thrive. Business support services are essential for ensuring the
          continuous operation and success of your business. We offer the
          following services to allow you to focus on your core activities and
          achieve your business objectives efficiently and effectively:{" "}
        </p>
        <h3>Administrative Services</h3>
        <p>
          Tasks such as data entry, scheduling, and office management to keep
          daily operations running smoothly.{" "}
        </p>
        <h3>IT Services</h3>
        <p>
          Providing technological solutions, software development, and system
          maintenance to support your company's technological needs.{" "}
        </p>
        <h3>Consulting Services</h3>
        <p>
          Offering business strategy, management consulting, and operational
          improvement.{" "}
        </p>
      </div>
      <div className="image-content_P">
        <img src="./images/2.jpg" alt="Bookkeeping" />
      </div>
    </div>
  );
}

export default BusinessSupportServices;
