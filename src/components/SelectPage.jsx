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
                    <h4>Odd Numbers</h4>
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
                    <h4>Even Numbers</h4>
                    <p>Displaying Even Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h4>Prime Numbers</h4>
                    <p>Displaying Prime Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h4>GCD Numbers</h4>
                    <p>Displaying GCD Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h4>LCM Numbers</h4>
                    <p>Displaying LCM Numbers</p>
                    <button className="btn btn-dark px-4 item-btn">Fix</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item p-4 mx-3 my-4">
                    <h4>Factorial Numbers</h4>
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
