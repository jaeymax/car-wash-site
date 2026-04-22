import Link from "next/link";

export default function Contact() {
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
                📞 Get in Touch
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
              Let's Connect
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                With You
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Have questions about our services? Want to book your first car
              wash? We're here and ready to assist you. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Connect with us through any of these channels. We're available
                  to answer your questions and help you schedule your car wash
                  service.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "📱",
                    title: "Phone",
                    description: "Call us directly for immediate assistance",
                    contact: "+233 XX XXX XXXX",
                    link: "tel:+233XXXXXXXXX",
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    icon: "💬",
                    title: "WhatsApp",
                    description: "Chat with us instantly for quick bookings",
                    contact: "Chat with us on WhatsApp",
                    link: "https://wa.me/233XXXXXXXXX",
                    color: "from-green-600 to-emerald-600",
                    external: true,
                  },
                  {
                    icon: "🕒",
                    title: "Business Hours",
                    description: "Monday - Saturday",
                    contact: "8:00 AM - 6:00 PM",
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    icon: "📍",
                    title: "Service Area",
                    description: "We serve the entire Accra metropolitan area",
                    contact: "Accra, Ghana",
                    color: "from-orange-600 to-red-600",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}
                    ></div>
                    <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-lg mb-4">
                            {item.description}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className={`${item.external ? "inline-flex items-center gap-2" : ""} font-semibold text-lg transition-colors hover:text-blue-300`}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {item.external && item.icon === "💬" && (
                                <span>💬</span>
                              )}
                              {item.contact}
                            </a>
                          ) : (
                            <p className="text-white font-semibold text-lg">
                              {item.contact}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div>
              <div className="mb-12">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Ready to Book?
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Our online booking system makes it easy to schedule your car
                  wash service in just a few minutes. Get instant WhatsApp
                  confirmation!
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mb-8 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
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
                    className="group inline-flex bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl gap-2"
                  >
                    <span>Book Your Wash Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
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
                      <div className="bg-green-500/20 border border-green-500/50 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-400 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 border border-gray-700/50 backdrop-blur-xl rounded-3xl p-8 lg:p-16">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Our Service Area
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Professional mobile car washing throughout Accra
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
                    <div className="text-6xl mb-6">🚗</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Mobile Service
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Our fully equipped team travels to your location for
                      maximum convenience. Whether at home, work, or anywhere in
                      Accra, we bring professional car cleaning services
                      directly to you.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: "🏠",
                      title: "Residential Areas",
                      description: "Home driveway service",
                      color: "from-blue-600 to-cyan-600",
                    },
                    {
                      icon: "🏢",
                      title: "Business Districts",
                      description: "Office parking lots",
                      color: "from-green-600 to-emerald-600",
                    },
                    {
                      icon: "🛒",
                      title: "Shopping Centers",
                      description: "Mall parking areas",
                      color: "from-purple-600 to-pink-600",
                    },
                    {
                      icon: "🏘️",
                      title: "Residential Estates",
                      description: "Gated communities",
                      color: "from-orange-600 to-red-600",
                    },
                  ].map((location, idx) => (
                    <div key={idx} className="group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${location.color} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-300`}
                      ></div>
                      <div className="relative flex items-center space-x-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300">
                        <div className="text-3xl flex-shrink-0">
                          {location.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">
                            {location.title}
                          </h4>
                          <p className="text-gray-400">
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
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Get Started Today
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Whether you have questions or are ready to book, we're here to help.
            Reach out now and let's get your car looking amazing!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <a
              href="https://wa.me/233XXXXXXXXX"
              className="border-2 border-blue-500/50 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            ✓ Quick Response • ✓ Professional Service • ✓ Flexible Scheduling
          </p>
        </div>
      </section>
    </div>
  );
}
