import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lwbelhebjlipbsbszawg.supabase.co',
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
