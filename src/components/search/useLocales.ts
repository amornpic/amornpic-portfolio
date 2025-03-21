import type { DocSearchProps } from '@docsearch/react';
import { useMemo } from 'react';
import { languages, type LangType } from '@/typings/config';

export const algoliaLocalesConfig: Record<
  LangType,
  Omit<DocSearchProps, 'appId' | 'apiKey' | 'indexName'>
> = {
  'en-US': {},
  'th': {},
};

export function useLocales(local: LangType = languages[0]) {
  const config = useMemo(() => {
    return algoliaLocalesConfig[local];
  }, [local]);

  return config;
}
