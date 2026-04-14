import { Monitor, Database, Brain, Cpu } from 'lucide-react';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Monitor,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/25',
    glow: 'shadow-cyan-500/20',
    skills: [
      { name: 'React 19', level: 95, tag: 'Expert' },
      { name: 'Tailwind CSS', level: 92, tag: 'Expert' },
      { name: 'TypeScript', level: 85, tag: 'Advanced' },
      { name: 'Vite', level: 88, tag: 'Advanced' },
      { name: 'HTML5 / CSS3', level: 96, tag: 'Expert' },
      { name: 'Next.js', level: 78, tag: 'Proficient' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Cloud',
    icon: Database,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/25',
    glow: 'shadow-purple-500/20',
    skills: [
      { name: 'Supabase', level: 93, tag: 'Expert' },
      { name: 'Cloudflare Workers', level: 88, tag: 'Advanced' },
      { name: 'Node.js', level: 85, tag: 'Advanced' },
      { name: 'PostgreSQL', level: 82, tag: 'Advanced' },
      { name: 'REST APIs', level: 90, tag: 'Expert' },
      { name: 'Vercel / Edge', level: 87, tag: 'Advanced' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: Brain,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    glow: 'shadow-emerald-500/20',
    skills: [
      { name: 'Gemini API', level: 92, tag: 'Expert' },
      { name: 'Vertex AI', level: 80, tag: 'Advanced' },
      { name: 'MLOps for GenAI', level: 78, tag: 'Proficient' },
      { name: 'LLM Integration', level: 88, tag: 'Advanced' },
      { name: 'Prompt Engineering', level: 90, tag: 'Expert' },
      { name: 'AI Automation', level: 85, tag: 'Advanced' },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware & Systems',
    icon: Cpu,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
    glow: 'shadow-orange-500/20',
    skills: [
      { name: 'ADB / Android Debug', level: 90, tag: 'Expert' },
      { name: 'Linux Administration', level: 88, tag: 'Advanced' },
      { name: 'System Optimization', level: 92, tag: 'Expert' },
      { name: 'Low-End HW Tuning', level: 95, tag: 'Expert' },
      { name: 'Local LLM Hosting', level: 85, tag: 'Advanced' },
      { name: 'Kernel Tweaking', level: 75, tag: 'Proficient' },
    ],
  },
];

const tagColors: Record<string, string> = {
  Expert: 'text-green-400 bg-green-500/10 border-green-500/30',
  Advanced: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  Proficient: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
};

const barColors: Record<string, string> = {
  frontend: 'from-cyan-500 to-cyan-400',
  backend: 'from-purple-500 to-purple-400',
  ai: 'from-emerald-500 to-emerald-400',
  hardware: 'from-orange-500 to-orange-400',
};

function SkillBar({ name, level, tag, barColor }: { name: string; level: number; tag: string; barColor: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono border px-2 py-0.5 rounded-full ${tagColors[tag]}`}>{tag}</span>
          <span className="text-slate-400 text-xs font-mono w-8 text-right">{level}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barColor} progress-bar transition-all duration-1000`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-purple-400 text-sm tracking-widest mb-3 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            // skills.stack[]
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My Tech <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Full coverage from pixels to AI models — hardware to cloud deployments.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`glass rounded-2xl p-6 sm:p-8 border ${cat.border} card-hover shadow-lg ${cat.glow}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${cat.color}`}>{cat.label}</h3>
                    <p className="text-slate-500 text-xs font-mono">{cat.skills.length} skills</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      tag={skill.tag}
                      barColor={barColors[cat.id]}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Tech Tags */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm font-mono mb-4">// also_familiar_with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Git', 'Docker', 'Bun', 'Deno', 'Python', 'Bash Scripting', 'Firebase',
              'Telegram Bot API', 'Instagram API', 'Webhook Systems', 'WebSockets',
              'PWA', 'Service Workers', 'Cron Jobs', 'ffmpeg',
            ].map(tech => (
              <span
                key={tech}
                className="text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60 px-3 py-1 rounded-full hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
