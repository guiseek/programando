export const hostCdn = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components';

export const getLang = (cls: string) => {

  let prismFile = (lang: string) => `prism-${lang}.min.js`;

  switch (true) {
    case /xml|html|mathml|svg/.test(cls): return prismFile('markup');
    case /ts|typescript/.test(cls): return prismFile('typescript');
    case /js|javascript/.test(cls): return prismFile('javascript');
    case /sh|shell|bash/.test(cls): return prismFile('bash');
    case /css|scss|sass/.test(cls): return prismFile(cls);
    case /json5/.test(cls): return prismFile('json5');
    case /json/.test(cls): return prismFile('json');
    default: return null;
  }
}