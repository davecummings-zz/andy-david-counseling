'use client'

import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Andy David</h1>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl text-gray-600"
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-sage transition">About</a>
            <a href="#services" className="hover:text-sage transition">Services</a>
            <a href="#testimonials" className="hover:text-sage transition">Testimonials</a>
            <a href="#contact" className="hover:text-sage transition">Contact</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {sidebarOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="text-gray-700 hover:text-sage" onClick={() => setSidebarOpen(false)}>About</a>
              <a href="#services" className="text-gray-700 hover:text-sage" onClick={() => setSidebarOpen(false)}>Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-sage" onClick={() => setSidebarOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-sage" onClick={() => setSidebarOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-white via-sage/5 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-2 text-gray-900">
            Andy David
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Licensed Professional Counselor, MA
          </p>
          <p className="text-sage font-semibold mb-8">
            IFS-Informed Therapist
          </p>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm here to create a safe, brave, active space for your journey towards healing and growth. 
            We all have seasons of life where we feel overwhelmed, depressed, anxious, or out of sync in relationships.
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            But there is a pathway to becoming the most authentic version of yourself. Your life has meaning and purpose. 
            Let's find it, together.
          </p>

          <a
            href="#calendly"
            className="inline-block px-8 py-3 bg-sage text-gray-900 font-semibold hover:bg-sage-dark transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            About My Approach
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Internal Family Systems (IFS)
              </h4>
              <p className="text-gray-700 mb-6">
                Learning why we do what we do is important, but then comes that key question of what to do with that information. 
                My goal is to create a safe space for self-discovery, but also an active space—a brave space in which we explore 
                new perspectives and frameworks for seeing.
              </p>
              <p className="text-gray-700">
                Relationships follow a pattern from the past. And they do so by forging unique "parts" within us. 
                You may find that you bounce between one extreme thought or feeling and its opposite. 
                If we slow down and learn more about each part, we can help the parts heal. 
                And when they heal, you become in harmony with yourself and others.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Your True Self
              </h4>
              <p className="text-gray-700 mb-6">
                Together, we can chart a new path of hope for your life. 
                We can take steps toward positive change and a more intentional way of living into who you really are—your True Self.
              </p>
              <div className="bg-sage/10 p-6 rounded">
                <p className="text-gray-900 font-semibold mb-2">Take heart. Take courage.</p>
                <p className="text-gray-700 text-sm">
                  Reach out for a free phone consultation today.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-16 pt-16 border-t border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Credentials & Experience
            </h4>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-sage font-semibold mb-2">Licensed Professional Counselor</p>
                <p className="text-gray-600">Texas LPC License</p>
              </div>
              <div>
                <p className="text-sage font-semibold mb-2">Master's Degree</p>
                <p className="text-gray-600">in Counseling</p>
              </div>
              <div>
                <p className="text-sage font-semibold mb-2">IFS Certified</p>
                <p className="text-gray-600">Internal Family Systems Training</p>
              </div>
              <div>
                <p className="text-sage font-semibold mb-2">Practicing Since</p>
                <p className="text-gray-600">2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-sage/5">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Services
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sage mr-3 font-bold">→</span>
                  <span>Relationship Issues & Conflict</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 font-bold">→</span>
                  <span>Depression & Anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 font-bold">→</span>
                  <span>Religious Trauma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 font-bold">→</span>
                  <span>Stagnation & Burnout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage mr-3 font-bold">→</span>
                  <span>Personal Growth & Development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Session Formats</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Individual Therapy</p>
                  <p className="text-gray-600 text-sm">For personal growth and healing</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Couples Counseling</p>
                  <p className="text-gray-600 text-sm">For relationship enhancement</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Group Therapy</p>
                  <p className="text-gray-600 text-sm">For shared experiences & support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Logistics */}
          <div className="bg-white p-8 rounded text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sage font-semibold text-2xl mb-2">$160</p>
                <p className="text-gray-600">Per Session</p>
              </div>
              <div>
                <p className="text-sage font-semibold text-lg mb-2">Insurance Accepted</p>
                <p className="text-gray-600 text-sm">Check your coverage</p>
              </div>
              <div>
                <p className="text-sage font-semibold text-lg mb-2">Flexible Formats</p>
                <p className="text-gray-600 text-sm">In-person • Video • Phone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            What Others Say
          </h3>

          <div className="bg-sage/10 p-8 md:p-12 rounded">
            <p className="text-lg text-gray-700 mb-6 italic">
              "I was lucky enough to work with Andy while we were associates under the same supervisor. 
              He is one of a kind. Intuitive, patient, wholehearted, and funny. 
              I would highly recommend working with him. He's one of the good ones."
            </p>
            <p className="font-semibold text-gray-900">
              Kaylia Schunemann
            </p>
            <p className="text-gray-600 text-sm">
              Licensed Professional Counselor, LPC
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="py-16 md:py-24 bg-sage/5">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Schedule Your Free Consultation
          </h3>

          <div className="bg-white p-8 rounded text-center">
            <p className="text-gray-700 mb-8">
              Ready to begin your journey? Schedule a free 15-minute phone consultation to see if we're a good fit.
            </p>
            <div className="inline-block w-full max-w-2xl">
              <iframe
                src="https://calendly.com/your-calendly-username/free-consultation"
                width="100%"
                height="600"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Note: Replace the Calendly link with your actual calendar URL
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Get in Touch
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-sage font-semibold mb-2">Phone</p>
                <a href="tel:+17372153986" className="text-gray-700 hover:text-sage transition">
                  (737) 215-3986
                </a>
              </div>

              <div>
                <p className="text-sage font-semibold mb-2">Address</p>
                <p className="text-gray-700">
                  4131 Spicewood Springs Road<br />
                  Bldg. N-12<br />
                  Austin, TX 78759
                </p>
              </div>

              <div>
                <p className="text-sage font-semibold mb-2">Availability</p>
                <p className="text-gray-700">
                  In-person & online sessions<br />
                  (phone, video, in-person)
                </p>
              </div>
            </div>

            <div>
              <p className="text-sage font-semibold mb-4">Live Chat Support</p>
              <p className="text-gray-600 mb-4">
                Have questions? Start a live chat with our support team using Tidio.
              </p>
              <div className="bg-sage/10 p-6 rounded text-sm text-gray-600">
                <p className="mb-2">Tidio Live Chat Widget</p>
                <p className="text-xs">(To be integrated - Tidio embed code will go here)</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="rounded overflow-hidden h-96 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.8557451413387!2d-97.80156292346863!3d30.3878876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca6c0c0c0c0d%3A0x1234567890abcdef!2s4131%20Spicewood%20Springs%20Rd%2C%20Austin%2C%20TX%2078759!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p className="mb-4">
            © 2026 Andy David Counseling. All rights reserved.
          </p>
          <p className="mb-4">
            <strong>Notice:</strong> This website is not a substitute for professional mental health care. 
            If you're in crisis, please contact a mental health emergency service.
          </p>
          <p>
            <a href="tel:+19884255000" className="text-sage hover:text-sage-dark transition">
              National Suicide Prevention Lifeline: 988
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
