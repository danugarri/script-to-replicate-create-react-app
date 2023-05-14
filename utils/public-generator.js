const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");
const publicGenerator = (projectPath) => {
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
};

module.exports = {
  publicGenerator,
};
