import React from "react";
import BaseForm from "../generics/BaseForm";
import "./BookingForm.css";

const BookingForm = () => (
  <div className="booking-form-wrapper bg-beige p-4 rounded-3 shadow-sm">
    <BaseForm
      type="booking"
      fields={[
        { name: "name", label: "Your Name", type: "text", required: true, placeholder: "Your Name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "Email" },
        { name: "selectedUnit", label: "Choose Unit", type: "text", required: true, placeholder: "Choose Unit" },
        { name: "purpose", label: "Storage Purpose", type: "textarea", required: true, placeholder: "Describe your storage purpose..." },
      ]}
    />
  </div>
);

export default BookingForm;
