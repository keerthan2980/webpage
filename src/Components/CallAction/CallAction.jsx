import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import "./CallAction.css"

function CallAction() {
  return (
        <section className="call_us" style={{marginTop:"80px"}}>
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
              JourneyVault turns travel into unforgettable memories, exploring hidden treasures and creating cherished experiences,{" "}
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="https://wa.me/918977832632?text=Welcome to JourneyVault! Your adventure begins here. Let's create unforgettable travel memories together!"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary_btn bounce"
               
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>
  )
}

export default CallAction
