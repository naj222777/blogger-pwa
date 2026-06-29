import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'News and Java',
    short_name: 'NewsJava',
    description: 'Keeping You Informed Since 2002 - News Aggregator',
    dir: 'auto',
    lang: 'en-US',
    background_color: '#ffffff',
    theme_color: '#000000',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    prefer_related_applications: false,
  },

  pwa: {
    logs: true,
  },

  origin: 'https://www.newsandjava.com',
});
