export interface BlogPosting {
  route: string;
  title: string;
  description: string;
  thumbnail: string;
  cover: string;
  video: null;
  canonicalUrl: string;
  keywords: string[];
  author: string;
  mail: string;
  language: string;
  relevance: number;
  published: boolean;
  updated: string;
  publishedOn: string;
  sourceFile: string;
}
export interface BlogPostingJsonLd {
  '@context': string;
  '@type': string;
  mainEntityOfPage: { [key: string]: string };
  headline: string;
  description: string;
  image: string;
  author: Author;
  publisher: Publisher;
  datePublished: string;
  dateModified: string;
}

export interface Author {
  '@type': string;
  name: string;
}

export interface Publisher {
  '@type': string;
  name: string;
  logo: Logo;
}

export interface Logo {
  '@type': string;
  url: string;
  width: number;
  height: number;
}


export function createJsonLdObject(
  {
    canonicalUrl = '',
    title = '',
    description = '',
    cover = '',
    author = '',
    publishedOn = '',
    updated = ''
  }: Partial<BlogPosting>
): BlogPostingJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'headline': title,
    'description': description,
    'image': `https://programando.web.app/${cover}`,
    'author': {
      '@type': 'Person',
      'name': author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Programando Web Apps',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://programando.web.app/assets/logos/logo.webp',
        'width': 512,
        'height': 512
      }
    },
    'datePublished': publishedOn,
    'dateModified': updated
  }
}



