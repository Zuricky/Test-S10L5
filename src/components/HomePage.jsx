import { Link } from "react-router";

function HomePage() {
  return (
    <div className="container my-4">
      <h1>Welcome to Ultimate Weather Forecast</h1>
      <Link to="/weather" className="btn btn-primary">
        Check the weather forecast
      </Link>
    </div>
  );
}

export default HomePage;
