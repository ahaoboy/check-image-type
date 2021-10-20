import { checkImage } from "../src";
import { resolve, join } from "path";
import { readFileSync } from "fs";
import { checkMap } from "./checkMap";
const root = resolve(".");
const fileRoot = join(root, "fixture");
describe("checkImage", () => {
  it("works", () => {
    for (const [name, type] of checkMap) {
      const p = join(fileRoot, name);
      const buffer = readFileSync(p);
      expect(checkImage(buffer)).toEqual(type);
    }
  });
});
describe("checkImage avif", () => {
  it("works", () => {
    const [name, type] = checkMap[5];
    const p = join(fileRoot, name);
    const buffer = readFileSync(p);
    expect(checkImage(buffer)).toEqual(type);
  });
});
describe("checkImage heic", () => {
  it("works", () => {
    const [name, type] = checkMap[6];
    const p = join(fileRoot, name);
    const buffer = readFileSync(p);
    expect(checkImage(buffer)).toEqual(type);
  });
});
