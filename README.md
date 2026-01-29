# DEWS website (Base44 code — cleaned)

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal in VS Code and run:
   - `npm install`
   - `npm run dev`
4. Open the URL shown in the terminal (usually http://localhost:5173).

## Build for hosting
- `npm run build`
- Upload the `dist/` folder to Netlify (drag & drop), OR host it in GitHub Pages.

### GitHub Pages note
This project uses HashRouter, so it works on static hosting without extra server routing.
