import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /services is superseded by /practices (canonical URL per site architecture)
      {
        source: '/services',
        destination: '/practices',
        permanent: true,
      },
      {
        source: '/es/services',
        destination: '/es/practices',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

