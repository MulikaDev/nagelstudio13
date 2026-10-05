import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Налаштування для Vercel
  images: {
    unoptimized: true, // Залиште, якщо не хочете використовувати платну оптимізацію Vercel або якщо це статичний сайт
  },
};

export default nextConfig;
