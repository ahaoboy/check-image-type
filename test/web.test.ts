import { isWEBP } from "../src";
import { resolve, join } from "path";
import { readFileSync } from "fs";
import { checkMap } from "./checkMap";
const root = resolve(".");
const fileRoot = join(root, "fixture");
describe("checkImage", () => {
  it("works", () => {
    const [name, type] = checkMap[1];
    console.log("name", name, type);
    const p = join(fileRoot, name);
    const buffer = readFileSync(p);
    const s = isWEBP(buffer);
    expect(s).toEqual(true);
  });
});
