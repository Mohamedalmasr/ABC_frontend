import React from "react";
import "../pageCss/PageOurServices.css";

function BusinessRegistration() {
  return (
    <div className="container_P">
      <div className="text-content_P">
        <h1>Business Registration</h1>
        <p>
          At Alpha Business Centre, we understand that registering for a
          business involves numerous steps, and the choice of business structure
          determines the appropriate process to follow. We assist in the
          following areas of business registration:{" "}
        </p>

        <h3>Business Structure Decision</h3>

        <p>
          Helping you decide whether to operate as a sole proprietorship,
          partnership, corporation, or cooperative, each with its own legal and
          tax implications.{" "}
        </p>

        <h3>Business Name Search</h3>

        <p>
          Conducting a search to confirm the availability of your desired
          business name and ensuring it is unique and not identical to existing
          names.{" "}
        </p>
        <h3>Choice of Jurisdiction</h3>

        <p>
          After establishing a unique business name, assisting you in deciding
          whether to register your business through the appropriate provincial
          or federal registry.{" "}
        </p>
      </div>
      <div className="image-content_P">
        <img src="./images/3.jpg" alt="Bookkeeping" />
      </div>
    </div>
  );
}

export default BusinessRegistration;
