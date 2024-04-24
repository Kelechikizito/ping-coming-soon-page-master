import React, { useRef } from 'react';

function SecondItem() {
  const myElementRef = useRef(null);

  function handleClick(e) {
    const form = e.target.form;

    function validateEmail() {
      const isEmailMissing = form[0].validity.valueMissing;
      const isEmailMismatch = form[0].validity.typeMismatch;

      if (isEmailMissing) {
        
      } else {
        
      }

      if (isEmailMismatch) {
        
      } else {
        
      }
      
      console.log(isEmailMissing);
      console.log(isEmailMismatch);
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
            placeholder="Your email address..."
            required
          />
          <span className="error" ref={myElementRef}>
            Please provide a valid email address
          </span>
          <button onClick={handleClick} type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondItem;
