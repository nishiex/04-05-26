'use client'

import { useEffect, useRef } from 'react'
import {
  ShaderGradient,
  ShaderGradientInput,
  ShaderGradientPresetName,
} from '@shader-gradient/core'

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
          preset: 'interstella' as ShaderGradientPresetName,
          color1: '#3fe3ee',
          color2: '#ffffff',
          color3: '#d6f3f5',
          cameraZoom: 20.00,
          // ❌ remove chromaticAberration and chromaticAberrationStrength
          // If you want that effect, it’s controlled internally by the preset/shader
        }

        if (disposed || !containerRef.current) return

        gradientRef.current = new ShaderGradient(containerRef.current, gradientOptions)
      } catch (error) {
        console.error('[ShaderGradient] init error:', error)
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
