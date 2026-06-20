import React from "react";
import "../pageCss/About.css"; 

const About = () => {
  return (
    <div>
      <div className="content-box">
        <div className="text-content">
          <h2>Terry Hunter</h2>
          <h3>President</h3>
          <p>5064764968</p>
          <p>
            Terry holds Bachelor Degrees in Business Administration (UNB) and
            Social Sciences (McMaster University). He has experience in finance
            and investment (IFIC) and many years of management in the resource
            and real estate sectors.
          </p>
          <p>
            Having more than 100 employees and contractors under his management
            at one time over the years and establishing several franchises and
            independent businesses, there is no challenge he is not ready to
            oversee. He sees the potential of the individual and company and has
            the desire to see companies maximize their potential – sharing his
            decades of experience and letting you do what you do best, prosper
            and thrive. His vision for Alpha is to be your support and give you
            the most efficient path to success and profitability.
          </p>
          <p>
            Terry believes a President should own the situation – big and small
            – and places customer satisfaction at a premium. The President
            welcomes you to Alpha Business Centre.
          </p>
        </div>
        <div className="image-content">
          <img
            src="./images/5.png"
            alt="Terry Hunter"
            className="profile-image"
          />
        </div>
      </div>

      <div className="new-box">
        <h2>Treat your business like a business.</h2>
        <p>
          Just sticking to sound business principles and having a good pulse of
          the health of your business contribute to the success of a business.
          Managing your business in the same manner a President of a Bank
          manages their business is pivotal to the success of your business. The
          objective of the President of business whether big or small is to
          increase the revenue or cut costs or both. The time is NOW! You have
          established your business, not because of the paperwork required to
          run your business, but because you see the potential of the business.
          As many successful businesses soon realize that they need someone to
          take off their "headaches." And focus more on their core business{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
