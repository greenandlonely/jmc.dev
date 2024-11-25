export default function (eleventyConfig) {
  // Order matters, put this at the top of your configuration file.
  // This is relative to your input directory!
  eleventyConfig.setLayoutsDirectory("_layouts");

  // Copy the `images/` & `fonts/` directories
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");

  return {
    passthroughFileCopy: true,
  };
}

export const config = {
  dir: {
    // These are both relative to your input directory!
    includes: "_includes",
    layouts: "_layouts",
  },
};
