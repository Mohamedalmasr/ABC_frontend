import "../pageCss/Content.css";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Content() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form">
          <div className="input-container">
            <input
              type="text"
              id="fullName"
              className="input-field"
              placeholder=" "
            />
            <label htmlFor="fullName">Your Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder=" "
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="input-container">
            <input
              type="tel"
              id="phone"
              className="input-field"
              placeholder=" "
              pattern="[0-9]{10}"
              required
            />{" "}
            <label htmlFor="subject">Phone Number</label>
          </div>
          <div className="input-container">
            <textarea
              id="message"
              className="textarea-field"
              placeholder=" "
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button className="send-button">
            <div className="svg-wrapper">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span>Send Message</span>
          </button>
        </div>
        <div className="contact-info">
          <h2>Alpha Business Centre</h2>
          <p>
            You can contact us at any time using the following information :
          </p>

          <div className="info-item">
            <Phone className="icon" />
            <span>506-476-4968</span>
          </div>
          <div className="info-item">
            <MapPin className="icon" />
            <span>115 Sunbury Drive, Fredericton Junction, Fredericton, NB. E5L 1R1</span>
          </div>
        </div>
      </div>
    </div>
  );
}