import { useEffect, useState } from 'react';
import { evenNumber } from '../../bugs/numberTheory/evenNumbers';

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

  return (
    <section className="EvenNumbers">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="number-title">
              <h1>Even Numbers</h1>
              <p className="lead">
                Even numbers are highlighted in Black color
              </p>
              <hr />
            </div>
          </div>
          <div className="col-sm">
            <div className="number-content mt-4">
              {numbers.map((item, index) => (
                <div
                  className={
                    evenNumber(item)
                      ? 'box rounded-3 d-inline-block m-2 px-4 py-2 border border-black bg-dark text-light'
                      : 'box rounded-3 d-inline-block m-2 px-4 py-2 border border-1 text-black-50'
                  }
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="contribute text-center mt-5">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-dark"
                href="https://github.com/c0der-himel/fix-your-first-bug/blob/main/README.md"
              >
                <p className="lead">Want to fix ?</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvenNumbers;
