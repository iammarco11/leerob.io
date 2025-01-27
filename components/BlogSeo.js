import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://leerob.io${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Akshay Praveen Nair`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Akshay Praveen Nair"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Akshay Praveen Nair"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
