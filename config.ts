import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://amornpic.dev',
  avatar: 'https://avatars.githubusercontent.com/u/41936114?v=4',
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
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/amornpic'
    },
    {
      icon: 'mail',
      link: 'mailto:amornpic09@gmail.com'
    },
]
});