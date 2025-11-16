import React, { useState } from "react";
import { sendContact } from "./../services/api";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // success, error message, or "loading"

const validate = () => {
  const newErrors = {};

  // Name: only letters + spaces + åäö and minimum length 2
  const nameRegex = /^[A-Za-zÅÄÖåäö\s-]{2,}$/;

  // Email: standard robust email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone: only digits, length 6–15
  const phoneRegex = /^\d{6,15}$/;

  // Subject: allow letters, numbers, punctuation and spaces (min 3 chars)
  const subjectRegex = /^[A-Za-z0-9ÅÄÖåäö\s.,!?'"()-]{3,}$/;

  // Message: at least 10 characters, allow almost anything except < >
  const messageRegex = /^[^<>]{10,}$/;


  // VALIDATION RULES
  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  } else if (!nameRegex.test(formData.name)) {
    newErrors.name = "Name contains invalid characters.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required.";
  } else if (!subjectRegex.test(formData.subject)) {
    newErrors.subject = "Subject contains invalid characters.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  } else if (!messageRegex.test(formData.message)) {
    newErrors.message = "Message must be at least 10 characters.";
  }

  if (formData.telephone.trim()) {
    if (!phoneRegex.test(formData.telephone)) {
      newErrors.telephone =
        "Telephone must contain 6–15 digits and no special characters.";
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const payload = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.telephone,
      subject: formData.subject,
      comment: formData.message,
    };

    try {
      const response = await sendContact(payload);
      setStatus(response.message || "Message sent successfully!");

      setTimeout(() => {
      setStatus(null);
      }, 4000);

      setFormData({
        name: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      if (err.status === 400) {
        setStatus(err.data?.message || "Invalid input (400)");
      } else if (err.status === 404) {
        setStatus("Endpoint not found (404)");
      } else if (err.status === 500) {
        setStatus("Server error (500)");
      } else {
        setStatus("Could not send message. Please try again.");
      }
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="contact-form-wrapper bg-light-yellow p-4 rounded-3 shadow-sm">
          <form onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                id="name"
                type="text"
                className={`form-control form-input ${errors.name ? "is-invalid" : ""}`}
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <div id="name-error" className="invalid-feedback" role="alert">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email + Telephone */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  className={`form-control form-input ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="invalid-feedback" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="telephone" className="form-label fw-semibold">
                  Telephone 
                </label>
                <input
                  id="telephone"
                  type="text"
                  className={`form-control form-input ${errors.telephone ? "is-invalid" : ""}`}
                  name="telephone"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  aria-invalid={!!errors.telephone}
                  aria-describedby={errors.telephone ? "telephone-error" : undefined}
                />
                {errors.telephone && (
                  <div id="telephone-error" className="invalid-feedback" role="alert">
                    {errors.telephone}
                  </div>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label fw-semibold">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                id="subject"
                type="text"
                className={`form-control form-input ${errors.subject ? "is-invalid" : ""}`}
                name="subject"
                placeholder="How can we help you"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <div id="subject-error" className="invalid-feedback" role="alert">
                  {errors.subject}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Comments / Questions <span className="text-danger">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`form-control form-input ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                placeholder="Comments"
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && (
                <div id="message-error" className="invalid-feedback" role="alert">
                  {errors.message}
                </div>
              )}
            </div>

            {/* Submit + status */}
            <div className="d-flex align-items-center gap-3 mt-3">
              <button
                type="submit"
                className="btn btn-warning px-4 fw-bold"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>

              <div aria-live="assertive">
                {/* Success message */}
                {status &&
                  !status.toLowerCase().includes("error") &&
                  status !== "loading" && (
                    <span className="text-success fw-semibold">{status}</span>
                )}

                {/* Error message */}
                {status &&
                  status.toLowerCase().includes("error") &&
                  status !== "loading" && (
                    <span className="text-danger fw-semibold">{status}</span>
                )}
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
