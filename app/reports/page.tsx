import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, RelatedCards, StatBar, NarrativeSection, DarkBand } from "@/components/page-parts"
import { FinalCta } from "@/components/final-cta"
import { Faq } from "@/components/faq"
import { BarChart2, Download, Bell, Filter, Clock, Shield, RefreshCw, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Reports & Logs · Twiching",
  description: "Real-time dashboards, call logs, and exportable reports across your entire phone system. Every event tracked, every metric surfaced.",
}

const FEATURES = [
  {
    icon: BarChart2,
    title: "Real-time dashboards",
    body: "Monitor call volume, queue wait times, agent activity, and SLA status as they happen. Live data refreshes automatically — no manual refresh required.",
  },
  {
    icon: Search,
    title: "Full call log search",
    body: "Search every inbound and outbound call by number, agent, date, duration, or outcome. Filter, sort, and drill into any record in seconds.",
  },
  {
    icon: Download,
    title: "Exportable reports",
    body: "Export call logs, usage summaries, and agent performance reports to CSV or PDF. Schedule automated exports directly to your inbox or BI tool.",
  },
  {
    icon: Filter,
    title: "Custom report builder",
    body: "Build reports around the metrics that matter to your team. Filter by queue, agent, number, time range, or call outcome — then save for repeat use.",
  },
  {
    icon: Bell,
    title: "Threshold alerts",
    body: "Set alerts for queue depth, missed call rate, or SLA breach. Notifications fire to email, SMS, or Slack the moment a threshold is crossed.",
  },
  {
    icon: Shield,
    title: "Audit logs",
    body: "Every account action — number changes, user permissions, call recordings accessed, settings modified — is logged with a timestamp and user attribution.",
  },
]

const REPORT_TYPES = [
  { label: "Call Activity",      note: "Volume, duration, and outcome by agent or queue" },
  { label: "Queue Performance",  note: "Wait times, abandonment rates, and SLA metrics" },
  { label: "Agent Reports",      note: "Handle time, call count, and availability per rep" },
  { label: "Usage & Billing",    note: "Minutes, SMS, and number usage across your account" },
  { label: "Audit Trail",        note: "Account changes, access events, and admin actions" },
  { label: "Custom Reports",     note: "Build and save reports around your own metrics" },
]

const FAQS = [
  {
    q: "How far back does call log history go?",
    a: "Call logs are retained for 12 months on standard plans. Extended log retention of up to 7 years is available on Business and Enterprise plans.",
  },
  {
    q: "Can I schedule automated report exports?",
    a: "Yes. Reports can be scheduled daily, weekly, or monthly and delivered to any email address or webhook endpoint — including BI tools like Tableau or Power BI.",
  },
  {
    q: "Are audit logs available for compliance?",
    a: "Yes. Every account action is logged with a full timestamp and user attribution. Audit logs are exportable and available for compliance review at any time.",
  },
  {
    q: "Can I set alerts when queues get too long?",
    a: "Yes. Threshold alerts can be configured for queue depth, SLA breach, missed call rate, or agent availability. Alerts fire via email, SMS, or webhook.",
  },
  {
    q: "Can managers see only their team's data?",
    a: "Yes. Reports and dashboards are role-gated. Team leads see their queue data, supervisors see their teams, and admins have org-wide visibility.",
  },
]

export default function ReportsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Platform · Reports & Logs"
        h1="Every call tracked. Every metric surfaced."
        sub="Real-time dashboards, searchable call logs, exportable reports, and audit trails — across every number, agent, and queue on your account."
        trustItems={["Real-time data", "Custom reports", "Scheduled exports", "Full audit trail"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
        image={{ alt: "Twiching reports dashboard showing call volume, queue performance, and agent activity" }}
      />

      <StatBar stats={[
        { value: "Real-time", label: "Dashboard refresh",   note: "live queue and agent data" },
        { value: "12mo",      label: "Log retention",       note: "up to 7yr on Enterprise" },
        { value: "6+",        label: "Report types",        note: "calls, queues, agents & more" },
        { value: "100%",      label: "Actions logged",      note: "full audit trail, every event" },
      ]} />

      <NarrativeSection paragraphs={[
        "Most teams only look at call data when something goes wrong. By then, the context is already gone.",
        "Twiching logs every call, every queue event, and every account action in real time. Dashboards surface what needs attention now. Reports answer what happened and why. Audit logs keep compliance teams satisfied.",
      ]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeading eyebrow="What's included" h2="Full visibility across your entire phone system" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {FEATURES.map((f) => <ValueCard key={f.title} icon={f.icon} title={f.title} body={f.body} />)}
        </div>
      </section>

      <DarkBand>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading eyebrow="Report types" h2="Six report categories, one dashboard." dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {REPORT_TYPES.map(({ label, note }) => (
              <div key={label} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="font-mono font-bold text-[15px] text-white mb-1">{label}</p>
                <p className="font-mono text-[12px] text-gray-400 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </DarkBand>

      <Faq items={FAQS} heading="Reports & Logs FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "AI Supervisor Tools",   desc: "Live monitoring, whisper coaching, and QA scoring.",         href: "/features/supervisor" },
          { title: "Call Recording",         desc: "Encrypted recordings with searchable transcripts.",          href: "/features/call-recording" },
          { title: "AI Conversation Intelligence", desc: "AI transcripts, keyword flagging, and call coaching.", href: "/features/conv-intelligence" },
        ]}
      />

      <FinalCta />
    </PageLayout>
  )
}
