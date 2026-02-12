import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 56, margin: 0 }}>🔐</p>
        <h1 style={{ fontSize: 48, fontWeight: 800, margin: '16px 0 8px' }}>
          CAMS
        </h1>
        <p style={{ fontSize: 20, opacity: 0.7, margin: 0 }}>
          Contractor Access Management System
        </p>
        <p style={{ fontSize: 16, opacity: 0.5, marginTop: 8 }}>
          Secure, TOTP-based QR code access control for contractor site management
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/docs"
            style={{
              padding: '12px 28px',
              borderRadius: 8,
              background: '#06b6d4',
              color: 'white',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 15
            }}
          >
            Get Started →
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
        {[
          { icon: '📱', title: 'Contractor App', desc: 'iOS & Android apps for contractors to generate TOTP-based QR codes for site access.', href: '/docs/android-contractor' },
          { icon: '📷', title: 'Scanner App', desc: 'iOS & Android apps for security guards to scan and validate contractor QR codes.', href: '/docs/android-scanner' },
          { icon: '🖥️', title: 'Admin Portal', desc: 'Next.js web dashboard for managing contractors, sites, schedules, and audit logs.', href: '/docs/admin-portal' },
          { icon: '🏗️', title: 'Architecture', desc: 'System architecture, API design, security model, and deployment topology.', href: '/docs/architecture' },
          { icon: '🔌', title: 'API Reference', desc: 'Backend REST API endpoints for authentication, scanning, and data management.', href: '/docs/api' },
          { icon: '🌍', title: 'Bilingual', desc: 'Full English and Arabic language support with RTL layout across all platforms.', href: '/docs/architecture/bilingual' },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.href}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 24,
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s',
            }}
          >
            <p style={{ fontSize: 28, margin: '0 0 8px' }}>{card.icon}</p>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 6px' }}>{card.title}</h3>
            <p style={{ fontSize: 14, opacity: 0.6, margin: 0 }}>{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
