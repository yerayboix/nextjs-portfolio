import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#0f172a', // slate-900 color
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff', // white text
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        YB
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
} 