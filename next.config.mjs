/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
    missingSuspenseWithCSRBailout:false, //
    },
    images:{
        domains: ['images.unsplash.com',"static-01.daraz.com.bd","www.jerseybdclub.com"]
    }
};

export default nextConfig;
