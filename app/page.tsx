"use client";

import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  FileText, 
  TrendingUp,
  Star,
  ChevronRight,
  Building,
  User,
  Shield,
  CreditCard
} from 'lucide-react';

const FEE_STRUCTURE: Record<string, string> = {
  '': '0',
  'Growth Bundle': '12,999',
  'Private Limited Company': '7,999',
  'LLP Registration': '5,999',
  'OPC Registration': '6,999',
  'Sole Proprietorship': '1,999',
  'GST Registration': '1,499'
};

export default function App() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    service: '',
    timeline: ''
  });
  const [showFee, setShowFee] = useState(false);
  const [callQuery, setCallQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'service') {
      setShowFee(false); // Reset fee display when service changes until they click the button
    }
  };

  const handleCalculateFee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.service) {
      setShowFee(true);
    } else {
      alert("Please select a service first.");
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/918882935471?text=Hi%20Taxly,%20I%20am%20looking%20to%20register%20my%20business/GST.";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      
      {/* HEADER */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Building className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">Taxly India</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+918882935471" className="font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-2 transition-colors">
              <PhoneCall className="w-4 h-4" /> +91 88829 35471
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Register Your Company or GST in <span className="text-blue-600">7–10 Days</span> – Without Confusion
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium">
              Expert CA Support. Transparent Pricing. 100% Online Process.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
              >
                👉 Check Your Registration Cost
              </button>
              <a 
                href={whatsappLink}
                target="_blank" rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp Support
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-slate-500 font-medium mb-16">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>500+ Businesses Registered | 4.8★ Rated | Expert CA Team</span>
            </div>
          </div>

          {/* THE 3-IN-1 LAUNCHPAD (HERO VISUAL EXTENSION) */}
          <div className="text-center pt-8 border-t border-slate-100 mt-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">The 3–in–1 Launchpad</h2>
            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">Everything included in one professional fee.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
              {/* Card 1 */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                <div className="w-14 h-14 bg-[#e8efff] rounded-2xl flex items-center justify-center mb-6">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">CA-Led Registration</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">Pvt Ltd, LLP, or OPC registration with 100% accuracy and prompt Govt approval support.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
                <div className="w-14 h-14 bg-[#f3e8ff] rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Managed Compliance</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">Yearly GST & ROC compliance handled for you. Zero late fees, zero legal notices.</p>
              </div>

              {/* Card 3 (Highlighted) */}
              <div className="bg-blue-600 rounded-3xl p-8 shadow-2xl shadow-blue-600/30 text-white flex flex-col items-start transform md:-translate-y-3 transition-transform">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Free Billing Software</h3>
                <p className="text-blue-50 leading-relaxed text-sm md:text-base">Professional invoicing from Day 1. Compliant, lifetime-validity software included.</p>
              </div>
            </div>

            <button 
              onClick={scrollToForm} 
              className="mt-14 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold px-10 py-5 rounded-xl shadow-xl transition-all tracking-wider uppercase text-sm md:text-base relative overflow-hidden group"
            >
              <span className="relative z-10">Claim Your Growth Bundle</span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </div>
        </div>
      </section>

      {/* 2 & 3. QUALIFICATION FORM & FEES CALCULATOR */}
      <section ref={formRef} id='form' className="py-12 bg-blue-50 border-y border-blue-100 scroll-mt-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900">
Check Your Cost in 30s         </h2>
              <p className='text-black/60 font-medium text-center  mb-6'>Get exact cost + free expert guidance before confirming.</p>

            <form onSubmit={handleCalculateFee} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">State *</label>
                <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="e.g. Delhi, Maharashtra" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service Required *</label>
                <select required name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                  <option value="" disabled>Select a service...</option>
                  <option value="Growth Bundle">Growth Bundle</option>
                  <option value="Private Limited Company">Private Limited Company</option>
                  <option value="LLP Registration">LLP Registration</option>
                  <option value="OPC Registration">OPC Registration</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="GST Registration">GST Registration</option>
                </select>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <label className="block text-sm font-bold text-slate-800 mb-3">When are you planning to start? *</label>
                <div className="space-y-2">
                  {['Immediately', 'Within 30 Days', 'Just Exploring'].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input required type="radio" name="timeline" value={option} checked={formData.timeline === option} onChange={handleInputChange} className="w-4 h-4 text-blue-600 focus:ring-blue-600" />
                      <span className="text-slate-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {!showFee ? (
                <button type="submit" className="w-full mt-4 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow transition-all flex items-center justify-center gap-2 text-lg">
                  👉 Show My Fees
                </button>
              ) : (
                <>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center items-center flex flex-col animate-fade-in">
                  <p className="text-6xl font-extrabold text-green-700 mb-2">₹{FEE_STRUCTURE[formData.service]}</p>                  
<p className=" font-bold text-green-800 uppercase tracking-wider mb-2 md:block hidden">Estimated Total Cost</p>
                  <p className="text-sm text-green-700 font-medium md:flex hidden items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Government Fees Included. No Hidden Charges.
                  </p>
                  <div className='flex flex-col items-start '>                  <p className=" font-bold text-green-800 uppercase tracking-wider mb-2">Estimated Total Cost</p>
  <p className="text-sm text-green-700 font-medium flex items-left justify-center gap-1 md:hidden">
                    <CheckCircle2 className="w-4 h-4" /> Government Fees Included.
                  </p>
                  <p className="text-sm text-green-700 font-medium flex items-left justify-center gap-1 md:hidden">
                    <CheckCircle2 className="w-4 h-4" /> No Hidden Charges. 
                  </p></div>
                
                
                </div>                                  <p className='text-black/60 font-medium text-center'>Talk to an expert for 10 minutes before confirming.</p>

                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-all text-center">
                    Get Free Expert Guidance
                  </a>

                  </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "1. Submit Details", desc: "Fill out the simple 60-second form above." },
              { icon: TrendingUp, title: "2. Get Cost + Checklist", desc: "Receive transparent pricing and document checklist instantly." },
              { icon: PhoneCall, title: "3. 10-Min Clarification", desc: "A quick call to confirm eligibility and clear doubts." },
              { icon: ShieldCheck, title: "4. We File & Complete", desc: "Sit back. We file your registration and deliver the certificate." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 relative">
                {idx !== 3 && <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2"><ChevronRight className="w-8 h-8 text-slate-300" /></div>}
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 10-MIN CLARIFICATION CALL */}
      <section className="py-12 md:py-16 bg-slate-900 text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">
            Book Your Free 10-Min Clarification Call
          </h2>
          <p className="text-base md:text-xl text-slate-300 mb-2 font-medium">
            We work only with serious founders ready to start.
          </p>
          <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8">
            This call confirms your eligibility, exact documents needed, and exact timeline.
          </p>

          <div className="max-w-xl mx-auto mb-6 md:mb-8 text-left w-full">
            <label htmlFor="call-query" className="block text-sm font-semibold text-slate-300 mb-2">
              What is your main doubt or query? (Optional)
            </label>
            <textarea
              id="call-query"
              rows={3}
              value={callQuery}
              onChange={(e) => setCallQuery(e.target.value)}
              placeholder="e.g., I'm confused between Pvt Ltd and LLP for my tech startup..."
              className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none placeholder-slate-500 text-sm md:text-base"
            ></textarea>
          </div>

          <a 
            href={`https://wa.me/918882935471?text=${encodeURIComponent(`Hi Taxly, I want to book my free 10-min clarification call.${callQuery ? `\n\nMy main query is: ${callQuery}` : ''}`)}`}
            target="_blank" rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-base md:text-lg"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" /> Book My Call via WhatsApp
          </a>
        </div>
      </section>

      {/* 6. TRUST SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
            Why Founders Choose Taxly
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              {[
                "500+ Registrations Completed",
                "Expert Chartered Accountant Team",
                "Transparent Pricing (No Hidden Fees)",
                "Dedicated WhatsApp Support",
                "Timely Filing & Compliance Guidance",
                "100% Online & Hassle-Free"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="relative">
              {/* Blurred Certificate Mockup */}
              <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 shadow-inner relative overflow-hidden h-[400px] flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9IiNmZmYiLz4KPHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSIjZjFmMThjIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 blur-[2px]"></div>
                <div className="z-10 bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center border border-white shadow-lg w-3/4">
                  <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mb-6"></div>
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-widest border-t border-b py-2 mb-4">Sample Registration Certificate</p>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Fake Logos for MCA/GST */}
              <div className="flex justify-center gap-6 mt-6">
                <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded font-bold text-slate-600 text-sm flex items-center gap-2">
                  <Building className="w-4 h-4"/> MCA Compliant
                </div>
                <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded font-bold text-slate-600 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4"/> GST Authorized
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul S.", biz: "Tech Startup Founder", text: "Got my Pvt Ltd registered in 8 days flat. No running around, totally online. Highly recommend Taxly." },
              { name: "Priya M.", biz: "E-commerce Seller", text: "GST registration was stuck for weeks with my local CA. Taxly cleared it in 3 days. Extremely professional." },
              { name: "Amit K.", biz: "Consulting Agency", text: "Transparent pricing is real. What they quoted is exactly what I paid. The WhatsApp support is a lifesaver." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-4">&quot;{review.text}&quot;</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-blue-600 font-semibold">{review.biz}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUYER PSYCHOLOGY SECTIONS */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Active Buyers */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Ready to Start Today?</h3>
            <p className="text-slate-600 mb-6 font-medium">Get your exact document checklist within 5 minutes after confirmation.</p>
            <button onClick={scrollToForm} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all inline-flex items-center gap-2">
              👉 Start Registration Now
            </button>
          </div>

          {/* Stalled Buyers */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">Confused Between Pvt Ltd & LLP?</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-bold text-slate-800">Feature</th>
                    <th className="p-4 font-bold text-slate-800">Private Limited</th>
                    <th className="p-4 font-bold text-slate-800">LLP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-600 font-medium">Best For</td>
                    <td className="p-4 text-slate-700">Raising Capital, Startups</td>
                    <td className="p-4 text-slate-700">Consultants, Family Biz</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-600 font-medium">Compliance</td>
                    <td className="p-4 text-slate-700">Strict (Audits mandatory)</td>
                    <td className="p-4 text-slate-700">Lower (No audit till 40L)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-lg transition-all inline-flex items-center gap-2">
                👉 Compare & Decide with Expert
              </a>
            </div>
          </div>

          {/* Post-Decision Buyers */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-md text-center text-white">
            <h3 className="text-2xl font-extrabold mb-2">Already Got a Quote From Another CA?</h3>
            <p className="text-blue-100 mb-6 font-medium">We Match Transparency. No Hidden Costs. Let us review it for free.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-lg transition-all inline-flex items-center gap-2">
              👉 Verify My Quote
            </a>
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA SECTION & FOOTER */}
      <footer className="bg-slate-900 pt-16 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Start Your Business the Right Way
          </h2>
          <button onClick={scrollToForm} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 text-lg mx-auto mb-12">
            👉 Check Fees & Start Registration
          </button>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Building className="w-5 h-5" />
              <span className="font-bold text-lg">Taxly India</span>
            </div>
            <p className="text-slate-500 text-sm">
              New Delhi, India • Pan India Services<br/>
              © {new Date().getFullYear()} Taxly India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd5a] transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-bold">
          WhatsApp Support
        </span>
      </a>

      {/* Custom Keyframe for smooth appearance of fee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
}