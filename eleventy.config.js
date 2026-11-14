export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  // "0475 35 14 43" -> "+32475351443" pour les liens d'appel
  eleventyConfig.addFilter("telLink", (n) => "+32" + String(n).replace(/\D/g, "").replace(/^0/, ""));
  // chemins relatifs : le site marche aussi bien sur github.io/kineosteo/ que sur le domaine
  eleventyConfig.addFilter("rel", (p) => String(p || "").replace(/^\/+/, ""));
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  return { dir: { input: "src", output: "_site" } };
}
