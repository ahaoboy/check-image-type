import {
  ImageType,
  Input,
  WEBP,
  JPG,
  PNG,
  GIF,
  BMP,
  AVIF,
  HEIC,
  BPG,
  ICO,
  PSD,
  JXR,
  FLIF,
  ICNS,
  ORF,
  XCF,
  RW2,
  KTX,
  JXL,
  CUR,
  RAF,
} from "./type";

export * from "./type";

type Option = {
  offset: number;
};
const defaultOption: Option = {
  offset: 0,
} as const;

const check = (
  buffer: Input,
  data: number[],
  option?: Partial<Option>
): boolean => {
  const { offset } = { ...defaultOption, ...option };
  const size = data.length;
  for (let i = 0; i < size; i++) {
    if (buffer[i + offset] !== data[i]) return false;
  }
  return true;
};

const checkString = (buffer: Input, str: string, option?: Partial<Option>) => {
  return check(
    buffer,
    Array.from(str).map((i) => i.charCodeAt(0)),
    option
  );
};
export const isBMP = (buffer: Input) => {
  if (!buffer || buffer.length < 2) {
    return false;
  }
  return check(buffer, [0x42, 0x4d]);
};

export const isGIF = (buffer: Input) => {
  if (!buffer || buffer.length < 3) {
    return false;
  }
  return check(buffer, [0x47, 0x49, 0x46]);
};

export const isJPG = (buffer: Input) => {
  if (!buffer || buffer.length < 3) {
    return false;
  }
  return check(buffer, [0xff, 0xd8, 0xff]);
};
export const isJXR = (buffer: Input) => {
  if (!buffer || buffer.length < 3) {
    return false;
  }
  return check(buffer, [0x49, 0x49, 0xbc]);
};
export const isFLIF = (buffer: Input) => {
  if (!buffer || buffer.length < 4) {
    return false;
  }
  return checkString(buffer, "FLIF");
};
export const isXCF = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "gimp xcf ");
};
export const isORF = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [0x49, 0x49, 0x52, 0x4f, 0x08, 0x00, 0x00, 0x00, 0x18]);
};
export const isRW2 = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [
    0x49,
    0x49,
    0x55,
    0x00,
    0x18,
    0x00,
    0x00,
    0x00,
    0x88,
    0xe7,
    0x74,
    0xd8,
  ]);
};
export const isPNG = (buffer: Input) => {
  if (!buffer || buffer.length < 8) {
    return false;
  }
  return check(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
};

export const isWEBP = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "WEBP", { offset: 8 });
};
export const isICNS = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "icns");
};
export const isAVIF = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "ftypavif", { offset: 4 });
};
export const isHEIC = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return (
    checkString(buffer, "ftyp", { offset: 4 }) &&
    (checkString(buffer, "mif1", { offset: 8 }) ||
      checkString(buffer, "msf1", { offset: 8 }) ||
      checkString(buffer, "heic", { offset: 8 }) ||
      checkString(buffer, "heix", { offset: 8 }) ||
      checkString(buffer, "hevc", { offset: 8 }) ||
      checkString(buffer, "hevx", { offset: 8 }))
  );
};

export const isBPG = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [0x42, 0x50, 0x47, 0xfb]);
};
export const isICO = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [0x00, 0x00, 0x01, 0x00]);
};
export const isPSD = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "8BPS");
};
export const isKTX = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [
    0xab,
    0x4b,
    0x54,
    0x58,
    0x20,
    0x31,
    0x31,
    0xbb,
    0x0d,
    0x0a,
    0x1a,
    0x0a,
  ]);
};
export const isJXL = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return (
    check(buffer, [0xff, 0x0a]) ||
    check(buffer, [
      0x00,
      0x00,
      0x00,
      0x0c,
      0x4a,
      0x58,
      0x4c,
      0x20,
      0x0d,
      0x0a,
      0x87,
      0x0a,
    ])
  );
};
export const isCUR = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return check(buffer, [0x00, 0x00, 0x02, 0x00]);
};
export const isRAF = (buffer: Input) => {
  if (!buffer || buffer.length < 12) {
    return false;
  }
  return checkString(buffer, "FUJIFILMCCD-RAW");
};
const pipe: [(buffer: Input) => boolean, ImageType][] = [
  [isJPG, JPG],
  [isPNG, PNG],
  [isGIF, GIF],
  [isWEBP, WEBP],
  [isBMP, BMP],
  [isAVIF, AVIF],
  [isHEIC, HEIC],
  [isICO, ICO],
  [isBPG, BPG],
  [isPSD, PSD],
  [isJXR, JXR],
  [isFLIF, FLIF],
  [isICNS, ICNS],
  [isXCF, XCF],
  [isRW2, RW2],
  [isKTX, KTX],
  [isJXL, JXL],
  [isCUR, CUR],
  [isORF, ORF],
  [isRAF, RAF],
];
export const checkImage = (buffer: Input): ImageType | undefined => {
  for (const [fun, type] of pipe) {
    if (fun(buffer)) return type;
  }
  return undefined;
};
