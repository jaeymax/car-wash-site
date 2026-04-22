"use client";

import { useState } from "react";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    carType: "",
    service: "",
    preferredTime: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hello, I want to book a car wash.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Car Type: ${formData.carType}
Service: ${formData.service}
Preferred Time: ${formData.preferredTime || "Anytime"}
Notes: ${formData.notes || "None"}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL (replace with actual business number)
    const whatsappUrl = `https://wa.me/233508637014?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 mb-8 hover:bg-blue-500/20 transition-all duration-300">
              <span className="text-sm font-semibold text-blue-300">
                📋 Quick Booking
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
              Book Your Car Wash
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                in Minutes
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Fill out the form below and we'll send you a confirmation via
              WhatsApp instantly
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12">
                <div className="mb-12">
                  <p className="text-center text-gray-300 text-lg">
                    All fields marked with{" "}
                    <span className="text-pink-400 font-bold">*</span> are
                    required
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div className="pb-8 border-b border-gray-700/50">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Your Information
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Full Name <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                          placeholder="e.g., John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Phone Number <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                          placeholder="e.g., 024 123 4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Location in Accra{" "}
                          <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                          placeholder="e.g., East Legon, Cantonments"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details Section */}
                  <div className="pb-8 border-b border-gray-700/50">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Service Details
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="carType"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Car Type <span className="text-pink-400">*</span>
                        </label>
                        <select
                          id="carType"
                          name="carType"
                          required
                          value={formData.carType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                        >
                          <option value="" className="text-gray-700">
                            Select car type
                          </option>
                          <option value="Saloon" className="text-gray-700">
                            Saloon
                          </option>
                          <option value="SUV" className="text-gray-700">
                            SUV
                          </option>
                          <option value="Pickup" className="text-gray-700">
                            Pickup
                          </option>
                          <option value="Van" className="text-gray-700">
                            Van
                          </option>
                          <option value="Hatchback" className="text-gray-700">
                            Hatchback
                          </option>
                          <option value="Other" className="text-gray-700">
                            Other
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Service Type <span className="text-pink-400">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                        >
                          <option value="" className="text-gray-700">
                            Select service
                          </option>
                          <option
                            value="Basic Wash - GH₵ 50"
                            className="text-gray-700"
                          >
                            Basic Wash - GH₵ 50
                          </option>
                          <option
                            value="Interior Cleaning - GH₵ 80"
                            className="text-gray-700"
                          >
                            Interior Cleaning - GH₵ 80
                          </option>
                          <option
                            value="Full Wash - GH₵ 120"
                            className="text-gray-700"
                          >
                            Full Wash - GH₵ 120
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="preferredTime"
                          className="block text-sm font-semibold text-gray-300 mb-3"
                        >
                          Preferred Date/Time
                        </label>
                        <input
                          type="datetime-local"
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="pb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Additional Information
                    </h2>

                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-semibold text-gray-300 mb-3"
                      >
                        Special Requests or Instructions
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-lg text-white placeholder-gray-400 resize-none"
                        placeholder="e.g., There's a small dent on the door, handle with care. Please park in the driveway..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
                  >
                    Send Booking via WhatsApp
                  </button>
                </form>

                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
                  <p className="text-center text-gray-300 text-lg">
                    <span className="font-semibold text-blue-400">
                      💬 Next Step:
                    </span>{" "}
                    You'll be redirected to WhatsApp to complete your booking
                    confirmation. Make sure to have WhatsApp installed on your
                    device.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 text-center">
              <div className="text-8xl mb-8">✅</div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Booking Submitted!
              </h2>
              <p className="text-xl text-gray-300">
                You'll be redirected to WhatsApp to confirm your booking.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          {!submitted && (
            <div className="mt-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Get answers to common booking questions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    question: "How long does a wash take?",
                    answer:
                      "Basic Wash: 30-40 minutes | Interior Cleaning: 40-50 minutes | Full Service: 60-90 minutes",
                  },
                  {
                    question: "Do you provide water supply?",
                    answer:
                      "Yes, we bring our own water supply and equipment. No setup needed on your part.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "Mobile Money (Momo, Airtel Money), Cash, or Card transfers. Discuss with our team.",
                  },
                  {
                    question: "Can I reschedule my booking?",
                    answer:
                      "Yes! Contact us via WhatsApp at least 24 hours before your scheduled service.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
