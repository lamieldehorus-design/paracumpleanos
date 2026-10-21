export interface Category {
  slug: string;
  title: string;
  icon: string;
  description: string;
  intro: string;
}

export interface PostSection {
  h2?: string;
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

export interface BanderinItem {
  text: string;
  name: string;
  bg: string;
  accent: string;
}

export interface InviteTemplateItem {
  label: string;
  text: string;
  bg?: string;
  accent?: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  intro: string;
  keywords?: string[];
  sections: PostSection[];
  faqs?: FAQItem[];
  related?: string[];
  banderines?: BanderinItem[];
  templates?: InviteTemplateItem[];
  themes?: Array<{
    title: string;
    description: string;
    elements?: string[];
  }>;
}

export interface MessageItem {
  id: string;
  title: string;
  text: string;
}

export interface RelationshipCollection {
  slug: string;
  name: string;
  title: string;
  lead: string;
  intro: string;
  messages: MessageItem[];
  faqs: FAQItem[];
}

export interface PostalCardData {
  id: string;
  title: string;
  message: string;
  categoryLabel: string;
  colorA: string;
  colorB: string;
  accent: string;
  sparkles?: string;
}
