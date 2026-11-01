import faNames from './fa.json';
const map = faNames as Record<string, string>;
/** Persian name for an English anatomy name (falls back to the English name). */
export const fa = (name: string) => map[name] ?? name;
/** Normalise Persian/Arabic text so that searching works with ي/ی, ك/ک and ZWNJ/space. */
export const norm = (s: string) => s.replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[\u200c\u200d]/g, ' ').replace(/\s+/g, ' ').toLowerCase().trim();
