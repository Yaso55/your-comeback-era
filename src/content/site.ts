/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  This single file holds all the text of the experience.
 *  Replace the [PLACEHOLDERS] with your own words.
 * ─────────────────────────────────────────────────────────────
 */

export const person = {
  name: "[NAME]",
  birthday: "[BIRTHDAY]",
  role: "Main Character",
  superpower: "[EDITABLE TEXT]",
  specialSkill: "[EDITABLE TEXT]",
  era: "The Best One Yet",
  /** Optional: put an image in src/assets and import it, or use a URL. */
  photo: "",
};

export const intro = {
  lines: [
    `${person.name} IS MAKING HER COMEBACK...`,
    "A NEW ERA STARTS TODAY.",
    "HAPPY BIRTHDAY",
  ],
  button: "ENTER THE NEW ERA →",
};

export const chapters = {
  one: {
    label: "CHAPTER 01",
    title: "THE BEGINNING",
    subtitle: "[A short line about how this story starts]",
    body: [
      "[Write something about the moment you met, or how this year began.]",
      "[Another line — keep it short and cinematic.]",
    ],
  },
  two: {
    label: "CHAPTER 02",
    title: "THE GIFT",
    subtitle: "Tap the box. Something is waiting inside.",
    giftMessage: "[YOUR PERSONAL MESSAGE HERE]",
    giftSignature: "— [YOUR NAME]",
  },
  three: {
    label: "CHAPTER 03",
    title: "THE MAIN CHARACTER",
    subtitle: "Artist profile — debut era",
  },
  four: {
    label: "CHAPTER 04",
    title: "THE NEW ERA",
    subtitle: "The album of her new year",
    albumTitle: "[ALBUM TITLE]",
    albumMeta: "FULL LENGTH · 5 TRACKS · RELEASED TODAY",
  },
  memories: {
    label: "B-SIDE",
    title: "MEMORIES FROM THIS ERA",
    subtitle: "[Add your photos and screenshots here later]",
  },
  remember: {
    label: "INTERLUDE",
    title: "THINGS I WANT YOU TO REMEMBER",
    subtitle: "",
  },
  final: {
    label: "FINAL TRACK",
    title: "A MESSAGE FOR YOU",
    subtitle: "",
  },
};

export const tracks = [
  {
    no: "TRACK 01",
    title: "NEW DREAMS",
    duration: "3:21",
    message: "[Write your wish about her new dreams here.]",
  },
  {
    no: "TRACK 02",
    title: "MORE HAPPINESS",
    duration: "4:02",
    message: "[Write your wish about her happiness here.]",
  },
  {
    no: "TRACK 03",
    title: "BEAUTIFUL MEMORIES",
    duration: "3:48",
    message: "[Write your wish about the memories ahead.]",
  },
  {
    no: "TRACK 04",
    title: "EVERYTHING YOU DESERVE",
    duration: "3:07",
    message: "[Write about everything she deserves.]",
  },
  {
    no: "TRACK 05",
    title: "KEEP BELIEVING",
    duration: "4:33",
    message: "[Write your final wish here.]",
  },
];

/** Add your own photos: import them from src/assets and set `src`. */
export const memories: { caption: string; date: string; src?: string }[] = [
  { caption: "[MEMORY 01]", date: "[DATE]" },
  { caption: "[MEMORY 02]", date: "[DATE]" },
  { caption: "[MEMORY 03]", date: "[DATE]" },
  { caption: "[MEMORY 04]", date: "[DATE]" },
  { caption: "[MEMORY 05]", date: "[DATE]" },
  { caption: "[MEMORY 06]", date: "[DATE]" },
];

export const reminders = [
  "You are stronger than you think.",
  "You are smarter than your fears.",
  "You deserve the things you dream about.",
  "Never forget how special you are.",
];

export const finale = {
  opening: "And if this year ever makes you doubt yourself...",
  lines: ["Come back here.", "Read this again.", "And remember..."],
  belief: "Someone believes in you more than you know. 🤍",
  headline: `HAPPY BIRTHDAY, ${person.name}`,
  welcome: "WELCOME TO YOUR NEW ERA. ✨",
  signature: "Made with 🤍 by [YOUR NAME]",
};

export const easterEgg = {
  hint: "Some stars are worth touching.",
  title: "HIDDEN TRACK",
  message: "[YOUR SECRET MESSAGE HERE — only she will find this one.]",
};

/**
 * Background music.
 * Put an audio file in /public (e.g. /public/audio/theme.mp3) and set the path.
 * Leave empty to keep the player silent — nothing ever autoplays.
 */
export const audio = {
  src: "",
  label: "[TRACK NAME]",
};
