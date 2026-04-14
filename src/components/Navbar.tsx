import { useEffect, useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Cybersecurity', href: '#about' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Milestones', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-amber-300/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-amber-300/15 border border-amber-200/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-amber-300" />
            </div>
            <span className="font-semibold text-sm tracking-wider text-neutral-200 group-hover:text-amber-200 transition-colors">
              SAMEER SHAH DEV
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-amber-300'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-sheen flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-600 text-black text-sm font-bold px-4 py-1.5 rounded-full transition-all duration-300 hover:brightness-110"
            >
              Secure Consult
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-400 hover:text-amber-300 transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-amber-300/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-amber-300 bg-amber-300/10'
                  : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-sheen flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-600 text-black text-sm font-bold px-4 py-2 rounded-full"
          >
            Secure Consult
          </a>
        </div>
      </div>
    </nav>
  );
}
