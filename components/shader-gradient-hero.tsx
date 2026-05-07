'use client'

export function ShaderGradientHero() {
  return (
    <div
      id="shader-gradient"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      <script
        async
        src="https://cdn.jsdelivr.net/npm/@shader-gradient/core"
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            import { ShaderGradient } from 'https://cdn.jsdelivr.net/npm/@shader-gradient/core';
            
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
            };
            
            const container = document.getElementById('shader-gradient');
            if (container && window.ShaderGradient) {
              try {
                new window.ShaderGradient(container, gradientOptions);
              } catch (e) {
                console.error('[v0] ShaderGradient error:', e);
              }
            }
          `,
        }}
      />
    </div>
  )
}
