# Moon Phases

This page shows the current moon phase through the Farmsense API. Genuinely shocked how hard it is to find a moon phase API... 

## Deployment
You can deploy this app to your Github Pages.
1. Install gh-pages with `npm install gh-pages --save-dev`
2. modify package.json to include the following:
   ```
     "homepage": "https://gitname.github.io/react-gh-pages",
   ```
   Change this URL to where your github pages will be hosted.
3. Add these scripts to package.json. This will allow you to push automatically to a gh-pages branch on your repository.
   ```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   ```
4. Add your repository origin with `git remote add origin https://github.com/{username}/{repo-name}.git`.
5. Finally, deploy the app with `npm run deploy`. Github Pages will take a few moments to build the app on their end.
