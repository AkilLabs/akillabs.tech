/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: [
      "user-images.githubusercontent.com", 
      "cdn.hashnode.com", 
      "github.com",
      "cdn.jsdelivr.net",
      "streamlit.io",
      "huggingface.co",
      "python.langchain.com",
      "avatars.githubusercontent.com",
      "ollama.com",
      "www.vectorlogo.zone",
      "assets.vercel.com",
      "upload.wikimedia.org",
      "storage.googleapis.com"
    ],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
