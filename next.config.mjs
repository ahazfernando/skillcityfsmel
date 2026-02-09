/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/builders-cleaning', destination: 'https://www.skillcityfacilitysolutions.com.au/services/builders-cleaning', permanent: true },
      { source: '/other-cleaning-services', destination: 'https://www.skillcityfacilitysolutions.com.au/services/house-cleaning', permanent: true },
      { source: '/about', destination: 'https://www.skillcityfacilitysolutions.com.au/about-us', permanent: true },
      { source: '/contact', destination: 'https://www.skillcityfacilitysolutions.com.au/contact-us', permanent: true },
      { source: '/others', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
