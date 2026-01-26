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

## 🎨 Komponenty UI

Projekt wykorzystuje system komponentów **shadcn/ui**. Aby dodać nowe komponenty:

```bash
npx shadcn@latest add [nazwa-komponentu]
```
