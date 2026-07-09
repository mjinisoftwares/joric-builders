const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'lib', 'services.ts');
let content = fs.readFileSync(servicesPath, 'utf8');

const baseDir = path.join(__dirname, 'public', 'images', 'services');
const dirs = fs.readdirSync(baseDir);

const map = {};
for (const dir of dirs) {
  const dirPath = path.join(baseDir, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
    map[dir] = files.map(f => `/images/services/${dir}/${f}`);
  }
}

// 1. Add gallery string array to the Service interface
if (!content.includes('gallery: string[]')) {
  content = content.replace('relatedServices: string[];', 'relatedServices: string[];\n  gallery?: string[];');
}

// 2. Add gallery to each service
for (const slug of Object.keys(map)) {
  // Check if it already has gallery
  const slugRegex = new RegExp(`slug:\\s*'${slug}',`);
  if (!slugRegex.test(content)) continue;

  const galleryStr = `gallery: ${JSON.stringify(map[slug])},`;
  
  // Replace the image line to append gallery below it
  const imageRegex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?image:\\s*'.*?',)`);
  
  content = content.replace(imageRegex, `$1\n    ${galleryStr}`);
}

fs.writeFileSync(servicesPath, content);
console.log('Successfully updated services.ts with galleries!');
