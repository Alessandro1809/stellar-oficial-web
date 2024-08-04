import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import dotenv from 'dotenv';

dotenv.config();
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.SECRET_EMAILJS_SERVICE_ID': JSON.stringify(process.env.SECRET_EMAILJS_SERVICE_ID),
      'import.meta.env.SECRET_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.SECRET_EMAILJS_TEMPLATE_ID),
      'import.meta.env.SECRET_EMAILJS_USER_ID': JSON.stringify(process.env.SECRET_EMAILJS_USER_ID),
    },
  },
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel()
});