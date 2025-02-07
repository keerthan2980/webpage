import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from 'react-bootstrap';
import "./NextDestination.css";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }} // Customizable styles
      onClick={onClick}
    >
      ›
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }} // Customizable styles
      onClick={onClick}
    >
      ‹
    </div>
  );
}
// Sample destinations data with dummy images
const destinationsData = [
  { id: 1, name: "ThaiLand", image: "https://images.pexels.com/photos/2798256/pexels-photo-2798256.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "lakshadweep", image: "https://images.pexels.com/photos/6189571/pexels-photo-6189571.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Tokyo", image: "https://images.pexels.com/photos/3779816/pexels-photo-3779816.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Malaysia", image: "https://images.pexels.com/photos/6016679/pexels-photo-6016679.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Portugal", image: "https://images.pexels.com/photos/2867883/pexels-photo-2867883.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Singapor", image: "https://images.pexels.com/photos/1907051/pexels-photo-1907051.jpeg?auto=compress&cs=tinysrgb&w=600" },
  // Add more destinations here...
];

function Cards({ destination }) {
  return (
    <div className="destination-card">
      <div className="image-container">
        <img src={destination.image} alt={destination.name} className="img-fluid" />
        <div className="card-text fw-normal">{destination.name}</div>
      </div>
    </div>
  );
}

function NextDestination() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true, 
    nextArrow: <SampleNextArrow />, // Use the custom Next Arrow
    prevArrow: <SamplePrevArrow />, // Use the custom Prev Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="nextDestination" style={{marginTop:"80px"}}>
      <Container className="mb-4">
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1 className="fw-bold mb-4">Top Destinations For Your Next Vacation</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Slider {...settings}>
              {destinationsData.map((destination, inx) => {
                return <Cards destination={destination} key={inx} />;
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NextDestination;
