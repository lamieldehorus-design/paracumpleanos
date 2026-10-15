const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const BASE = "https://paracumpleanos.com";
const posts = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "posts.json"), "utf8"));
const categories = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "categories.json"), "utf8"));
const STATIC_ROUTES = [
  "/frases-de-cumpleanos/",
  "/mensajes-de-cumpleanos/",
  "/mensajes-de-cumpleanos-para-mama/",
  "/mensajes-de-cumpleanos-para-papa/",
  "/mensajes-de-cumpleanos-para-mi-pareja/",
  "/mensajes-de-cumpleanos-para-una-hija/",
  "/mensajes-de-cumpleanos-para-un-hijo/",
  "/mensajes-de-cumpleanos-para-alguien-lejos/",
  "/mensajes-de-cumpleanos-para-un-hermano/",
  "/mensajes-de-cumpleanos-para-un-primo/",
  "/mensajes-de-cumpleanos-para-un-tio/",
  "/mensajes-de-cumpleanos-para-una-tia/",
  "/mensajes-de-cumpleanos-para-un-abuelo/",
  "/mensajes-de-cumpleanos-para-una-abuela/",
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

const messageRoutes = STATIC_ROUTES.filter((route) => route.startsWith("/mensajes-de-cumpleanos-para-"));
const invalidMessageCollections = [];
for (const route of messageRoutes) {
  const file = fileForRoute(route);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const messageCount = (html.match(/class="message-example"/g) || []).length;
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const visibleMessageCount = (html.match(/class="message-example" id="mensaje-[0-9]+">/g) || []).length;
  const hiddenMessageCount = (html.match(/class="message-example" id="mensaje-[0-9]+" hidden>/g) || []).length;
  const hasLoadMore = html.includes('id="show-more-messages"') && html.includes('id="message-load-status"');
  if (messageCount !== 100 || visibleMessageCount !== 10 || hiddenMessageCount !== 90 || !hasLoadMore || !title.includes("100 mensajes de cumpleaños") || !description.includes("100 mensajes de cumpleaños")) {
    invalidMessageCollections.push(route + " (" + messageCount + " mensajes)");
  }
}

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

if (invalidMessageCollections.length) {
  console.error("Colecciones de mensajes que deben tener 100 textos, carga progresiva y metadatos actualizados:", invalidMessageCollections.join(", "));
  process.exit(1);
}
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
      route.startsWith("/posts/") ? "0.7" :
      route === "/frases-de-cumpleanos/" || route === "/mensajes-de-cumpleanos/" || route === "/postales-de-cumpleanos/" || route.startsWith("/mensajes-de-cumpleanos-para-") ? "0.9" : "0.6";
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
  " colecciones, 100 frases y Statcounter presente en todas las páginas. " +
  "Además, " + messageRoutes.length + " colecciones tienen 100 mensajes cada una y muestran 10 por vez.");
console.log("Sitemap.xml y robots.txt actualizados.");
