const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2];
console.log('Creating new React app...');
// create the root directory if not exists
fs.lstat(__dirname, (_, stats) => {
 if (!stats.isDirectory()) {
execSync(`mkdir ${projectName}`);
 }
})


// Move into the project directory
const projectPath = path.join(__dirname, projectName);
console.log(`Moving into ${projectName} directory...`);
process.chdir(projectPath);
// create src folder if not exists
fs.lstat(__dirname, (_, stats) => {
 if (!stats.isDirectory()) {
execSync(`mkdir src`);
 }
})

// Add some additional files inside src
console.log('Adding additional files...');
fs.writeFileSync(
  path.join(projectPath, 'src', 'index.css'),
  `body {
    margin: 0;
    padding: 0;
  }`
);
fs.writeFileSync(
  path.join(projectPath, 'README.md'),
  `# ${projectName}`
);

// Done!
console.log(`Done! Your new React app is ready at ${projectPath}.`);
