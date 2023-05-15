#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const readline = require("node:readline");
const { generateSrc } = require("./utils/src-generator");
const { configGenerator } = require("./utils/config-files-generator");
const { publicGenerator } = require("./utils/public-generator");

const projectName = process.argv[2];
readline.cursorTo(process.stdout, 3, 0);
console.log("\x1b[34m\n Creating new React app...\n \x1b[0m");
// create the root directory if not exists
execSync(`mkdir ${projectName}`);

// Move into the project directory
const projectPath = path.join(process.cwd(), projectName);

console.log(`\x1b[32m1.Moving into ${projectName} directory...\x1b[0m`);
process.chdir(projectPath);

//initialising git repository if not exists
console.log("\x1b[32m2.Initialising an empty git repository...\x1b[0m");
execSync(`git init`);

// create public folder if not exists
publicGenerator(projectPath);
// create src folder if not exists
generateSrc(projectPath);
// create config files
configGenerator(projectPath);
// installing all dependencies
console.log("\x1b[32m4.Installing all needed dependencies...\x1b[0m\n");
execSync(`npm i`, { stdio: "inherit" });
// Running dev environment
console.log("\x1b[32m5.Running dev environment...\x1b[0m\n");
execSync(`npm start`, { stdio: "inherit" });
// Done!
