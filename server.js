import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(join(__dirname, 'dist'))); // Serve Vite's build output

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT);
});