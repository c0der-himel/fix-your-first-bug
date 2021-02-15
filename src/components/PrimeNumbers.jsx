import { useEffect, useState } from 'react';

const PrimeNumbers = () => {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const number = [];
    for (let i = 1; i <= 100; i++) {
      number.push(i);
    }
    setNumbers(number);
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  const primeNumber = (x) => {
    const n = Math.floor(Math.sqrt(x));
    for (let i = 2; i <= n; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <section className="PrimeNumbers">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="number-title">
              <h1>Prime Numbers</h1>
              <hr />
            </div>
          </div>
          <div className="col-sm">
            <div className="number-content">
              {numbers.map((item, index) => (
                <div
                  className={
                    primeNumber(item)
                      ? 'box rounded-3 d-inline-block m-2 px-4 py-2 border border-black bg-success'
                      : 'box rounded-3 d-inline-block m-2 px-4 py-2 border border-black'
                  }
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimeNumbers;
