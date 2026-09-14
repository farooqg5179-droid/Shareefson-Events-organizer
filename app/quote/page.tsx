"use client";

import { FormEvent, useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">GET A QUOTE</p>
          <h1>Tell Us About Your Event</h1>
          <p>
            Share your event requirements and our team will review them and
            contact you for the next step.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container">
          <div className="quote-layout">
            <div>
              <p className="eyebrow">QUOTE REQUEST</p>
              <h2>Plan Your Event With Us</h2>
              <p>
                Fill in the details below. Customized pricing is reviewed by
                our team before any final quotation is confirmed.
              </p>

              <div className="info-card">
                <h3>Important</h3>
                <p>
                  Submitting this form is a quote request only. It does not
                  automatically confirm a booking.
                </p>
              </div>
            </div>

            <div className="quote-form-card">
              {submitted ? (
                <div className="success-message">
                  <p className="eyebrow">REQUEST RECEIVED</p>
                  <h2>Thank You!</h2>
                  <p>
                    Your quote request has been received successfully. Our
                    team will review your requirements and contact you.
                  </p>

                  <a href="/" className="btn btn-primary">
                    Back to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="03XX XXXXXXX"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventType">Event Type *</label>
                      <select id="eventType" name="eventType" required>
                        <option value="">Select event type</option>
                        <option>Wedding</option>
                        <option>Mehndi</option>
                        <option>Mayon</option>
                        <option>Dholki</option>
                        <option>Nikah</option>
                        <option>Barat</option>
                        <option>Walima</option>
                        <option>Birthday</option>
                        <option>Milad</option>
                        <option>Qawali</option>
                        <option>Dawat</option>
                        <option>Corporate Event</option>
                        <option>Brand Activation</option>
                        <option>Exhibition</option>
                        <option>Stall Fabrication</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventDate">Event Date *</label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests *</label>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        placeholder="e.g. 100"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Event Location *</label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Event venue / area"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="budget">Estimated Budget</label>
                      <select id="budget" name="budget">
                        <option value="">Select budget</option>
                        <option>Under Rs. 30,000</option>
                        <option>Rs. 30,000 - Rs. 50,000</option>
                        <option>Rs. 50,000 - Rs. 80,000</option>
                        <option>Rs. 80,000 - Rs. 150,000</option>
                        <option>Rs. 150,000+</option>
                        <option>Not decided yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Required Services</label>

                    <div className="checkbox-grid">
                      <label className="checkbox-item">
                        <input type="checkbox" name="services" value="Decoration" />
                        <span>Event Decoration</span>
                      </label>

                      <label className="checkbox-item">
                        <input type="checkbox" name="services" value="Stage" />
                        <span>Stage Setup</span>
                      </label>

                      <label className="checkbox-item">
                        <input type="checkbox" name="services" value="Lighting" />
                        <span>Lighting</span>
                      </label>

                      <label className="checkbox-item">
                        <input type="checkbox" name="services" value="Seating" />
                        <span>Seating</span>
                      </label>

                      <label className="checkbox-item">
                        <input type="checkbox" name="services" value="Catering" />
                        <span>Catering</span>
                      </label>

                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="services"
                          value="Event Management"
                        />
                        <span>Event Management</span>
                      </label>

                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="services"
                          value="Brand Activation"
                        />
                        <span>Brand Activation</span>
                      </label>

                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="services"
                          value="Exhibition"
                        />
                        <span>Exhibition / Stall</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements">
                      Additional Requirements
                    </label>

                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={6}
                      placeholder="Tell us anything else about your event..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>From Request to Event</h2>
          </div>

          <div className="cards-grid">
            <div className="service-card">
              <span className="card-number">01</span>
              <h3>Send Request</h3>
              <p>
                Tell us about your event, guests, location and required
                services.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">02</span>
              <h3>We Review</h3>
              <p>
                Our team reviews your requirements and prepares the next
                steps.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">03</span>
              <h3>Final Quote</h3>
              <p>
                After discussion and confirmation, we provide the appropriate
                quotation.
              </p>
            </div>

            <div className="service-card">
              <span className="card-number">04</span>
              <h3>Booking</h3>
              <p>
                Once the details are finalized, your event can move toward
                booking and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">SHAREEF SONS EVENTS ORGANIZER</p>
            <h2>Need Help Before Requesting a Quote?</h2>
            <p>
              Contact our team to discuss your event requirements.
            </p>

            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
