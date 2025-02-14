import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className="container my-4">
      <h1>Welcome to Ultimate Weather Forecast</h1>
      <Link to="/weather" className="btn btn-primary">
        Check the weather forecast
      </Link>

      <Row className="my-5">
        <Col>
          <img src="/sun.jpg" className="img-fluid rounded-5" alt="sun" />
        </Col>
        <Col>
          <img src="/clouds.jpg" className="img-fluid rounded-5" alt="clouds" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="/fog.jpg" className="img-fluid rounded-5" alt="fog" />
        </Col>
        <Col>
          <img src="/rain.jpg" className="img-fluid rounded-5" alt="rain" />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
