function SecondItem() {
  function handleClick(e) {
    const form = e.target.form;

    if (!form.checkValidity()) {
      console.log("Fill your input");
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
          <button onClick={handleClick} type="submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondItem;
