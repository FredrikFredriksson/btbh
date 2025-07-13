'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    navn: '',
    email: '',
    emne: '',
    melding: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.emne);
    const body = encodeURIComponent(
      `Navn: ${formData.navn}\nE-post: ${formData.email}\nEmne: ${formData.emne}\n\nMelding:\n${formData.melding}`
    );
    
    const mailtoLink = `mailto:Happypost@btbh.no?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">
            Kontakt oss
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ta kontakt for å booke foredrag eller få mer informasjon om våre tjenester
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
            <h2 className="text-2xl text-gray-800 mb-6 text-center">Send oss en melding</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-2">
                  Navn *
                </label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  required
                  value={formData.navn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82BED2] focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82BED2] focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
                  placeholder="din.epost@eksempel.no"
                />
              </div>

              <div>
                <label htmlFor="emne" className="block text-sm font-medium text-gray-700 mb-2">
                  Emne *
                </label>
                <input
                  type="text"
                  id="emne"
                  name="emne"
                  required
                  value={formData.emne}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82BED2] focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
                  placeholder="Hva gjelder henvendelsen?"
                />
              </div>

              <div>
                <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-2">
                  Melding *
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  required
                  rows={6}
                  value={formData.melding}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82BED2] focus:border-transparent transition-all duration-200 resize-vertical placeholder-gray-400 text-black"
                  placeholder="Skriv din melding her..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#82BED2] text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-[#3F7F94]"
                >
                  Send melding
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
            Vi er lette å snakke med
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ta direkte kontakt med oss for å diskutere dine behov
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Styreleder Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-3xl hover:scale-105">
            <div className="mb-6">
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 bg-[#82BED2]/20 rounded-full blur-2xl opacity-40"></div>
                <Image 
                  src="/images/gun.png" 
                  alt="Gunn Eik-Nilsen" 
                  width={128}
                  height={128}
                  className="relative w-32 h-32 object-cover rounded-full border-4 border-[#82BED2]/30 shadow-xl"
                />
              </div>
            </div>
            <h3 className="text-2xl text-gray-800 mb-2 font-semibold">Styreleder</h3>
            <p className="text-xl text-gray-700 mb-4">Gunn Eik-Nilsen</p>
            <a 
              href="tel:+4790949977" 
              className="inline-flex items-center justify-center w-12 h-12 bg-[#82BED2] text-white rounded-full hover:bg-[#3F7F94] transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </a>
            <p className="text-lg text-gray-600 mt-2">+47 90 94 99 77</p>
          </div>

          {/* Daglig leder Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-3xl hover:scale-105">
            <div className="mb-6">
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 bg-[#82BED2]/20 rounded-full blur-2xl opacity-40"></div>
                <Image 
                  src="/images/viviann.png" 
                  alt="Viviann Lorentsen" 
                  width={128}
                  height={128}
                  className="relative w-32 h-32 object-cover rounded-full border-4 border-[#82BED2]/30 shadow-xl"
                />
              </div>
            </div>
            <h3 className="text-2xl text-gray-800 mb-2 font-semibold">Daglig leder</h3>
            <p className="text-xl text-gray-700 mb-4">Viviann Lorentsen</p>
            <a 
              href="tel:+4791512343" 
              className="inline-flex items-center justify-center w-12 h-12 bg-[#82BED2] text-white rounded-full hover:bg-[#3F7F94] transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </a>
            <p className="text-lg text-gray-600 mt-2">+47 91 51 23 43</p>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center bg-[#82BED2] rounded-2xl p-8 mb-16">
          <h3 className="text-3xl text-white mb-4">E-post</h3>
          <a 
            href="mailto:Happypost@btbh.no" 
            className="text-xl text-white hover:text-gray-100 transition-colors"
          >
            Happypost@btbh.no
          </a>
        </div>
      </div>
    </div>
  );
} 