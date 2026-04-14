import { Trophy, Award, Star, BadgeCheck, Medal, Flame } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Google Skills Bronze League',
    subtitle: 'Ranked #1',
    description:
      'Achieved the top rank in Google\'s competitive Skills Bronze League — outperforming peers across a range of technical and problem-solving challenges.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/25',
    glow: 'shadow-yellow-500/10',
    badge: '🥇 #1 Rank',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  },
  {
    icon: BadgeCheck,
    title: 'Gemini for SDLC Certification',
    subtitle: 'Google Certified',
    description:
      'Officially certified by Google in using Gemini AI across the entire Software Development Lifecycle — from ideation and design to testing and deployment automation.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/25',
    glow: 'shadow-cyan-500/10',
    badge: '✅ Certified',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  {
    icon: Award,
    title: 'MLOps for GenAI Certification',
    subtitle: 'Google Certified',
    description:
      'Certified in MLOps practices specifically for Generative AI — covering model lifecycle management, CI/CD pipelines for AI, monitoring, and responsible deployment.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/25',
    glow: 'shadow-purple-500/10',
    badge: '🤖 MLOps',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
  {
    icon: Flame,
    title: 'SaaS Products Shipped',
    subtitle: '3 Live Products',
    description:
      'Built and launched multiple production SaaS tools from scratch — handling everything from architecture and UI to deployment, monitoring, and user acquisition.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
    glow: 'shadow-orange-500/10',
    badge: '🚀 Production',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  {
    icon: Star,
    title: 'Edge AI Pioneer',
    subtitle: 'Local LLM Research',
    description:
      'One of the few developers actively running and optimizing local Large Language Models on severely constrained, low-end hardware — pushing the boundaries of what\'s possible without cloud compute.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    glow: 'shadow-emerald-500/10',
    badge: '🧠 Research',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  {
    icon: Medal,
    title: 'Full-Stack Mastery',
    subtitle: 'End-to-End Ownership',
    description:
      'Consistently delivered projects with complete ownership — from database schema to pixel-perfect UI, from infra setup to production deployments with zero-downtime migrations.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
    glow: 'shadow-blue-500/10',
    badge: '⚡ Full-Stack',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none" />

      {/* Decorative orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-yellow-400 text-sm tracking-widest mb-3 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
            // achievements.unlocked[]
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Milestones & <span className="text-yellow-400">Badges</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certifications, rankings, and real-world wins that speak louder than words.
          </p>
        </div>

        {/* Featured Achievement Banner */}
        <div className="glass rounded-2xl border border-yellow-500/25 p-6 sm:p-8 mb-8 overflow-hidden relative group card-hover">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-white font-black text-xl sm:text-2xl">Ranked #1 — Google Skills Bronze League</h3>
                <span className="text-xs font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-2.5 py-0.5 rounded-full">
                  🏆 Top Achiever
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Secured the <span className="text-yellow-400 font-semibold">#1 position</span> in Google's competitive Skills Bronze League — a testament to deep technical knowledge, fast problem-solving, and consistent performance across Google's assessment platform.
              </p>
            </div>
            <div className="text-5xl sm:text-6xl select-none">🥇</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map(({ icon: Icon, title, subtitle, description, color, bg, border, glow, badge, badgeColor }) => (
            <div
              key={title}
              className={`glass rounded-2xl border ${border} p-6 card-hover shadow-lg ${glow} group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className={`text-xs font-mono border px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
              </div>
              <h4 className="text-white font-bold text-base mb-1">{title}</h4>
              <p className={`text-xs font-medium mb-3 ${color}`}>{subtitle}</p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-10 glass rounded-2xl border border-slate-700/40 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/40">
            {[
              { value: '#1', label: 'Google League Rank', color: 'text-yellow-400' },
              { value: '2+', label: 'Google Certifications', color: 'text-cyan-400' },
              { value: '10+', label: 'Projects Shipped', color: 'text-purple-400' },
              { value: '3+', label: 'Years of Building', color: 'text-emerald-400' },
            ].map(({ value, label, color }) => (
              <div key={label} className="text-center py-4 sm:py-0 sm:px-6 first:pt-0 last:pb-0">
                <div className={`text-3xl font-black ${color} mb-1`}>{value}</div>
                <div className="text-slate-400 text-xs font-mono">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
