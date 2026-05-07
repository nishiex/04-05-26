'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export function ShaderGradientHero() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
      }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        type="plane"
        uSpeed={0.5}
        uStrength={2}
        uFrequency={4}
        cDistance={2.53}
        cameraZoom={44.45}
        cPolarAngle={90}
        cAzimuthAngle={0}
        color1="#1abcd9"
        color2="#b2e8f0"
        color3="#ffffff"
        brightness={1.2}
        wireframe={false}
        shader="defaults"
      />
    </ShaderGradientCanvas>
  )
}
