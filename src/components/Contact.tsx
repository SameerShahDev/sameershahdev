import { Mail, MessageSquare, MapPin, Clock, Send, Sparkles, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 73210 86174',
    description: 'Fastest response — usually within 30 mins',
    href: 'https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/25',
    btnColor: 'from-green-500 to-emerald-600',
    btnShadow: 'shadow-green-500/25',
    btnHover: 'hover:shadow-green-500/40',
    btnLabel: 'Chat on WhatsApp',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sameershahdev@example.com',
    description: 'For detailed inquiries, proposals & partnerships',
    href: 'mailto:sameershahdev@example.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Sameer,',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/25',
    btnColor: 'from-cyan-500 to-blue-600',
    btnShadow: 'shadow-cyan-500/25',
    btnHover: 'hover:shadow-cyan-500/40',
    btnLabel: 'Send an Email',
  },
];

const reasons = [
  'Building a new SaaS product',
  'Need AI integration in your app',
  'Telegram or Instagram automation',
  'Full-stack development project',
  'Hardware / system optimization',
  'Technical consultation',
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/50" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-green-400 text-sm tracking-widest mb-3 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
            // contact.init()
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Got an idea, a project, or just want to talk tech? I'm always open to interesting conversations and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Cards */}
          <div className="space-y-5">
            {contactMethods.map(({ icon: Icon, label, value, description, href, color, bg, border, btnColor, btnShadow, btnHover, btnLabel }) => (
              <div
                key={label}
                className={`glass rounded-2xl border ${border} p-6 sm:p-7 card-hover group`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{label}</h3>
                    <p className={`text-sm font-mono ${color}`}>{value}</p>
                    <p className="text-slate-400 text-xs mt-1">{description}</p>
                  </div>
                </div>
                <a
                  href={href}
                  target={label === 'WhatsApp' ? '_blank' : undefined}
                  rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className={`btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r ${btnColor} text-white font-bold py-3 rounded-xl shadow-lg ${btnShadow} ${btnHover} transition-all duration-300`}
                >
                  <Send className="w-4 h-4" />
                  {btnLabel}
                </a>
              </div>
            ))}

            {/* Location & Availability */}
            <div className="glass rounded-2xl border border-slate-700/40 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono mb-0.5">Location</p>
                    <p className="text-slate-200 text-sm font-medium">Bihar, India 🇮🇳</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono mb-0.5">Timezone</p>
                    <p className="text-slate-200 text-sm font-medium">IST (UTC+5:30)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700/40 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Currently available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right: What I Can Help With + CTA */}
          <div className="space-y-5">
            {/* Reasons Card */}
            <div className="glass rounded-2xl border border-purple-500/20 p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-bold text-lg">What I Can Help You With</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {reasons.map(r => (
                  <div
                    key={r}
                    className="flex items-center gap-2.5 text-slate-300 text-sm bg-slate-800/40 rounded-lg px-3 py-2.5 border border-slate-700/40 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 group/item"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* Big CTA Card */}
            <div className="glass rounded-2xl border border-cyan-500/20 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-white font-black text-xl sm:text-2xl mb-2">
                  Let's Build Something <span className="text-cyan-400">Great</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Whether it's a startup idea, a technical problem to solve, or just a casual talk about AI and systems — my door is always open. Drop a message and let's make something happen.
                </p>
                <a
                  href="https://wa.me/917321086174?text=Hello%20Sameer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Start a Conversation
                </a>
              </div>
            </div>

            {/* Terminal Card */}
            <div className="glass rounded-2xl border border-slate-700/40 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 text-xs font-mono ml-2">~/connect $ init_project</span>
              </div>
              <div className="font-mono text-xs space-y-1 text-slate-400">
                <p><span className="text-green-400">✓</span> Available for new projects</p>
                <p><span className="text-green-400">✓</span> Remote-first workflow</p>
                <p><span className="text-green-400">✓</span> Fast delivery, clean code</p>
                <p><span className="text-green-400">✓</span> Full ownership & transparency</p>
                <p className="text-cyan-400 mt-2 flex items-center gap-1">
                  <span className="animate-pulse">{'>'}</span>
                  <span>Awaiting your message...</span>
                  <span className="animate-blink">█</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
