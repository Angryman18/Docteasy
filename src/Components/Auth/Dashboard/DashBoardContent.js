import styled from "styled-components";
import React from "react";

const DashboardContent = () => {

  return (
    <DashboardContentMain>
      <div
        className="alert alert-success container"
        style={{
          marginTop: "clamp(1rem, 2vw, 2rem)",
          width: "80%",
          maxWidth: "800px",
        }}
        role="alert"
      >
        <h4 className="alert-heading">Wellcome!</h4>
        <p>Welcome! user! We are please to welcome you.</p>
      </div>
      <div className="add-consult">
        <div className="button-main">
          <button type="button" className="btn btn-dark">
            Book a Consult with a Doctor
          </button>
        </div>
        <hr />
        <section>
          <div>
            
              <h5>No Upcoming Consult Date Booked</h5>
              {/* <button
                className="btn btn-primary btn-sm"
                onClick={Appoinment.bind(null, getToken)}
              >
                Load
              </button> */}
            
          </div>
        </section>
      </div>
    </DashboardContentMain>
  );
};

export default DashboardContent;

const DashboardContentMain = styled.div`
  min-width: 300px;
  width: 100%;

  .add-consult {
    width: 50%;
    min-width: 300px;
    max-width: 800px;
    margin: 0 auto;
  }

  .add-consult .button-main {
    width: 100%;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    min-width: 300px;
  }
`;
