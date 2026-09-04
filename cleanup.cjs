const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.push('../components/Home.tsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove dead imports
  content = content.replace(/import\s+\{\s*createFileRoute\s*\}\s+from\s+["']react-router-dom["'];?\r?\n?/g, '');
  
  fs.writeFileSync(filePath, content);
}
console.log('Cleanup complete');
