const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2];
console.log('\x1b[34m Creating new React app... \x1b[0m');
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
//initialising git repository if not exists
console.log('Initialising an empty git repository...');
fs.readdir(projectName, { withFileTypes: true },
  (__, files) => {
   const exists= files &&files.find(item => !item.name.includes(".git"))
       if(!exists) {
        
        execSync(`git init`);
       }
      else{
        console.log('There is already a git repository')
      }
 })
// create public folder if not exists
fs.lstat(__dirname, (_, stats) => {
  if (!stats.isDirectory()) {
 execSync(`mkdir public`);
  }
 })
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

// This will have to wait
// Done!
console.log(`\x1b[32m Done! Your new React app is ready at\n\x1b[0m ${projectPath}.`);
