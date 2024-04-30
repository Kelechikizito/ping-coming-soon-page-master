import { useRef, useState } from "react";

function SecondItem() {
  const spanRef = useRef(null);
  const [placeholderText, setPlaceholder] = useState("Your email address...");

  function handleClick(e) {
    const form = e.target.form;

    function validateEmail() {
      const isEmailMissing = form[0].validity.valueMissing;
      const isEmailMismatch = form[0].validity.typeMismatch;

      if (isEmailMissing) {
        spanRef.current.style.display = "inline-block";
        spanRef.current.textContent =
          "Whoops! It looks like you forgot to add your email";
      } else if (isEmailMismatch) {
        spanRef.current.textContent = "Please provide a valid email address";
        spanRef.current.style.display = "inline-block";
        setPlaceholder("name@host.tld");
      } else if (!isEmailMissing && !isEmailMismatch) {
        spanRef.current.style.display = "none";
      }
    }

    if (!form.checkValidity()) {
      validateEmail();
      e.preventDefault();
    }
  }

  return (
    <div className="item">
      <div>
        <div className="header">
          <h1>We are launching</h1>
          <h1>soon!</h1>
        </div>

        <p className="header-p">Subscribe and get notified</p>
      </div>

      <div>
        <form action="" noValidate>
          <input
            type="email"
            name=""
            id=""
            placeholder={placeholderText}
            required
          />
          <span className="error" ref={spanRef}></span>
          <button onClick={handleClick} type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondItem;
