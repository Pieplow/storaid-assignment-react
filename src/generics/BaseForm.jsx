import React, { useState } from "react";
import { sendBooking, sendContact } from "../services/api";

const BaseForm = ({ type, fields }) => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
  for (const field of fields) {
    const value = formData[field.name];

    // Required check
    if (field.required && (!value || value.trim() === "")) {
      return `${field.label} is required.`;
    }

    //  Email validation
    if (field.name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
      }
    }

    // Phone validation
    if (field.name === "phone" && value) {
      if (!/^\d{7,15}$/.test(value)) {
        return "Please enter a valid phone number (7–15 digits).";
      }
    }

    // Namn validation
    if (field.name === "name" && value) {
      if (value.length < 2) return "Name must be at least 2 characters.";
    }

    // Message validation
    if (field.name === "message" && value) {
      if (value.length < 10) {
        return "Message must be at least 10 characters.";
      }
    }
  }

  return null;
};

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setSuccess(null);

  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }

  try {
    let response;

    if (type === "booking") {
      response = await sendBooking(formData);
    }

    if (type === "contact") {
      response = await sendContact(formData);
    }

    setSuccess(response.message || "Form submitted successfully!");
    setFormData({});
  } catch (err) {
    if (err.status === 400) {
      setError(err.data?.message || "Invalid input (400)");
    } else if (err.status === 404) {
      setError("Endpoint not found (404)");
    } else if (err.status === 500) {
      setError("Server error (500)");
    } else {
      setError(err.message || "Something went wrong. Please try again.");
    }
  }
};

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {fields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label className="form-label fw-semibold">
            {field.label} {field.required && <span className="text-danger">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className="form-control border-warning-subtle"
              placeholder={field.placeholder}
              rows="4"
            ></textarea>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className="form-control border-warning-subtle"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
    <div className="d-flex align-items-center gap-3 mt-3">
      <button type="submit" className="btn btn-warning fw-semibold">
        {type === "booking" ? "Book Unit" : "Send Message"}
      </button>

      {success && <span className="text-success">{success}</span>}
      {error && <span className="text-danger">{error}</span>}
    </div>
    </form>
  );
};

export default BaseForm;
