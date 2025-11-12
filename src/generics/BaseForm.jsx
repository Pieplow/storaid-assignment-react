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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      let response;
      if (type === "booking") response = await sendBooking(formData);
      if (type === "contact") response = await sendContact(formData);

      setSuccess("Form submitted successfully!");
      setFormData({});
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {fields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label className="form-label fw-semibold">
            {field.label}{" "}
            {field.required && <span className="text-danger">*</span>}
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

      <button type="submit" className="btn btn-warning text-dark fw-semibold">
        {type === "booking" ? "Book Unit" : "Send Message"}
      </button>

      {success && <p className="text-success mt-3">{success}</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </form>
  );
};

export default BaseForm;
