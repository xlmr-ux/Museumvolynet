import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { ModelData } from './ar/[id]/api/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Block undefined AR routes
app.use((req, res, next) => {
  if (req.path.includes('/ar/undefined')) {
    console.error(`Undefined AR route accessed: ${req.path}`);
    return res.redirect(301, '/');
  }
  next();
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /ar/angel_statue
Allow: /ar/pyramid
Allow: /ar/terracotta_warrior
Disallow: /ar/undefined
Sitemap: https://museumvolynet.onrender.com/sitemap.xml`);
});

// API endpoint for AR data
app.get('/api/ar/:id', (req, res) => {
  const { id } = req.params;
  const validIds = ModelData.map(item => item.id);
  
  if (!validIds.includes(id)) {
    return res.status(404).json({ 
      error: 'Model not found',
      available_models: validIds
    });
  }

  const model = ModelData.find(item => item.id === id);
  res.json(model);
});

// Sitemap
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${ModelData.map(model => `
        <url>
          <loc>https://museumvolynet.onrender.com/ar/${model.id}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `).join('')}
    </urlset>`;
  res.send(sitemap);
});

// Client-side routes
app.get('/ar/:id', (req, res) => {
  const validIds = ModelData.map(item => item.id);
  if (!validIds.includes(req.params.id)) {
    return res.redirect('/');
  }
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available AR models:', ModelData.map(m => m.id));
});