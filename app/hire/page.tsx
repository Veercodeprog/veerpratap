// src/app/hire-me/page.tsx or wherever you defined HireMePage
"use client";

import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const HireMePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
      console.log("✅ Submitted:", data);
      setSuccess(true);
      // event.currentTarget.reset(); // clear the form
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center px-4 py-8 m-8">
      <div className="content max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hire Me</h2>
          <p className="text-gray-600 text-sm">
            I’m open to freelance, contract, or full-time opportunities. Fill
            the form or drop an email!
          </p>
        </header>

        {error && (
          <div className="text-red-500 mb-4 text-sm text-center">{error}</div>
        )}
        {success && (
          <div className="text-green-600 mb-4 text-sm text-center">
            Message sent successfully! we will get in touch with you shortly!
          </div>
        )}

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-lime-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded-md transition flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 mr-2" />
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex items-center justify-center text-gray-600 text-sm h-24 text-center">
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="w-6 h-6 mr-2 text-lime-600"
          />
          Or email me directly at{" "}
          <a
            href="mailto:veerpratap945050@gmail.com"
            className="text-lime-500 hover:underline ml-1"
          >
            veerpratap945050@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;
