import categoriesData from '../../data/categories.json';
import postsData from '../../data/posts.json';
import relationshipData from '../../data/relationship_messages.json';
import { POSTALES } from './postales';
import { Category, Post, RelationshipCollection, PostalCardData } from '../types';

export const categories: Category[] = categoriesData as Category[];
export const posts: Post[] = postsData as unknown as Post[];
export const relationshipCollections: Record<string, RelationshipCollection> = relationshipData as unknown as Record<string, RelationshipCollection>;
export const postales: PostalCardData[] = POSTALES;

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.category === categorySlug);
}

export function getRelationshipCollection(slug: string): RelationshipCollection | undefined {
  return relationshipCollections[slug];
}

export function getAllRelationshipCollections(): RelationshipCollection[] {
  return Object.values(relationshipCollections);
}
