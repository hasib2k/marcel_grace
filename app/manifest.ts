export default function manifest() {
  return {
    name: 'Marcel Grace Infotech - Software Development Company',
    short_name: 'Marcel Grace',
    description: 'Leading software development company providing innovative digital solutions, web development, mobile apps, and custom software services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#10B981',
    icons: [
      {
        src: '/assets/mg_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/mg_logo2.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
