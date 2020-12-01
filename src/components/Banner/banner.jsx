import BannerImg from './BannerImg';

const Banner = () => {
  return (
    <div className="banner-container container">
      <div className="title">
        Easy Peasy, <br />
        Free Link Shortner
      </div>
      <div className="img-div">
        <BannerImg />
      </div>
    </div>
  );
};

export default Banner;
