import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageSquare, Download, Cpu, Layers, Brain } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'AI Integration Expert',
  'Hardware Optimizer',
  'SaaS Architect',
  'Open Source Builder',
];

function TypewriterText() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const pause = deleting ? 0 : charIndex === current.length ? 1800 : 0;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }, pause || speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-cyan-400 typewriter-cursor font-mono">
      {displayed}
    </span>
  );
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="glass rounded-xl p-4 flex items-center gap-3 neon-border-hover card-hover">
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <div>
        <div className="text-lg font-bold text-white">{value}</div>
        <div className="text-xs text-slate-400">{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['#06b6d4', '#a855f7', '#3b82f6', '#10b981'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        for (const p2 of particles) {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scan-line"
    >
      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Floating Orbs */}
      <FloatingOrb className="w-96 h-96 bg-cyan-500 top-1/4 -left-48 animate-float" />
      <FloatingOrb className="w-80 h-80 bg-purple-600 bottom-1/4 -right-40 animate-float delay-500" />
      <FloatingOrb className="w-64 h-64 bg-blue-500 top-3/4 left-1/4 animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Available for Projects & Collaborations
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-slide-up">
          <span className="gradient-text">Sameer</span>
          <br />
          <span className="text-white">Shah Dev</span>
        </h1>

        {/* Typewriter Sub-headline */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center animate-slide-up delay-200">
          <TypewriterText />
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-300">
          All-Rounder Developer specializing in{' '}
          <span className="text-cyan-400 font-medium">Full-Stack</span>,{' '}
          <span className="text-purple-400 font-medium">AI Integration</span> &{' '}
          <span className="text-blue-400 font-medium">Hardware Optimization</span>.
          Building production-grade SaaS tools from Bihar, India. 🇮🇳
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-slide-up delay-400">
          <a
            href="#projects"
            className="btn-glow flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Layers className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Me
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:bg-cyan-500/5"
          >
            <Download className="w-4 h-4" />
            Get In Touch
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto animate-slide-up delay-500">
          <StatCard value="3+" label="Years Experience" icon={Cpu} />
          <StatCard value="10+" label="Projects Shipped" icon={Layers} />
          <StatCard value="#1" label="Google Skills League" icon={Brain} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group animate-fade-in delay-1000"
      >
        <span className="text-xs tracking-widest font-mono">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-cyan-400" />
      </a>
    </section>
  );
}
