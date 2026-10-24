import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const urls=[];
function walk(dir){
 for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  if(entry.isDirectory()){
   if([".git",".github","node_modules","_site"].includes(entry.name)) continue;
   walk(path.join(dir,entry.name));
  } else if(entry.name==="index.html"){
   const file=path.join(dir,entry.name);
   if(file===path.join(root,"google939990971c7be018.html")) continue;
   const content=fs.readFileSync(file,"utf8");
   const match=content.match(/<link rel="canonical" href="([^"]+)"/i);
   if(match) urls.push(match[1]);
  }
 }
}
walk(root);
const unique=[...new Set(urls)].sort((a,b)=>a==="https://paracumpleanos.com/"?-1:b==="https://paracumpleanos.com/"?1:a.localeCompare(b));
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+unique.map(url=>'  <url><loc>'+url.replace(/&/g,'&amp;')+'</loc></url>').join('\n')+'\n</urlset>\n';
fs.writeFileSync(path.join(root,"sitemap.xml"),xml);
console.log('Sitemap generado: '+unique.length+' URLs únicas.');
