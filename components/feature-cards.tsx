import {
  MessageSquare,
  Video,
  Phone,
  PhoneCall,
  Network,
  Megaphone,
  Mic,
  Shuffle,
  Brain,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

type Capability = {
  Icon: LucideIcon
  num: string
  title: string
  desc: string
  tag: string
}

const capabilities: Capability[] = [
  {
    Icon: MessageSquare,
    num: "01",
    title: "Team Chat",
    desc: "All channels, direct messages and team threads in one place. Organize by All, Team, Direct or Favorites — no tab-switching.",
    tag: "Messaging",
  },
  {
    Icon: Video,
    num: "02",
    title: "Video Meetings",
    desc: "Schedule, host and record face-to-face sessions without leaving the app. Upcoming, ongoing and past meetings in one view.",
    tag: "Conferencing",
  },
  {
    Icon: Phone,
    num: "03",
    title: "Business Phone",
    desc: "Virtual, local, vanity, toll-free and second numbers. Five types on one account — pick what fits or run all five.",
    tag: "Numbers",
  },
  {
    Icon: PhoneCall,
    num: "04",
    title: "Voice Termination",
    desc: "Carrier-grade call routing with STIR/SHAKEN attestation on every outbound dial. Your calls don't get flagged as spam.",
    tag: "Voice",
  },
  {
    Icon: Network,
    num: "05",
    title: "SIP Termination",
    desc: "Direct SIP trunking with low-latency connectivity, redundant routing and 99.99% uptime for your existing PBX or softphone.",
    tag: "Voice",
  },
  {
    Icon: Megaphone,
    num: "06",
    title: "SMS & Bulk Messaging",
    desc: "Two-way SMS, MMS and bulk campaigns from a dedicated number. Developer-ready SMS API included.",
    tag: "Messaging",
  },
  {
    Icon: Mic,
    num: "07",
    title: "Call Recording",
    desc: "Record, securely store and replay every call. AI transcription and speaker identification on Pro and above.",
    tag: "AI Features",
  },
  {
    Icon: Shuffle,
    num: "08",
    title: "Auto-Attendant & IVR",
    desc: "Route callers intelligently before a human ever picks up. Build multi-level menus with no-code drag-and-drop flows.",
    tag: "Routing",
  },
  {
    Icon: Brain,
    num: "09",
    title: "AI Conversation Intelligence",
    desc: "Real-time transcripts, sentiment analysis and coaching summaries — so managers see what's working at scale.",
    tag: "AI Features",
  },
]

export function FeatureCards() {
  return (
    <section id="s-features" data-sec="features" className="bg-white py-20 md:py-28 px-[5%]">
      <div className="max-w-[1120px] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-mono font-medium tracking-[2.5px] uppercase text-accent mb-5">
              UCaaS Capabilities
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-gray-900 mb-4">
              Everything your team needs.<br />
              <span className="text-gray-300">One platform.</span>
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-[500px]">
              Voice, chat, video, SMS and AI — all on a single account with one dashboard and one monthly invoice.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-accent text-white text-[14px] font-medium font-mono pl-6 pr-2.5 py-2 rounded-full hover:bg-[#1797ac] transition-colors self-start lg:self-auto shrink-0 shadow-[0_6px_20px_-6px_rgba(26,188,217,0.40)]"
          >
            See all features
            <span className="grid place-items-center h-7 w-7 rounded-full bg-white/20 ring-1 ring-inset ring-white/20 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
          </a>
        </div>

        {/* Capabilities — divider rows, 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {capabilities.map(({ Icon, num, title, desc, tag }, i) => (
            <div
              key={title}
              className="flex gap-4 py-8 px-1 border-t border-gray-100"
            >
              {/* Icon */}
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#e8fafa] flex items-center justify-center mt-0.5">
                <Icon className="h-4 w-4 text-accent" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-[10px] font-mono text-accent/50 tracking-widest">/{num}</span>
                  <h3 className="text-[14px] font-medium text-gray-900 leading-snug">{title}</h3>
                  <span className="text-[9px] font-mono font-medium tracking-[1.2px] uppercase text-accent bg-[#e8fafa] px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                </div>
                <p className="text-[13px] text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA ribbon */}
        <div className="mt-14 relative overflow-hidden rounded-2xl bg-black text-white p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(900px 300px at 90% 0%, rgba(26,188,217,0.30), transparent 60%), radial-gradient(600px 260px at 0% 100%, rgba(23,151,172,0.20), transparent 60%)",
            }}
          />
          <div className="relative max-w-[560px]">
            <div className="text-[11px] font-mono font-medium tracking-[2px] uppercase text-[#95d9e8] mb-3">
              See it live
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white leading-tight mb-3">
              Walk through the whole stack with our team.
            </h3>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              Tell us how your team communicates today. We'll show you the exact path to voice, chat, video and SMS on one account — in 20 minutes.
            </p>
          </div>
          <a
            href="#"
            className="relative group inline-flex items-center gap-2 bg-accent text-white text-[15px] font-medium font-mono pl-7 pr-3 py-2 rounded-full hover:bg-[#1797ac] shadow-[0_8px_24px_-6px_rgba(26,188,217,0.45)] transition-colors self-start lg:self-auto shrink-0"
          >
            Request a Demo
            <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15 ring-1 ring-inset ring-white/20 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
