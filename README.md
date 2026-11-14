# Site de Thomas Lecuy, ostéopathe D.O et kinésithérapeute

Site d'une page, publié automatiquement sur GitHub Pages à chaque modification.

## Modifier le site (sans code)

1. Va sur https://app.pagescms.org et connecte-toi avec ton compte GitHub.
2. Ouvre le dépôt `kineosteo`, puis **Contenu du site**.
3. Change un texte, ajoute une ligne au CV ou glisse une photo.
4. Clique sur **Save**. Le site en ligne est mis à jour en 1 à 2 minutes.

Tout le contenu se trouve dans un seul fichier : `src/_data/site.json`.
Les photos vont dans `src/images/`.

## Pour un développeur

- `npm install` puis `npm start` pour voir le site en local.
- `npm run build` génère le site dans `_site/`.
- Référencement : données structurées schema.org dans `src/index.njk`, plus `sitemap.xml`, `robots.txt` et `llms.txt` générés à partir du même contenu.
