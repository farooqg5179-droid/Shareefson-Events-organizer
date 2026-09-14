const contactDetails = [
  {
    number: "01",
    title: "Visit Us",
    text: "Mansoorah, 66 Feet Road, Chowki Bazar, Faisalabad, Pakistan",
  },
  {
    number: "02",
    title: "Business Hours",
    text: "Daily from 9 AM to 9 PM",
  },
  {
    number: "03",
    title: "WhatsApp",
    text: "Contact us on WhatsApp for event inquiries and quick communication.",
  },
  {
    number: "04",
    title: "Social Media",
    text: "Follow Shareef Sons Events Organizer for our latest event work and updates.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">GET IN TOUCH</p>

            <h1>
              Let's Talk About
              <br />
              <span>Your Event.</span>
            </h1>

            <p className="hero-description">
              Have a wedding, birthday, corporate event or special occasion
              coming up? Tell us what you are planning and our team will help
              you take the next step.
            </p>

            <div className="hero-actions">
              <a href="/quote" className="btn btn-gold">
                Get a Quote
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>CONTACT US</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CONTACT INFORMATION</p>

              <h2>
                We Are Here
                <br />
                <span>To Help.</span>
              </h2>
            </div>

            <p>
              Contact our team for event planning, packages, decoration,
              catering and customized event requirements.
            </p>
          </div>

          <div className="service-grid">
            {contactDetails.map((detail) => (
              <article className="premium-service" key={detail.number}>
                <div className="service-number">{detail.number}</div>

                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SEND AN INQUIRY</p>

              <h2>
                Tell Us About
                <br />
                <span>Your Event.</span>
              </h2>
            </div>

            <p>
              Submit your basic information and event requirements. Our team
              will review your inquiry and contact you.
            </p>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
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

              <div className="form-group">
                <label htmlFor="event">Event Type</label>

                <select id="event" name="event" defaultValue="">
                  <option value="" disabled>
                    Select event type
                  </option>

                  <option value="wedding">Wedding</option>
                  <option value="mehndi">Mehndi</option>
                  <option value="mayon">Mayon</option>
                  <option value="dholki">Dholki</option>
                  <option value="nikah">Nikah</option>
                  <option value="walima">Walima</option>
                  <option value="birthday">Birthday</option>
                  <option value="milad">Milad</option>
                  <option value="qawali">Qawali</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="brand">Brand Activation</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Event Date</label>

                <input id="date" name="date" type="date" />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>

                <input
                  id="guests"
                  name="guests"
                  type="number"
                  placeholder="Example: 100"
                  min="1"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="location">Event Location</label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter event venue or location"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Event Requirements</label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about decoration, stage, lighting, seating, catering or any other requirements..."
                ></textarea>
              </div>
            </div>

            <button type="button" className="btn btn-gold">
              Send Inquiry
            </button>

            <p className="form-note">
              This form will be connected to our lead management system in the
              next development stage.
            </p>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="section">
        <div className="container">
          <div className="quote-box">
            <div>
              <p className="eyebrow">FOLLOW OUR WORK</p>

              <h2>
                Stay Connected
                <br />
                <span>With Shareef Sons.</span>
              </h2>

              <p>
                Follow our social media pages to see our latest event setups,
                decoration ideas and updates.
              </p>
            </div>

            <div className="hero-actions">
              <a
                href="https://www.instagram.com/shareefsons.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/shareefsonsevents"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/@shareefsons25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="quote-section">
        <div className="container quote-box">
          <div>
            <p className="eyebrow">PLAN WITH US</p>

            <h2>
              Make Your Next Event
              <br />
              <span>Truly Memorable.</span>
            </h2>

            <p>
              Start with a simple conversation. Tell us your requirements and
              we will guide you through the next steps.
            </p>
          </div>

          <a href="/quote" className="btn btn-gold">
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
          }
