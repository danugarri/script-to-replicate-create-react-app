const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2];
console.log("\x1b[34m Creating new React app... \x1b[0m");
// create the root directory if not exists
// fs.lstat(__dirname, (_, stats) => {
//   if (!stats.isDirectory()) {
execSync(`mkdir ${projectName}`);
//   }
// });
fs.readdir(projectName, { withFileTypes: true }, (__, files) => {
  const exists =
    files && files.find((item) => !item.name.includes(projectName));
  if (!exists) {
    execSync(`git init`);
  } else {
    console.log("There is already a git repository");
  }
});

// Move into the project directory
const projectPath = path.join(__dirname, projectName);
console.log(`Moving into ${projectName} directory...`);
process.chdir(projectPath);
//initialising git repository if not exists
console.log("Initialising an empty git repository...");
fs.readdir(projectName, { withFileTypes: true }, (__, files) => {
  const exists = files && files.find((item) => !item.name.includes(".git"));
  if (!exists) {
    execSync(`git init`);
  } else {
    console.log("There is already a git repository");
  }
});
// create public folder if not exists
// fs.lstat(__dirname, (_, stats) => {
//   if (!stats.isDirectory()) {
execSync(`mkdir public`);
fs.writeFileSync(
  path.join(projectPath, "public", "index.html"),
  `<!DOCTYPE html>
  <html lang="en">
      <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
          <meta
              name="description"
              content="This a basic React app made from scratch as alternative to the deprecated create-react-app" />
          <meta name="author" content="danugarri" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Basic React app</title>
      </head>
      <body>
          <div id="root"></div>
      </body>
  </html>
  `
);
fs.writeFileSync(
  path.join(projectPath, "public", "robots.txt"),
  `# https://www.robotstxt.org/robotstxt.html
  User-agent: *
  Disallow:
  `
);

//   }
// });
// create src folder if not exists
// fs.lstat(__dirname, (_, stats) => {
//   if (!stats.isDirectory()) {
execSync(`mkdir src`);
//   }
// });

// Add some additional files inside src
console.log("Adding additional files...");
fs.writeFileSync(
  path.join(projectPath, "src", "index.css"),
  `body {
    margin: 0;
    padding: 0;
  }`
);
fs.writeFileSync(
  path.join(projectPath, "src", "index.jsx"),
  `import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App'
  import './index.css'
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  `
);
fs.writeFileSync(
  path.join(projectPath, "README.md"),
  `# Start the development server
- npm start
# Get the app ready for production
- npm run build`
);
// config files
fs.writeFileSync(
  path.join(projectPath, ".gitignore"),
  `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`
);

fs.writeFileSync(
  path.join(projectPath, "package.json"),
  `
  {
    "name": "danugarri_create-react-app",
    "author": "danugarri",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@testing-library/jest-dom": "^5.16.1",
      "@testing-library/react": "^12.1.2",
      "@testing-library/user-event": "^13.5.0",
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "react-scripts": "5.0.1",
      "web-vitals": "^2.1.3"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "devDependencies": {
      "prettier": "^2.6.2"
  }
  }
  `
);
fs.writeFileSync(
  path.join(projectPath, ".prettierrc"),
  `
{
  "tabWidth": 4,
  "useTabs": false,
  "semi": true,
  "bracketSpacing": true,
  "jsxSingleQuote": false,
  "singleQuote": true
}
`
);

// This will have to wait
// Done!
console.log(
  `\x1b[32m Done! Your new React app is ready at\n\x1b[0m ${projectPath}.`
);
