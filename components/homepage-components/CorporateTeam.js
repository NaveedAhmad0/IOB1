import React from "react";
import "../../pages/HomePage.css";

import man1 from "../../assets/Crypto/Exchange/NoPath.png"
import woman1 from "../../assets/Crypto/Exchange/NoPath1.png"
import man2 from "../../assets/Crypto/Exchange/NoPath2.png"
import woman2 from "../../assets/Crypto/Exchange/NoPath3.png"

const CorporateTeam = () => {
  return (
    <div className="mb-5">
      <div className="row" style={{ textAlign: "center", marginBottom: "4em" }}>
        <h1 style={{ fontWeight: "900" }} className="backgroundHeadingCorporateTeam">
          <span style={{ fontWeight: "900", color: "#087EE6" }}>OUR MOTIVATED</span> TEAM
        </h1>
        <p style={{zIndex:1}}>PURCHASE BITCOIN USING A CREDIT CARD OR WITH YOUR LINKED BANK ACCOUNT</p>
      </div>
      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card shadow border-0 rounded">
            <a href="#!" className="man1pic">
              <div className=" CorporateTeamPic card-body p-0">
                <img src={man1} alt="" className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Lorem Ipsum</h5>
                  <p className="small text-muted">CEO - Lorem Ipsum</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card shadow border-0 rounded">
            <a href="#!" className="man1pic">
              <div className="card-body p-0">
                <img src={woman1} alt="" className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Lorem Ipsum</h5>
                  <p className="small text-muted">CEO - Lorem Ipsum</p>
                </div>
              </div>
            </a>  
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card shadow border-0 rounded">
             <a href="#!" className="man1pic">
              <div className="card-body p-0">
                <img src={man2} alt="" className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Lorem Ipsum</h5>
                  <p className="small text-muted">CEO - Lorem Ipsum</p>
                </div>
              </div>
             </a>
            
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card shadow border-0 rounded">
            <a href="#!" className="man1pic">
              <div className="card-body p-0">
                <img src={woman2} alt="" className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Lorem Ipsum</h5>
                  <p className="small text-muted">CEO - Lorem Ipsum</p>
                </div>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTeam;
