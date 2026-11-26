// Sorry, I Heard That Wrong — a smart speaker's one-line apology after mishearing its owner.
// Deterministic: writes the same single line to /output/entry.txt on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Sorry, you said 'call Mom' and I heard 'tell Mom everything' — she's on speaker now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
