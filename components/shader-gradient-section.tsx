'use client'

import { useEffect, useRef } from 'react'
import { ShaderGradient, ShaderGradientInput, ShaderGradientPresetName } from '@shader-gradient/core'

export function ShaderGradientSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<ShaderGradient | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let disposed = false

    async function init() {
      try {
        const gradientOptions: Partial<ShaderGradientInput> = {
          pixelDensity: 1.5,
          preset: 'interstella' as ShaderGradientPresetName, // ✅ cast to union type
          colors: ['#73bfc4', '#ffffff', '#dff7f9'],
          chromaticAberration: true,
          chromaticAberrationStrength: 0.016,
          cameraZoom: 15.49,
        }

        if (disposed || !containerRef.current) return

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
