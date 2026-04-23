import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt- borde border-gray-500">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 borde lg:py-40">
          <div className="text-center">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 border border-blue-300 mb-8 hover:bg-blue-100 transition-all duration-300">
              <span className="text-sm font-semibold text-blue-700">
                🚗 Premium Mobile Car Wash Service
              </span>
            </div> */}

            <h1 className="text-4xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent md:text-8xl font-black mb-8 leading-tight text-gray-900">
              Mission Word Express Enterprise
            </h1>

            <h1 className="text-4xl md:text-8xl font-black mb-8 leading-tight text-gray-900">
              Professional Cleaning
              <span className="block text-blue-600">
                Services at Your Doorstep
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Expert car washing and home cleaning services delivered to your
              location in Accra. We combine expertise, premium products, and
              convenience into one exceptional experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/book"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2"
              >
                <span>Book Your Wash Now</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                Learn Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
                  800+
                </div>
                <p className="text-gray-600 text-sm lg:text-base">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
                  3K+
                </div>
                <p className="text-gray-600 text-sm lg:text-base">
                  Services Completed
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
                  4.9★
                </div>
                <p className="text-gray-600 text-sm lg:text-base">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - New Section */}
      <section className="py-24 px-4 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the service that suits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "🚗 Mobile Car Wash",
                description:
                  "Professional car washing services delivered to your doorstep. From basic exterior wash to complete interior and exterior detailing.",
                icon: "🚗",
                cta: "Book Car Wash",
              },
              {
                title: "🧼 Home Cleaning",
                description:
                  "Expert home cleaning services for any space. Keep your home spotless with our professional cleaning team.",
                icon: "🧼",
                cta: "Book Home Cleaning",
              },
            ].map((service, idx) => (
              <Link key={idx} href="/book" className="group relative">
                <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer h-full flex flex-col">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 w-full">
                    {service.cta}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 px-4 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process designed for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {[
              {
                number: "01",
                title: "Choose Your Service",
                description:
                  "Select either car washing or home cleaning services tailored to your needs. From basic options to premium packages.",
                icon: "🎯",
              },
              {
                number: "02",
                title: "Book in Seconds",
                description:
                  "Use our intuitive booking system to schedule at your preferred time and location. Instant WhatsApp confirmation.",
                icon: "📱",
              },
              {
                number: "03",
                title: "We Arrive & Deliver",
                description:
                  "Our professional team arrives fully equipped at your location. Enjoy sparkling clean results every time.",
                icon: "✨",
              },
            ].map((step, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="text-6xl font-black text-blue-600 mb-4">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Car Wash */}
      <section className="py-24 px-4 relative bg-white">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Car Wash Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                popular: true,
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                {service.popular && (
                  <div className="absolute -top-5 z-[1000] left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative ${service.popular ? "bg-blue-600 text-white border border-blue-700" : "bg-white border border-gray-200 group-hover:border-gray-300"} rounded-3xl p-8 transition-all duration-300 shadow-md hover:shadow-lg h-full flex flex-col`}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>

                  <h3
                    className={`text-3xl font-bold ${service.popular ? "text-white" : "text-gray-900"} mb-6`}
                  >
                    {service.name}
                  </h3>

                  <div className="mb-8">
                    <div
                      className={`text-5xl font-black ${service.popular ? "text-blue-100" : "text-blue-600"}`}
                    >
                      GH₵{service.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${service.popular ? "text-blue-100" : "text-gray-700"}`}
                      >
                        <span className="text-green-500 font-bold mt-1 flex-shrink-0">
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
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
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

      {/* Pricing - Home Cleaning */}
      <section className="py-24 px-4 relative bg-gray-50">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Home Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Affordable packages for any home size and cleaning need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Cleaning",
                price: "150",
                icon: "🧹",
                features: [
                  "Living area & kitchen sweep",
                  "Bathroom cleaning",
                  "Dusting surfaces",
                  "~1-2 hours",
                ],
              },
              {
                name: "Deep Cleaning",
                price: "300",
                icon: "🧽",
                features: [
                  "Complete home cleaning",
                  "All surfaces scrubbed",
                  "Windows & mirrors",
                  "~3-4 hours",
                ],
              },
              {
                name: "Premium Cleaning",
                price: "500",
                icon: "✨",
                features: [
                  "Everything in Deep Cleaning",
                  "Carpet shampooing",
                  "Upholstery cleaning",
                  "~5-6 hours",
                ],
                popular: true,
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                {service.popular && (
                  <div className="absolute -top-5 z-[1000] left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative ${service.popular ? "bg-blue-600 text-white border border-blue-700" : "bg-white border border-gray-200 group-hover:border-gray-300"} rounded-3xl p-8 transition-all duration-300 shadow-md hover:shadow-lg h-full flex flex-col`}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>

                  <h3
                    className={`text-3xl font-bold ${service.popular ? "text-white" : "text-gray-900"} mb-6`}
                  >
                    {service.name}
                  </h3>

                  <div className="mb-8">
                    <div
                      className={`text-5xl font-black ${service.popular ? "text-blue-100" : "text-blue-600"}`}
                    >
                      GH₵{service.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${service.popular ? "text-blue-100" : "text-gray-700"}`}
                      >
                        <span className="text-green-500 font-bold mt-1 flex-shrink-0">
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
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
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
      <section className="py-24 px-4 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference premium service makes for both car wash
              and home cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Certified professionals with years of experience using premium equipment and eco-friendly products.",
                icon: "👨‍🔧",
              },
              {
                title: "Doorstep Service",
                description:
                  "We come to you. No waiting in line, no scheduling conflicts. Service at your convenience.",
                icon: "📍",
              },
              {
                title: "Quality Guarantee",
                description:
                  "100% satisfaction guaranteed. If you're not happy, we'll make it right at no extra cost.",
                icon: "🏆",
              },
              {
                title: "Eco-Friendly",
                description:
                  "We use environmentally responsible products that are safe for your car, family, and the planet.",
                icon: "🌱",
              },
              {
                title: "Fast & Reliable",
                description:
                  "Quick turnaround without compromising quality. We respect your time and deliver consistently.",
                icon: "⚡",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Premium service at competitive prices. Transparent pricing with no hidden charges.",
                icon: "💰",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-24 px-4 relative bg-white">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Loved by Our Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real customers in Accra who've used our car
              wash and home cleaning services
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
              <div key={idx} className="group">
                <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-24 px-4 relative bg-gradient-to-br from-blue-50 to-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
            Ready for Excellence?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust us with their car
            wash and home cleaning needs. Book your service experience today.
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
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <p className="text-gray-600 text-sm mt-8">
            ✓ Instant WhatsApp confirmation • ✓ Flexible scheduling • ✓ 100%
            satisfaction guarantee • ✓ Car Wash & Home Cleaning Services
          </p>
        </div>
      </section>
    </div>
  );
}
