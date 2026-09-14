const eventTypes = [
  "Wedding",
  "Mehndi",
  "Mayon",
  "Dholki",
  "Nikah",
  "Walima",
  "Birthday",
  "Milad",
  "Qawali",
  "Corporate Event",
  "Brand Activation",
  "Exhibition",
  "Stall Fabrication",
  "Other",
];

export default function QuotePage() {
  return (
    <main>
      {/* Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">REQUEST A QUOTE</p>

            <h1>
              Tell Us About
              <br />
              <span>Your Event.</span>
            </h1>

            <p className="hero-description">
              Share your event details and requirements with us. Our team will
              review your request and prepare the next steps for your event.
            </p>

            <div className="hero-actions">
              <a href="/packages" className="btn btn-gold">
                View Packages
              </a>

              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>GET A QUOTE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EVENT DETAILS</p>

              <h2>
                Build Your
                <br />
                <span>Event Request.</span>
              </h2>
            </div>

            <p>
              The more details you provide, the better our team can understand
              your requirements.
            </p>
          </div>

          <form className="contact-form">
            {/* Customer Information */}
            <div className="form-section-title">
              <span>01</span>
              <h3>Your Information</h3>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="customerName">Full Name</label>

                <input
                  id="customerName"
                  name="customerName"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="03XX XXXXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Event Information */}
            <div className="form-section-title">
              <span>02</span>
              <h3>Event Information</h3>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>

                <select id="eventType" name="eventType" defaultValue="">
                  <option value="" disabled>
                    Select event type
                  </option>

                  {eventTypes.map((event) => (
                    <option key={event} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>

                <input id="eventDate" name="eventDate" type="date" />
              </div>

              <div className="form-group">
                <label htmlFor="eventTime">Event Time</label>

                <input id="eventTime" name="eventTime" type="time" />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>

                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="Example: 100"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="location">Event Location</label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter venue or event location"
                />
              </div>
            </div>

            {/* Services */}
            <div className="form-section-title">
              <span>03</span>
              <h3>Services Required</h3>
            </div>

            <div className="checkbox-grid">
              <label className="checkbox-card">
                <input type="checkbox" name="services" value="Decoration" />
                <span>Decoration</span>
              </label>

              <label className="checkbox-card">
                <input type="checkbox" name="services" value="Stage" />
                <span>Stage</span>
              </label>

              <label className="checkbox-card">
                <input type="checkbox" name="services" value="Lighting" />
                <span>Lighting</span>
              </label>

              <label className="checkbox-card">
                <input type="checkbox" name="services" value="Seating" />
                <span>Seating</span>
              </label>

              <label className="checkbox-card">
                <input type="checkbox" name="services" value="Catering" />
                <span>Catering</span>
              </label>

              <label className="checkbox-card">
                <input
                  type="checkbox"
                  name="services"
                  value="Event Management"
                />
                <span>Event Management</span>
              </label>

              <label className="checkbox-card">
                <input
                  type="checkbox"
                  name="services"
                  value="Brand Activation"
                />
                <span>Brand Activation</span>
              </label>

              <label className="checkbox-card">
                <input
                  type="checkbox"
                  name="services"
                  value="Exhibition"
                />
                <span>Exhibition / Stall</span>
              </label>
            </div>

            {/* Budget */}
            <div className="form-section-title">
              <span>04</span>
              <h3>Budget & Requirements</h3>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="budget">Estimated Budget</label>

                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Select budget range
                  </option>

                  <option value="under-30000">Under Rs. 30,000</option>
                  <option value="30000-50000">Rs. 30,000 - 50,000</option>
                  <option value="50000-80000">Rs. 50,000 - 80,000</option>
                  <option value="80000-150000">
                    Rs. 80,000 - 150,000
                  </option>
                  <option value="150000-plus">Rs. 150,000+</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="venue">Venue Type</label>

                <select id="venue" name="venue" defaultValue="">
                  <option value="" disabled>
                    Select venue type
                  </option>

                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="both">Indoor + Outdoor</option>
                  <option value="not-decided">Not Decided</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="requirements">
                  Additional Requirements
                </label>

                <textarea
                  id="requirements"
                  name="requirements"
                  rows={7}
                  placeholder="Tell us about your preferred theme, stage, lighting, seating, catering, colors or any other requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="quote-submit">
              <button type="button" className="btn btn-gold">
                Submit Quote Request
              </button>

              <p className="form-note">
                Your request is not a confirmed booking. Our team will review
                your requirements and contact you regarding the quotation.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT HAPPENS NEXT?</p>

              <h2>
                From Request
                <br />
                To <span>Event.</span>
              </h2>
            </div>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <span>01</span>
              <h3>Submit Request</h3>
              <p>
                Send us your event details, requirements and estimated budget.
              </p>
            </div>

            <div className="category-card">
              <span>02</span>
              <h3>Team Review</h3>
              <p>
                Our team reviews your requirements and checks the event
                details.
              </p>
            </div>

            <div className="category-card">
              <span>03</span>
              <h3>Quotation</h3>
              <p>
                We prepare a suitable quotation based on your confirmed
                requirements.
              </p>
            </div>

            <div className="category-card">
              <span>04</span>
              <h3>Booking</h3>
              <p>
                After your approval, the booking process can move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety / Pricing Note */}
      <section className="section section-dark">
        <div className="container">
          <div className="quote-box">
            <div>
              <p className="eyebrow">PLEASE NOTE</p>

              <h2>
                Every Event Is
                <br />
                <span>Different.</span>
              </h2>

              <p>
                Package prices shown on the website are starting options.
                Customized requirements may change the final quotation. No
                booking or customized price is confirmed until reviewed and
                approved by Shareef Sons Events Organizer.
              </p>
            </div>

            <a href="/contact" className="btn btn-outline">
              Contact Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
                  }
