import { DocSearch } from '@docsearch/react';
import config from '~@/config';
import { useLocales } from './useLocales';
import '@docsearch/css';
import './index.css';

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  const algoliaLocalesConfig = useLocales(config.lang);

  return (
    config.algolia && (
      <div className={className}>
        <DocSearch
          appId={config.algolia.appId}
          indexName={config.algolia.indexName}
          apiKey={config.algolia.apiKey}
          placeholder={algoliaLocalesConfig.placeholder}
          translations={algoliaLocalesConfig.translations}
        />
      </div>
    )
  );
};

export default Search;
