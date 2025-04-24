import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: send data to backend and trigger email
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4"
    >
      {[
        { name: "name", placeholder: "Name" },
        { name: "address", placeholder: "Address" },
        { name: "mobile", placeholder: "Mobile Number" },
        { name: "email", placeholder: "Email" },
        { name: "password", placeholder: "Password", type: "password" },
      ].map((field) => (
        <input
          key={field.name}
          name={field.name}
          type={field.type || "text"}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl shadow-lg transition-all"
      >
        Login / Register
      </motion.button>
    </motion.form>
  );
}