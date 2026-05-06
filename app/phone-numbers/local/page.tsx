import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import {
  PageHero,
  NarrativeSection,
  SectionHeading,
  StatBar,
  ValueGrid,
  FeatureSplit,
  ImageSlot,
  DarkBand,
  RelatedCards,
} from "@/components/page-parts"
import { FinalCta } from "@/components/final-cta"
import { Faq } from "@/components/faq"
import { MapPin, TrendingUp, Globe, Layers, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Local Phone Numbers · Any Area Code, Any City | Twiching",
  description:
    "Local area codes in every major market. 212, 305, 415, 312, and more. 14-day free trial.",
}

const STATS = [
  { value: "3×", label: "Higher answer rate", note: "vs. unknown numbers" },
  { value: "190+", label: "Countries covered", note: "global availability" },
  { value: "24h", label: "Provisioning time", note: "most are instant" },
  { value: "200+", label: "US area codes", note: "every major market" },
]

const BENEFITS = [
  {
    icon: MapPin,
    title: "Local identity, city by city",
    body: "212 says Manhattan. 305 says Miami. 415 says the Bay Area. Match the area code to the market — prospects notice when you don't.",
  },
  {
    icon: TrendingUp,
    title: "Increase answer rates",
    body: "Local numbers answer at 3× the rate of unknown out-of-state calls. More answered calls means more conversations without more dials.",
  },
  {
    icon: Globe,
    title: "190+ countries available",
    body: "Multi-country operations can add local presence in international markets without opening regional offices or managing multiple providers.",
  },
  {
    icon: Layers,
    title: "All managed in one place",
    body: "10 cities, 10 local numbers, one dashboard. All routed to the same central team. No juggling accounts or separate bills.",
  },
]

const AREA_CODES = [
  { code: "212 / 646 / 917", city: "New York" },
  { code: "310 / 323 / 424", city: "Los Angeles" },
  { code: "305 / 786", city: "Miami" },
  { code: "415 / 628", city: "San Francisco" },
  { code: "312 / 872", city: "Chicago" },
  { code: "617 / 857", city: "Boston" },
  { code: "214 / 972 / 469", city: "Dallas" },
  { code: "404 / 678 / 770", city: "Atlanta" },
]

const RELATED = [
  {
    title: "Virtual phone numbers",
    desc: "Broader nationwide reach — any area code, not tied to a specific city.",
    href: "/phone-numbers/virtual",
  },
  {
    title: "Vanity phone numbers",
    desc: "1-800-YOUR-BRAND. Numbers people remember and repeat.",
    href: "/phone-numbers/vanity",
  },
  {
    title: "Business phone numbers",
    desc: "A dedicated professional line. Separate from personal, routes to any device.",
    href: "/phone-numbers/business",
  },
]

