export type Input = Uint8Array;

export const WEBP = {
  ext: "webp",
  mime: "image/webp",
} as const;
export type WEBP_TYPE = typeof WEBP;

export const JPG = {
  ext: "jpg",
  mime: "image/jpeg",
} as const;
export type JPG_TYPE = typeof JPG;

export const PNG = {
  ext: "png",
  mime: "image/png",
} as const;
export type PNG_TYPE = typeof PNG;

export const BMP = {
  ext: "bmp",
  mime: "image/bmp",
} as const;
export type BMP_TYPE = typeof BMP;

export const GIF = {
  ext: "gif",
  mime: "image/gif",
} as const;
export type GIF_TYPE = typeof GIF;

export const AVIF = {
  ext: "gif",
  mime: "image/gif",
} as const;
export type AVIF_TYPE = typeof AVIF;

export const HEIC = {
  ext: "gif",
  mime: "image/gif",
} as const;
export type HEIC_TYPE = typeof HEIC;

export type ImageType = WEBP_TYPE | PNG_TYPE | JPG_TYPE | GIF_TYPE | BMP_TYPE | HEIC_TYPE;
export type ImageMime = ImageType["mime"];
export type ImageExt = ImageType["ext"];
