const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const readline = require("node:readline");
const { generateSrc } = require("./utils/src-generator");
const { configGenerator } = require("./utils/config-files-generator");

const projectName = process.argv[2];
readline.cursorTo(process.stdout, 3, 0);
console.log("\x1b[34m\n Creating new React app...\n \x1b[0m");
// create the root directory if not exists
execSync(`mkdir ${projectName}`);

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

console.log(`\x1b[32m1.Moving into ${projectName} directory...\x1b[0m`);
process.chdir(projectPath);
//initialising git repository if not exists
console.log("\x1b[32m2.Initialising an empty git repository...\x1b[0m");
execSync(`git init`);

// create public folder if not exists
execSync(`mkdir public`);
// index.html
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
// create src folder if not exists
generateSrc(projectPath);
// config files
configGenerator(projectPath);
// installing all dependencies
console.log("\x1b[32m4.Installing all needed dependencies...\x1b[0m\n");
execSync(`npm i`, { stdio: "inherit" });
// Running dev environment
console.log("5.Running dev environment...");
execSync(`npm start`, { stdio: "inherit" });

// Done!
console.log(
  `\x1b[32m Done! Your new React app is ready at\n\x1b[0m ${projectPath}.`
);
