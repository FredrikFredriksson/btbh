'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isKursPage = pathname === '/kurs';
  const isForedragPage = pathname === '/foredrag';
  const isKontaktPage = pathname === '/kontakt';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show colored background on kontakt page or when scrolled on home/kurs/foredrag pages
  const shouldShowColoredBackground = isKontaktPage || (isScrolled && (isHomePage || isKursPage || isForedragPage));

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      shouldShowColoredBackground 
        ? 'bg-[#3F7F94]' 
        : 'bg-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-white hover:text-gray-100 transition-colors font-playfair-display"
            >
              Born To Be Happy
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/kurs" 
              className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-md transition-all duration-300 hover:bg-white/20 font-playfair-display"
            >
              Kurs
            </Link>
            <Link 
              href="/foredrag" 
              className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-md transition-all duration-300 hover:bg-white/20 font-playfair-display"
            >
              Foredrag
            </Link>
            <Link 
              href="/#om-oss" 
              className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-md transition-all duration-300 hover:bg-white/20 font-playfair-display"
            >
              Om Oss
            </Link>
            <Link 
              href="/kontakt" 
              className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-md transition-all duration-300 hover:bg-white/20 font-playfair-display"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 