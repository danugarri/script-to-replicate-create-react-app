const fs = require("fs");
const path = require("path");
const configGenerator = (projectPath) => {
  fs.writeFileSync(
    path.join(projectPath, "README.md"),
    `# Start the development server
      - npm start
      # Get the app ready for production
      - npm run build`
  );
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
            "@testing-library/jest-dom": "^5.14.1",
            "@testing-library/react": "^13.1.1",
            "@testing-library/user-event": "^14.1.1",
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
};

module.exports = {
  configGenerator,
};
