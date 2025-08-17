import { RootLayout as Layout } from '@/components/RootLayout'

export const metadata = {
  title: 'OrgLight',
  description: 'OrgLight website built with Next.js and Tailwind.',
}

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>
}
