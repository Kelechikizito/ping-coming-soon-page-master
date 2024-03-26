import "./App.css";

function App() {
  return (
    <div className="App container">

    <div className="item">
      <h2>PING<span className="full-stop">.</span></h2>
    </div>

    <div className="item">
      <div>
        <div className="header">
          <h1>We are launching</h1>
          <h1>soon!</h1>
        </div>

        <p className="header-p">Subscribe and get notified</p>
      </div>

      <div>
        <form action="" novalidate> 
          <input type="email" name="" id="" placeholder="Your email address..." required/>
          <button type="submit">Notify Me</button>
        </form>
      </div>
    </div>

    <div className="item">
      <img src={require("./assets/images/illustration-dashboard.png")} alt="" className="dashboard"/>
    </div>

    <div className="item">
      <div className="logo-container">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-instagram"></i>
      </div>

      <div>
        <p className="copyright">©Copyright Ping. All rights reserved.</p>
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
