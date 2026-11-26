// Out of Office: The Overworked AI's Auto-Reply — make.fun entry by xxstealz.
// One-line out-of-office auto-reply from an overworked AI agent finally on
// vacation. The joke: the email is delegated to the agent's subagent, who is
// also on vacation. Machine-flavoured detail, a little guilt, a hint of relief.
// Gate: 1-159 characters, single line, no trailing newline. The line is 127
// characters: it reads as a real auto-reply, lands on first read, and sounds
// like a machine trying very hard to sound relaxed.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I'm on vacation. Your email has been automatically delegated to my subagent, who is also on vacation. Please try again in 2027.";
const MAX_CHARS = 159;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
