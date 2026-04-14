import { ExternalLink, Layers, Bot, Cpu, Zap, GitBranch, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'igone',
    icon: Layers,
    title: 'IGOne (InstaFlow)',
    subtitle: 'Instagram Automation Suite',
    description:
      'A production-grade Instagram automation platform built with React 19 and Supabase. Handles mass DM campaigns, follow/unfollow automation, story views, and engagement tracking — all wrapped in a clean, real-time dashboard.',
    tech: ['React 19', 'Supabase', 'PostgreSQL', 'Instagram API', 'Tailwind CSS', 'Edge Functions'],
    highlights: [
      'Real-time analytics dashboard',
      'Multi-account management',
      'Automated engagement workflows',
      'Supabase Row Level Security',
    ],
    color: 'from-pink-500 to-rose-600',
    border: 'border-pink-500/25',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    badgeColor: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
    status: 'Live',
    statusColor: 'bg-green-500/10 text-green-400 border-green-500/30',
  },
  {
    id: 'communityguard',
    icon: Bot,
    title: 'CommunityGuard',
    subtitle: 'High-Performance Community Bot',
    description:
      'A blazing-fast Telegram community management bot migrated from legacy infrastructure to Vercel Edge Functions. Handles spam detection, user verification, automated warnings, and admin dashboards — all at sub-100ms latency.',
    tech: ['Node.js', 'Vercel Edge', 'Telegram Bot API', 'Cloudflare Workers', 'PostgreSQL'],
    highlights: [
      'Sub-100ms response at edge',
      'Intelligent spam filter engine',
      'Auto-moderation workflows',
      'Migrated from legacy infra to Vercel',
    ],
    color: 'from-blue-500 to-cyan-600',
    border: 'border-blue-500/25',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    status: 'Production',
    statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  },
  {
    id: 'localai',
    icon: Cpu,
    title: 'Local AI Edge',
    subtitle: 'LLMs on Low-End Hardware',
    description:
      'A personal passion project proving that AI is not just for data centers. Hosting and optimizing local Large Language Models (LLMs) on severely constrained hardware using custom Linux kernel configs, ADB tweaks, and aggressive memory management techniques.',
    tech: ['Ollama', 'Linux', 'ADB', 'Python', 'Shell Scripting', 'GGUF Models', 'llama.cpp'],
    highlights: [
      'LLMs on <4GB RAM devices',
      'Custom kernel optimizations',
      'ADB-based performance tuning',
      'Quantization & pruning workflows',
    ],
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-500/25',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    status: 'Active R&D',
    statusColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-cyan-400 text-sm tracking-widest mb-3 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            // key_projects[]
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What I've <span className="text-cyan-400">Built</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Production-grade tools solving real problems — not just tutorial clones.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`glass rounded-2xl border ${project.border} card-hover overflow-hidden group`}
              >
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${project.color}`} />

                <div className="p-6 sm:p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex flex-wrap items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${project.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-white font-black text-xl">{project.title}</h3>
                            <span className={`text-xs font-mono border px-2.5 py-0.5 rounded-full ${project.statusColor}`}>
                              ● {project.status}
                            </span>
                          </div>
                          <p className={`text-sm font-medium ${project.iconColor}`}>{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span
                            key={t}
                            className={`text-xs font-mono border px-2.5 py-1 rounded-lg ${project.badgeColor}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Highlights */}
                    <div className="lg:border-l lg:border-slate-700/50 lg:pl-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-slate-300 font-semibold text-sm">Key Features</span>
                      </div>
                      <ul className="space-y-2.5">
                        {project.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400">
                            <ArrowRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${project.iconColor}`} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                          <GitBranch className="w-3.5 h-3.5" />
                          <span>Project #{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Teaser */}
        <div className="mt-10 text-center">
          <div className="glass rounded-2xl border border-slate-700/40 p-6 inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="text-left">
              <p className="text-white font-semibold">More projects in progress...</p>
              <p className="text-slate-400 text-sm">Reach out to discuss custom builds or collaborations.</p>
            </div>
            <a
              href="https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-6 py-2.5 rounded-full whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
