const values = [
  {
    number: "01",
    title: "Quality",
    text: "We focus on quality decoration, professional arrangements and attention to every important detail.",
  },
  {
    number: "02",
    title: "Creativity",
    text: "Every event has its own identity. We create concepts that match the occasion and the customer's vision.",
  },
  {
    number: "03",
    title: "Reliability",
    text: "From planning to execution, our goal is to make the event process organized, smooth and dependable.",
  },
  {
    number: "04",
    title: "Customer First",
    text: "We listen to your requirements and work to create an experience that feels personal and memorable.",
  },
];

const eventTypes = [
  "Weddings",
  "Mehndi",
  "Mayon",
  "Dholki",
  "Nikah",
  "Walima",
  "Birthdays",
  "Milad",
  "Qawali",
  "Corporate Events",
  "Brand Activation",
  "Exhibitions",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">ABOUT SHAREEF SONS</p>

            <h1>
              We Create
              <br />
              <span>Memorable Events.</span>
            </h1>

            <p className="hero-description">
              Shareef Sons Events Organizer provides professional event
              management, decoration and event solutions for weddings,
              celebrations, corporate events and special occasions in
              Faisalabad.
            </p>

            <div className="hero-actions">
              <a href="/services" className="btn btn-gold">
                Explore Services
              </a>

              <a href="/quote" className="btn btn-outline">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>SHAREEF SONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR STORY</p>

            <h2>
              Your Special Moment.
              <br />
              <span>Our Responsibility.</span>
            </h2>
          </div>

          <div>
            <p className="section-text">
              Shareef Sons Events Organizer is built around one simple idea:
              your event should be beautiful, organized and memorable.
            </p>

            <p className="section-text">
              We provide event decoration, management, catering and corporate
              event solutions with a focus on presentation, planning and
              professional execution.
            </p>

            <p className="section-text">
              Based in Faisalabad, we work with customers to understand their
              event requirements and create solutions around their occasion,
              venue, guest count and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR MISSION</p>

              <h2>
                Turning Ideas
                <br />
                Into <span>Experiences.</span>
              </h2>
            </div>

            <p>
              We want to make professional event planning easier for customers
              by bringing creative design, reliable coordination and complete
              event solutions together.
            </p>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We first understand your event, requirements and expectations.
              </p>
            </div>

            <div className="category-card">
              <span>02</span>
              <h3>Plan</h3>
              <p>
                We organize the required services, setup and event details.
              </p>
            </div>

            <div className="category-card">
              <span>03</span>
              <h3>Create</h3>
              <p>
                Our team turns the planned concept into a beautiful event
                setup.
              </p>
            </div>

            <div className="category-card">
              <span>04</span>
              <h3>Deliver</h3>
              <p>
                We coordinate the final execution so your event runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE BELIEVE</p>

              <h2>
                Our <span>Values</span>
              </h2>
            </div>
          </div>

          <div className="service-grid">
            {values.map((value) => (
              <article className="premium-service" key={value.number}>
                <div className="service-number">{value.number}</div>

                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>

              <h2>
                Events We <span>Handle</span>
              </h2>
            </div>

            <p>
              From family celebrations to professional corporate events, our
              services can be customized around your requirements.
            </p>
          </div>

          <div className="categories-grid">
            {eventTypes.map((event, index) => (
              <div className="category-card" key={event}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{event}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR LOCATION</p>

            <h2>
              Serving
              <br />
              <span>Faisalabad.</span>
            </h2>
          </div>

          <div>
            <p className="section-text">
              Shareef Sons Events Organizer is based in Faisalabad, Pakistan.
            </p>

            <p className="section-text">
              Mansoorah, 66 Feet Road, Chowki Bazar, Faisalabad, Pakistan.
            </p>

            <p className="section-text">
              Our team is available daily from 9 AM to 9 PM for event
              inquiries and planning.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="btn btn-gold">
                Contact Us
              </a>

              <a href="/quote" className="btn btn-outline">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quote-section">
        <div className="container quote-box">
          <div>
            <p className="eyebrow">LET'S WORK TOGETHER</p>

            <h2>
              Your Event.
              <br />
              <span>Our Responsibility.</span>
            </h2>

            <p>
              Tell us what you are planning and our team will help you take the
              next step.
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
