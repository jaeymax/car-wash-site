import Link from "next/link";

export default function About() {
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
                ℹ️ About Our Service
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
              About Car Wash at Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Doorstep
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Learn more about our mission to revolutionize car cleaning
              services in Accra, Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to make car cleaning convenient,
                professional, and accessible
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-3xl p-8 lg:p-16 transition-all duration-300">
                <div className="text-center">
                  <div className="text-8xl mb-8">🎯</div>
                  <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light max-w-2xl mx-auto">
                    To provide convenient, professional car washing services
                    directly at our customers' doorsteps in Accra, Ghana. We
                    believe everyone deserves a clean, well-maintained vehicle
                    without the hassle of traditional car wash centers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover what sets our service apart from the competition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏠",
                  title: "Ultimate Convenience",
                  description:
                    "We come to you - home, office, or anywhere in Accra. No need to drive to a car wash center.",
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  icon: "👨‍🔧",
                  title: "Professional Service",
                  description:
                    "Our experienced team uses premium equipment and techniques for exceptional results.",
                  color: "from-green-600 to-emerald-600",
                },
                {
                  icon: "🌱",
                  title: "Eco-Friendly",
                  description:
                    "We use environmentally friendly cleaning products that are safe for your car and the planet.",
                  color: "from-emerald-600 to-teal-600",
                },
                {
                  icon: "⏰",
                  title: "Reliable & Punctual",
                  description:
                    "We respect your time with clear communication and consistent, on-time service delivery.",
                  color: "from-orange-600 to-red-600",
                },
                {
                  icon: "💰",
                  title: "Affordable Pricing",
                  description:
                    "Competitive pricing that fits all budgets without compromising on quality or service.",
                  color: "from-pink-600 to-rose-600",
                },
                {
                  icon: "⭐",
                  title: "Premium Experience",
                  description:
                    "Every service comes with our commitment to excellence and customer satisfaction guarantee.",
                  color: "from-purple-600 to-violet-600",
                },
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 h-full">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive car cleaning services tailored to your specific
                needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚿",
                  title: "Basic Wash",
                  price: "GH₵ 50",
                  features: [
                    "Exterior cleaning & rinse",
                    "Wheel & tire cleaning",
                    "Quick dry service",
                  ],
                  color: "from-blue-600 to-cyan-600",
                  isPrimary: false,
                },
                {
                  icon: "🧼",
                  title: "Interior Cleaning",
                  price: "GH₵ 80",
                  features: [
                    "Complete interior vacuum",
                    "Dashboard & console wipe",
                    "Window cleaning inside",
                  ],
                  color: "from-green-600 to-emerald-600",
                  isPrimary: false,
                },
                {
                  icon: "✨",
                  title: "Full Service Wash",
                  price: "GH₵ 120",
                  badge: "Most Popular",
                  features: [
                    "Everything in Basic Wash",
                    "Complete Interior Cleaning",
                    "Wax protection & tire shine",
                  ],
                  color: "from-purple-600 to-pink-600",
                  isPrimary: true,
                },
              ].map((service, idx) => (
                <div key={idx} className="group relative">
                  {service.isPrimary ? (
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-300`}
                    ></div>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}
                    ></div>
                  )}

                  {service.isPrimary ? (
                    <div className="relative bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl p-8 transition-all duration-300 h-full border border-purple-500/50">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <div className="text-4xl font-black text-pink-200 mb-4">
                        {service.price}
                      </div>
                      {service.badge && (
                        <div className="inline-block bg-yellow-400/80 text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                          {service.badge}
                        </div>
                      )}
                      <div className="space-y-3">
                        {service.features.map((feature, fidx) => (
                          <div
                            key={fidx}
                            className="flex items-center gap-3 text-purple-100"
                          >
                            <span className="text-yellow-300 font-bold">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 h-full">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <div className="text-3xl font-bold text-blue-400 mb-6">
                        {service.price}
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, fidx) => (
                          <div
                            key={fidx}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <span className="text-green-400 font-bold">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 border border-gray-700/50 backdrop-blur-xl rounded-3xl p-8 lg:p-16">
              <div className="text-center">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                  Ready to Experience
                  <br />
                  the Difference?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Join hundreds of satisfied customers in Accra who trust us
                  with their car cleaning needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/book"
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                  >
                    <span>Book Your Service Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-blue-500/50 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
