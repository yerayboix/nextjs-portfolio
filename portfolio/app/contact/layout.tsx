import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yeray Boix Torner | Portfolio - Contacto',
  description: 'Contacta con Yeray Boix Torner, desarrollador full-stack. Disponible para proyectos, colaboraciones y oportunidades laborales. Respuesta rápida.',
  keywords: 'contacto, yeray boix, desarrollador, full-stack, portfolio, proyectos',
  openGraph: {
    title: 'Yeray Boix Torner | Portfolio - Contacto',
    description: 'Contacta con Yeray Boix Torner, desarrollador full-stack. Disponible para proyectos, colaboraciones y oportunidades laborales.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeray Boix Torner | Portfolio - Contacto',
    description: 'Contacta con Yeray Boix Torner, desarrollador full-stack.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 