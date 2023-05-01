/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.thenationalnews.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: ''
      }
    ],
  }
}
