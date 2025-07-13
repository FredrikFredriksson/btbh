'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Foredrag() {
  // Lecture data
  const lectures = [
    {
      title: "Born to be happy",
      description: "Et inspirerende foredrag om hvordan glede kan transformere ditt liv og arbeidsmiljø.",
      duration: "60-90 minutter",
      audience: "Alle målgrupper",
      topics: [
        "Vitenskapen bak glede",
        "Praktiske teknikker",
        "Stresshåndtering",
        "Motivasjon og energi"
      ],
      bgColor: "bg-gradient-to-br from-[#3F7F94] to-[#82BED2]"
    },
    {
      title: "Magi i kraften av deg selv",
      description: "Oppdag din indre kraft og potensial for personlig og profesjonell vekst.",
      duration: "75-90 minutter",
      audience: "Individuelle deltakere",
      topics: [
        "Selvbevissthet",
        "Målsättning",
        "Selvdisiplin",
        "Kreativitet"
      ],
      bgColor: "bg-gradient-to-br from-[#4DA797] to-[#73c4b6]"
    },
    {
      title: "Kulinariske hemligheter for cellehelse",
      description: "Lær hvordan mat kan være medisin for kropp og sjel.",
      duration: "60-75 minutter",
      audience: "Helseinteresserte",
      topics: [
        "Næring og velvære",
        "Praktiske tips",
        "Helsefremmende mat",
        "Lifestyle endringer"
      ],
      bgColor: "bg-gradient-to-br from-[#545454] to-[#3F7F94]"
    },
    {
      title: "Fra gruppe til TEAM",
      description: "Fokuser på å skape et positivt og produktivt arbeidsmiljø gjennom bevissthet og glede.",
      duration: "45-60 minutter",
      audience: "Bedrifter og organisasjoner",
      topics: [
        "Team-building strategier",
        "Kommunikasjon",
        "Konflikthåndtering",
        "Motivasjon"
      ],
      bgColor: "bg-gradient-to-br from-[#82BED2] to-[#4DA797]"
    }
  ];

  const benefits = [
    "Økt motivasjon og engasjement",
    "Bedre arbeidsmiljø",
    "Redusert stress og utbrenthet",
    "Økt produktivitet",
    "Forbedret kommunikasjon",
    "Høyere livskvalitet",
    "Sterkere team-dynamikk",
    "Bærekraftige endringer"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-130 flex items-center justify-center mb-16 -mt-16">
        <Image 
          src="/images/nature4.jpg" 
          alt="Foredrag Background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl mb-6 text-white font-playfair-display">
            Inspirerende Foredrag
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Opplev kraften av bevisstgjøring og glede gjennom våre engasjerende foredrag
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
              Transformativ Kommunikasjon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Våre foredrag kombinerer vitenskap, praktiske teknikker og engasjerende 
              presentasjoner for å inspirere og motivere ditt team eller organisasjon.
            </p>
          </div>
        </section>

        {/* Lectures Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lectures.map((lecture, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <div className={`${lecture.bgColor} p-8 h-80 flex flex-col`}>
                  <h3 className="text-2xl text-white mb-4">
                    {lecture.title}
                  </h3>
                  
                  <p className="text-white/90 mb-6 flex-grow">
                    {lecture.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Varighet:</span>
                      <span className="text-white">{lecture.duration}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Målgruppe:</span>
                      <span className="text-white">{lecture.audience}</span>
                    </div>
                  </div>
                  
                  
                  

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Contact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#3F7F94] to-[#82BED2] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Kontakt oss for booking
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Interessert i å booke et av våre inspirerende foredrag? 
              Ta kontakt med oss for å diskutere dine behov og finne riktig foredrag for ditt arrangement.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-800 py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
            >
              Kontakt oss
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#82BED2] to-[#3F7F94] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                Fordeler med Våre Foredrag
              </h2>
              <p className="text-white/90 text-lg">
                Oppdag de positive effektene av å invitere oss til ditt arrangement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
              Hva Arrangører Sier
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3F7F94] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah</h4>
                  <p className="text-gray-600">HR-sjef, TechBedrift AS</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Foredraget vårt var en stor suksess! Ansatte var engasjerte og 
                har implementert teknikkene i hverdagen. Absolutt anbefalt!&rdquo;
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4DA797] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Kristian</h4>
                  <p className="text-gray-600">Daglig leder, Innovasjon AS</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Profesjonell og engasjerende presentasjon som ga oss 
                praktiske verktøy vi kan bruke umiddelbart.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#3F7F94] to-[#82BED2] rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Klar for Inspirasjon?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ta kontakt for å diskutere hvordan vi kan tilpasse foredraget 
              til ditt arrangement og målgruppe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-white text-gray-800 py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
              >
                Kontakt Oss
              </Link>
              <Link
                href="/kurs"
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Se Kurs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 