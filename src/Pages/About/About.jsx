import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import "../About/about.css"

const About = () => {
  useEffect(() => {
    document.title = "About us";
    window.scroll(0, 0);
  }, []);

  return (
    <>
   <Breadcrumbs
  title="About Us"
  pagename="About Us"
  backgroundImage="https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=6000"
   className="d-block w-100"
/>

      <section className="py-5">
        <Container>
          <Row>
            <Col md="8" xs="12">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img
                    src="Images/about.jpeg"
                    alt="about "
                    className="img-fluid rounded-5"
                  />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className="h2 fw-bold text-white">
                      HOW WE ARE BEST FOR TRAVEL !
                    </h3>
                  </div>
                </div>
              </div>
              <h2 className="h2 font-bold pt-4 pb-2">
              JourneyVault – Where Every Trip Becomes a Story." ✈️🌍
              </h2>
              <p className="body-text mt-2 mb-4">
              JourneyVault is more than just a travel agency; it's your trusted companion on every adventure. Founded with a passion for exploration, our mission is to make every journey unforgettable. Whether you're a seasoned traveler or embarking on your first trip, we are here to guide you through each step of your journey
              </p>
              <p className="body-text mb-4">
              Our team consists of passionate travel experts, each with their own unique knowledge and experience. Together, we work tirelessly to offer you the best prices, the most exciting destinations, and the highest level of service. We believe that travel has the power to change lives, and we are committed to making your travels as enriching and enjoyable as possible.
              </p>
              <p className="body-text mb-4">
              Join us at JourneyVault, and let us help you create memories that last a lifetime. Whether you’re exploring a new city, relaxing on a beach, or seeking out an adventurous trek, we have the perfect travel solutions for you. Your journey starts here..
              </p>
            </Col>
            <Col md="4" xs="12">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img
                        src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                        alt="icon"
                        className="img-fluid"
                        style={{height:"100px"}}
                      />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">50+ Destinations</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img
                        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="icon"
                        className="img-fluid"
                        style={{height:"100px"}}
                      />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Best Price in the Industry</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img
                        src="https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="icon"
                        className="img-fluid"
                        style={{height:"100px"}}
                      />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Super Fast Booking</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
