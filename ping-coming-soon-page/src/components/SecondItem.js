function SecondItem() {
  function handleClick(e) {
    const form = e.target.form;

    function validateEmail() {
      const isEmailValid = form[0].validity;

      console.log(isEmailValid);
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
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address..."
              required
            />
            <span className="third error">
              Please provide a valid email address
            </span>
          </div>
          <button onClick={handleClick} type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondItem;
