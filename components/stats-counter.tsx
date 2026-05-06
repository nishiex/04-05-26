"use client"

import { useEffect, useMemo, useRef, useState } from "react"

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        })
      },
      { threshold },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function useCountUp(target: number, start: boolean, duration = 1400, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTs = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min((now - startTs) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      const v = ease * target
      setValue(decimals ? Number(v.toFixed(decimals)) : Math.floor(v))
      if (p < 1) raf = requestAnimationFrame(step)
      else setValue(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration, decimals])
  return value
}

/* ------------------------------------------------------------------ */
/*  Cards                                                              */
/* ------------------------------------------------------------------ */

/* Headline card — the 4× answer rate, with a before/after bar visual */
function HeadlineCard({ start }: { start: boolean }) {
  const num = useCountUp(4, start, 1400)
  const beforeW = useCountUp(15, start, 1400)
  const afterW = useCountUp(60, start, 1600)

  return (
    <article
      className="relative col-span-12 lg:col-span-7 row-span-2 rounded-3xl p-8 md:p-12 overflow-hidden
                 bg-gradient-to-br from-[#0c1115] via-[#10181d] to-[#0a0f12]
                 border border-white/5"
    >
      {/* Aurora glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(26,188,217,0.45), rgba(26,188,217,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(149,217,232,0.35), rgba(149,217,232,0) 70%)",
        }}
      />

      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-2 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#95d9e8] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[1.5px] uppercase text-[#95d9e8]">
            Headline metric
          </span>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="font-serif text-[120px] md:text-[180px] leading-[0.85] text-white tabular-nums">
            {num}
          </span>
          <span className="font-serif text-5xl md:text-7xl text-[#95d9e8]">×</span>
        </div>

        <h3 className="mt-6 text-xl md:text-2xl font-serif text-white max-w-md leading-snug">
          Answer rate when the caller ID matches a local area code.
        </h3>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
          Unknown prefixes get screened. Recognized ones get picked up. The math compounds across
          every rep, every day.
        </p>

        {/* Before / after visual */}
        <div className="mt-8 md:mt-auto pt-8 space-y-4">
          <div>
            <div className="flex justify-between text-[11px] font-mono uppercase tracking-wider mb-2">
              <span className="text-gray-500">Unknown prefix</span>
              <span className="text-gray-400 tabular-nums">{beforeW}% answer</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-600 rounded-full transition-[width] duration-700"
                style={{ width: `${beforeW}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] font-mono uppercase tracking-wider mb-2">
              <span className="text-[#95d9e8]">Local area code</span>
              <span className="text-[#95d9e8] tabular-nums">{afterW}% answer</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-[width] duration-700"
                style={{
                  width: `${afterW}%`,
                  background: "linear-gradient(90deg, #1abcd9, #95d9e8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/* Conversations recovered — sparkline */
function ConversationsCard({ start }: { start: boolean }) {
  const num = useCountUp(60, start, 1400)
  // simple ascending sparkline points
  const points = useMemo(() => {
    const xs = [0, 14, 28, 42, 56, 70, 84, 100]
    const ys = [62, 58, 50, 46, 38, 30, 22, 14]
    return xs.map((x, i) => `${x},${ys[i]}`).join(" ")
  }, [])

  return (
    <article
      className="relative col-span-12 sm:col-span-6 lg:col-span-5 rounded-3xl p-8 overflow-hidden
                 bg-[#f4f1ea] border border-black/5"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-mono tracking-[1.5px] uppercase text-gray-500">
          Per rep / week
        </span>
        <span className="text-[11px] font-mono text-gray-400">200 dials baseline</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-serif text-7xl md:text-8xl text-gray-900 tabular-nums leading-none">
          +{num}
        </span>
      </div>

      <p className="mt-4 text-base font-serif text-gray-900 leading-snug">
        Extra conversations recovered weekly.
      </p>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        15% → 45% answer rate, no extra dials, no new headcount.
      </p>

      {/* Sparkline */}
      <svg
        viewBox="0 0 100 70"
        className="mt-6 w-full h-16"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1abcd9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1abcd9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,70 ${points} 100,70`} fill="url(#sparkFill)" />
        <polyline
          points={points}
          fill="none"
          stroke="#0f7a8e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="100" cy="14" r="2.5" fill="#0f7a8e" />
      </svg>
    </article>
  )
}

/* Uptime — live status pulse */
function UptimeCard({ start }: { start: boolean }) {
  const num = useCountUp(99.99, start, 1500, 2)
  return (
    <article
      className="relative col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl p-8 overflow-hidden
                 bg-[#0c1115] border border-white/5 text-white"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-mono tracking-[1.5px] uppercase text-gray-400">
          Uptime SLA
        </span>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
            Live
          </span>
        </span>
      </div>

      <div className="flex items-baseline">
        <span className="font-serif text-6xl md:text-7xl text-white tabular-nums leading-none">
          {num.toFixed(2)}
        </span>
        <span className="font-serif text-3xl md:text-4xl text-[#95d9e8]">%</span>
      </div>

      <p className="mt-4 text-sm text-gray-300 leading-relaxed">
        Carrier-grade redundancy. Real status page. No quiet outages.
      </p>

      {/* tiny barcode-style uptime ticks */}
      <div className="mt-6 flex gap-[2px] h-6 items-end">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${60 + ((i * 13) % 40)}%`,
              background: i === 19 ? "#f59e0b" : "rgba(149,217,232,0.55)",
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-mono text-gray-500">
        <span>30d</span>
        <span>now</span>
      </div>
    </article>
  )
}

/* Area code coverage — chip grid */
function AreaCodesCard({ start }: { start: boolean }) {
  const num = useCountUp(200, start, 1400)
  const codes = ["212", "305", "415", "312", "404", "617", "713", "206", "702", "503"]

  return (
    <article
      className="relative col-span-12 lg:col-span-5 rounded-3xl p-8 overflow-hidden
                 bg-white border border-black/5"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-mono tracking-[1.5px] uppercase text-gray-500">
          Coverage
        </span>
        <span className="text-[11px] font-mono text-gray-400">Nationwide</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-serif text-7xl md:text-8xl text-gray-900 tabular-nums leading-none">
          {num}
        </span>
        <span className="font-serif text-3xl md:text-4xl text-gray-400">+</span>
      </div>

      <p className="mt-4 text-base font-serif text-gray-900 leading-snug">
        Area codes across every major U.S. market.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {codes.map((c) => (
          <span
            key={c}
            className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-mono
                       border border-black/5 hover:bg-[#0c1115] hover:text-[#95d9e8] transition-colors"
          >
            {c}
          </span>
        ))}
        <span className="px-3 py-1.5 rounded-full bg-[#0c1115] text-[#95d9e8] text-sm font-mono">
          +190
        </span>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function StatsCounter() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section
      id="s-stats"
      data-sec="stats"
      ref={ref}
      className="relative py-24 md:py-32 px-[5%] bg-[#fafaf7]"
    >
      <div className="relative max-w-[1240px] mx-auto">
        {/* Eyebrow + headline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gray-400" />
              <span className="text-[11px] font-mono tracking-[2px] uppercase text-gray-500">
                The math behind a local number
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.05] tracking-tight">
              Recognized area codes <span className="italic text-[#0f7a8e]">get answered.</span>
            </h2>
          </div>
          <p className="text-[15px] text-gray-600 max-w-sm leading-relaxed">
            Same dial volume. Same reps. Different caller ID — and the conversations compound from
            day one.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
          <HeadlineCard start={inView} />
          <ConversationsCard start={inView} />
          <UptimeCard start={inView} />
          <AreaCodesCard start={inView} />
        </div>

        {/* Footnote */}
        <p className="mt-10 text-xs font-mono text-gray-400 max-w-2xl leading-relaxed">
          Source: blended answer-rate data across outbound SMB cohorts (2024–2025). Individual
          results vary by market and list quality.
        </p>
      </div>
    </section>
  )
}

export default StatsCounter