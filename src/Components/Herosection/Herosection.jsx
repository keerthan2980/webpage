import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Herosection.css"
import { Button } from 'react-bootstrap';



function Herosection() {
  return (
    <div className='px-1'> 
   <Carousel  indicators={false} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/c1.png"
            alt="First slide"
            // style={{ objectFit: "cover", height: "80vh" }}
          />
          <Carousel.Caption>
            <h3 className='fw-bold mb-1'>Life is short and the world is wide.</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <Button variant='outline-secondary' className="custom-btn">Check our Hoildays</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/c2.png"
             alt="second slide"
            // style={{ objectFit: "cover", height: "80vh" }}
          />
          <Carousel.Caption>
            <h3 className='fw-bold mb-1'>To travel is to take a journey into yourself</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <Button 
            variant="outline-secondary" 
            className="custom-btn"
            href={`https://wa.me/918977832632?text=${encodeURIComponent(
            "Hey! JourneyVault, I'm interested in a trip. Can you provide more details?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
      >
        Check our Holidays
      </Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Image from public/images
            alt="Third slide"
            // style={{ objectFit: "cover", height: "80vh" }}
          />
          <Carousel.Caption>
            <h3 className="fw-bold mb-1">The best way to predict your future is to create it</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            <Button variant='outline-secondary' className="custom-btn"
            href={`https://wa.me/918977832632?text=${encodeURIComponent(
            "Hey! Journey Vault, I'm interested in a trip. Can you provide more details?"
                   )}`}
              target="_blank">
                Check our Holidays</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Herosection;
