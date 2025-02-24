import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import './src/libs/Env';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

  return withNextIntl({
    output: 'export',
    images: {
      unoptimized: true,
    },
    hideSourceMaps: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    disableLogger: true,
    assetPrefix: isDev ? undefined : 'https://cdn.mydomain.com',
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
  });
};

export default bundleAnalyzer(nextConfig);
