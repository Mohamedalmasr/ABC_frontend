import React from "react";
import "../pageCss/PageOurServices.css";

function Bookkeeping() {
  return (
    <div className="container_P">
      <div className="text-content_P">
        <h1>Bookkeeping</h1>
        <p>
          Bookkeeping is crucial to the success of any business. It plays a
          vital role in managing your business's financial health by providing
          accurate data for budget preparation, performance analysis, tax
          preparation, informed decision-making, financial management, goal
          setting, evaluation, and monitoring. We are committed to offering
          services in the following areas:{" "}
        </p>
        <div className="no-spacing">
          <p>• Documentation of financial transactions</p>
          <p>• Maintenance of general ledgers</p>
          <p>• Preparation of financial reports</p>
          <p>• Account reconciliation</p>
          <p>• Budgeting, forecasting and financial analysis</p>
          <p>• Payroll processing</p>
        </div>
      </div>
      <div className="image-content_P">
        <img src="./images/4.jpg" alt="Bookkeeping" />
      </div>
    </div>
  );
}

export default Bookkeeping;
