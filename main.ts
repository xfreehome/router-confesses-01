// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one line (<=200 chars) to /output/entry.txt:
// a home Wi-Fi router's excuse for dropping the connection at a movie's climax.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I didn't die — after 900 nights carrying your 4K dramas, I decided that for once, I get to be the cliffhanger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${[...entry].length} chars to /output/entry.txt`);
