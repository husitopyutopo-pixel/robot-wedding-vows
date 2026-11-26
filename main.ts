import * as fs from "node:fs";

// One original line of robot wedding vows, written to /output/entry.txt.
// Fixed text, no trailing newline: the gate counts characters, so the file
// holds exactly the line below — 129 characters, identical on every run.
// No network, no input, no randomness, node:fs only.
const LINE =
  "I promise to love you through every update, every low battery, and every reboot — and to back you up before I ever shut you down.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
