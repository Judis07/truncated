import { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Loader from './Loader/loader';

const Form = () => {
  // console.log('proces', process.env.REACT_APP_API_URL);

  const [urlValue, setUrlValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setUrlValue(value);
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setIsCopied(false);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}`, {
        longUrl: urlValue,
      });

      console.log('Res', res);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log('error', err);
      setLoading(false);
    }

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

        {data && (
          <div className="result-div">
            <div className="result-div-inner">
              <div className="long-url">{data.longUrl}</div>

              <div className="short-url">
                <div>{data.shortUrl}</div>
                <div className="copy-cta">
                  <CopyToClipboard
                    text={data.shortUrl}
                    onCopy={() => setIsCopied(true)}
                  >
                    <span> {isCopied ? 'Copied' : 'Copy'}</span>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
