export default function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    files: "./_site/css/**/*.css",
  });
}
