'use client'

import { useEffect, useRef } from 'react'
import { ShaderGradient } from '@shader-gradient/core'

export function ShaderGradientHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<ShaderGradient | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    try {
      gradientRef.current = new ShaderGradient(containerRef.current, {
        pixelDensity: 1.5,
        preset: 'interstella',
        colors: ['#1abcd9', '#b2e8f0', '#ffffff', '#ffffff'],
      })

      return () => {
        if (gradientRef.current) {
          gradientRef.current.dispose()
          gradientRef.current = null
        }
      }
    } catch (error) {
      console.error('[v0] ShaderGradient initialization error:', error)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
