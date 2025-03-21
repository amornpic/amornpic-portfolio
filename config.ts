import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://amornpic.dev',
  avatar: '/avatar.png',
  title: 'Amornpic Blog',
  description: 'Pure thoughts, simple stories.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 | amornpic',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/amornpic'
    },
]
});