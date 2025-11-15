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

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (formData.telephone && formData.telephone.length < 6)
      newErrors.telephone = "Phone number seems too short.";

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
      await sendContact(payload);

      setStatus("success");

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
              <label className="form-label fw-semibold">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control form-input ${errors.name ? "is-invalid" : ""}`}
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email + Telephone */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control form-input ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Telephone</label>
                <input
                  type="text"
                  className={`form-control form-input ${errors.telephone ? "is-invalid" : ""}`}
                  name="telephone"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
                {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
              </div>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control form-input ${errors.subject ? "is-invalid" : ""}`}
                name="subject"
                placeholder="How can we help you"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Comments / Questions <span className="text-danger">*</span>
              </label>
              <textarea
                name="message"
                className={`form-control form-input ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                placeholder="Comments"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
<div className="d-flex align-items-center gap-3 mt-3">

            <button
              type="submit"
              className="btn btn-warning px-4 fw-bold"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <span className="text-success fw-semibold">Message sent successfully!</span>
            )}

            {status &&
              status !== "success" &&
              status !== "loading" && (
                <span className="text-danger fw-semibold">{status}</span>
              )}
          </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
