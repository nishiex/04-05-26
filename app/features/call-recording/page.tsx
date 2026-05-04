import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards, StatBar, FeatureSplit, NarrativeSection, DarkBand, InlineList } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Mic, Shield, Download, Search, Clock, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "Call Recording · Twiching",
  description: "Automatic inbound and outbound call recording with encrypted storage, transcription, and bulk export for compliance.",
}

const VALUES = [
  { icon: Mic, title: "Automatic Recording", body: "Record inbound, outbound, or both call directions automatically. No agent action required — every call is captured from the first ring." },
  { icon: Shield, title: "Encrypted Storage", body: "All recordings stored with AES-256 encryption. Compliant with HIPAA, GDPR, and financial regulatory requirements." },
  { icon: Search, title: "Searchable Transcripts", body: "Every recording is automatically transcribed. Search by keyword, agent name, or date to find the exact moment in any call." },
  { icon: Download, title: "Bulk Export", body: "Export recordings and transcripts in bulk for regulatory submissions or QA reviews. CSV metadata export included." },
  { icon: Clock, title: "Configurable Retention", body: "Set retention policies from 30 days to 7 years. Recordings auto-delete when the retention window expires — keeping storage costs controlled." },
  { icon: Bell, title: "Compliance Playback Alerts", body: "Flag recordings that contain specific keywords for immediate supervisor review. Build keyword libraries for your compliance requirements." },
]

const FAQS = [
  { q: "Which plan includes call recording?", a: "Call recording is available on the Enterprise plan. It includes unlimited recording storage, transcription, and bulk export." },
  { q: "Are recordings encrypted?", a: "Yes. All recordings are encrypted at rest with AES-256 and in transit with TLS 1.3. They are stored in geographically redundant cloud storage." },
  { q: "Can I download recordings in bulk?", a: "Yes. Use the bulk export tool to download recordings with metadata (agent, duration, date, caller ID) as a ZIP archive and CSV report." },
  { q: "Are callers notified that the call is being recorded?", a: "Yes. Twiching plays a compliant recording disclosure message at the start of each recorded call. The disclosure is customizable." },
  { q: "How long are recordings retained?", a: "Retention is configurable from 30 days to 7 years depending on your compliance requirements. Recordings auto-delete at the end of the retention window." },
]

