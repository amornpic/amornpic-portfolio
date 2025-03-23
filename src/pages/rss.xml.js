import rss from '@astrojs/rss';
import { experimental_AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection, render } from 'astro:content';
import { getContainerRenderer as mdxContainerRenderer } from "@astrojs/mdx";
import sanitizeHtml from 'sanitize-html';
import config from '~@/config';

export async function GET(context) {
  const blog = await getCollection('post');
  const renderers = await loadRenderers([mdxContainerRenderer()]);
  const container = await experimental_AstroContainer.create({
    renderers,
  });

  const postItems = await Promise.all(blog
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate - a.data.pubDate)
    .map(async (post) => {
      const { Content } = await render(post);
      const htmlStr = await container.renderToString(Content);

      return {
        link: `/blog/${post.slug}/`,
        title: post.data.title,
        content: sanitizeHtml(htmlStr, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
        ...post.data,
      }
    }));

  const rssOptions = {
    stylesheet: '/pretty-feed-v3.xsl',
    title: config.title,
    description: config.description,
    site: context.site,
    trailingSlash: false,
    items: postItems,
  }

  if(config.follow) {
    rssOptions.customData = `<follow_challenge>
      <feedId>${config.follow.feedId}</feedId>
      <userId>${config.follow.userId}</userId>
    </follow challenge>`;
  }

  return rss(rssOptions);
}
