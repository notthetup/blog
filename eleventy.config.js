import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { Liquid } from "liquidjs";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
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
  // Copy images - both /img/ and /images/ paths for compatibility
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/img": "images" });
  eleventyConfig.addPassthroughCopy({ "src/audio": "audio" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.setLibrary("liquid", new Liquid({
    extname: ".liquid",
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    root: ["src/_includes"],
  }));
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    urlPath: "/img/",
  });

  let markdownLib = MarkdownIt({ html: true }).use(
		await Shiki({
			theme: "snazzy-light",
		}),
	);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: { input: 'src', output: 'dist' },
  };


}