const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}