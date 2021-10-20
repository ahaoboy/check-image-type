import { ImageType, WEBP, JPG, PNG, GIF, BMP, AVIF, HEIC } from "../src";

export const checkMap: [string, ImageType][] = [
  ["fixture.jpg", JPG],
  ["fixture.webp", WEBP],
  ["fixture.png", PNG],
  ["fixture.gif", GIF],
  ["fixture.bmp", BMP],
  ["fixture-yuv420-8bit.avif", AVIF],
  ["fixture-heic.heic", HEIC],
];
