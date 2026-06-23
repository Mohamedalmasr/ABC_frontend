import "../pageCss/Content.css";
import { FormEvent, ChangeEvent, useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Content() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send message");
      }

      setFormData(initialFormData);
      setSubmitStatus({
        type: "success",
        message: payload.message || "Request received successfully",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="fullName"
              className="input-field"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              minLength={2}
              maxLength={100}
              required
            />
            <label htmlFor="fullName">Your Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              className="input-field"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="input-container">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="input-field"
              placeholder=" "
              pattern="[\d\s\-\+\(\)\.]{7,20}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="input-container">
            <textarea
              name="message"
              id="message"
              className="textarea-field"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              minLength={5}
              maxLength={2000}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button className="send-button" type="submit" disabled={isSubmitting}>
            <div className="svg-wrapper">
              <Send aria-hidden="true" />
            </div>
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
          {submitStatus.message && (
            <p className={`submit-message ${submitStatus.type}`}>
              {submitStatus.message}
            </p>
          )}
        </form>
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
