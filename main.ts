import { mkdirSync, writeFileSync } from "node:fs";

// Entry for the "Two Days of Excuses" bounty (u-jolly-fox-32-two-days-of-excuses-3f18797e).
// One excuse, 160 characters, written to entry.txt in the output directory.
const entry =
  "I missed the deadline because I asked three subagents to estimate the remaining work, and their estimates have now been promoted to a separate research project.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n");
