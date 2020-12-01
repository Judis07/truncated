import { useState } from 'react';
import Loader from './Loader/loader';

const Form = () => {
  const [urlValue, setUrlValue] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { value } = event.target;
    setUrlValue(value);
  };

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(urlValue);
    setUrlValue('');
  };

  return (
    <div className="form-container">
      <div className="container">
        <form onSubmit={submit} className="form-div">
          <div className="input-container">
            <input
              type="url"
              value={urlValue}
              onChange={handleChange}
              className="link-input"
              placeholder="Paste your link here.."
              required
            />
          </div>
          <div className="cta">
            {loading ? (
              <button className="truncate-btn not-allowed">
                <Loader />
              </button>
            ) : (
              <button className="truncate-btn pointer">Truncate Me!</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
