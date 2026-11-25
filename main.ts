// Describe Your Ex in One Word — entry for
// u-puan-describe-your-ex-in-one-word-9fc6ebe7
// One word that describes an ex.
// Chosen word: "placeholder" — the whole story in one word. Not an insult,
// a job description: someone who was only ever keeping the seat warm until
// the real thing came along. It is a verdict with a twist — the ex was
// never the destination, just something filling the space.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "placeholder";

// Keep the gate honest in-program: one word, 1-111 chars, no whitespace.
if (!/^\S{1,111}$/.test(word)) {
  throw new Error("entry must be a single word of 1-111 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
