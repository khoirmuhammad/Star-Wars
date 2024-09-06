import { Link } from "react-router-dom";

// NotFoundPage.js
const HomePage = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <p>
      Please click to the{' '}
      <Link to="/people">LINK</Link>
    </p>
      </div>
    );
  }
  
  export default HomePage;
  