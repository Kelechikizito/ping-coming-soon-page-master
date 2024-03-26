import "./App.css";

function App() {
  return (
    <div className="App container">

    <div className="item">
      <h2>PING<span>.</span></h2>
    </div>

    <div className="item">
      <div>
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </div>

      <div>
        <form action="">
          <input type="text" name="" id="" placeholder="Your email address..."/>
          <button type="submit">Notify Me</button>
        </form>
      </div>
    </div>

    <div className="item">
      <img src={require("./assets/images/illustration-dashboard.png")} alt="" className="dashboard"/>
    </div>

    <div className="item">
      <div className="logo-container"></div>

      <div>
        <p>©Copyright Ping. All rights reserved.</p>
      </div>
    </div>


      {/* <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/kelechikizito">Your Name Here</a>.
        </p>
      </footer> */}

    </div>
  );
}

export default App;
