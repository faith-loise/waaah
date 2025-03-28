// src/pages/Packages.js
const Packages = () => {
    return (
      <div className='packages'>
        <h2>Our Packages</h2>
        <div className='package-list'>
          <div className='package'>
            <h3>3-Day Safari</h3>
            <p>Experience a short but memorable journey through the savannah.</p>
            <button>Book Now</button>
          </div>
          <div className='package'>
            <h3>7-Day Safari</h3>
            <p>A week-long adventure exploring diverse wildlife and landscapes.</p>
            <button>Book Now</button>
          </div>
          <div className='package'>
            <h3>Custom Safari</h3>
            <p>Tailor your own safari to fit your dream adventure.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Packages;