# HMU – Medical English Sorani
Static PWA (HTML/CSS/vanilla JS). Data is embedded in `index.html` (`window.DATA`).
## GitHub Pages
1. Create a repo, upload all files in this folder to the root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://USERNAME.github.io/REPO/` once online; the service worker caches the shell for offline use.
## Updating
Change `V` in `service-worker.js` (e.g. `med-sorani-v3`) on every release so old caches are replaced.
## Limits
Speech synthesis depends on the device's installed voices; Sorani voices are rarely available. No AI backend is connected (never put API keys in frontend code; use a serverless proxy).
## Background
Settings → Background: static, animated medical network (canvas, original), or video. For video, add your own licensed clip as `assets/bg.webm` (the app falls back to the animated network if the file is missing).
