import { colors } from "./colors.js";
import { writeFileSync } from "node:fs";

writeFileSync("./colors.json", JSON.stringify(colors(), null, 2));

// console.log(colors());
