import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-40">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 mb-8 hover:bg-blue-500/20 transition-all duration-300">
              <span className="text-sm font-semibold text-blue-300">
                🚗 Premium Mobile Car Wash Service
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
              Your Car Deserves
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Premium Care
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Professional car washing services delivered to your doorstep in
              Accra. We combine expertise, premium products, and convenience
              into one exceptional experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/book"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                <span>Book Your Wash Now</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="border-2 border-blue-500/50 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              >
                Learn Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  500+
                </div>
                <p className="text-gray-400 text-sm lg:text-base">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  2K+
                </div>
                <p className="text-gray-400 text-sm lg:text-base">
                  Cars Washed
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-2">
                  4.9★
                </div>
                <p className="text-gray-400 text-sm lg:text-base">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, transparent process designed for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {[
              {
                number: "01",
                title: "Choose Your Service",
                description:
                  "Select from our premium packages tailored to your car's needs. From basic exterior wash to full detailing.",
                icon: "🎯",
                color: "from-blue-600 to-blue-500",
              },
              {
                number: "02",
                title: "Book in Seconds",
                description:
                  "Use our intuitive booking system to schedule at your preferred time. Instant WhatsApp confirmation.",
                icon: "📱",
                color: "from-purple-600 to-purple-500",
              },
              {
                number: "03",
                title: "We Arrive & Deliver",
                description:
                  "Our professional team arrives fully equipped at your location. Enjoy sparkling clean results.",
                icon: "✨",
                color: "from-pink-600 to-pink-500",
              },
            ].map((step, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing - Premium */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Premium packages designed for every vehicle and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Wash",
                price: "50",
                icon: "🚿",
                features: [
                  "Exterior wash & rinse",
                  "Wheel & tire cleaning",
                  "Quick dry service",
                  "~30-40 minutes",
                ],
                color: "from-blue-600 to-cyan-600",
              },
              {
                name: "Interior Cleaning",
                price: "80",
                icon: "🧼",
                features: [
                  "Complete interior vacuum",
                  "Dashboard & console wipe",
                  "Window cleaning (inside)",
                  "~40-50 minutes",
                ],
                color: "from-green-600 to-emerald-600",
              },
              {
                name: "Full Service Wash",
                price: "120",
                icon: "✨",
                features: [
                  "Everything in Basic Wash",
                  "Complete Interior Cleaning",
                  "Wax protection & tire shine",
                  "~60-90 minutes",
                ],
                color: "from-purple-600 to-pink-600",
                popular: true,
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                {service.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-300`}
                ></div>

                <div
                  className={`relative bg-gradient-to-br ${service.popular ? "from-purple-900/80 to-gray-900/80" : "from-gray-800/60 to-gray-900/60"} backdrop-blur-xl border ${service.popular ? "border-purple-500/50" : "border-gray-700/50"} group-hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    {service.name}
                  </h3>

                  <div className="mb-8">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      GH₵{service.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400 font-bold mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book"
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      service.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-2xl"
                        : "bg-blue-600/80 text-white hover:bg-blue-600 border border-blue-500/50"
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the difference premium service makes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Certified professionals with years of experience using premium equipment and eco-friendly products.",
                icon: "👨‍🔧",
                gradient: "from-blue-600 to-cyan-600",
              },
              {
                title: "Doorstep Service",
                description:
                  "We come to you. No waiting in line, no scheduling conflicts. Service at your convenience.",
                icon: "📍",
                gradient: "from-green-600 to-emerald-600",
              },
              {
                title: "Quality Guarantee",
                description:
                  "100% satisfaction guaranteed. If you're not happy, we'll make it right at no extra cost.",
                icon: "🏆",
                gradient: "from-orange-600 to-red-600",
              },
              {
                title: "Eco-Friendly",
                description:
                  "We use environmentally responsible products that are safe for your car, family, and the planet.",
                icon: "🌱",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                title: "Fast & Reliable",
                description:
                  "Quick turnaround without compromising quality. We respect your time and deliver consistently.",
                icon: "⚡",
                gradient: "from-violet-600 to-purple-600",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Premium service at competitive prices. Transparent pricing with no hidden charges.",
                icon: "💰",
                gradient: "from-pink-600 to-rose-600",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}
                ></div>
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Loved by Our Customers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real feedback from real customers in Accra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amelia Johnson",
                role: "East Legon",
                rating: 5,
                text: "Outstanding service! They arrived exactly on time and transformed my car completely. The attention to detail is incredible. I've already recommended them to all my friends!",
                avatar: "A",
              },
              {
                name: "Kwame Mensah",
                role: "Osu, Accra",
                rating: 5,
                text: "Best car wash experience I've had in Accra. Professional, friendly staff and the results are impeccable. Worth every cedi!",
                avatar: "K",
              },
              {
                name: "Grace Owusu",
                role: "Cantonments",
                rating: 5,
                text: "Finally found a car wash service I can trust. They treat my car like it's their own. Highly recommend to everyone!",
                avatar: "G",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Ready for Excellence?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust us with their
            vehicles. Book your premium car wash experience today.
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
            <Link
              href="/contact"
              className="border-2 border-blue-500/50 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            ✓ Instant WhatsApp confirmation • ✓ Flexible scheduling • ✓ 100%
            satisfaction guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
