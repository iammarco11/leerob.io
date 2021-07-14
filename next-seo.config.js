const title = 'Akshay Praveen Nair – Developer, student, creator.';
const description =
  'Undergraduate student, .';

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://leerob.io',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@akshaay_11',
    site: '@akshaay_11',
    cardType: 'summary_large_image'
  }
};

export default SEO;
