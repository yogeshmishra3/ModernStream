import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add access key to form data
    formData.append("access_key", "d98d5a8f-08c4-4674-8f0c-f8ad14760dec");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h3 className="text-blue-500 font-semibold uppercase tracking-widest">
          Contact
        </h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          Have a Project in Mind?
        </h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          Let's bring your ideas to life. We'd love to hear from you and
          collaborate on your project.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-10 w-full max-w-2xl bg-white rounded-xl p-8 shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {/* Phone Number */}
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Project Description */}
        <textarea
          name="message"
          placeholder="Tell me about your project"
          rows="5"
          required
          className="w-full mt-6 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        ></textarea>

        {/* Submit Button */}
        <div className="flex flex-col items-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>

          {result && (
            <p
              className={`mt-4 text-center ${
                result.includes("Successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
