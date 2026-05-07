import { ShaderGradient, ShaderGradientInput, ShaderGradientPresetName } from '@shader-gradient/core'

const gradientOptions: Partial<ShaderGradientInput> = {
  pixelDensity: 1.5,
  preset: 'interstella' as ShaderGradientPresetName, // ✅ cast to union type
  color: ['#3fe3ee', '#ffffff', '#d6f3f5'],
  cameraZoom: 15.49,
  chromaticAberration: true,
  chromaticAberrationStrength: 0.016,
}

const container = document.getElementById('shader-gradient')

if (!container) {
  throw new Error('Missing #shader-gradient container.')
}

const gradient = new ShaderGradient(container, gradientOptions)

// Later, when you want to clean up:
gradient.dispose()
