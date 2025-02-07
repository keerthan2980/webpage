import React from "react";
import "./LastHoliday.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function LastHoliday() {
  // Array containing card data
  const cardsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      title: "Dubai",
      text: " Where luxury, adventure, and innovation create the ultimate travel experience.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "London",
      text: " A city of rich history, vibrant culture, and endless possibilities for the perfect getaway.",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Paris",
      text: "A timeless blend of romance, art, and unforgettable experiences waiting to be explored.",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bali",
      text: " A paradise of serene beaches, lush landscapes, and vibrant culture for the perfect escape.",
    },
  ];

  return (
    <>
      <h2 className="fw-bold">Last Minute Trips</h2>
      <Container className="mt-4 mb-4">
        <Row className="g-4">
          {cardsData.map((card) => {
            // Encode message for WhatsApp link
            const whatsappMessage = encodeURIComponent(
              `Hey! Journey Vault I'm interested in a trip to ${card.title}. Can you provide more details?`
            );
            const whatsappUrl = `https://wa.me/918977832632?text=${whatsappMessage}`;

            return (
              <Col xs={12} sm={6} md={4} lg={3} key={card.id}>
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={card.image}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold">{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Button variant="outline-secondary" href={whatsappUrl} target="_blank">
                      Explore Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default LastHoliday;
