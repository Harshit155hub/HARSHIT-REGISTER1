import React from "react";
import { motion } from "framer-motion";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <h1 className="text-white text-3xl font-semibold text-center mb-6">
          Futuristic Login
        </h1>
        <LoginForm />
      </motion.div>
    </div>
  );
}