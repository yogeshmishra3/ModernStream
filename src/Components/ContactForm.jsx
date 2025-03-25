import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-7 from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side - Contact Information */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-12 flex flex-col justify-center">
          <div className="max-w-md space-y-8">
            <blockquote className="text-4xl font-bold italic leading-tight mb-8 opacity-90">
              "Transform your ideas into extraordinary solutions."
            </blockquote>

            <div className="space-y-6">
              {/* Contact Details with Icons */}
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="h-6 w-6 text-white" />
                <span>modernstream@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="h-6 w-6 text-white" />
                <span>+917410730220</span>
              </div>

              {/* <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-white" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h3 className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
                Get in Touch
              </h3>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Have a Project?
              </h1>
              <p className="text-gray-600 mb-8">
                We're excited to hear about your ideas. Let's collaborate and
                bring them to life.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  className="w-full p-4 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-4 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-4 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="5"
                required
                className="w-full p-4 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-00 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:animate-pulse" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {result && (
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    {result.includes("Successfully") ? (
                      <>
                        <CheckCircle className="text-green-600" />
                        <p className="text-green-600">{result}</p>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="text-red-600" />
                        <p className="text-red-600">{result}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
