'use client'

import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 transition">
            <img src="/favicon-32x32.png" alt="Logo" className="w-8 h-8" />
            <h1 className="text-[#3a3a3a] text-xl font-bold">Andy David, MA, LPC</h1>
          </a>
          
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl"
            style={{ color: '#72827F' }}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="transition">About</a>
            <a href="#approach" className="transition">Approach</a>
            <a href="#who-i-serve" className="transition">Who I Serve</a>
            <a href="#services" className="transition">Services</a>
            <a href="#testimonials" className="transition">Testimonials</a>
            <a href="#contact" className="transition">Contact</a>
          </div>
        </div>

        {sidebarOpen && (
          <div className="md:hidden bg-gray-50" style={{ borderTop: '1px solid #e5e7eb' }}>
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" onClick={() => setSidebarOpen(false)}>About</a>
              <a href="#approach" onClick={() => setSidebarOpen(false)}>Approach</a>
              <a href="#who-i-serve" onClick={() => setSidebarOpen(false)}>Who I Serve</a>
              <a href="#services" onClick={() => setSidebarOpen(false)}>Services</a>
              <a href="#testimonials" onClick={() => setSidebarOpen(false)}>Testimonials</a>
              <a href="#contact" onClick={() => setSidebarOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Booking Form */}
      <section id="hero" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img 
            src="/images/logo.avif" 
            alt="Andy David Therapist" 
            className="mx-auto rounded-lg mb-3 object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p className="text-[#3a3a3a] text-xl mb-2">
            Licensed Professional Counselor, MA
          </p>
          <p className="text-[#72827F] font-semibold mb-8">
            IFS-Informed Therapist
          </p>

          <img 
            src="/images/andy.avif" 
            alt="Andy David" 
            className="w-64 h-64 mx-auto rounded-lg mb-3 object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          {/* Psychology Today */}
          <div className="w-full text-center" style={{ maxWidth: '100%' }}>
            <a 
              href="https://www.psychologytoday.com/us/therapists/andy-david-austin-tx/455315" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="/images/verified.png" 
                alt="Verified by Psychology Today"
                style={{ margin: '0 auto 15px' }}
              />
            </a>
          </div>
          
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#72827F' }}>
            I'm here to create a safe, brave, active space for your journey towards healing and growth. 
            We all have seasons of life where we feel overwhelmed, depressed, anxious, or out of sync in relationships.
          </p>

          <p className="max-w-2xl mx-auto mb-12" style={{ color: '#72827F' }}>
            But there is a pathway to becoming the most authentic version of yourself. Your life has meaning and purpose. 
            Let's find it, together.
          </p>

          <a href="#contact" className="inline-block px-8 py-3 font-semibold hover:opacity-90 transition mb-12" style={{ backgroundColor: '#78A3C3', color: '#ffffff' }}>
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            About Andy
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded bg-gray-50" style={{ borderLeft: '4px solid #78A3C3' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">
                Qualifications & Credentials
              </h4>
              <ul className="space-y-4" style={{ color: '#72827F' }}>
                <li>
                  <span className="font-semibold">Licensed Professional Counselor, MA</span><br />
                  <span className="text-sm">State of Texas License #81023</span>
                </li>
                <li style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                  <span className="font-semibold">Verified by Psychology Today</span>
                </li>
                <li style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                  <span className="font-semibold">In Practice Since 2015</span><br />
                  <span className="text-sm">11 years of clinical experience</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded bg-gray-50" style={{ borderLeft: '4px solid #78A3C3' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">
                Education & Training
              </h4>
              <ul className="space-y-4" style={{ color: '#72827F' }}>
                <li>
                  <span className="font-semibold">Master of Arts in Counseling</span><br />
                  <span className="text-sm">Seminary of the Southwest • Graduated 2015</span>
                </li>
                <li style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                  <span className="font-semibold">IFS Institute Certificate</span><br />
                  <span className="text-sm">Internal Family Systems training</span>
                </li>
                <li style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                  <span className="font-semibold">IFS Informed Therapist</span><br />
                  <span className="text-sm">Certified since 2022 • IFS Online Circle 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            My Approach to Therapy
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="p-6 rounded border-l-4" style={{ borderColor: '#78A3C3', backgroundColor: 'white' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">
                Active, Brave Space
              </h4>
              <p style={{ color: '#72827F' }} className="leading-relaxed">
                Clients appreciate that I don't just provide a safe space to process feelings (which is great!), 
                but an active, brave space where I offer new perspectives and frameworks for seeing. I work collaboratively 
                with you to break problems into smaller pieces by addressing the different parts inside of you—staying 
                nonjudgmental and curious to understand them more deeply.
              </p>
            </div>

            <div className="p-6 rounded border-l-4" style={{ borderColor: '#78A3C3', backgroundColor: 'white' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">
                Internal Family Systems (IFS)
              </h4>
              <p style={{ color: '#72827F' }} className="leading-relaxed">
                I'm an IFS-informed therapist, meaning I utilize the IFS perspective along with an eclectic mix of modalities 
                including Family Systems, relational, somatic, and trauma-informed approaches. Relationships follow patterns from 
                the past, and they forge unique "parts" within us. If we slow down and learn more about each part, we can help them heal. 
                And when they heal, you become in harmony with yourself and others.
              </p>
            </div>

            <div className="p-6 rounded border-l-4" style={{ borderColor: '#78A3C3', backgroundColor: 'white' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">
                Your Potential
              </h4>
              <p style={{ color: '#72827F' }} className="leading-relaxed italic">
                "You have the potential within to heal yourself. Let's find it!"
              </p>
              <p style={{ color: '#72827F' }} className="mt-4">
                Together, we can chart a new path of hope for your life. We can take steps toward positive change 
                and a more intentional way of living into who you really are—your True Self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help / Specialties */}
      <section id="who-i-serve" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            Who I Serve & What I Help With
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded border" style={{ borderColor: '#e5e7eb' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4 pb-4" style={{borderBottom: '2px solid #D5E1DF' }}>
                Primary Issues
              </h4>
              <ul className="space-y-2" style={{ color: '#72827F' }}>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Relationship Issues & Communication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Depression & Anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Religious Trauma & Deconstruction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Burnout & Stress</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Life Transitions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded border" style={{ borderColor: '#e5e7eb' }}>
              <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4 pb-4" style={{borderBottom: '2px solid #D5E1DF' }}>
                Who I Work With
              </h4>
              <ul className="space-y-2" style={{ color: '#72827F' }}>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Adults (all ages)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Individuals, Couples & Groups</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>LGBTQ+ Allied</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Racial Justice Allied</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Christians & Spiritual Seekers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✦</span>
                  <span>Veterans</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Expertise */}
          <div className="p-8 rounded bg-gray-50 border-l-4" style={{ borderColor: '#78A3C3' }}>
            <h4 className="text-[#3a3a3a] text-lg font-semibold mb-6">
              Additional Areas of Expertise
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-4 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Issues</p>
                <ul className="text-sm space-y-1" style={{ color: '#72827F' }}>
                  <li>• Adjustment Issues</li>
                  <li>• Coping Skills</li>
                  <li>• Emotional Disturbance</li>
                  <li>• Grief & Loss</li>
                  <li>• Infidelity & Trust</li>
                  <li>• Marital & Premarital</li>
                  <li>• Men's Issues</li>
                  <li>• Parenting</li>
                  <li>• Self Esteem</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-4 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Therapy Modalities</p>
                <ul className="text-sm space-y-1" style={{ color: '#72827F' }}>
                  <li>• Attachment-Based</li>
                  <li>• CBT</li>
                  <li>• Eclectic</li>
                  <li>• Emotionally Focused</li>
                  <li>• Existential</li>
                  <li>• Experiential</li>
                  <li>• Family/Marital Systems</li>
                  <li>• Feminist</li>
                  <li>• Gottman Method</li>
                  <li>• IFS</li>
                  <li>• Music Therapy</li>
                  <li>• Person-Centered</li>
                  <li>• Relational</li>
                  <li>• Somatic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Details */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            Services & Details
          </h3>

          {/* Pricing */}
          <div className="p-8 rounded mb-8 border-l-4 bg-white" style={{ borderColor: '#78A3C3' }}>
            <h4 className="text-[#3a3a3a] text-lg font-semibold mb-6">Pricing & Payment</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-4 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Session Fees</p>
                <div className="space-y-3" style={{ color: '#72827F' }}>
                  <div>
                    <p className="font-semibold">Individual Sessions</p>
                    <p className="text-2xl">$160</p>
                  </div>
                  <div>
                    <p className="font-semibold">Couple Sessions</p>
                    <p className="text-2xl">$160</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Payment Methods Accepted</p>
                <ul className="space-y-1" style={{ color: '#72827F' }}>
                  <li>• American Express</li>
                  <li>• Cash</li>
                  <li>• Check</li>
                  <li>• Mastercard</li>
                  <li>• Visa</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="p-8 rounded mb-8 border-l-4 bg-white" style={{ borderColor: '#78A3C3' }}>
            <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">Insurance</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-3 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>In-Network Providers</p>
                <ul className="space-y-1 text-sm" style={{ color: '#72827F' }}>
                  <li>• Aetna</li>
                  <li>• Optum</li>
                  <li>• Oscar Health</li>
                  <li>• Oxford</li>
                  <li>• UnitedHealthcare UHC | UBH</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-3 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Other Options</p>
                <p className="text-sm" style={{ color: '#72827F' }}>Out of Network available</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="p-8 rounded mb-8 border-l-4 bg-white" style={{ borderColor: '#78A3C3' }}>
            <h4 className="text-[#3a3a3a] text-lg font-semibold mb-6">Availability & Response</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-3 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Session Availability</p>
                <div className="space-y-3 text-sm" style={{ color: '#72827F' }}>
                  <div>
                    <p className="font-semibold">In-Person</p>
                    <p>Mondays & Wednesdays<br />10am - 4pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">Online</p>
                    <p>Fridays<br />10am - 4pm</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-3 pb-3" style={{ color: '#72827F', borderBottom: '1px solid #e5e7eb' }}>Contact Response</p>
                <p className="text-sm" style={{ color: '#72827F' }}>
                  Typically 1-2 business days, often the same day
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="p-8 rounded border-l-4 bg-white" style={{ borderColor: '#78A3C3' }}>
            <h4 className="text-[#3a3a3a] text-lg font-semibold mb-4">In-Person Location</h4>
            <p style={{ color: '#72827F' }} className="mb-2">
              4131 Spicewood Springs Road<br />
              Bldg. N-12<br />
              Austin, TX 78759
            </p>
            <p style={{ color: '#72827F' }} className="text-sm">
              Near Anderson Lane and Mopac (just south of The Arboretum)<br />
              Serving North Austin and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            What Others Say
          </h3>

          <div className="p-8 md:p-12 rounded border-l-4 bg-gray-50" style={{ borderColor: '#78A3C3' }}>
            <p className="text-lg mb-6 italic" style={{ color: '#72827F' }}>
              "I was lucky enough to work with Andy while we were associates under the same supervisor. 
              He is one of a kind. Intuitive, patient, wholehearted, and funny. 
              I would highly recommend working with him. He's one of the good ones."
            </p>
            <p className="font-semibold" style={{ color: '#72827F' }}>
              Kaylia Schunemann
            </p>
            <p className="text-sm" style={{ color: '#72827F' }}>
              Licensed Professional Counselor, LPC
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center" style={{ color: '#72827F' }}>
            Get in Touch
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded bg-white border-l-4" style={{ borderColor: '#78A3C3' }}>
              <div className="space-y-6">
                <div>
                  <p className="text-[#3a3a3a] font-semibold mb-2">Phone</p>
                  <a href="tel:+15128427572" className="transition text-lg">
                    512.842.7572
                  </a>
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                  <p className="text-[#3a3a3a] font-semibold mb-2">Email</p>
                  <a href="mailto:andy@andy-david.com" className="transition">
                    andy@andy-david.com
                  </a>
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                  <p className="text-[#3a3a3a] font-semibold mb-2">Address</p>
                  <p style={{ color: '#72827F' }}>
                    4131 Spicewood Springs Road<br />
                    Bldg. N-12<br />
                    Austin, TX 78759
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                  <p className="text-[#3a3a3a] font-semibold mb-2">Hours</p>
                  <p style={{ color: '#72827F' }} className="text-sm">
                    In-person: Mon & Wed (10am-4pm)<br />
                    Online: Fri (10am-4pm)<br />
                    Response: 1-2 business days
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded bg-white border-l-4" style={{ borderColor: '#78A3C3' }}>
              <p className="text-[#3a3a3a] font-semibold mb-4">Schedule a Consultation</p>
              <p className="mb-6 text-sm" style={{ color: '#72827F' }}>
                Ready to begin your journey? Book a free 15-minute phone consultation below.
              </p>
              <div style={{ minHeight: '400px' }}>
                <iframe
                  src="https://calendly.com/luna-theaiassistant/free-consultation?month=2026-03"
                  width="100%"
                  height="400"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-sm" style={{ color: '#72827F' }}>
          <p className="mb-4">
            © 2026 Andy David Counseling. All rights reserved.
          </p>
          <p className="mb-4">
            <strong>Notice:</strong> This website is not a substitute for professional mental health care. 
            If you're in crisis, please contact a mental health emergency service.
          </p>
          <p>
            <a href="tel:+19884255000" className="transition font-semibold">
              National Suicide Prevention Lifeline: 988
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
