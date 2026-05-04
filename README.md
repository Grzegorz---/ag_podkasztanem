# Pod Kasztanem - Mrzeżyno

Wizytówka ośrodka wypoczynkowego "Pod Kasztanem" w Mrzeżynie, zbudowana w nowoczesnej technologii Next.js 15.

## 🛠️ Stack Technologiczny

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Język**: TypeScript
- **Ikony**: Lucide React
- **Animacje**: Framer Motion
- **Mapy**: React Leaflet
- **Formularze**: React Hook Form + Zod

## 🚀 Uruchomienie lokalnie

Aby uruchomić projekt na swoim komputerze:

1. Pobierz repozytorium:
   ```bash
   git clone https://github.com/twoje-repo/pod-kasztanem.git
   cd pod-kasztanem
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```
   *Uwaga: W przypadku konfliktów wersji (React 19 RC vs biblioteki), użyto flagi `legacy-peer-deps` w konfiguracji projektu.*

3. Uruchom serwer developerski:
   ```bash
   npm run dev
   ```

4. Otwórz przeglądarkę pod adresem [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

### Vercel (Rekomendowane)

Najprostszy sposób wdrożenia to użycie [Vercel](https://vercel.com).
Po prostu zaimportuj repozytorium Git do Vercel, a projekt zostanie automatycznie wykryty i zbudowany.

### Netlify

1. "New site from Git".
2. Build command: `npm run build`
3. Publish directory: `.next` (lub skonfiguruj `next.config.js` pod `output: 'export'` dla czystego SSG, jeśli wymagane - domyślnie Next.js działa w trybie hybrydowym, Netlify obsługuje go świetnie przez plugin).

Dla pełnego SSG (Static Export) dodaj w `next.config.ts`: `output: 'export'` i deploy folderu `out`.

### GitHub Pages (Statyczna strona)

Aby wdrożyć projekt jako statyczną stronę na GitHub Pages:

1. W pliku konfiguracyjnym Next.js (`next.config.ts` lub `.js`) włącz opcję eksportu statycznego i (opcjonalnie) zdefiniuj ścieżkę bazową:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true }, // wymagane dla zoptymalizowanych obrazów next/image w SSG
   };
   export default nextConfig;
   ```

2. Zadeklaruj Workflow **GitHub Actions**. Stwórz w swoim repozytorium plik `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
         - name: Install dependencies
           run: npm install --legacy-peer-deps
         - name: Build project
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. W ustawieniach swojego repozytorium na platformie GitHub przejdź do sekcji **Settings > Pages**. W obszarze **Build and deployment** zmień **Source** na **GitHub Actions**.

4. Każde wepchnięcie ("push") kodu na gałąź `main` automatycznie spowoduje zbudowanie folderu `out` i opublikowanie nowej wersji strony na GitHub Pages.

## 🎨 Komponenty UI

Projekt wykorzystuje system komponentów **shadcn/ui**. Aby dodać nowe komponenty:

```bash
npx shadcn@latest add [nazwa-komponentu]
```
