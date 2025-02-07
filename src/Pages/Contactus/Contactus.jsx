import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact us";
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "aac8f9ea-aa55-4189-bf0c-6dd7d14b518a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("We will contact you shortly. Thank you - Journey Vault!");
        event.target.reset();
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          .icon {
            color: black !important;
          }
          .icon:hover {
            color: #007bff;
            transform: scale(1.2);
          }
          .icon:active {
            transform: scale(0.9);
          }
        `}
      </style>
      <Breadcrumbs
        title="Contact Us"
        pagename="Contact Us"
        backgroundImage="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="d-block w-100"
      />
      <Container>
        <Row>
          <Col>
            <div className="container-fluid contact bg-light rounded-3 py-5 m-5">
              <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                  <h1 className="mb-0">Contact For Any Query</h1>
                </div>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-4">
                    <div className="bg-white rounded p-4">
                      <div className="text-center mb-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="icon" />
                        <h4 className="icon">Address</h4>
                        <p className="mb-0">123 Ranking Street, New York, USA</p>
                      </div>
                      <div className="text-center mb-4">
                        <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="icon mb-3" />
                        <h4 className="icon">Mobile</h4>
                        <p className="mb-0">+012 345 67890</p>
                      </div>
                      <div className="text-center">
                        <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" className="icon mb-3" />
                        <h4 className="icon">Email</h4>
                        <p className="mb-0">info@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h3 className="mb-2 fw-bold">Send us a message</h3>
                    <form onSubmit={onSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="text" className="form-control border-0" name="name" placeholder="Your Name" required />
                            <label>Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input type="email" className="form-control border-0" name="email" placeholder="Your Email" required />
                            <label>Your Email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input type="text" className="form-control border-0" name="subject" placeholder="Subject" required />
                            <label>Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control border-0"
                              name="message"
                              placeholder="Leave a message here"
                              style={{ height: '160px' }}
                              required
                            ></textarea>
                            <label>Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button 
                            className="btn btn-secondary w-100 py-3" 
                            type="submit" 
                            style={{ backgroundColor: 'black', color: 'white' }}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
