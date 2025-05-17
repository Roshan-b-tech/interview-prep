/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignore ESLint errors during build
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Ignore TypeScript errors during build
        ignoreBuildErrors: true,
    },
    experimental: {
        // Ensure server-only modules don't get bundled for the client
        serverComponentsExternalPackages: ['firebase-admin']
    }
}

module.exports = nextConfig 