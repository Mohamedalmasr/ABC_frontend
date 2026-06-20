import {
  ClipboardList,
  Users2,
  FileSpreadsheet,
  CalendarClock,
  Sparkles,
  DollarSign,
  Play,
  StickyNote,
} from "lucide-react";
import "../pageCss/PricingPage.css";

export default function PricingPage() {

  return (
    <div className="pricing-container">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <div className="pricing-hero-badge">
            <Sparkles className="badge-icon" />
            Transparent Pricing
          </div>
          <h1 className="pricing-hero-title">Simple, Clear Pricing</h1>
          <p className="pricing-hero-description">
            Professional bookkeeping services at affordable prices. All prices
            are in Canadian currency.{" "}
          </p>
          <div className="pricing-hero-buttons">
          <a
          href="#"
          className="pricing-button primary"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(".pricing-grid-section")
            ?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              <Play className="button-icon" />
              Get Started
              
              </a>         
         </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-grid-section">
        <div className="pricing-grid-container">
          <h2 className="pricing-grid-title">Our Services & Pricing</h2>

          <div className="pricing-grid">

            {/* Do It Yourself */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <StickyNote className="pricing-card-icon black" />
                <h3 className="pricing-card-title">Do it yourself</h3>
              </div>
              <p className="pricing-card-price blue">$25 / Month</p>
              <p className="pricing-card-subtitle">
                Use our excel sheet to enter your data{" "}
              </p>
              <p className="pricing-card-subtitle">
                We will prepare the yearend account package
              </p>
              <a
                href="mailto:sales@abc.com?subject=Bookkeeping%20Inquiry"
                className="pricing-card-button blue"
              >
                Get Started
              </a>
            </div>

            {/* Basic Bookkeeping */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <ClipboardList className="pricing-card-icon blue" />
                <h3 className="pricing-card-title">Basic Bookkeeping</h3>
              </div>
              <p className="pricing-card-price blue">$4 / transaction</p>
              <p className="pricing-card-subtitle">
                1-100 transactions per month
              </p>
              <p className="pricing-card-subtitle">
                (Incl account preparation package){" "}
              </p>

              <p className="pricing-card-note orange">
                Beyond 100 transactions, please call for custom quote
              </p>
              <a
                href="mailto:sales@abc.com?subject=Bookkeeping%20Inquiry"
                className="pricing-card-button blue"
              >
                Get Started
              </a>
            </div>

            {/* Payroll Services */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <Users2 className="pricing-card-icon green" />
                <h3 className="pricing-card-title">Payroll Services</h3>
              </div>
              <p className="pricing-card-price green">
                $20/employee (up to 5)
                <br />
                $15/employee (beyond 5)
              </p>
              <p className="pricing-card-subtitle">Per payroll run</p>
              <ul className="pricing-card-features">
                <li className="pricing-card-feature">
                  <span className="feature-dot green"></span>
                  Payroll processing (bi-weekly or monthly)
                </li>
                <li className="pricing-card-feature">
                  <span className="feature-dot green"></span>
                  CRA remittances
                </li>
                <li className="pricing-card-feature">
                  <span className="feature-dot green"></span>
                  T4s / ROEs at year-end
                </li>
              </ul>
              <a
                href="mailto:sales@abc.com?subject=Payroll%20Services%20Inquiry"
                className="pricing-card-button green"
              >
                Get Started
              </a>
            </div>

            {/* HST/GST Filing */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <FileSpreadsheet className="pricing-card-icon purple" />
                <h3 className="pricing-card-title">HST / GST Filing</h3>
              </div>
              <p className="pricing-card-price purple">$100 per filing</p>
              <p className="pricing-card-subtitle">
                Quarterly or annual filing
              </p>
              <a
                href="mailto:sales@abc.com?subject=HST%2FGST%20Filing%20Inquiry"
                className="pricing-card-button purple"
              >
                Ask About Filings
              </a>
            </div>

            {/* Year-End Preparation */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <CalendarClock className="pricing-card-icon orange" />
                <h3 className="pricing-card-title">Year-End Preparation</h3>
              </div>
              <p className="pricing-card-price orange">$250</p>
              <p className="pricing-card-subtitle">
                Standard small-business package
              </p>
              <a
                href="mailto:sales@abc.com?subject=Year-End%20Preparation%20Inquiry"
                className="pricing-card-button orange"
              >
                Plan Year-End
              </a>
            </div>

            {/* Advisory / Add-Ons */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <DollarSign className="pricing-card-icon red" />
                <h3 className="pricing-card-title">Advisory / Add-Ons</h3>
              </div>
              <p className="pricing-card-price red">$75 / hour</p>
              <p className="pricing-card-subtitle">Sage</p>
              <a
                href="mailto:sales@abc.com?subject=Advisory%20%2F%20Add-Ons%20(Sage)"
                className="pricing-card-button red"
              >
                Book Advisory
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
