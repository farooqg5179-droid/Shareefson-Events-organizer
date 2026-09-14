const eventCategories = [
  "Weddings",
  "Mehndi",
  "Walima",
  "Birthdays",
  "Dholki",
  "Mayon",
  "Nikah",
  "Corporate Events",
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav-container">
          <a href="/" className="logo">
            <span className="logo-mark">SS</span>
            <span className="logo-text">
              <strong>SHAREEF SONS</strong>
              <small>EVENTS ORGANIZER</small>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#quote" className="btn btn-small">
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="container hero-content">
          <p className="eyebrow">PREMIUM EVENT MANAGEMENT</p>

          <h1>
            We Create
            <span> Unforgettable </span>
            Moments
          </h1>

          <p className="hero-text">
            Professional event management, luxury wedding decoration and
            complete event solutions in Faisalabad.
          </p>

          <div className="hero-buttons">
            <a href="#quote" className="btn">
              Get a Quote
            </a>

            <a href="#packages" className="btn btn-outline">
              Explore Packages
            </a>
          </div>

          <div className="hero-location">
            <span>✦</span>
            Mansoorah, 66 Feet Road, Chowki Bazar, Faisalabad
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE CREATE</p>

            <h2>
              Every Event Deserves
              <span> Something Special</span>
            </h2>

            <p>
              From intimate gatherings to grand celebrations, we bring your
              vision to life with elegant design and professional management.
            </p>
          </div>

          <div className="category-grid">
            {eventCategories.map((category) => (
              <div className="category-card" key={category}>
                <span className="category-icon">✦</span>
                <h3>{category}</h3>
                <p>Elegant planning &amp; professional setup</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR SERVICES</p>

            <h2>
              Complete Event
              <span> Solutions</span>
            </h2>

            <p>
              Everything you need for a memorable and professionally managed
              event.
            </p>
          </div>

          <div className="card-grid">
            <div className="service-card">
              <span className="card-number">01</span>
              <h3>Wedding Decoration</h3>
              <p>
                Beautiful stage, seating, lighting and complete wedding
                decoration tailored to your event.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">02</span>
              <h3>Event Management</h3>
              <p>
                Professional planning and coordination so your event runs
                smoothly from start to finish.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">03</span>
              <h3>Catering</h3>
              <p>
                Quality catering solutions for weddings, gatherings, Dawat
                and special occasions.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">04</span>
              <h3>Corporate &amp; Brand Events</h3>
              <p>
                Brand activation, exhibitions, stalls and professional
                corporate event setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="section quote-section">
        <div className="container quote-box">
          <p className="eyebrow">PLAN YOUR EVENT</p>

          <h2>
            Let's Make Your
            <span> Event Special</span>
          </h2>

          <p>
            Tell us about your event and requirements. Our team will review
            your request and provide a suitable quotation.
          </p>

          <a href="#contact" className="btn">
            Request a Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="site-footer">
        <div className="container footer-content">
          <div>
            <div className="footer-logo">SHAREEF SONS</div>
            <p>EVENTS ORGANIZER</p>
          </div>

          <div>
            <p>Faisalabad, Pakistan</p>
            <p>Daily: 9 AM – 9 PM</p>
          </div>

          <div>
            <p>Instagram: @shareefsons.pk</p>
            <p>TikTok: @shareefsons25</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Shareef Sons Events Organizer. All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
            }
