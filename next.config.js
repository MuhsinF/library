/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 async redirects() {
  return [
   {
    source: '/',
    destination: '/read',
    permanent: true,
   },
  ]
 },
}

module.exports = nextConfig
