/** @type {import('next').NextConfig} */
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


config({ path: `${__dirname}/../.env` });

const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "landing.shopper.com.br" }, { hostname: "maps.googleapis.com" }],
    },
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_API_KEY,
    },
};

export default nextConfig;
