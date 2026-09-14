const categories = [
  "Mehndi",
  "Wedding",
  "Walima",
  "Birthday",
  "Dholki",
  "Mayon",
  "Nikah",
  "Corporate",
];

const services = [
  {
    number: "01",
    title: "Wedding Decoration",
    text: "Elegant stages, seating, lighting and complete wedding decoration.",
  },
  {
    number: "02",
    title: "Event Management",
    text: "Professional planning and coordination for smooth, memorable events.",
  },
  {
    number: "03",
    title: "Catering",
    text: "Quality catering solutions for weddings, gatherings and special occasions.",
  },
  {
    number: "04",
    title: "Corporate Events",
    text: "Brand activation, exhibitions, stalls and professional corporate setups.",
  },
];

const packages = [
  {
    title: "Gathering 50",
    price: "Rs. 30,000",
    description: "Perfect for intimate gatherings and family celebrations.",
  },
  {
    title: "Gathering 100",
    price: "Rs. 80,000",
    description: "A complete setup for larger gatherings and celebrations.",
  },
  {
    title: "Sirf Baithak",
    price: "Rs. 600",
    description: "Per person seating solution for your event.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <div className="container nav-container">
          <a href="#home" className="brand">
            <div className="brand-symbol">SS</div>

            <div className="brand-name">
              <strong>SHAREEF SONS</strong>
              <span>EVENTS ORGANIZER</span>
            </div>
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

      {/* HERO */}
      <section id="home" className="hero premium-hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="gold-line"></div>

            <p className="eyebrow">SHAREEF SONS EVENTS ORGANIZER</p>

            <h1>
              Turning Your
              <span> Special Moments</span>
              Into Memories.
            </h1>

            <p className="hero-text">
              Premium event management, wedding decoration and complete event
              solutions designed around your celebration.
            </p>

            <div className="hero-buttons">
              <a href="#quote" className="btn">
                Get a Quote
              </a>

              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>

            <div className="hero-info">
              <span>✦</span>
              Faisalabad, Pakistan
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <div className="hero-frame-inner">
                <span>SS</span>
                <small>CREATE • CELEBRATE • REMEMBER</small>
              </div>
            </div>

            <div className="floating-card">
              <span>✦</span>
              <div>
                <strong>Premium Events</strong>
                <small>Designed with detail</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR PROMISE</p>
            <h2>
              Your Event.
              <span> Our Responsibility.</span>
            </h2>
          </div>

          <div>
            <p className="large-text">
              From the first idea to the final setup, Shareef Sons brings
              planning, decoration and event management together under one
              roof.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">CELEBRATIONS WE CREATE</p>

            <h2>
              Made For Every
              <span> Occasion</span>
            </h2>

            <p>
              Elegant setups and professional event solutions for celebrations
              big and small.
            </p>
          </div>

          <div className="category-grid premium-grid">
            {categories.map((category, index) => (
              <div className="category-card premium-card" key={category}>
                <span className="category-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="category-icon">✦</div>

                <h3>{category}</h3>

                <p>Professional event setup</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section dark-section services-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              Complete Event
              <span> Solutions</span>
            </h2>

            <p>
              Professional services created to make your event beautiful,
              organized and memorable.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card premium-service" key={service.number}>
                <span className="card-number">{service.number}</span>

                <div className="service-icon">✦</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#quote">Explore Service →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section packages-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">POPULAR PACKAGES</p>

            <h2>
              Choose Your
              <span> Celebration</span>
            </h2>

            <p>
              Starting packages for common event requirements. Customized
              requirements can receive a separate quotation.
            </p>
          </div>

          <div className="package-grid">
            {packages.map((item, index) => (
              <div
                className={`package-card ${
                  index === 1 ? "package-featured" : ""
                }`}
                key={item.title}
              >
                {index === 1 && (
                  <div className="package-badge">POPULAR</div>
                )}

                <p className="package-label">PACKAGE</p>

                <h3>{item.title}</h3>

                <div className="package-price">{item.price}</div>

                <p>{item.description}</p>

                <a href="#quote" className="package-link">
                  Request Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">OUR WORK</p>

            <h2>
              Moments We
              <span> Create</span>
            </h2>

            <p>
              Our real event gallery will be connected to the Admin Media
              Manager in a future phase.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-placeholder large">
              <span>SS</span>
              <p>Wedding Collection</p>
            </div>

            <div className="gallery-placeholder">
              <span>SS</span>
              <p>Mehndi</p>
            </div>

            <div className="gallery-placeholder">
              <span>SS</span>
              <p>Walima</p>
            </div>

            <div className="gallery-placeholder">
              <span>SS</span>
              <p>Corporate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-mark">
            <span>SS</span>
            <small>EVENTS ORGANIZER</small>
          </div>

          <div>
            <p className="eyebrow">ABOUT SHAREEF SONS</p>

            <h2>
              More Than An Event.
              <span> An Experience.</span>
            </h2>

            <p>
              Shareef Sons Events Organizer provides professional event
              management and decoration services in Faisalabad, helping
              families and businesses create celebrations that feel special
              from beginning to end.
            </p>

            <a href="#quote" className="btn">
              Plan Your Event
            </a>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section id="quote" className="section quote-section">
        <div className="container quote-box">
          <div className="gold-line center-line"></div>

          <p className="eyebrow">LET&apos;S PLAN TOGETHER</p>

          <h2>
            Tell Us About
            <span> Your Event.</span>
          </h2>

          <p>
            Share your event details with us and our team will review your
            requirements and prepare a suitable quotation.
          </p>

          <a href="#contact" className="btn">
            Request A Quote
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="site-footer">
        <div className="container footer-content">
          <div>
            <div className="footer-logo">SHAREEF SONS</div>
            <p>EVENTS ORGANIZER</p>
          </div>

          <div>
            <h4>Visit Us</h4>
            <p>Mansoorah, 66 Feet Road</p>
            <p>Chowki Bazar, Faisalabad</p>
          </div>

          <div>
            <h4>Business Hours</h4>
            <p>Daily: 9 AM – 9 PM</p>
          </div>

          <div>
            <h4>Social</h4>
            <p>Instagram: @shareefsons.pk</p>
            <p>TikTok: @shareefsons25</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Shareef Sons Events Organizer
          </p>

          <p>Premium Events • Faisalabad</p>
        </div>
      </footer>
    </main>
  );
            }
