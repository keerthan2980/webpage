import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./searchform.css"

function Searchform() {
    const checkInRef = useRef();
    const checkOutRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for handling form submission
        console.log("Check-in Date:", checkInRef.current.value);
        console.log("Check-out Date:", checkOutRef.current.value);
    };

    return (
    
        <div className="search-box">
            <Container >
                <Form
                    className="search-form row align-items-center justify-content-center mx-auto p-4 mt-4 rounded"
                    onSubmit={handleSubmit}
                >
                    <div className="col-12 col-md-3 col-lg-2 mb-3">
                        <Form.Label htmlFor="placeSelect">Search Place</Form.Label>
                        <Form.Select id="placeSelect" defaultValue="">
                            <option value="" disabled>Choose a place</option>
                            <option value="1">Dubai</option>
                            <option value="2">London</option>
                            <option value="3">Paris</option>
                        </Form.Select>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2 mb-3">
                        <Form.Label htmlFor="roomSelect">Rooms</Form.Label>
                        <Form.Select id="roomSelect" defaultValue="">
                            <option value="" disabled>Choose rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </div>
                    <div className="col-12 col-md-3 col-lg-2 mb-3">
                        <Form.Label htmlFor="checkInDate">Check-in Date</Form.Label>
                        <Form.Control
                            type="date"
                            ref={checkInRef}
                            id="checkInDate"
                        />
                    </div>
                    <div className="col-12 col-md-3 col-lg-2 mb-3">
                        <Form.Label htmlFor="checkOutDate">Check-out Date</Form.Label>
                        <Form.Control
                            type="date"
                            ref={checkOutRef}
                            id="checkOutDate"
                        />
                    </div>
                    <div className="col-12 col-md-3 col-lg-2 text-center mb-3">
                        <Button variant="dark" type="submit" className="w-100">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Searchform;
