import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.svg';

const PageNotFound = () => {
  return (
    <section className="PageNotFound">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="not-found text-center mt-5">
              <img className="img-fluid" src={notFound} alt="not-found" />
            </div>
            <div className="home-link text-center mb-5">
              <Link to="/" className="lead text-dark">
                Go back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