export default function CallRecordingPage() {
  return (
    <PageLayout>

      {/* Hero — image placeholder right column */}
      <PageHero
        eyebrow="Features · Call Recording"
        h1="Record every call. Review any moment."
        sub="Automatic call recording with encrypted storage, searchable transcripts, and bulk export — built for compliance teams, QA managers, and businesses that need to capture every conversation."
        trustItems={["AES-256 encryption", "Auto-transcription", "Bulk export", "Configurable retention"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image={{ alt: "Call recording dashboard showing waveform and transcript" }}
      />

      {/* Stats bar */}
      <StatBar stats={[
        { value: "AES-256", label: "Encryption at rest", note: "TLS 1.3 in transit" },
        { value: "30d–7yr", label: "Retention range", note: "configurable per policy" },
        { value: "100%", label: "Auto-transcribed", note: "every recorded call" },
        { value: "Pro+", label: "Plan availability", note: "30-day · Enterprise 1-year" },
      ]} />

      {/* Narrative opener */}
      <NarrativeSection paragraphs={[
        "A single disputed call costs more to resolve than an entire year of recording storage. Twiching captures everything — automatically.",
        "Whether you're satisfying a regulator, coaching a new rep, or defending a chargeback, the recording is already there. Encrypted, transcribed, and searchable from day one.",
      ]} />

      {/* Value cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      {/* Feature split 1 — Searchable transcripts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <FeatureSplit
          eyebrow="Searchable transcripts"
          heading="Find any moment in any call — instantly"
          body="Every recording is automatically transcribed as it finishes. Search across your entire call library by keyword, agent name, date range, or caller ID. No manual scrubbing."
          points={[
            "Full-text search across all transcripts",
            "Jump directly to the timestamp of a keyword match",
            "Filter by agent, team, direction, or date",
            "Export transcripts alongside recordings for audits",
          ]}
          cta={{ label: "See it in action", href: "/pricing" }}
          image={{ alt: "Transcript search interface with keyword highlighting" }}
        />
      </section>

      {/* Feature split 2 — Compliance & retention (reversed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <FeatureSplit
          eyebrow="Compliance & retention"
          heading="Storage policies that match your regulatory requirements"
          body="Set retention windows from 30 days to 7 years per team or call type. Recordings auto-delete at expiry — no manual cleanup, no compliance gaps, no runaway storage costs."
          points={[
            "Per-team and per-call-type retention policies",
            "Auto-delete at retention window expiry",
            "Geographically redundant encrypted cloud storage",
            "HIPAA, GDPR, FINRA, and SOC 2 ready",
          ]}
          image={{ alt: "Retention policy configuration screen in Twiching" }}
          reverse
        />
      </section>

      {/* Use cases grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Common use cases" h2="Why teams record their calls" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Regulatory compliance", body: "Financial and healthcare teams record calls to satisfy FINRA, SEC, HIPAA, and other regulatory requirements with encrypted, timestamped archives." },
            { title: "Agent QA scoring", body: "QA managers review recordings against scorecards to assess agent performance, script adherence, and customer handling quality." },
            { title: "Dispute resolution", body: "When a customer disputes what was said in a call, the recording provides an objective, timestamped record of the conversation." },
            { title: "Sales coaching", body: "Sales managers review recordings of top performers and share winning call techniques with the broader team." },
            { title: "Onboarding new agents", body: "Use recordings of exemplary calls as training material. New agents hear real customer conversations from day one." },
            { title: "Voice of the customer", body: "Analyze transcripts at scale to identify common objections, product feedback themes, and sentiment trends across your call volume." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#95d9e8]/50 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inline checklist + image — what's included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="What's included" h2="Everything you need for a compliant recording program" />
        <InlineList
          items={[
            "Automatic recording — no agent action needed",
            "Inbound, outbound, or both directions configurable",
            "Compliant caller disclosure message (customizable)",
            "AES-256 encryption at rest, TLS 1.3 in transit",
            "Full-text search across all transcripts",
            "Bulk ZIP + CSV export for regulatory submissions",
            "Keyword flagging for supervisor review queue",
            "Retention from 30 days (Professional) to 1 year (Enterprise)",
          ]}
          image={{ alt: "Call recording feature summary in Twiching dashboard" }}
        />
      </section>

      {/* Dark band — compliance reassurance */}
      <DarkBand>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-gray-500 mb-3">Built for regulated industries</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance leading-tight mb-5">
              HIPAA. GDPR. FINRA. SOC 2.<br />We handle the compliance burden.
            </h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-lg">
              Twiching's recording infrastructure was designed with regulated industries in mind. Encrypted storage, configurable retention, audit-ready exports, and caller disclosure — all standard, none optional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "HIPAA", note: "Healthcare call compliance" },
              { label: "GDPR", note: "EU data retention rules" },
              { label: "FINRA", note: "Financial services recording" },
              { label: "SOC 2", note: "Enterprise security audit" },
            ].map(({ label, note }) => (
              <div key={label} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="font-mono font-bold text-[18px] text-white mb-1">{label}</p>
                <p className="font-mono text-[11px] text-gray-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </DarkBand>

      <Faq items={FAQS} heading="Call Recording FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "Conversation Intelligence", desc: "AI-powered transcription, keyword detection, and call scoring.", href: "/features/conv-intelligence" },
          { title: "Supervisor Tools", desc: "Live call monitoring and whisper coaching.", href: "/features/supervisor" },
          { title: "Auto-Attendant", desc: "Route calls before they reach your agents.", href: "/features/auto-attendant" },
        ]}
      />

      <NextStepBand
        heading="Capture every conversation. Stay compliant."
        sub="Call recording available on Enterprise. 14-day free trial."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "See all plans", href: "/pricing" }}
      />
    </PageLayout>
  )
}