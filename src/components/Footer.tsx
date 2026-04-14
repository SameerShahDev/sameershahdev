import { Code2, Heart, ArrowUp, Mail, MessageSquare } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-sm">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-cyan-500 rounded-lg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-sm tracking-widest text-slate-200">
                SAMEER<span className="text-cyan-400">.</span>DEV
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              All-Rounder Developer building production-grade SaaS tools, AI integrations, and system solutions from Bihar, India. 🇮🇳
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:sameershahdev@example.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Sameer,"
                className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">BUILT WITH</h4>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map(tech => (
                <span
                  key={tech}
                  className="text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Open for projects</span>
              </div>
              <a
                href="https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <MessageSquare className="w-3 h-3" />
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {year} <span className="text-slate-300 font-medium">Sameer Shah Dev</span>. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" /> from Bihar, India
          </p>
          <a
            href="#home"
            className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
