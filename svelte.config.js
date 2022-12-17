import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess()
, kit: {
    adapter: adapter({
      fallback: 'index.html'
    , precompress: true
    })
  , prerender: { entries: [] }
  }
, trailingSlash: 'always'
};

export default config;
