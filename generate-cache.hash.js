// generate-cache-hash.js
const crypto = require('crypto');
const fs = require('fs');

function generateCacheHash(filePath) {
    const content = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

const cssHash = generateCacheHash('./pranayakhadgi.github.io/styles/output.css');
console.log(`Current CSS hash: ${cssHash}`);