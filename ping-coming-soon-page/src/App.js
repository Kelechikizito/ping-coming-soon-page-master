import "./App.css";
import FirstItem from "./components/FirstItem";
import SecondItem from "./components/SecondItem";
import ThirdItem from "./components/ThirdItem";
import FourthItem from "./components/FourthItem";

function App() {

  return (
    <div className="App container">
      <FirstItem />

      <SecondItem />

      <ThirdItem />

      <FourthItem />

      {/* <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/kelechikizito">Kelechi Kizito Ugwu</a>.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
