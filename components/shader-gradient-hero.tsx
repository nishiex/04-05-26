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
        uSpeed={0.72}
        uStrength={0.7}
        uDensity={0.9}
        cDistance={2.53}
        cameraZoom={72.1}
        cPolarAngle={128}
        cAzimuthAngle={83}
        color1="#1abcd9"
        color2="#b2e8f0"
        color3="#ffffff"
        color4="#ffffff"
        grainBlending={0.32}
        toggleAxis={true}
        wireframe={false}
        shader="defaults"
      />
    </ShaderGradientCanvas>
  )
}
