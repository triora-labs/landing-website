import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: overrides.title ?? SITE_CONFIG.name,
    description: overrides.description ?? SITE_CONFIG.description,
    metadataBase: new URL('https://triora-labs.com'),
    openGraph: {
      siteName: SITE_CONFIG.name,
      type: 'website',
      ...(overrides.openGraph ?? {}),
    },
    twitter: { card: 'summary_large_image' },
    ...overrides,
  }
}
