import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.svg';

const Home = () => {
  return (
    <section className="Home">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="hero-content">
              <h3>Welcome to,</h3>
              <h1>Fix Your First Bug</h1>
              <p className="lead">
                🤩 An Open Source Project, to 🤝 help a newbie or beginner who
                wants to contribute in 🚀 Open Source but don't know how to do.
                Here he or she can start contributing as a demo contribution. 🤩
              </p>
              <Link to="/select" className="btn btn-dark px-4 py-2">
                Start Fixing
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="hero-img">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
