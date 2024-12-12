/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Improve webpack performance
    config.performance = {
      hints: false
    };
    
    return config;
  },
  
  // Optional: Compress large strings
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  }
}


export default nextConfig
