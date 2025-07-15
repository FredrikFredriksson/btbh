'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Kurs() {
  // Course data
  const courses = [
    {
      title: "Nettkurs - Den Magiske Kraften av GLEDE",
      description: "Vårt omfattende nettkurs som tar deg gjennom en transformativ reise mot større glede og velvære.",
      duration: "8 moduler",
      price: "NOK 1,990",
      features: [
        "Praktiske øvelser og teknikker",
        "Lydfiler og meditasjoner",
        "Lifetime tilgang",
        "Sertifikat ved fullføring",
        "Personlig støtte via e-post"
      ],
      bgColor: "bg-gradient-to-br from-[#3F7F94] to-[#82BED2]",
      isFeatured: true
    },
    {
      title: "Skreddersydde Bedriftskurs",
      description: "Tilpassede kurs for bedrifter som ønsker å forbedre arbeidsmiljøet og øke ansattes velvære.",
      duration: "1-3 dager",
      price: "Pris på forespørsel",
      features: [
        "Tilpasset til din organisasjon",
        "Praktiske workshops",
        "Følg-opp og evaluering",
        "Målbare resultater",
        "Ekspert veiledning"
      ],
      bgColor: "bg-gradient-to-br from-[#4DA797] to-[#73c4b6]",
      isFeatured: false
    },
    {
      title: "Individuelle Coaching-sesjoner",
      description: "Personlig veiledning for å hjelpe deg med spesifikke utfordringer og mål.",
      duration: "60-90 minutter",
      price: "NOK 1,200 per sesjon",
      features: [
        "Skreddersydd til dine behov",
        "Fleksibel booking",
        "Følg-opp og støtte",
        "Praktiske verktøy",
        "Konfidensiell behandling"
      ],
      bgColor: "bg-gradient-to-br from-[#545454] to-[#3F7F94]",
      isFeatured: false
    }
  ];

  const benefits = [
    "Økt selvtillit og selvbevissthet",
    "Bedre stresshåndtering",
    "Forbedret kommunikasjon",
    "Økt kreativitet og innovasjon",
    "Bedre arbeidsmiljø",
    "Høyere livskvalitet",
    "Sterkere relasjoner",
    "Mer energi og motivasjon"
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-130 flex items-center justify-start mb-16 -mt-16">
        <Image 
          src="/images/butterflies1.jpg" 
          alt="Kurs Background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left max-w-4xl px-4 ml-8 md:ml-16">
          <h1 className="text-4xl md:text-6xl mb-6 text-white font-playfair-display">
            Våre Kurs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Oppdag den magiske kraften av glede<br />
            gjennom våre transformativ kurs og opplevelser
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
              Transformativ Læring for Livet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Våre kurs er designet for å gi deg praktiske verktøy og innsikt som kan 
              transformere ditt liv og hjelpe deg å oppnå større glede, velvære og suksess.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 ${
                  course.isFeatured ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                <div className={`${course.bgColor} p-8 h-full flex flex-col`}>
                  {course.isFeatured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm">
                        POPULÆR
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl text-white mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-white/90 mb-6 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Varighet:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Pris:</span>
                      <span className="text-white text-xl">{course.price}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-white mb-3">Inkluderer:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/90 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href="/kontakt"
                      className="block w-full bg-white text-gray-800 py-3 px-6 rounded-lg text-center transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
                    >
                      Book Nå
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#82BED2] to-[#3F7F94] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                Hva Du Får
              </h2>
              <p className="text-white/90 text-lg">
                Oppdag de mange fordelene med å delta på våre kurs
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
              Hva Deltakere Sier
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3F7F94] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Anne Kristin</h4>
                  <p className="text-gray-600">Bedriftsleder</p>
                </div>
              </div>
                             <p className="text-gray-700 italic">
                 &ldquo;Kurset har gitt meg nye perspektiver på hvordan jeg kan håndtere stress og finne glede i hverdagen. 
                 Jeg føler meg mer energisk og motivert enn på lenge!&rdquo;
               </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4DA797] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Morten</h4>
                  <p className="text-gray-600">IT-konsulent</p>
                </div>
              </div>
                             <p className="text-gray-700 italic">
                 &ldquo;Praktiske teknikker som jeg kan bruke umiddelbart. Har allerede merket forskjell i arbeidsmiljøet 
                 og min egen velvære. Anbefales på det sterkeste!&rdquo;
               </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#3F7F94] to-[#82BED2] rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Klar for Din Transformasjon?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ta det første steget mot et liv med større glede og velvære. 
              Kontakt oss i dag for å finne det perfekte kurset for deg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-white text-gray-800 py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
              >
                Kontakt Oss
              </Link>
              <Link
                href="/foredrag"
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Se Foredrag
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 