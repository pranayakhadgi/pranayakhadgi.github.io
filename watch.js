// watch.js - Watch mode with automatic cache hash updates
const { spawn } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const chokidar = require('chokidar');

const CSS_OUTPUT = './pranayakhadgi.github.io/styles/output.css';
const HTML_FILE = './pranayakhadgi.github.io/index.html';

function updateCacheHash() {
  try {
    if (!fs.existsSync(CSS_OUTPUT)) {
      console.log('⏳ Waiting for CSS file...');
      return;
    }

    const cssContent = fs.readFileSync(CSS_OUTPUT);
    const hash = crypto.createHash('md5').update(cssContent).digest('hex').substring(0, 8);
    
    let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
    const oldPattern = /href="\.\/styles\/output\.css\?v=[^"]+"/;
    const newHref = `href="./styles/output.css?v=${hash}"`;
    
    if (oldPattern.test(htmlContent)) {
      htmlContent = htmlContent.replace(oldPattern, newHref);
      fs.writeFileSync(HTML_FILE, htmlContent, 'utf8');
      console.log(`🔄 Cache hash updated: ${hash}`);
    }
  } catch (error) {
    console.error('Error updating cache hash:', error.message);
  }
}

// Watch for CSS file changes
console.log('👀 Watching for CSS changes...\n');
const watcher = chokidar.watch(CSS_OUTPUT, { persistent: true });

watcher.on('change', () => {
  console.log('\n📦 CSS file changed, updating cache hash...');
  setTimeout(updateCacheHash, 500); // Small delay to ensure file is written
});

// Start Tailwind in watch mode
console.log('🚀 Starting Tailwind CSS watch mode...\n');
const tailwind = spawn('npx', [
  'tailwindcss',
  '-i', './pranayakhadgi.github.io/styles/input.css',
  '-o', './pranayakhadgi.github.io/styles/output.css',
  '--watch',
  '--config', './tailwind.config.js'
], { 
  stdio: 'inherit',
  shell: true
});

// Initial hash update after a delay
setTimeout(updateCacheHash, 2000);

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n\n👋 Stopping watch mode...');
  watcher.close();
  tailwind.kill();
  process.exit(0);
});

