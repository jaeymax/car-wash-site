import Link from "next/link";
import { whatsappNumber } from "../constants";

export default function Contact() {
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
                📞 Get in Touch
              </span>
            </div> */}

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
              Let's Connect
              <span className="block text-blue-600">With You</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Have questions about our car wash or home cleaning services? Want
              to book? We're here and ready to assist you. Reach out to us
              today!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with us through any of these channels. We're available
                  to answer your questions and help you schedule your car wash
                  or home cleaning service.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "📱",
                    title: "Phone",
                    description: "Call us directly for immediate assistance",
                    contact: "+233535909835\n+233506605648\n+233243733956",
                    link: "tel:+233535909835",
                  },
                  {
                    icon: "💬",
                    title: "WhatsApp",
                    description: "Chat with us instantly for quick bookings",
                    contact: "Chat with us on WhatsApp",
                    link: `https://wa.me/${whatsappNumber}`,
                    external: true,
                  },
                  {
                    icon: "🕒",
                    title: "Business Hours",
                    description: "Monday - Saturday",
                    contact: "8:00 AM - 6:00 PM",
                  },
                  {
                    icon: "📍",
                    title: "Service Area",
                    description: "We serve the entire Accra metropolitan area",
                    contact: "Accra, Ghana",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    {item.external ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                              {item.description}
                            </p>
                            <p className="text-blue-600 font-semibold text-lg">
                              {item.contact}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        className="block bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                              {item.description}
                            </p>
                            <p className="text-blue-600 font-semibold text-lg">
                              {item.contact}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="block bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                              {item.description}
                            </p>
                            <p className="text-gray-900 font-semibold text-lg">
                              {item.contact}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div>
              <div className="mb-12">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  Ready to Book?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our online booking system makes it easy to schedule your car
                  wash or home cleaning service in just a few minutes. Get
                  instant WhatsApp confirmation!
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mb-8 group shadow-lg">
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-6">
                    Start Your Booking
                  </h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Click below to access our simple online booking system and
                    schedule your car wash at your preferred time.
                  </p>
                  <Link
                    href="/book"
                    className="group/btn inline-flex bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg gap-2"
                  >
                    <span>Book a Service Now</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Book Online?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Quick & Easy Process",
                      description: "Complete your booking in under 2 minutes",
                    },
                    {
                      title: "Instant WhatsApp Confirmation",
                      description:
                        "Get immediate confirmation and order updates",
                    },
                    {
                      title: "Flexible Scheduling",
                      description:
                        "Choose the time and date that works for you",
                    },
                    {
                      title: "Direct Team Communication",
                      description: "Stay connected with our professional team",
                    },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="bg-green-100 border border-green-300 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-3xl p-8 lg:p-16">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  Our Service Area
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Professional mobile car washing and home cleaning throughout
                  Accra
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <div className="relative bg-white border border-gray-200 group-hover:border-blue-400 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="text-6xl mb-6">🚗</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Mobile Service
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Our fully equipped team travels to your location for
                      maximum convenience. Whether at home, work, or anywhere in
                      Accra, we bring professional car washing and home cleaning
                      services directly to you.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: "🏠",
                      title: "Residential Service",
                      description: "Home car wash & cleaning",
                    },
                    {
                      icon: "🏢",
                      title: "Business Districts",
                      description: "Office parking & cleaning",
                    },
                    {
                      icon: "🛒",
                      title: "Shopping Centers",
                      description: "Mall parking service",
                    },
                    {
                      icon: "🏘️",
                      title: "Residential Estates",
                      description: "Gated community service",
                    },
                  ].map((location, idx) => (
                    <div key={idx} className="group">
                      <div className="relative flex items-center space-x-4 bg-white border border-gray-200 group-hover:border-gray-300 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div className="text-3xl flex-shrink-0">
                          {location.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {location.title}
                          </h4>
                          <p className="text-gray-600">
                            {location.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative bg-gradient-to-br from-blue-50 to-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
            Get Started Today
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed">
            Whether you have questions or are ready to book your car wash or
            home cleaning service, we're here to help. Reach out now and let's
            get started!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-gray-600 text-sm mt-8">
            ✓ Quick Response • ✓ Professional Service • ✓ Flexible Scheduling
          </p>
        </div>
      </section>
    </div>
  );
}
