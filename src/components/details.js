import React from "react";
import "../styles/details.css";
import Button from "@mui/material/Button";

const details = () => {
  const names = [
    "Name of insurer",
    "policy number",
    "card number",
    "date of birth",
    "Insurance valid upto (data)",
    "unique ID number",
    "Insurer Address",
    "Name of disease",
    "Disease Status",
    "Name of Hospital",
    "Doctor's Name",
    "Date of visit",
    "Claim Amount",
    "Bill Number",
    "Bill Date",
    "Admission Date",
    "Discharge Date",
    "Account number",
    "IFSC Code",
  ];
  return (
    <div>
      <div className="table">
        {names.map((item) => {
          return (
            <div className="detail-box">
              <div>{item}</div>
              <div>Null</div>
            </div>
          );
        })}
      </div>
      <div className="continue-buttons detjsbut">
        <h3>Please confirm the data mention above correct</h3>
        <div id="buttons">
          <Button variant="contained" size="medium">
            Yes
          </Button>
          <Button variant="contained" size="medium">
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default details;
