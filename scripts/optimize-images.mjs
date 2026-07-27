// Converte todo .jpg/.jpeg/.png de public/images/ pra .webp (mesma convenção dos 18 arquivos
// já otimizados à mão no projeto), com resize pros casos sobre-dimensionados (ex.: fotos de
// câmera/drone importadas em resolução original). Roda via `npm run optimize-images` ou
// automaticamente antes de cada build (`prebuild` no package.json).
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const MAX_WIDTH = 2400;
const QUALITY = 80;
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function optimize(file) {
  const outFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const before = (await stat(file)).size;

  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outFile);

  const after = (await stat(outFile)).size;
  const reduction = (100 - (after / before) * 100).toFixed(0);
  console.log(
    `${path.relative(process.cwd(), file)} → ${path.basename(outFile)}  ${formatSize(before)} → ${formatSize(after)} (-${reduction}%)`,
  );
}

const files = await walk(IMAGES_DIR);
if (!files.length) {
  console.log('Nenhum .jpg/.jpeg/.png encontrado em public/images/ — nada a otimizar.');
} else {
  console.log(`Otimizando ${files.length} imagem(ns)...\n`);
  for (const file of files) {
    await optimize(file);
  }
}
