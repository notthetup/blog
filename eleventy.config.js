import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { Liquid } from "liquidjs";
// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";

export default async function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/styles/index.css');
    const tailwindOutputPath = './dist/styles/index.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await postcss([tailwindcss()]).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  // Drafts,
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft) {
      data.title = `${data.title} (draft)`;
    }

    if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });
  // Copy site-wide images (avatar, about page, social meta)
  eleventyConfig.addPassthroughCopy({ "src/img/chinpen.jpg": "img/chinpen.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/img/about_feature.jpg": "img/about_feature.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/img/pic.jpg": "img/pic.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/img/social": "img/social" });

  // Copy post assets to their output directories (strips _posts prefix)
  // e.g., src/_posts/auralizr/image.jpg -> dist/auralizr/image.jpg
  eleventyConfig.on('eleventy.before', async () => {
    const postsDir = path.resolve('./src/_posts');
    const distDir = path.resolve('./dist');
    const assetExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp3', '.wav', '.js', '.pdf'];

    const slugDirs = fs.readdirSync(postsDir).filter(f =>
      fs.statSync(path.join(postsDir, f)).isDirectory()
    );

    for (const slug of slugDirs) {
      const srcSlugDir = path.join(postsDir, slug);
      const destSlugDir = path.join(distDir, slug);

      const files = fs.readdirSync(srcSlugDir);
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (assetExts.includes(ext)) {
          if (!fs.existsSync(destSlugDir)) {
            fs.mkdirSync(destSlugDir, { recursive: true });
          }
          fs.copyFileSync(
            path.join(srcSlugDir, file),
            path.join(destSlugDir, file)
          );
        }
      }
    }
  });

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.setLibrary("liquid", new Liquid({
    extname: ".liquid",
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    root: ["src/_includes"],
  }));
  // Note: Removed eleventyImageTransformPlugin - using raw images from post directories

  let markdownLib = MarkdownIt({ html: true }).use(
		await Shiki({
			theme: "snazzy-light",
		}),
	);

  eleventyConfig.setLibrary("md", markdownLib);

  // Get pathPrefix from environment variable (default to "/" for local dev)
  const pathPrefix = process.env.PATH_PREFIX || "/";

  return {
    dir: { input: 'src', output: 'dist' },
    pathPrefix: pathPrefix,
  };


}