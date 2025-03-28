import { useState } from "react";

const CabBooking = () => {
  const [formData, setFormData] = useState({
    start: "",
    end: "",
    dateTime: "",
    carClass: "",
    phone: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the terms before booking.");
      return;
    }
    alert("Taxi booked successfully! 🚖");
    // Here you can send formData to backend or API
  };

  return (
    <section className="cab-booking">
      <h2>Book Taxi Online</h2>
      <p>Enjoy a comfortable trip with our reliable taxi service.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="start"
          placeholder="Start Destination"
          value={formData.start}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="end"
          placeholder="End Destination"
          value={formData.end}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />
        <select name="carClass" value={formData.carClass} onChange={handleChange} required>
          <option value="">Select Car Class</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="van">Van</option>
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label className="checkbox">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />{" "}
          I agree that my submitted data is being collected and stored.
        </label>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default CabBooking;
