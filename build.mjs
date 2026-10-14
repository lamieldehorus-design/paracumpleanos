const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const BASE = "https://paracumpleanos.com";
const posts = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "posts.json"), "utf8"));
const categories = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "categories.json"), "utf8"));
const STATIC_ROUTES = [
  "/frases-de-cumpleanos/",
  "/mensajes-de-cumpleanos/",
  "/postales-de-cumpleanos/",
  "/sobre-nosotros/",
  "/contacto/",
  "/privacidad/",
  "/recursos/banderines-cumpleanos-imprimibles/"
];

function fileForRoute(route) {
  if (route === "/") return path.join(ROOT, "index.html");
  if (route === "/404.html") return path.join(ROOT, "404.html");
  const relative = route.split("/").filter(Boolean).join(path.sep);
  return path.join(ROOT, relative, "index.html");
}

const routes = [
  "/",
  ...categories.map((item) => "/categoria/" + item.slug + "/"),
  ...posts.map((item) => "/posts/" + item.slug + "/"),
  ...STATIC_ROUTES
];
const missing = [];
const missingStatcounter = [];

for (const route of routes.concat("/404.html")) {
  const file = fileForRoute(route);
  if (!fs.existsSync(file)) {
    missing.push(route);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes("sc_project=13334162") ||
      !html.includes("c.statcounter.com/13334162/0/3e891d7b/1/")) {
    missingStatcounter.push(route);
  }
}

const phrasePost = posts.find((item) => item.slug === "100-frases-de-cumpleanos-que-emocionan");
const phraseCount = phrasePost && phrasePost.sections[0]
  ? (phrasePost.sections[0].bullets || []).length
  : 0;

if (missing.length || missingStatcounter.length) {
  if (missing.length) console.error("Páginas faltantes:", missing.join(", "));
  if (missingStatcounter.length) console.error("Falta Statcounter:", missingStatcounter.join(", "));
  process.exit(1);
}
if (phraseCount !== 100) {
  console.error("La colección debe contener 100 frases; contiene " + phraseCount + ".");
  process.exit(1);
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => {
    const priority = route === "/" ? "1.0" :
      route.startsWith("/categoria/") ? "0.8" :
      route.startsWith("/posts/") ? "0.7" : "0.6";
    const frequency = route === "/" ? "weekly" : "monthly";
    return "<url><loc>" + BASE + route + "</loc><changefreq>" + frequency +
      "</changefreq><priority>" + priority + "</priority></url>";
  }),
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
fs.writeFileSync(
  path.join(ROOT, "robots.txt"),
  "User-agent: *\nAllow: /\nDisallow: /data/\nSitemap: " + BASE + "/sitemap.xml\n",
  "utf8"
);

console.log("Validación correcta: " + routes.length + " URLs, " +
  categories.length + " categorías, " + posts.length +
  " colecciones, 100 frases y Statcounter presente en todas las páginas.");
console.log("Sitemap.xml y robots.txt actualizados.");
