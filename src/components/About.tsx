import { MapPin, Dumbbell, Lightbulb, Server, Rocket, Shield } from 'lucide-react';

const traits = [
  {
    icon: Lightbulb,
    title: 'Logic-Driven Mindset',
    desc: 'Every system I build is backed by clear reasoning, clean architecture, and efficient logic — not guesswork.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Server,
    title: 'Complex Architectures',
    desc: 'From SaaS multi-tenant apps to local LLM deployments on constrained hardware — I manage it all end-to-end.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Dumbbell,
    title: 'Iron Discipline',
    desc: 'Physical fitness is not separate from my work — it is the engine behind it. Discipline in the gym = discipline in code.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Rocket,
    title: 'Ship First, Iterate Fast',
    desc: 'I believe in getting products live quickly, then refining based on real-world feedback and performance data.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-cyan-400 text-sm tracking-widest mb-3 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            // about_me.config
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Who Am I<span className="text-cyan-400">?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A developer who doesn't just write code — he engineers solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 sm:p-8 neon-border card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0 animate-pulse-neon">
                  S
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Sameer Shah Dev</h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bihar, India 🇮🇳</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a <span className="text-cyan-400 font-semibold">professional all-rounder developer</span> who thrives at the intersection of software, AI, and hardware. My journey started with a curiosity for how systems work — from the lowest hardware layer to the highest AI abstraction.
                </p>
                <p>
                  Based in <span className="text-white font-medium">Bihar, India</span>, I've built and shipped production-grade tools that solve real problems — Instagram automation suites, community management bots, and local AI edge deployments on budget hardware that "shouldn't" be able to run them.
                </p>
                <p>
                  I treat <span className="text-purple-400 font-semibold">physical fitness</span> the same way I treat engineering: with structure, consistency, and progressive overload. That same discipline translates into every sprint, every deploy, and every architecture decision I make.
                </p>
                <p>
                  My goal? Build <span className="text-white font-semibold">SaaS tools</span> that are fast, reliable, and intelligent — and make complex technology accessible to everyone.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Open Source', 'SaaS Builder', 'AI Enthusiast', 'Linux Power User', 'System Architect'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full"
                  >
                    #{tag.replace(/ /g, '')}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass rounded-2xl p-6 neon-border card-hover">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { label: 'Location', value: 'Bihar, India' },
                  { label: 'Focus', value: 'Full-Stack + AI' },
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Status', value: '🟢 Available' },
                  { label: 'Languages', value: 'Hindi, English' },
                  { label: 'Current Stack', value: 'React 19 + Supabase' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-slate-500 text-xs font-mono">{label}</span>
                    <span className="text-slate-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Trait Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={`glass rounded-2xl p-6 border ${border} card-hover group`}
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Code Terminal Card */}
            <div className="sm:col-span-2 glass rounded-2xl p-5 border border-slate-700/50 card-hover">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 text-xs font-mono ml-2">~/sameer-shah-dev $ whoami</span>
              </div>
              <div className="font-mono text-xs space-y-1">
                <p><span className="text-cyan-400">name</span><span className="text-slate-400">:</span> <span className="text-green-400">"Sameer Shah Dev"</span></p>
                <p><span className="text-cyan-400">role</span><span className="text-slate-400">:</span> <span className="text-green-400">"All-Rounder Developer"</span></p>
                <p><span className="text-cyan-400">location</span><span className="text-slate-400">:</span> <span className="text-green-400">"Bihar, India 🇮🇳"</span></p>
                <p><span className="text-cyan-400">passion</span><span className="text-slate-400">:</span> <span className="text-green-400">["AI", "SaaS", "Open Source", "Fitness"]</span></p>
                <p><span className="text-cyan-400">available</span><span className="text-slate-400">:</span> <span className="text-yellow-400">true</span></p>
                <p className="text-slate-500 animate-pulse mt-2">█</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
