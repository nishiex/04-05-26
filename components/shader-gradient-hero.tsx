'use client'

import { useEffect, useRef } from 'react'

export function ShaderGradientHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Load shader-gradient library from CDN
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@jannchie/shader-gradient@0.0.0/dist/shader-gradient.umd.js'
    script.async = true

    script.onload = () => {
      try {
        const ShaderGradient = (window as any).ShaderGradient
        if (!ShaderGradient) {
          console.error('[v0] ShaderGradient not found on window')
          return
        }

        const gradient = new ShaderGradient.default(container, {
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
        })

        return () => {
          gradient?.dispose()
        }
      } catch (error) {
        console.error('[v0] ShaderGradient init error:', error)
      }
    }

    script.onerror = () => {
      console.error('[v0] Failed to load ShaderGradient library')
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
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
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}
