const categories = [
  "All",
  "Mehndi",
  "Wedding",
  "Walima",
  "Dholki",
  "Mayon",
  "Nikah",
  "Birthday",
  "Corporate",
  "Brand Activation",
  "Exhibition",
  "Stall Fabrication",
];

const galleryItems = [
  {
    title: "Mehndi Setup",
    category: "Mehndi",
    number: "01",
  },
  {
    title: "Wedding Decoration",
    category: "Wedding",
    number: "02",
  },
  {
    title: "Walima Setup",
    category: "Walima",
    number: "03",
  },
  {
    title: "Dholki Event",
    category: "Dholki",
    number: "04",
  },
  {
    title: "Mayon Setup",
    category: "Mayon",
    number: "05",
  },
  {
    title: "Nikah Ceremony",
    category: "Nikah",
    number: "06",
  },
  {
    title: "Birthday Event",
    category: "Birthday",
    number: "07",
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    number: "08",
  },
  {
    title: "Brand Activation",
    category: "Brand Activation",
    number: "09",
  },
  {
    title: "Exhibition Setup",
    category: "Exhibition",
    number: "10",
  },
  {
    title: "Stall Fabrication",
    category: "Stall Fabrication",
    number: "11",
  },
  {
    title: "Premium Stage",
    category: "Wedding",
    number: "12",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="premium-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OUR WORK</p>

            <h1>
              Moments We
              <br />
              <span>Help Create.</span>
            </h1>

            <p className="hero-description">
              Explore our event work, decoration concepts, corporate setups
              and creative event solutions. More real event work will be added
              as our gallery grows.
            </p>

            <div className="hero-actions">
              <a href="/quote" className="btn btn-gold">
                Plan Your Event
              </a>

              <a href="/services" className="btn btn-outline">
                Our Services
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <span>SS</span>
              <p>EVENT GALLERY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR PORTFOLIO</p>

            <h2>
              Every Event Has
              <br />
              <span>Its Own Story.</span>
            </h2>
          </div>

          <div>
            <p className="section-text">
              From traditional Mehndi and Mayon setups to elegant weddings,
              corporate events and exhibition stalls, our work is designed
              around the character of every event.
            </p>

            <p className="section-text">
              Our future gallery system will allow the Shareef Sons team to
              upload new photos and videos without changing website code.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>

              <h2>
                Event <span>Categories</span>
              </h2>
            </div>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div className="category-card" key={category}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{category}</h3>

                <p>
                  {category === "All"
                    ? "Explore our complete event portfolio."
                    : `View our ${category.toLowerCase()} event work.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED WORK</p>

              <h2>
                Our <span>Gallery</span>
              </h2>
            </div>

            <p>
              Real event photos and videos will be managed from the future
              Media Manager.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" key={item.number}>
                <div className="gallery-placeholder">
                  <span>{item.number}</span>
                  <strong>SS</strong>
                  <small>{item.category}</small>
                </div>

                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Media Manager */}
      <section className="section section-dark">
        <div className="container">
          <div className="quote-box">
            <div>
              <p className="eyebrow">COMING NEXT</p>

              <h2>
                Smart
                <br />
                <span>Media Manager.</span>
              </h2>

              <p>
                In the next stage, the admin will be able to upload images and
                videos, select categories, add event details and publish them
                directly to the website without editing code.
              </p>
            </div>

            <a href="/quote" className="btn btn-gold">
              Start Your Event
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quote-section">
        <div className="container quote-box">
          <div>
            <p className="eyebrow">READY TO START?</p>

            <h2>
              Your Event Could Be
              <br />
              <span>Our Next Story.</span>
            </h2>

            <p>
              Share your event requirements with us and let our team help you
              plan something memorable.
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
