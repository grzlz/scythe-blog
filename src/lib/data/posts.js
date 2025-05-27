export const posts = [
  {
    slug: 'mi-primer-post',
    title: 'Mi Primer Post',
    date: '2024-01-01',
    author: 'Juan Pérez',
    content: `<p>Hola mundo. Este es el contenido de mi primer post.</p>`
  }
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
