import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const errors=[];
const canonicalMap=new Map();
const pages=[];
function walk(dir){
 for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  if(entry.isDirectory()){
   if([".git",".github","node_modules","_site"].includes(entry.name)) continue;
   walk(path.join(dir,entry.name));
  } else if(entry.name==="index.html" && path.join(dir,entry.name)!==path.join(root,"google939990971c7be018.html")) pages.push(path.join(dir,entry.name));
 }
}
walk(root);
for(const file of pages){
 const html=fs.readFileSync(file,"utf8");
 const title=html.match(/<title>(.*?)<\/title>/i)?.[1];
 const desc=html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
 if(!title) errors.push(file+": falta title");
 if(!desc||desc.length<60) errors.push(file+": falta meta description útil");
 if(!canonical) errors.push(file+": falta canonical");
 if(!html.includes("sc_project=13334162")||!html.includes("3e891d7b")) errors.push(file+": falta StatCounter");
 if(canonical){
  if(canonicalMap.has(canonical)) errors.push(file+": canonical duplicada con "+canonicalMap.get(canonical));
  canonicalMap.set(canonical,file);
 }
}
const sitemap=fs.readFileSync(path.join(root,"sitemap.xml"),"utf8");
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1]);
if(new Set(urls).size!==urls.length) errors.push("sitemap: hay URLs duplicadas");
for(const url of urls){
 const relative=url.replace("https://paracumpleanos.com/","");
 if(relative && !fs.existsSync(path.join(root,relative,"index.html"))) errors.push("sitemap: URL sin página: "+url);
}
console.log("Páginas HTML revisadas: "+pages.length);
console.log("URLs en sitemap: "+urls.length);
if(errors.length){console.error(errors.join("\n"));process.exit(1);}
console.log("Validación SEO básica: OK");
