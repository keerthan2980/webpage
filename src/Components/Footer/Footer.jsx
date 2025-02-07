import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
    <style>
      {`
      .icon{
      color:black !important;
      }
        .icon:hover {
          color: #007bff; 
          transform: scale(1.2); /
        }
        
        .icon:active {
          transform: scale(0.9); 
        }
       footer {
            padding: 1px 0 !important; /* Reduced padding for footer */
            font-size: 0.8rem; /* Reduced font size */
          }
           .footer-content {
            padding: 5px 0; /* Reduced content padding */
          }

      `}
    </style>
    <footer className="text-center mt-4" style={{ backgroundColor: "#F9F6EE", }}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/* Center Content */}
          <div className="col-12 col-md-6 text-center my-3">
            <a href="#top">
              <img
                src="images/logo.png"
                alt="logo"
                className="img-fluid my-3 logoimg rounded-3"
                style={{ height: "10vh" }}
                
              />
            </a>
            <p className="fw-bold">
              JourneyVault
              <br />
              Capture the Moments, Preserve the Memories, and Relive the Adventure!
            </p>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <a href="#facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icon m-3  fa-2x"
                  title="Facebook"
                />
              </a>
              <a href="#instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon m-3  fa-2x"
                  title="Instagram"
                />
              </a>
              <a
                href="https://wa.me/918977832632?text=Welcome to JourneyVault! Your adventure begins here. Let's create unforgettable travel memories together!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="icon m-3  fa-2x"
                  title="WhatsApp"
                />
              </a>
              <a href="tel:+918977832632">
                <div style={{ position: "relative" }}>
                  <FontAwesomeIcon
                    icon={faBlenderPhone}
                    className="icon m-3 fa-2x"
                    title="Call Us"
                  />
                </div>
              </a>
            </div>
            <div className="mb-4">© All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
