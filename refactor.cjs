const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.push('../components/Home.tsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace router imports
  content = content.replace(/import\s+\{\s*createFileRoute.*?\}\s+from\s+["']@tanstack\/react-router["'];?\n/g, '');
  content = content.replace(/from\s+["']@tanstack\/react-router["']/g, 'from "react-router-dom"');
  
  // Replace route creation
  content = content.replace(/export\s+const\s+Route\s*=\s*createFileRoute\([^)]+\)\(\s*\{[\s\S]*?component:\s*([a-zA-Z0-9_]+),?\s*\}\s*\);?/g, 'export default $1;');
  
  fs.writeFileSync(filePath, content);
}
console.log('Refactor complete');
