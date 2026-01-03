const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://imaadh-portfolio.pages.dev' });
const writeStream = createWriteStream('./dist/sitemap.xml');

sitemap.pipe(writeStream);

// Add pages
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/projects', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('Sitemap generated successfully!'))
  .catch((err) => console.error(err));
