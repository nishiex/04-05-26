'use client'

import { useEffect, useRef } from 'react'

export function ShaderGradientSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let disposed = false

    async function init() {
      try {
        const { ShaderGradient } = await import('@shader-gradient/core')

        if (disposed || !containerRef.current) return

        const gradientOptions = {
          pixelDensity: 1.5,
          preset: 'interstella',
          colors: ['#73bfc4', '#ffffff', '#dff7f9'],
          chromaticAberration: true,
          chromaticAberrationStrength: 0.016,
          cameraZoom: 15.49,
        }

        gradientRef.current = new ShaderGradient(containerRef.current, gradientOptions)
      } catch (error) {
        console.error('[v0] ShaderGradient init error:', error)
      }
    }

    init()

    return () => {
      disposed = true
      if (gradientRef.current) {
        gradientRef.current.dispose()
        gradientRef.current = null
      }
    }
  }, [])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <div
        ref={containerRef}
        id="shader-gradient"
        className="absolute inset-0 w-full h-full"
      />
    </section>
  )
}
