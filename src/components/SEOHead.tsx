import { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  breadcrumbs?: Array<{ name: string; item: string }>;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export function SEOHead({
  title,
  description,
  path = '',
  type = 'website',
  breadcrumbs,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Para Cumpleaños')
      ? title
      : `${title} | Para Cumpleaños`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description (trimmed to optimal SEO 160 characters if needed)
    const cleanDesc = description.replace(/\s+/g, ' ').trim();
    setMeta('name', 'description', cleanDesc);

    // 3. Canonical URL
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `https://paracumpleanos.com${cleanPath === '/' ? '/' : cleanPath.endsWith('/') ? cleanPath : cleanPath + '/'}`;
    
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. OpenGraph
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', cleanDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'Para Cumpleaños');
    setMeta('property', 'og:locale', 'es_AR');

    // 5. Twitter
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', cleanDesc);

    // 6. JSON-LD structured data
    let scriptTag = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-seo-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas: any[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.name,
          item: bc.item.startsWith('http') ? bc.item : `https://paracumpleanos.com${bc.item}`,
        })),
      });
    }

    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        schemas.push(...jsonLd);
      } else {
        schemas.push(jsonLd);
      }
    }

    if (schemas.length > 0) {
      scriptTag.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    } else {
      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type === 'article' ? 'Article' : 'WebPage',
        name: formattedTitle,
        description: cleanDesc,
        url: canonicalUrl,
      });
    }

    // Cleanup on unmount (keep base metadata)
    return () => {
      // Optional cleanup if needed
    };
  }, [title, description, path, type, breadcrumbs, jsonLd]);

  return null;
}
