const Hero = ({}) => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        {/* Overlay with custom color */}
        <div className="hero-overlay bg-black/50 bg-opacity-60"></div>

        {/* Content */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary border border-blue-300 text-blue-300">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
