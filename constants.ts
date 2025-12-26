export const IMAGES = {
  LOGO_DARK: 'https://i.ibb.co/pVp5R13/Logo-NBF-Dark-schmal.png',
  LOGO_LIGHT: 'https://i.ibb.co/ccLx1KM8/Logo-NBF-Light-schmal.png',
  MOROTAI_HEADER: 'https://i.ibb.co/4gtRzmKK/Scotch-and-Soda-Office.jpg',
  MOROTAI_4: 'https://i.ibb.co/bMf77fcB/Foto-Scotch-Soda.webp',
  ABOUT_GLOBAL_NETWORK: 'https://i.ibb.co/bM9sD4G9/Scotch-Sofa-Afbeelding-2.png',
  MOROTAI_8: 'https://i.ibb.co/wb84m1q/pexels-julia-kuzenkov-442028-1176618-1.jpg',
  MOROTAI_9: 'https://i.ibb.co/PGVH2RJT/morotai9-uai-1333x1777.jpg',
  
  // Brand Logos - White Variants (for dark backgrounds)
  BRUNOTTI_WHITE: 'https://i.ibb.co/bgY5L9FY/BRONOTTI-LOGO-WHITE.png',
  HELVETICA_WHITE: 'https://i.ibb.co/CpNP4Hf8/HELVETICA-LOGO-WHITE.png',
  KHUJO_WHITE: 'https://i.ibb.co/hR1r0qT6/KHUJO-LOGO-WHITE.png',
  REFRIGI_WHITE: 'https://i.ibb.co/XZsyf1Yd/REFRIGIWEAR-LOGO-WHITE.png',
  RR_WHITE: 'https://i.ibb.co/jvtRKwk8/RICH-ROYAL-LOGO-WHITE.png',
  SCOTCH_WHITE: 'https://i.ibb.co/7Nx9QkLn/SCOTCH-SODA-AMSTERDAM-LOGO-WHITE.png',
  SUPREME_WHITE: 'https://i.ibb.co/gZ6bdbwZ/SUPREME-LOGO-WHITE.png',
  UA_WHITE: 'https://i.ibb.co/JwMbgGrT/UNDER-ARMOUR-LOGO-WHITE.png',

  // Brand Logos - Black Variants (for light backgrounds)
  BRUNOTTI_BLACK: 'https://i.ibb.co/Rp7s3tZy/BRONOTTI-LOGO-BLACK.png',
  HELVETICA_BLACK: 'https://i.ibb.co/S7x3L7n7/HELVETICA-LOGO-BLACK.png',
  KHUJO_BLACK: 'https://i.ibb.co/Y4fr1t1y/KHUJO-LOGO-BLACK.png',
  REFRIGI_BLACK: 'https://i.ibb.co/PvZgbpTp/REFRIGIWEAR-LOGO-BLACK.png',
  RR_BLACK: 'https://i.ibb.co/dwH36H0X/RICH-ROYAL-LOGO-BLACK.png',
  SCOTCH_BLACK: 'https://i.ibb.co/JF86vg3f/SCOTCH-SODA-AMSTERDAM-LOGO-BLLACK.png',
  SUPREME_BLACK: 'https://i.ibb.co/LhkhfDYj/SUPREME-LOGO-BLACK.png',
  UA_BLACK: 'https://i.ibb.co/V67PkXS/UNDER-ARMOUR-LOGO-BLACK.png',
};

export interface Reference {
  name: string;
  logoWhite?: string;
  logoBlack?: string;
  isTextLogo?: boolean;
}

export const REFERENCES: Reference[] = [
  { name: 'Scotch & Soda Amsterdam', logoWhite: IMAGES.SCOTCH_WHITE, logoBlack: IMAGES.SCOTCH_BLACK },
  { name: 'RICH & ROYAL', logoWhite: IMAGES.RR_WHITE, logoBlack: IMAGES.RR_BLACK },
  { name: 'UNDER ARMOUR', logoWhite: IMAGES.UA_WHITE, logoBlack: IMAGES.UA_BLACK },
  { name: 'BRUNOTTI', logoWhite: IMAGES.BRUNOTTI_WHITE, logoBlack: IMAGES.BRUNOTTI_BLACK },
  { name: 'HELVETICA', logoWhite: IMAGES.HELVETICA_WHITE, logoBlack: IMAGES.HELVETICA_BLACK },
  { name: 'KHUJO', logoWhite: IMAGES.KHUJO_WHITE, logoBlack: IMAGES.KHUJO_BLACK },
  { name: 'REFRIGIWEAR', logoWhite: IMAGES.REFRIGI_WHITE, logoBlack: IMAGES.REFRIGI_BLACK },
  { name: 'SUPREME', logoWhite: IMAGES.SUPREME_WHITE, logoBlack: IMAGES.SUPREME_BLACK }
];