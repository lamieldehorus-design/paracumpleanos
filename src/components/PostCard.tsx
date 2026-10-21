import { Link } from '../router';
import { Post } from '../types';
import { VoteButtons } from './VoteButtons';

interface PostCardProps {
  post: Post;
  kicker?: string;
  actionLabel?: string;
}

export function PostCard({ post, kicker, actionLabel = 'Ver colección →' }: PostCardProps) {
  const displayKicker =
    kicker ||
    (post.category === 'recursos-gratuitos'
      ? 'Imprimibles y decoración'
      : post.category === 'ideas-y-tematicas'
      ? 'Ideas para celebrar'
      : post.category === 'organizacion'
      ? 'Organización'
      : 'Frases y mensajes');

  return (
    <article className="post-card">
      <div className="card-kicker">{displayKicker}</div>
      <h3>
        <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
      </h3>
      <p>{post.description}</p>
      <div className="post-card-footer">
        <Link className="text-link" href={`/posts/${post.slug}/`}>
          {actionLabel}
        </Link>
        <VoteButtons
          itemId={`post-${post.slug}`}
          title={post.title}
          text={post.description}
          url={`/posts/${post.slug}/`}
        />
      </div>
    </article>
  );
}
