// src/pages/Contact.js
const Contact = () => {
    return (
      <div className='contact'>
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
      </div>
    );
  };
  
  export default Contact;