export default function LocalNumberPage() {
  return (
    <PageLayout>
      {/* ── Hero — two-column with image slot ──────────────────── */}
      <PageHero
        eyebrow="Local Phone Numbers"
        h1="A local area code. In any city. Without the office."
        sub="Local numbers that make your business feel like it is already next door."
        trustItems={["Every major area code", "Instant provisioning", "STIR/SHAKEN", "190+ countries"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image={{
          // Replace src with your own image URL to populate the hero visual
          // src: "/images/local-hero.jpg",
          alt: "Local phone number hero — city presence",
        }}
      />


      {/* ── Stats ──────────────────────────────────────────────── */}
      <StatBar stats={STATS} />

      {/* ── Benefits grid ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Local presence"
          h2="What a local number does for your business"
          sub="Four ways local numbers move the needle — beyond just call routing."
        />
        <ValueGrid items={BENEFITS} cols={4} />
      </section>

      {/* ── The math behind a local number ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 border-b border-gray-100 pb-5">
          <span className="inline-block w-8 h-px bg-accent" />
          <p className="text-[10px] font-mono font-bold tracking-[3px] uppercase text-accent">
            The math behind a local number
          </p>
        </div>

        {/* Headline row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-foreground leading-[1.05] text-balance">
            Recognized area codes{" "}
            <em className="not-italic text-accent">get answered.</em>
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-[340px] lg:text-right">
            Same dial volume. Same reps. Different caller ID — and the conversations compound from day one.
          </p>
        </div>

        {/* Two-column editorial breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 rounded-2xl overflow-hidden">

          {/* Left — headline metric */}
          <div className="bg-foreground text-white px-10 py-12 flex flex-col justify-between min-h-[360px]">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[3px] uppercase text-accent mb-8">
                Headline metric
              </p>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-[112px] font-semibold leading-none tracking-tightest text-white">4</span>
                <span className="text-[48px] font-semibold leading-none text-accent mb-3">×</span>
              </div>
            </div>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-[320px]">
              Answer rate when the caller ID matches a local area code.
            </p>
          </div>

          {/* Right — per-rep breakdown */}
          <div className="bg-gray-50 px-10 py-12 flex flex-col justify-between min-h-[360px]">
            <div className="flex items-start justify-between mb-8">
              <p className="text-[10px] font-mono font-bold tracking-[3px] uppercase text-gray-400">Per rep / week</p>
              <p className="text-[10px] font-mono text-gray-400">200 dials baseline</p>
            </div>

            <div className="mb-8">
              <div className="flex items-end gap-2 mb-3">
                <span className="text-[72px] font-semibold leading-none tracking-tightest text-foreground">+60</span>
              </div>
              <p className="text-[15px] font-medium text-gray-800 mb-1">Extra conversations recovered weekly.</p>
              <p className="text-[13px] text-gray-500">
                15% {'→'} 45% answer rate, no extra dials, no new headcount.
              </p>
            </div>

            {/* Before / after bar */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                  <span>Unknown number</span>
                  <span>15% — 30 conversations</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-[15%] bg-gray-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                  <span>Local area code</span>
                  <span>45% — 90 conversations</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-[45%] bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footnotes row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-x border-b border-gray-100 rounded-b-none -mt-px divide-x divide-gray-100">
          {[
            { value: "3×", label: "Higher answer rate", note: "vs. unknown out-of-state" },
            { value: "600+", label: "Extra convos/week", note: "at 10 reps" },
            { value: "0", label: "Extra dials needed", note: "same call volume" },
          ].map(({ value, label, note }) => (
            <div key={label} className="px-8 py-6 flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight text-foreground">{value}</span>
              <span className="text-[13px] font-medium text-gray-700">{label}</span>
              <span className="text-[11px] font-mono text-gray-400">{note}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-accent text-[14px] font-semibold hover:gap-2.5 transition-all"
          >
            Start free trial <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* ── Dark band: area codes ───────────────────────────────── */}
      <DarkBand>
        <SectionHeading eyebrow="Coverage" h2="Major markets, covered" />
        <p className="text-base text-gray-400 leading-relaxed max-w-[520px] mb-10 -mt-4">
          Every major US market is available, plus 190+ countries for international operations.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AREA_CODES.map(({ code, city }) => (
            <div key={city} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <p className="font-mono text-[13px] font-bold text-[#95d9e8] mb-1">{code}</p>
              <p className="text-[12px] text-gray-400">{city}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-gray-500">
          Full US coverage plus international markets.{" "}
          <a href="#" className="text-[#1abcd9] hover:underline">
            Ask about your target market.
          </a>
        </p>
      </DarkBand>

      {/* ── Feature split: multi-market with image ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FeatureSplit
          eyebrow="Multi-market"
          heading="Running across multiple cities"
          body="10 cities? Add a local number for each. All routed to your central team. All managed from one dashboard. Caller ID shows the local number, not your HQ area code."
          points={[
            "One account for all your local numbers",
            "Each city number routes to the same team",
            "Caller ID shows the local number — not your HQ area code",
            "Available in 190+ countries for global operations",
          ]}
          cta={{ label: "Start free trial", href: "/pricing" }}
          image={{
            // src: "/images/local-multi-market.jpg",
            alt: "Multi-market phone number routing diagram",
          }}
          reverse
        />
      </section>

      {/* ── Example setup card ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-accent mb-5">
              Example setup
            </p>
            <div className="space-y-3">
              {[
                { city: "New York", code: "212" },
                { city: "Miami", code: "305" },
                { city: "Los Angeles", code: "310" },
                { city: "Chicago", code: "312" },
                { city: "San Francisco", code: "415" },
              ].map(({ city, code }) => (
                <div
                  key={city}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
                >
                  <span className="text-[13px] font-semibold text-gray-700">{city}</span>
                  <span className="text-[11px] font-mono text-accent font-bold bg-[#e0f7fa] px-2 py-0.5 rounded">
                    {code}
                  </span>
                  <span className="text-[12px] text-gray-400">Central support team</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image slot — swap in your own src */}
          <ImageSlot
            alt="City coverage map or dashboard screenshot"
            aspect="aspect-[4/3]"
          // src="/images/local-setup-visual.jpg"
          />
        </div>
      </section>

      <Faq />
      <RelatedCards heading="Explore other number types" cards={RELATED} />
      <FinalCta />
    </PageLayout>
  )
}
