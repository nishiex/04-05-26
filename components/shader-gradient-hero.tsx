'use client'

import { useEffect, useRef } from 'react'
import { ShaderGradient } from '@shader-gradient/core'

export function ShaderGradientHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<ShaderGradient | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const gradientOptions = {
      pixelDensity: 1.5,
      preset: 'interstella',
      uSpeed: 0.72,
      uStrength: 0.7,
      uDensity: 0.9,
      colors: ['#1abcd9', '#b2e8f0', '#ffffff', '#ffffff', '#ffffff'],
      cAzimuthAngle: 112,
      cPolarAngle: 143,
      cDistance: 2.53,
      cameraZoom: 64.06,
      grainBlending: 0.32,
      toggleAxis: true,
    }

    try {
      gradientRef.current = new ShaderGradient(containerRef.current, gradientOptions)
    } catch (error) {
      console.error('[v0] ShaderGradient initialization error:', error)
    }

    return () => {
      if (gradientRef.current) {
        gradientRef.current.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="shader-gradient"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}
