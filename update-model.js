import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenez le répertoire actuel en utilisant ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier routes.ts
const filePath = path.join(__dirname, 'server', 'routes.ts');

// Lire le contenu du fichier
let content = fs.readFileSync(filePath, 'utf8');

// Remplacer toutes les occurrences de "openai/gpt-4o" par "deepseek/deepseek-chat"
content = content.replace(/model: "openai\/gpt-4o"/g, 'model: "deepseek/deepseek-chat"');

// Écrire le contenu mis à jour dans le fichier
fs.writeFileSync(filePath, content, 'utf8');

console.log('Mise à jour du modèle terminée !');