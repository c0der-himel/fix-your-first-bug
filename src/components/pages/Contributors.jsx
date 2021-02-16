import axios from 'axios';
import { useEffect, useState } from 'react';

const Contributors = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.github.com/repos/c0der-himel/fix-your-first-bug/contributors'
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="Contributors">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="contributors-title">
              <h1>Our Contributors</h1>
              <hr />
            </div>
            <div className="contributors-content text-center">
              <div className="row">
                {isLoading && (
                  <div className="loading lead">Fetching Data . . .</div>
                )}
                {data &&
                  data.map((contributor, index) => (
                    <div className="col-sm-3" key={index}>
                      <div className="contributor-item p-3 mx-2 my-3">
                        <img
                          className="img-fluid avatar my-3"
                          src={contributor.avatar_url}
                          alt="avatar_url"
                        />
                        <h4>{contributor.login}</h4>
                        <p>Total Contributions: {contributor.contributions}</p>
                        <a
                          className="btn btn-outline-dark px-4"
                          target="_blank"
                          rel="noreferrer"
                          href={contributor.html_url}
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributors;
