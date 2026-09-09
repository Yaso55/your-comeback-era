# Birthday Comeback Experience

A cinematic, K-pop-inspired interactive birthday website built with React, Vite, and Tailwind CSS.

## Run locally in VS Code

1. **Open the project folder** in VS Code.
2. **Install dependencies** in the terminal:
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:8080`) in your browser.

## Customize everything

All editable text lives in one file:

**`src/content/site.ts`**

Replace the placeholder values for:

- Name and birthday
- Intro messages
- Chapter titles and content
- Gift message
- Idol profile details
- Tracklist wishes
- Memory entries
- Reminder messages
- Final track text
- Easter egg message
- Signature

### Add your own photos

In `src/content/site.ts`, replace the placeholder memory image URLs with your own image paths or links:

```ts
memories: [
  {
    title: "Memory Title",
    date: "Date",
    image: "/your-photo.jpg",
    caption: "Your caption here",
  },
],
```

Place your images in the `public/` folder and reference them with `/<filename>`.

### Optional audio

The site does **not** auto-play copyrighted music. To add your own audio:

1. Place your audio file in `public/`.
2. In `src/content/site.ts`, set:
   ```ts
   audio: {
     enabled: true,
     src: "/your-audio.mp3",
     title: "Your Song Title",
     artist: "Artist Name",
   },
   ```

The music will only play after the visitor clicks the sound toggle.

## Build for production

```bash
npm run build
```

The static files will be output to the `dist/` folder.

## Project structure

```
src/
  content/site.ts       # All editable text and content
  components/           # Reusable UI components
  routes/index.tsx      # Main birthday experience page
  routes/__root.tsx     # Root layout, fonts, and metadata
  styles.css            # Design tokens, animations, effects
```

## Made with 🤍

Personalize the signature at the bottom of `src/content/site.ts`.
