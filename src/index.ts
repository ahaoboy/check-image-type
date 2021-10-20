import { ImageType, Input, WEBP, JPG, PNG, GIF, BMP, AVIF, HEIC } from "./type";

export * from "./type";

export const isBMP = (buffer: Input) => {
  if (!buffer || buffer.length < 2) {
    return false;
  }
  return buffer[0] === 0x42 && buffer[1] === 0x4d;
};

export const isGIF = (buffer: Input) => {
  if (!buffer || buffer.length < 3) {
    return false;
  }
  return buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46;
};

export const isJPG = (buffer: Input) => {
  if (!buffer || buffer.length < 3) {
    return false;
  }
  return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
};

export const isPNG = (buffer: Input) => {
  if (!buffer || buffer.length < 8) {
    return false;
  }
  return (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  );
};

export const isWEBP = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return (
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  );
};
export const isAVIF = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  const s = Array.from(buffer.slice(4, 12))
    .map((i) => String.fromCharCode(i))
    .join("");
  return s === "ftypavif";
};
export const isHEIC = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  const prev = Array.from(buffer.slice(4, 8))
    .map((i) => String.fromCharCode(i))
    .join("");
  const post = Array.from(buffer.slice(8, 12))
    .map((i) => String.fromCharCode(i))
    .join("");
  return (
    prev === "ftyp" &&
    (post === "mif1" ||
      post === "msf1" ||
      post === "heic" ||
      post === "heix" ||
      post === "hevc" ||
      post === "hevx")
  );
};

const pipe: [(buffer: Input) => boolean, ImageType][] = [
  [isJPG, JPG],
  [isPNG, PNG],
  [isGIF, GIF],
  [isWEBP, WEBP],
  [isBMP, BMP],
  [isAVIF, AVIF],
  [isHEIC, HEIC],
];
export const checkImage = (buffer: Input): ImageType | undefined => {
  for (const [fun, type] of pipe) {
    if (fun(buffer)) return type;
  }
  return undefined;
};
