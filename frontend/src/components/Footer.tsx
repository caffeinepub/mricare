import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiLinkedin, SiX, SiFacebook, SiInstagram } from 'react-icons/si';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Our Mission', href: '#dentistry' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'mricare-plus');

  return (
    <footer className="bg-clinic-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tight">
                Mri<span className="text-white/70">Care</span>
                <span className="text-clinic-purple-light">+</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing world-class dental care with compassion and cutting-edge technology.
              Your smile is our mission.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, href: '#' },
                { Icon: SiX, href: '#' },
                { Icon: SiInstagram, href: '#' },
                { Icon: SiLinkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-purple transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">Services</h4>
            <ul className="space-y-3">
              {['General Checkups', 'Gum Surgery', 'Tooth Extraction', 'Orthodontics', 'Emergency Care'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/70 text-sm hover:text-white inline-block transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-clinic-purple-light mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">123 Dental Ave, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-clinic-purple-light flex-shrink-0" />
                <a href="tel:+15550001234" className="text-white/70 text-sm hover:text-white transition-colors duration-200">
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-clinic-purple-light flex-shrink-0" />
                <a href="mailto:hello@mricare.com" className="text-white/70 text-sm hover:text-white transition-colors duration-200">
                  hello@mricare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {year} MriCare+. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-clinic-purple-light fill-clinic-purple-light" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clinic-purple-light hover:text-white transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
