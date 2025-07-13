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
    <div className="min-h-screen pt-10 mb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl text-gray-800 mb-4">
            Kontakt oss for å booke foredrag/ 
          </h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 placeholder-gray-400 text-black"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 resize-vertical placeholder-gray-400 text-black"
                placeholder="Skriv din melding her..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#82BED2] text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:cursor-pointer"
              >
                Send melding
              </button>
            </div>
          </form>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kontakt oss - Vi er lette å snakke med
          </h2> */}
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Styreleder Card */}
          <div className="relative">
            <div className="absolute inset-0 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
            <div className="relative p-8 text-center">
              <div className="mb-6">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl opacity-40"></div>
                  <Image 
                    src="/images/gun.png" 
                    alt="Gunn Eik-Nilsen" 
                    width={128}
                    height={128}
                    className="relative w-32 h-32 object-cover rounded-full border-4 border-white/60 shadow-xl"
                  />
                </div>
              </div>
              <h3 className="text-2xl text-gray-800 mb-2 drop-shadow-lg">Styreleder</h3>
              <p className="text-xl text-gray-800 mb-2 drop-shadow-md">Gunn Eik-Nilsen</p>
              <a 
                href="tel:+4790949977" 
                className="text-lg text-gray-800 hover:text-gray-600 transition-colors drop-shadow-md"
              >
                +47 90 94 99 77
              </a>
            </div>
          </div>

          {/* Daglig leder Card */}
          <div className="relative">
            <div className="absolute inset-0 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
            <div className="relative p-8 text-center">
              <div className="mb-6">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl opacity-40"></div>
                  <Image 
                    src="/images/viviann.png" 
                    alt="Viviann Lorentsen" 
                    width={128}
                    height={128}
                    className="relative w-32 h-32 object-cover rounded-full border-4 border-white/60 shadow-xl"
                  />
                </div>
              </div>
              <h3 className="text-2xl text-gray-800 mb-2 drop-shadow-lg">Daglig leder</h3>
              <p className="text-xl text-gray-800 mb-2 drop-shadow-md">Viviann Lorentsen</p>
              <a 
                href="tel:+4791512343" 
                className="text-lg text-gray-800 hover:text-gray-600 transition-colors drop-shadow-md"
              >
                +47 91 51 23 43
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 