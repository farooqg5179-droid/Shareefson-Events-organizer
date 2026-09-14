const packages = [
  {
    number: "01",
    title: "Gathering 50",
    price: "Rs. 30,000",
    description:
      "A beautiful event setup for intimate gatherings and family celebrations.",
    features: [
      "Event seating setup",
      "Basic decoration",
      "Professional arrangement",
      "Suitable for up to 50 guests",
    ],
  },
  {
    number: "02",
    title: "Gathering 100",
    price: "Rs. 80,000",
    description:
      "A complete event setup designed for larger gatherings and celebrations.",
    features: [
      "Event seating setup",
      "Enhanced decoration",
      "Professional event arrangement",
      "Suitable for up to 100 guests",
    ],
  },
  {
    number: "03",
    title: "Sirf Baithak",
    price: "Rs. 600",
    description:
      "A simple and practical seating solution for customers who only need event seating.",
    features: [
      "Event seating",
      "Per person pricing",
      "Suitable for gatherings",
      "Flexible event requirements",
    ],
  },
  {
    number: "04",
    title: "Wedding Standard",
    price: "Rs. 80,000",
    description:
      "A standard wedding, Mehndi or Walima package designed for up to 100 guests.",
    features: [
      "Wedding event setup",
      "Decoration arrangement",
      "Seating setup",
      "Suitable for up to 100 guests",
    ],
  },
];

export default function PackagesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OUR PACKAGES</p>

            <h1>
              Beautiful Events.
              <br />
              <span>Clear Packages.</span>
            </h1>

            <p className="hero-description">
              Choose a package that fits your event, or contact our team for a
              customized solution based on your guests, venue and requirements.
            </p>

            <div className="hero-actions">
              <a href="/quote" className="btn btn-gold">
                Get a Custom Quote
              </a>

              <a href="/services" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>PREMIUM EVENTS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CHOOSE YOUR PACKAGE</p>

              <h2>
                Event <span>Packages</span>
              </h2>
            </div>

            <p>
              Our packages provide a starting point. Final requirements and
              customized pricing are confirmed by our team.
            </p>
          </div>

          <div className="package-grid">
            {packages.map((pkg) => (
              <article className="package-card" key={pkg.number}>
                <div className="package-top">
                  <span>{pkg.number}</span>
                  <span>SHAREEF SONS</span>
                </div>

                <h3>{pkg.title}</h3>

                <div className="package-price">{pkg.price}</div>

                <p className="package-description">{pkg.description}</p>

                <div className="package-divider"></div>

                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a href="/quote" className="btn btn-gold package-button">
                  Request This Package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="section">
        <div className="container">
          <div className="quote-box">
            <div>
              <p className="eyebrow">NEED SOMETHING DIFFERENT?</p>

              <h2>
                Create Your
                <br />
                <span>Custom Package.</span>
              </h2>

              <p>
                Tell us your event type, guest count, venue, date, decoration,
                stage, lighting, seating and catering requirements. Our team
                will review your requirements and prepare a suitable quote.
              </p>
            </div>

            <a href="/quote" className="btn btn-gold">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">IMPORTANT</p>

              <h2>
                Pricing Can Be <span>Customized.</span>
              </h2>
            </div>
          </div>

          <div className="intro-grid">
            <div>
              <p className="section-text">
                Every event is different. Final pricing may change depending
                on the event type, number of guests, venue, decoration,
                lighting, stage, seating, catering and other requirements.
              </p>
            </div>

            <div>
              <p className="section-text">
                Customized prices are not automatically confirmed by the
                website. Our team will review your request and provide the
                final quotation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
                  }
