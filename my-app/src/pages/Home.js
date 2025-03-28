import HeroSection from '../components/HeroSection';
import CabBooking from '../components/CabBooking';

const Home = () => {
  return (
    <div className='home'>
      <HeroSection />

      <section className='welcome'>
        <h2>Welcome to Safari Tours</h2>
        <p>Explore the best safari destinations with us.</p>
      </section>

    
      {/* Cab Booking Section (Newly Added) */}
      <CabBooking />

      {/* Packages Section */}
      <section className='packages'>
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
      </section>

      {/* About Section */}
      <section className='about'>
        <h2>About Us</h2>
        <p>Safari Tours offers the best wildlife and nature experiences across Africa. With experienced guides and tailor-made packages, we ensure an unforgettable journey into the wild.</p>
      </section>

      {/* Contact Section */}
      <section className='contact'>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out to us for any inquiries or bookings.</p>
        <form>
          <label>Name:</label>
          <input type='text' placeholder='Your Name' />
          <label>Email:</label>
          <input type='email' placeholder='Your Email' />
          <label>Message:</label>
          <textarea placeholder='Your Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
