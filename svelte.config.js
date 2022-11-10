import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    appDir: "app",
    files: {
      assets: "src/static",
    },
    adapter: adapter({
      fallback: "index.html",
      pages: "public",
    }),
    prerender: { entries: ["/"] },
  },
};
export default config;
