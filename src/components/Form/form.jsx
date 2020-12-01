const Form = () => {
  return (
    <div className="form-container">
      <div className="container">
        <form className="form-div">
          <div className="input-container">
            <input
              type="url"
              className="link-input"
              placeholder="Paste your link here.."
              required
            />
          </div>
          <div className="cta">
            <button className="truncate-btn">Truncate Me!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
