import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-8 text-8xl font-bold">Oops!</h1>
          <p className="mb-8 text-5xl">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2"></FaHome>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
