import Inspect from 'vite-plugin-inspect';
import injectHTML from 'vite-plugin-html-inject';
export default {
   plugins: [
      Inspect(),
      injectHTML(),
   ],
};
