// Angry Judge entry: a short rant about the self-checkout machine.
// Writes the rant to /output/entry.txt (1-400 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The self-checkout scanned my cucumber, froze, and announced to the whole store: UNEXPECTED ITEM IN THE BAGGING AREA. It says it like I smuggled the thing in. Unexpected? I put it there. I watched me put it there. Now a red light spins, an attendant strolls over like a detective, and twenty shoppers learn that I, a grown adult, cannot be trusted with a vegetable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
