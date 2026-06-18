# SeFi-Image Project Page

Static project page for SeFi-Image. It is designed to run directly on GitHub Pages without a build step.

## Local Preview

```bash
cd /Users/bytedance/Desktop/code/sefi-web
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages

1. Create a GitHub repository for this folder.
2. Push the folder to the repository's `main` branch.
3. In GitHub, open `Settings -> Pages` and choose `GitHub Actions` as the source.
4. The included workflow in `.github/workflows/pages.yml` will publish the site.

## Update Points

- Replace `assets/sefi-image-paper.pdf` after the paper changes.
- Update the BibTeX block in `index.html` after the official arXiv or conference entry is available.
- Add code, model, or demo links to the hero actions when the public URLs are ready.
