// build.js - Automated Tailwind CSS build and cache busting
const { execSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const CSS_INPUT = './pranayakhadgi.github.io/styles/input.css';
const CSS_OUTPUT = './pranayakhadgi.github.io/styles/output.css';
const HTML_FILE = './pranayakhadgi.github.io/index.html';

console.log('🔨 Building Tailwind CSS...\n');

try {
  // Check if input file exists
  if (!fs.existsSync(CSS_INPUT)) {
    throw new Error(`Input CSS file not found: ${CSS_INPUT}`);
  }

  // Rebuild Tailwind CSS with explicit config
  const tailwindCmd = `npx tailwindcss -i ${CSS_INPUT} -o ${CSS_OUTPUT} --minify --config ./tailwind.config.js`;
  
  console.log('Running:', tailwindCmd);
  execSync(tailwindCmd, { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname)
  });

  // Verify output file was created
  if (!fs.existsSync(CSS_OUTPUT)) {
    throw new Error(`Output CSS file was not created: ${CSS_OUTPUT}`);
  }

  const cssStats = fs.statSync(CSS_OUTPUT);
  if (cssStats.size === 0) {
    throw new Error('Output CSS file is empty!');
  }

  console.log(`\n✅ CSS rebuilt successfully (${cssStats.size} bytes)`);

  // Generate hash from output.css
  const cssContent = fs.readFileSync(CSS_OUTPUT);
  const hash = crypto.createHash('md5').update(cssContent).digest('hex').substring(0, 8);

  console.log(`📝 Generated CSS hash: ${hash}`);

  // Update HTML file with new hash
  if (!fs.existsSync(HTML_FILE)) {
    throw new Error(`HTML file not found: ${HTML_FILE}`);
  }

  let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
  
  // Replace cache parameter (handle both formats)
  const oldPattern = /href="\.\/styles\/output\.css\?v=[^"]+"/;
  const newHref = `href="./styles/output.css?v=${hash}"`;
  
  if (oldPattern.test(htmlContent)) {
    htmlContent = htmlContent.replace(oldPattern, newHref);
    fs.writeFileSync(HTML_FILE, htmlContent, 'utf8');
    console.log(`✅ Updated HTML cache parameter to v=${hash}`);
  } else {
    // If no cache parameter exists, add it
    htmlContent = htmlContent.replace(
      /href="\.\/styles\/output\.css"/,
      newHref
    );
    fs.writeFileSync(HTML_FILE, htmlContent, 'utf8');
    console.log(`✅ Added cache parameter to HTML: v=${hash}`);
  }

  // Verify classes are in the CSS
  const cssText = cssContent.toString();
  const requiredClasses = ['bg-blue-50', 'bg-purple-50', 'flex-wrap', 'gap-2'];
  const missingClasses = requiredClasses.filter(cls => !cssText.includes(cls));
  
  if (missingClasses.length > 0) {
    console.warn(`\n⚠️  Warning: Some classes not found in CSS: ${missingClasses.join(', ')}`);
    console.warn('   This might indicate Tailwind config content paths need adjustment.');
  } else {
    console.log('✅ Verified: All required classes are present in CSS');
  }

  console.log('\n🎉 Build complete!');
  console.log(`\n📋 Next steps:`);
  console.log(`   1. Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)`);
  console.log(`   2. Check DevTools Network tab to verify CSS file loads`);
  console.log(`   3. If issues persist, clear browser cache completely\n`);

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  console.error('\nTroubleshooting:');
  console.error('  1. Check that Tailwind is installed: npm install');
  console.error('  2. Verify tailwind.config.js content paths are correct');
  console.error('  3. Ensure input.css file exists');
  process.exit(1);
}
