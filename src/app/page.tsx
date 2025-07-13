import Image from "next/image";
import BulletPoint from "@/components/BulletPoint";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import VisionCard from "@/components/VisionCard";

export default function Home() {
  // Data for bullet points
  const joyBenefits = [
    "Friskere",
    "Øker energinivået",
    "Reduserer stress",
    "Fremmer sosial tilknytning",
    "Øker immunforsvaret",
    "Bedrer mental helse",
    "Gir økt kreativitet",
    "Øker livskvaliteten",
    "Beriker livs erfaringene",
  ];

  // Data for feature cards
  const features = [
    {
      title: "Bevisstgjøring",
      description:
        "Vi fokuserer på bevisstgjøring. Hvordan ivareta kropp, tanker og følelser.",
    },
    {
      title: "Selvutvikling",
      description: "Finn kraften i deg selv. Få frem ditt beste jeg!",
    },
    {
      title: "Arbeidsmiljø",
      description: "Forbedre arbeidsmiljøet med våre skreddersydde løsninger",
    },
  ];

  // Data for service cards
  const services = [
    {
      title: "Kurs",
      description:
        "Våre erfarne veiledere er dedikerte til å støtte deg på veien mot lykke og velvære. Se vårt nettkurs eller bestill skreddersydd til dere.",
      bgColor: "bg-[#3F7F94]",
      iconBgColor: "bg-[#82BED2]",
      href: "/kurs",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: "Foredrag",
      description:
        "Vi har foredrag om glede, helse og suksess hvor vi ønsker å formidle bevisstgjøring rundt eget tankesett, og den kraften du har i deg selv.",
      bgColor: "bg-[#4DA797]",
      iconBgColor: "bg-[#73c4b6]",
      href: "/foredrag",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Team-building",
      description:
        "Sammen skaper vi et trygt og støttende miljø hvor du kan utforske, lære og vokse for å oppnå en bedre hverdag, arbeidsmiljø og suksess.",
      bgColor: "bg-[#545454]",
      iconBgColor: "bg-[#3F7F94]",
      href: "/foredrag",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ];

  // Data for vision cards
  const visionCards = [
    {
      title: "Vår visjon:",
      description: "Forbedre livskvalitet gjennom bevissthet og glede!",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Vårt fokus:",
      description:
        "Er å vise deg nøkkelen til å forstå deg selv bedre, slik at du får kraft og energi til å gjøre mer av det du ønsker.",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with nature2.jpg background - starts from top of viewport */}
      <section className="relative h-130 flex items-center justify-center -mt-16">
        <Image
          src="/images/nature5.jpg"
          alt="Nature Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl pt-20 mb-6 text-white">
            Den Magiske Kraften av GLEDE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 pt-8 max-w-3xl mx-auto">
            <i>
              Vi hjelper deg å oppdage din indre kraft og manifestere det livet
              du ønsker deg
            </i>
          </p>
        </div>
      </section>

      {/* Bevisstgjørings prosesser Section */}
      <section className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main content with image and text columns */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Left side - Sun image as circle */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-xl opacity-30"></div>
                <Image
                  src="/images/sun.jpeg"
                  alt="Sun"
                  width={200}
                  height={200}
                  className="relative w-80 h-80 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-2xl border-4 border-white/50"
                />
              </div>
            </div>

            {/* Right side - Three text columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-10">
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                bgColor={service.bgColor}
                iconBgColor={service.iconBgColor}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>

        <div className="text-center pt-20 pb-10 bg-[#82BED2]">
          <h3 className="text-4xl md:text-5xl text-white mb-4">
            Bli med på en endringsreise
          </h3>
          <p className="text-xl md:text-2xl text-white mb-12">
            - og opplev varig livsforvandlende forskjell
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
            {visionCards.map((card, index) => (
              <VisionCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="om-oss" className="py-10 pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">Hvem er vi?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Vi som bevissthetsutviklere i BTBH har en helhetlig tilnærming
                  til å styrke ditt velvære. Vårt team består av erfarne
                  veiledere med relevant utdanning. Vi har mange års erfaring
                  innen veiledning, coaching, ernæring, fysisk og mental helse.
                </p>

                <p>
                  Vårt arbeid springer ut fra et ønske om å berike hverdagen med
                  glede, vekke bevissthet og styrke troen på din indre kraft.
                  Med et åpent sinn har vi studert og lært om kroppen, psyken og
                  mennesket som en helhet. Vi har en dyp kjærlighet for læring,
                  og vi tilegner oss ny kunnskap hver eneste dag – noe vi har
                  gjort kontinuerlig i over 40 år.
                </p>

                <p>
                  Etter mange år med dedikasjon og trofast søken har vi
                  opparbeidet oss dyp innsikt og rik erfaring. Nå vil vi gjerne
                  dele med oss og hjelpe andre som vil lytte og lære til å bli
                  mer bevisst på sitt indre. Du er mer kraftfull enn du tror.
                  Slik vi ser det er det lurt å kjenne den kraften i deg, og
                  kunne bruke den til å manifestere det du vil.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/btbh-us.jpg"
                  alt="BTBH Team"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl border-4 border-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Joy Section */}
      <section className="relative py-20">
        {/* Background with #3F7F94 color */}
        <div className="absolute inset-0 bg-[#82BED2]"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl text-white mb-4">
              Glede gir oss mange fordeler
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Bullet points */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {joyBenefits.map((benefit, index) => (
                  <BulletPoint key={index} text={benefit} />
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-30"></div>
                <Image
                  src="/images/glede.png"
                  alt="Glede"
                  width={320}
                  height={320}
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/50"
                />
              </div>
            </div>
          </div>

          {/* Centered conclusion text */}
          <div className="text-center mt-12 space-y-4">
            <h4 className="text-3xl md:text-4xl text-white">
              <i>Vi velger glede, håper det smitter!</i>
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
