const services = [
  {
    number: "01",
    title: "Wedding Decoration",
    text: "Elegant stages, premium seating, lighting and complete wedding decoration designed around your event.",
  },
  {
    number: "02",
    title: "Mehndi & Mayon",
    text: "Beautiful colorful setups, traditional themes, floral details and memorable Mehndi and Mayon arrangements.",
  },
  {
    number: "03",
    title: "Dholki Events",
    text: "Traditional Dholki decoration with stylish seating, lighting and complete event setup.",
  },
  {
    number: "04",
    title: "Nikah & Walima",
    text: "Sophisticated decoration and event management for intimate Nikah ceremonies and elegant Walima receptions.",
  },
  {
    number: "05",
    title: "Barat Events",
    text: "Complete Barat event setups including stage decoration, seating, lighting and event coordination.",
  },
  {
    number: "06",
    title: "Birthday Events",
    text: "Creative birthday setups for children, families and special celebrations with customized themes.",
  },
  {
    number: "07",
    title: "Milad & Qawali",
    text: "Respectful and beautiful arrangements for Milad, Qawali and religious gatherings.",
  },
  {
    number: "08",
    title: "Corporate Events",
    text: "Professional event solutions for companies, launches, conferences and corporate gatherings.",
  },
  {
    number: "09",
    title: "Brand Activation",
    text: "Creative brand activation and promotional event setups designed to attract attention and engage audiences.",
  },
  {
    number: "10",
    title: "Exhibition & Stall Fabrication",
    text: "Professional exhibition booths and custom stall fabrication for brands, businesses and organizations.",
  },
  {
    number: "11",
    title: "Catering",
    text: "Quality catering solutions for weddings, gatherings, corporate events and special occasions.",
  },
  {
    number: "12",
    title: "Complete Event Management",
    text: "End-to-end event planning, coordination and execution so you can enjoy your event without the stress.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OUR SERVICES</p>

            <h1>
              Every Detail.
              <br />
              <span>Beautifully Managed.</span>
            </h1>

            <p className="hero-description">
              From intimate family gatherings to large weddings and corporate
              events, Shareef Sons Events Organizer provides complete event
              solutions with a luxury touch.
            </p>

            <div className="hero-actions">
              <a href="/quote" className="btn btn-gold">
                Get a Quote
              </a>

              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>EVENTS ORGANIZER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              More Than Decoration.
              <br />
              <span>We Create Experiences.</span>
            </h2>
          </div>

          <div>
            <p className="section-text">
              Your event deserves more than a basic setup. Our team combines
              creative decoration, professional planning and reliable
              coordination to create events that feel special from beginning
              to end.
            </p>

            <p className="section-text">
              Whether it is a Mehndi, Walima, Birthday, Milad, Corporate Event
              or Exhibition, we manage the details so you can enjoy the
              moment.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE OFFER</p>

              <h2>
                Our <span>Services</span>
              </h2>
            </div>

            <p>
              Professional event solutions tailored to your occasion,
              requirements and vision.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="premium-service" key={service.number}>
                <div className="service-number">{service.number}</div>

                <div>
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="/quote">Request a Quote →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHY SHAREEF SONS</p>

              <h2>
                Your Event.
                <br />
                <span>Our Responsibility.</span>
              </h2>
            </div>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <span>01</span>
              <h3>Creative Design</h3>
              <p>
                Elegant and creative event concepts designed according to your
                occasion.
              </p>
            </div>

            <div className="category-card">
              <span>02</span>
              <h3>Professional Planning</h3>
              <p>
                Organized planning and coordination from the first discussion
                to the final setup.
              </p>
            </div>

            <div className="category-card">
              <span>03</span>
              <h3>Complete Solutions</h3>
              <p>
                Decoration, seating, lighting, catering and event management
                under one roof.
              </p>
            </div>

            <div className="category-card">
              <span>04</span>
              <h3>Memorable Experiences</h3>
              <p>
                Our goal is to make your special occasion beautiful,
                comfortable and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quote-section">
        <div className="container quote-box">
          <div>
            <p className="eyebrow">PLAN YOUR EVENT</p>

            <h2>
              Let's Create Something
              <br />
              <span>Beautiful Together.</span>
            </h2>

            <p>
              Tell us about your event and requirements. Our team will review
              your request and contact you with the next steps.
            </p>
          </div>

          <a href="/quote" className="btn btn-gold">
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
      }
