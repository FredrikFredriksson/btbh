'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Show colored background on kontakt page or when scrolled on home/kurs/foredrag pages
  const shouldShowColoredBackground = isKontaktPage || (isScrolled && (isHomePage || isKursPage || isForedragPage));

  const navLinks = [
    { href: '/kurs', label: 'Kurs' },
    { href: '/foredrag', label: 'Foredrag' },
    { href: '/#om-oss', label: 'Om Oss' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-md transition-all duration-300 hover:bg-white/20 font-playfair-display"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-100 p-2 rounded-md transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-5 h-0.5 bg-current -translate-y-1"></span>
                  <span className="block w-5 h-0.5 bg-current"></span>
                  <span className="block w-5 h-0.5 bg-current translate-y-1"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Slide-in menu */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-[#3F7F94] shadow-xl transition-transform duration-300 ease-in-out z-60 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <h2 className="text-white text-xl font-playfair-display">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-100 p-2 rounded-md transition-colors duration-300"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation links */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-gray-100 block py-4 text-xl transition-all duration-300 hover:bg-white/10 rounded-lg px-4 font-playfair-display"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/20">
              <div className="text-white/80 text-sm font-playfair-display">
                Born To Be Happy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 