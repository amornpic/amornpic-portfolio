import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGemoji from 'remark-gemoji';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import codeImport from 'remark-code-import';
import remarkBlockContainers from 'remark-block-containers';
import astroExpressiveCode from 'astro-expressive-code';
import rehypeFigure from 'rehype-figure';
import { remarkModifiedTime } from './plugins/remark-modified-time';
import { remarkReadingTime } from './plugins/remark-reading-time';
import config from './config';

function computedIntegrations() {
  const result = [astroExpressiveCode(), mdx(), react(), sitemap(config.sitemap)];

  return result;
}

function generateAstroConfigure() {
  const astroConfig = {
    site: config.site,
    integrations: computedIntegrations(),
    markdown: {
      remarkPlugins: [
        remarkGemoji,
        remarkMath,
        codeImport,
        // [codesandbox, { mode: 'button' }],
        remarkBlockContainers,
      ],
      rehypePlugins: [rehypeKatex, rehypeFigure],
    },
    vite: {
      plugins: [
        svgr(),
        tailwindcss(),
      ],
    },
  };

  if (config.lastModified) {
    astroConfig.markdown.remarkPlugins.push(remarkModifiedTime);
  }

  if (config.readTime) {
    astroConfig.markdown.remarkPlugins.push(remarkReadingTime);
  }

  return astroConfig;
}

// https://astro.build/config
export default defineConfig(generateAstroConfigure());
