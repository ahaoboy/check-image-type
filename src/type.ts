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
  ext: "avif",
  mime: "image/avif",
} as const;
export type AVIF_TYPE = typeof AVIF;

export const HEIC = {
  ext: "heic",
  mime: "image/heic",
} as const;
export type HEIC_TYPE = typeof HEIC;

export const BPG = {
  ext: "bpg",
  mime: "image/bpg",
} as const;
export type BPG_TYPE = typeof BPG;

export const ICO = {
  ext: "ico",
  mime: "image/ico",
} as const;
export type ICO_TYPE = typeof ICO;

export const PSD = {
  ext: "psd",
  mime: "image/vnd.adobe.photoshop",
} as const;
export type PSD_TYPE = typeof PSD;

export const JXR = {
  ext: "jxr",
  mime: "image/vnd.ms-photo",
} as const;
export type JXR_TYPE = typeof JXR;
export const FLIF = {
  ext: "flif",
  mime: "image/flif",
} as const;
export type FLIF_TYPE = typeof FLIF;

export const ICNS = {
  ext: "icns",
  mime: "image/icns",
} as const;
export type ICNS_TYPE = typeof ICNS;
export const ORF = {
  ext: "orf",
  mime: "image/x-olympus-orf",
} as const;
export type ORF_TYPE = typeof ORF;
export const XCF = {
  ext: "xcf",
  mime: "image/x-xcf",
} as const;
export type XCF_TYPE = typeof XCF;
export const RW2 = {
  ext: "rw2",
  mime: "image/x-panasonic-rw2",
} as const;
export type RW2_TYPE = typeof RW2;
export const KTX = {
  ext: "ktx",
  mime: "image/ktx",
} as const;
export type KTX_TYPE = typeof KTX;
export const JXL = {
  ext: "jxl",
  mime: "image/jxl",
} as const;
export type JXL_TYPE = typeof JXL;
export const CUR = {
  ext: "cur",
  mime: "image/x-icon",
} as const;
export type CUR_TYPE = typeof CUR;
export const RAF = {
  ext: "raf",
  mime: "image/x-fujifilm-raf",
} as const;
export type RAF_TYPE = typeof RAF;

export type ImageType =
  | WEBP_TYPE
  | PNG_TYPE
  | JPG_TYPE
  | GIF_TYPE
  | BMP_TYPE
  | AVIF_TYPE
  | HEIC_TYPE
  | BPG_TYPE
  | ICO_TYPE
  | PSD_TYPE
  | JXR_TYPE
  | FLIF_TYPE
  | ICNS_TYPE
  | ORF_TYPE
  | XCF_TYPE
  | RW2_TYPE
  | KTX_TYPE
  | JXL_TYPE
  | RAF_TYPE
  | CUR_TYPE
export type ImageMime = ImageType["mime"];
export type ImageExt = ImageType["ext"];
