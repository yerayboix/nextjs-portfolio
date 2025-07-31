import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yeray Boix Torner | Portfolio - Descargas',
  description: 'Descarga el CV y carta de recomendación de Yeray Boix Torner, desarrollador full-stack. Documentos profesionales actualizados para conocer mejor mi perfil.',
  keywords: 'descargas, cv, currículum, carta recomendación, yeray boix, desarrollador, portfolio',
  openGraph: {
    title: 'Yeray Boix Torner | Portfolio - Descargas',
    description: 'Descarga el CV y carta de recomendación de Yeray Boix Torner, desarrollador full-stack.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeray Boix Torner | Portfolio - Descargas',
    description: 'Descarga el CV y carta de recomendación de Yeray Boix Torner.',
  },
}

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 