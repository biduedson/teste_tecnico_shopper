/** @type {import('next').NextConfig} */
import dotenv from 'dotenv'
dotenv.config({ path: "../.env" });



const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "landing.shopper.com.br" },
            { hostname: "maps.googleapis.com" },
        ],
    },
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_API_KEY,

    },
    async rewrites() {

        return [
            {
                source: '/api/:path*',
                destination: process.env.NODE_ENV === 'production'
                    ? 'http://backend:8080/:path*' // URL para Docker (produção)
                    : 'http://localhost:8080/:path*', // URL para local (desenvolvimento)
            },
        ];
    },
};

export default nextConfig;
