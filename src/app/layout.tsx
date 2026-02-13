import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    template: '%s - CAMS Docs'
  },
  description: 'Contractor Access Management System — Documentation',
  applicationName: 'CAMS Docs',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🔐</span>
          <b>CAMS</b>{' '}
          <span style={{ opacity: '60%', fontSize: 14 }}>Contractor Access Management</span>
        </div>
      }
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🔐" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>© {new Date().getFullYear()} Pragmatic Technologies. All rights reserved.</Footer>}
          editLink=""
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
