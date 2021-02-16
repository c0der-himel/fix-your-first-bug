import { Link } from 'react-router-dom';

const SelectPage = () => {
  return (
    <section className="SelectPage">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="page-title">
              <h1>Select Your First Bug</h1>
              <hr />
            </div>
            <div className="page-content text-center">
              <div className="row">
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>Odd Numbers</h3>
                    <p>Displaying Odd Numbers</p>
                    <Link
                      className="btn btn-dark px-4 item-btn"
                      to="/odd-numbers"
                    >
                      Fix
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>Even Numbers</h3>
                    <p>Displaying Even Numbers</p>
                    <Link
                      to="/even-numbers"
                      className="btn btn-dark px-4 item-btn"
                    >
                      Fix
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>Prime Numbers</h3>
                    <p>Displaying Prime Numbers</p>
                    <Link
                      to="/prime-numbers"
                      className="btn btn-dark px-4 item-btn"
                    >
                      Fix
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>GCD Numbers</h3>
                    <p>Displaying GCD Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>LCM Numbers</h3>
                    <p>Displaying LCM Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h3>Factorial Numbers</h3>
                    <p>Displaying Factorial Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectPage;
