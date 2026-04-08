# datgroup_test

Aplikace pro načítání náhodných vtipů z veřejného API. Uživatel může spustit automatické přehrávání nových vtipů v intervalu, označovat vtipy jako oblíbené a prohlížet si je na samostatné stránce.

## Lokální spuštění

```bash
npm install
npm start
```

Aplikace běží na http://localhost:3000.

## Změny oproti původní konfiguraci

Původní projekt byl CodeSandbox starter z roku 2019, který nešel spustit na moderním Node.js (v22).

### Co bylo změněno

**`react-scripts` 3.0.1 → 5.0.1**
Verze 3.x je nekompatibilní s Node.js 16+. Verze 5.0.1 je poslední stabilní verze CRA, podporuje Node 16–22 a má nativní TypeScript podporu (webpack 5).

**TypeScript 3.3.3 → 4.9.5**
Původní TS byl v devDependencies, ale projekt neměl `tsconfig.json` ani `.tsx` soubory — TypeScript fakticky nebyl zapnutý. Verze 4.9.5 je nejvyšší kompatibilní s react-scripts 5.

**Přidány `@types/react`, `@types/react-dom`, `@types/node`**
Nutné typové definice pro TypeScript v React projektu.

**Vytvořen `tsconfig.json`**
Bez něj react-scripts TypeScript nepřepne.

**`src/index.js` a `src/App.js` → `.tsx`**
Přejmenování na `.tsx` aktivuje TypeScript kontrolu v těchto souborech.

### Co bylo záměrně zachováno

**React 16.12.0** — zadání pochází z CodeSandboxu postaveného na React 16. React 5 je zpětně kompatibilní s touto verzí, takže upgrade react-scripts nenutí přejít na React 18.

## Demo

Projekt je nasazený na Netlify: https://datagroup-test.netlify.app/

## Větvení a deployment

Vývoj probíhal na větvi `develop`. Větev `main` je napojena na Netlify — každý merge do `main` automaticky spustí produkční build a nasazení.

## Technologická rozhodnutí

**CSS Modules místo Tailwind CSS**
Zvažoval jsem Tailwind CSS, ale v pracovní nabídce bylo výslovně zmíněno CSS Modules — zvolil jsem tedy tuto variantu jako relevantnější ukázku požadovaných znalostí.

**Nativní `fetch` místo Axios + React Query**
Pro datové fetching jsem zvažoval kombinaci Axios a React Query, která by přinesla automatické cachování, retry logiku a lepší správu stavu načítání. Pro rozsah tohoto projektu by však šlo o zbytečné přidávání závislostí — nativní `fetch` s `useEffect` a `useState` postačuje a kód zůstává přehledný.
