import type { config, ThemeOptions } from '@/typings/config';

const defaultConfig: Partial<config> = {
  lang: 'th',
  theme: {
    mode: 'auto',
    enableUserChange: true,
  },
  readTime: false,
  lastModified: false,
};

export function defineConfig(config: config): config {
  const mergedConfig: Partial<config> = {};

  if (typeof config.theme === 'string') {
    mergedConfig.theme = {
      ...(defaultConfig.theme as ThemeOptions),
      mode: config.theme,
    };
  } else {
    mergedConfig.theme = {
      ...(defaultConfig.theme as ThemeOptions),
      ...config.theme,
    };
  }

  return Object.assign({}, defaultConfig, config, mergedConfig);
}
