/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port:''
            },
            {
                protocol: 'https',
                hostname: 'www.facebook.com',
                port:''
            }  
        ]
    }
}


export default nextConfig;
