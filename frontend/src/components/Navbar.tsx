import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Our Mission', href: '#dentistry' },
  { label: 'Solutions', href: '#services' },
  { label: 'Projects', href: '#doctors' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-clinic-purple/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-clinic-purple tracking-tight">
              Mri<span className="text-clinic-dark">Care</span>
              <span className="text-clinic-purple">+</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-clinic-gray hover:text-clinic-purple transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-clinic-gray hover:text-clinic-purple transition-colors duration-200">
              <Search size={20} />
            </button>
            <a
              href="#consultation"
              className="bg-clinic-purple text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-clinic-purple-dark transition-colors duration-200 shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-clinic-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-clinic-border`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-clinic-gray hover:text-clinic-purple transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setMenuOpen(false)}
            className="bg-clinic-purple text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-clinic-purple-dark transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
