import React, { useState } from "react";
import { sendSubscribe } from "../../services/api";
import "./BookingForm.css";

import React from "react";
import BaseForm from "../generics/BaseForm";

const BookingForm = () => (
  <BaseForm
    type="booking"
    fields={[
      { name: "name", label: "Your Name", type: "text", required: true, placeholder: "Your Name" },
      { name: "email", label: "Email", type: "email", required: true, placeholder: "Email" },
      { name: "selectedUnit", label: "Choose Unit", type: "text", required: true, placeholder: "Choose Unit" },
      { name: "purpose", label: "Storage Purpose", type: "textarea", required: true, placeholder: "Describe your storage purpose..." },
    ]}
  />
);

export default BookingForm;

