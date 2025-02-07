import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Packages.css"

// Example Destination Section
const Destination = () => {
  const destinations = [
    { name: "Singapore", alt: "Singapore", image: "https://media.istockphoto.com/id/2150508065/photo/singapore-city-skyline-at-marina-bay-singapore-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=5rFvvw88UapxY-_JrVtJ9A86A5w_TbbvZ7bpLXsMjyQ=", cities: 100 },
    { name: "France", alt: "France", image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600", cities: 100 },
    { name: "Australia", alt: "Australia", image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600", cities: 100 },
    { name: "India", alt: "India", image: "https://images.pexels.com/photos/8112519/pexels-photo-8112519.jpeg?auto=compress&cs=tinysrgb&w=600", cities: 100 },
    { name: "South Africa", alt: "South Africa", image: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600", cities: 100 },
    { name: "Indonesia", alt: "Indonesia", image: "https://images.pexels.com/photos/758742/pexels-photo-758742.jpeg?auto=compress&cs=tinysrgb&w=600", cities: 100 },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1>Explore Top Destinations</h1>
        </div>
        <div className="row">
          {destinations.map((destination, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid"
                  src={destination.image}
                  alt={destination.name}
                  style={{ height: "250px", width:"100%", objectFit: "cover" }}
                />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href="#hello"
                >
                  <h5 className="text-white">{destination.name}</h5>
                  <span>{destination.cities} Cities</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  useEffect(() => {
    document.title = "Packages";
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      alt: "Malaysia",
      location: "Malaysia",
      days: "3 days",
      people: "2 Person",
      rating: 4.5,
      reviews: 250,
      price: 35000,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Portugal",
      location: "Portugal",
      days: "3 days",
      people: "2 Person",
      rating: 4.7,
      reviews: 300,
      price: 40000,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/21617942/pexels-photo-21617942/free-photo-of-view-of-two-boats-near-the-shore-of-a-tropical-island.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Lakshadweep ",
      location: "Lakshadweep ",
      days: "4 days",
      people: "2 Person",
      rating: 4.8,
      reviews: 500,
      price: 20000,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Dubai",
      location: "Dubai",
      days: "5 days",
      people: "2 Person",
      rating: 4.6,
      reviews: 400,
      price: 50000,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1544351/pexels-photo-1544351.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Bali ",
      location: "Bali",
      days: "6 days",
      people: "4 Person",
      rating: 4.9,
      reviews: 350,
      price: 30000,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Relax in Thailand",
      location: "Thailand",
      days: "7 days",
      people: "3 Person",
      rating: 4.8,
      reviews: 450,
      price: 70000,
    },
  ];

  return (
    <>
      {/* Breadcrumbs Section */}
      <Breadcrumbs
        title="Packages"
        pagename="Package"
        backgroundImage="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=600"
           className="d-block w-100"
      />

      {/* Packages Section - Moved to the top */}
      <Container className="pt-5 pb-3 px-4">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-success text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1>Customized Tour Packages</h1>
        </div>
        <Row>
          {packages.map((pkg) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={pkg.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={pkg.img}
                  alt={pkg.alt}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-success mr-2"
                      />
                      {pkg.location}
                    </small>
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="text-success mr-2"
                      />
                      {pkg.days}
                    </small>
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-success mr-2"
                      />
                      {pkg.people}
                    </small>
                  </div>
                  <Card.Title className="flex-grow-1">
                    Discover amazing places with us!
                  </Card.Title>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-success mr-2"
                        />
                        {pkg.rating} <small>({pkg.reviews})</small>
                      </h6>
                      <h5 className="m-0">₹{pkg.price}</h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Destination />
    </>
  );
};

export default Packages;
