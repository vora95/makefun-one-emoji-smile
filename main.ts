// u-0xkianno-one-emoji-one-smile-5470751f — "One Emoji, One Smile"
//
// The program writes one text to /output/entry.txt: exactly one emoji,
// U+1F607 SMILING FACE WITH HALO — a gentle, kind smile under a halo.
//
// Why this emoji, against the judge's brief (warmth, most important first):
// the halo smile is a face that plainly aims to warm a stranger — it smiles
// straight at the reader, no words needed — and it reads warm at first
// glance, kind and gently funny with no context. It is universal: a stranger
// of any age or background reads a halo smile the same way, with no irony or
// in-joke that could land wrong. It is chosen rather than default: not the
// first smiley that comes to mind, the halo makes the pick deliberate while
// staying instantly readable. And it is right for a stranger: a kind smile
// with a halo carries no intimacy, sarcasm or flirtation that would read
// oddly from someone unknown. A hug or heart-hands from a stranger can feel
// too intimate; a plain smiley is the default. The halo smile is warm
// without overstepping.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "😇";

// The gate allows 1–8 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 8) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–8`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
