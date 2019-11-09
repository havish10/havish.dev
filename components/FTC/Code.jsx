import Medal from '../Medal'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA;' }}>
      <h2>Robotics Code</h2>
      <p className="date">September 2019</p>
      <p>
        <Medal /> 1st Place
        <span className="orange">6th Baltimore Hackathon</span>{' '}
        <span className="lime">Civic Track</span>
      </p>
      <p>
        News 451 is a minimalistic web application that allows users to see the
        recent news without clutter or ads. Users can gauge realiability and
        bias of their news using a custom trained machine learning model.
      </p>

      <h3>Technologies Used</h3>
      <ol>
        <li>Javascript</li>
        <li>Python</li>
        <li>Tensorflow</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ol>

      <h3>Features</h3>
      <ol>
        <li>
          Custom Algorithm that returns a realiability rating based on the news
          article
        </li>
        <li>Easy to use, interactive UI</li>
        <li>
          Removes all ads and cluter from your reading expierance so you don't
          have to see{' '}
          <a
            target="blank"
            href="https://www.buzzfeednews.com/article/salvadorhernandez/trump-letter-turkey-president-dont-be-a-fool"
          >
            this
          </a>
        </li>
        <li>
          Innovative two tier architecture that bridges the gap between a
          javascript frontend and a python backend
        </li>
      </ol>
      <img src="/static/GroupNews451Combined.png" alt="" />
      <style jsx>{`
        .container {
          padding-top: 200px;
          margin: auto;
          max-width: 900px;
        }
        h1 {
          font-size: 50px;
          margin-bottom: 10px;
        }
        h2 {
          font-size: 30px;
          margin-bottom: 10px;
        }
        ol {
          margin-top: 0px;
        }
        img {
          width: 100%;
          transition: transform 0.2s; /* Animation */
        }
        .orange {
          background-color: orange;
          border-radius: 5px;
          padding: 0px 5px 2px 5px;
          margin: 0px 5px;
        }
        .lime {
          background-color: lime;
          border-radius: 5px;
          padding: 0px 5px 2px 5px;
          margin: 0px 5px;
        }
        hr {
          border-width: 1px 0px 0px 0px;
        }
        .date {
          color: grey;
          margin-top: 0px;
        }
        img:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  )
}
