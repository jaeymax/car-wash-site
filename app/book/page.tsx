"use client";

import { useState } from "react";
import { whatsappNumber } from "../constants";

export default function Book() {
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    phone: "",
    location: "",
    carType: "",
    service: "",
    cleaningType: "",
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

    // Create WhatsApp message based on service type
    let message = `Hello, I want to book a ${formData.serviceType === "car_wash" ? "car wash" : "home cleaning"} service.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}`;

    if (formData.serviceType === "car_wash") {
      message += `
Car Type: ${formData.carType}
Service: ${formData.service}`;
    } else {
      message += `
Cleaning Type: ${formData.cleaningType}`;
    }

    message += `
Preferred Time: ${formData.preferredTime || "Anytime"}
Notes: ${formData.notes || "None"}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="text-center">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 border border-blue-300 mb-8 hover:bg-blue-100 transition-all duration-300">
              <span className="text-sm font-semibold text-blue-700">
                📋 Quick Booking
              </span>
            </div> */}

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
              Book a Service
              <span className="block text-blue-600">Today</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Choose between our mobile car wash or home cleaning services and
              we'll send you a confirmation via WhatsApp instantly
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 px-4 relative bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
                <div className="mb-12">
                  <p className="text-center text-gray-600 text-lg">
                    All fields marked with{" "}
                    <span className="text-red-500 font-bold">*</span> are
                    required
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Type Selection */}
                  <div className="pb-8 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Select Service Type
                    </h2>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <label className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceType"
                            value="car_wash"
                            checked={formData.serviceType === "car_wash"}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <div
                            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                              formData.serviceType === "car_wash"
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <div className="text-3xl mb-2">🚗</div>
                            <div className="font-bold text-gray-900">
                              Mobile Car Wash
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Professional car cleaning
                            </div>
                          </div>
                        </label>

                        <label className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceType"
                            value="home_cleaning"
                            checked={formData.serviceType === "home_cleaning"}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <div
                            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                              formData.serviceType === "home_cleaning"
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <div className="text-3xl mb-2">🏠</div>
                            <div className="font-bold text-gray-900">
                              Home Cleaning
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Professional home cleaning
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Section */}
                  <div className="pb-8 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Your Information
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-900 mb-3"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                          placeholder="e.g., John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-900 mb-3"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                          placeholder="e.g., 024 123 4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-semibold text-gray-900 mb-3"
                        >
                          Location in Accra{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                          placeholder="e.g., East Legon, Cantonments"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details Section */}
                  {formData.serviceType && (
                    <div className="pb-8 border-b border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Service Details
                      </h2>

                      <div className="space-y-6">
                        {formData.serviceType === "car_wash" ? (
                          <>
                            <div>
                              <label
                                htmlFor="carType"
                                className="block text-sm font-semibold text-gray-900 mb-3"
                              >
                                Car Type{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                id="carType"
                                name="carType"
                                required={formData.serviceType === "car_wash"}
                                value={formData.carType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900"
                              >
                                <option value="">Select car type</option>
                                <option value="Saloon">Saloon</option>
                                <option value="SUV">SUV</option>
                                <option value="Pickup">Pickup</option>
                                <option value="Van">Van</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>

                            <div>
                              <label
                                htmlFor="service"
                                className="block text-sm font-semibold text-gray-900 mb-3"
                              >
                                Service Type{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                id="service"
                                name="service"
                                required={formData.serviceType === "car_wash"}
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900"
                              >
                                <option value="">Select service</option>
                                <option value="Basic Wash - GH₵ 50">
                                  Basic Wash - GH₵ 50
                                </option>
                                <option value="Interior Cleaning - GH₵ 80">
                                  Interior Cleaning - GH₵ 80
                                </option>
                                <option value="Full Wash - GH₵ 120">
                                  Full Wash - GH₵ 120
                                </option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <div>
                            <label
                              htmlFor="cleaningType"
                              className="block text-sm font-semibold text-gray-900 mb-3"
                            >
                              Cleaning Type{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="cleaningType"
                              name="cleaningType"
                              required={formData.serviceType === "home_cleaning"}
                              value={formData.cleaningType}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900"
                            >
                              <option value="">Select cleaning type</option>
                              <option value="Basic Cleaning - GH₵ 150">
                                Basic Cleaning - GH₵ 150
                              </option>
                              <option value="Deep Cleaning - GH₵ 300">
                                Deep Cleaning - GH₵ 300
                              </option>
                              <option value="Premium Cleaning - GH₵ 500">
                                Premium Cleaning - GH₵ 500
                              </option>
                            </select>
                          </div>
                        )}

                        <div>
                          <label
                            htmlFor="preferredTime"
                            className="block text-sm font-semibold text-gray-900 mb-3"
                          >
                            Preferred Date/Time
                          </label>
                          <input
                            type="datetime-local"
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Information Section */}
                  <div className="pb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Additional Information
                    </h2>

                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Special Requests or Instructions
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="e.g., There's a small dent on the door, handle with care. Please park in the driveway..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!formData.serviceType}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg hover:shadow-blue-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Send Booking via WhatsApp
                  </button>
                </form>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <p className="text-center text-gray-700 text-lg">
                    <span className="font-semibold text-blue-600">
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
            <div className="relative bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-lg">
              <div className="text-8xl mb-8">✅</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Booking Submitted!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                You'll be redirected to WhatsApp to confirm your{" "}
                {formData.serviceType === "car_wash" ? "car wash" : "home cleaning"}{" "}
                booking.
              </p>
              <p className="text-gray-600">
                Make sure WhatsApp is installed on your device.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          {!submitted && (
            <div className="mt-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get answers to common booking questions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {(formData.serviceType === "car_wash"
                  ? [
                      {
                        question: "How long does a car wash take?",
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
                    ]
                  : [
                      {
                        question: "How long does home cleaning take?",
                        answer:
                          "Basic: 1-2 hours | Deep: 3-4 hours | Premium: 5-6 hours (varies by home size)",
                      },
                      {
                        question: "What's included in cleaning?",
                        answer:
                          "Basic includes living areas and bathrooms. Deep includes deep scrubbing. Premium includes carpets and upholstery.",
                      },
                      {
                        question: "Do you bring cleaning supplies?",
                        answer:
                          "Yes! We bring all necessary cleaning supplies and equipment. No need to provide anything.",
                      },
                      {
                        question: "Can I reschedule my booking?",
                        answer:
                          "Yes! Contact us via WhatsApp at least 24 hours before your scheduled cleaning.",
                      },
                    ]
                  )
                  .map((faq, idx) => (
                    <div key={idx} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-50/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
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
