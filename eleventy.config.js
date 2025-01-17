export default function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");

  // Copy the `images/`, `fonts/` & `js/` directories
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");

  return {
    passthroughFileCopy: true,
  };
}

export const config = {
  dir: {
    includes: "_includes",
    layouts: "_layouts",
  },
};
