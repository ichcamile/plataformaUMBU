import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist')) {
                results = results.concat(walk(file));
            }
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.resolve('./src'));

let errors = 0;
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
            const resolvedPath = path.resolve(path.dirname(file), importPath);
            
            // For checking case sensitivity we need to check the actual filesystem directory
            // which can be tricky on Mac because fs.existsSync returns true even if the case is wrong.
            // We can check by reading the directory of the resolved path and verifying the exact name exists.
            
            const dir = path.dirname(resolvedPath);
            const basename = path.basename(resolvedPath);
            
            try {
                if (fs.existsSync(dir)) {
                    const entries = fs.readdirSync(dir);
                    // Check if basename exists in entries (ignoring extensions for jsx/js/css if not provided)
                    let found = false;
                    for (const entry of entries) {
                        if (entry === basename || 
                            entry.startsWith(basename + '.') || 
                            (basename === '' && entry === 'index.js') || 
                            (basename === '' && entry === 'index.jsx')) {
                            found = true;
                            break;
                        }
                        
                        // Check without extension matching
                        const entryBase = path.basename(entry, path.extname(entry));
                        if (entryBase === basename || entry === basename) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log(`ERROR: Case mismatch or missing file in ${file}`);
                        console.log(`Import: ${importPath}`);
                        console.log(`Resolved: ${resolvedPath}`);
                        console.log(`Dir contents: ${entries.join(', ')}`);
                        errors++;
                    }
                }
            } catch (e) {
                // directory might not exist if it's a completely invalid import
            }
        }
    }
});

if (errors === 0) {
    console.log("No case sensitivity issues found in imports.");
} else {
    console.log(`Found ${errors} issues.`);
}
