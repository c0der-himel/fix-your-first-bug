import { useEffect, useState } from 'react';

const EvenNumbers = () => {
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

  // fix your first bug
  const evenNumber = (x) => {
    if (x % 2 !== 0) {
      return true;
    }
    return false;
  };

  return (
    <section className="EvenNumbers">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="number-title">
              <h1>Even Numbers</h1>
              <hr />
            </div>
          </div>
          <div className="col-sm">
            <div className="number-content">
              {numbers.map((item, index) => (
                <div
                  className={
                    evenNumber(item)
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

export default EvenNumbers;
