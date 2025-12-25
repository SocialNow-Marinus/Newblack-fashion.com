export const IMAGES = {
  LOGO_DARK: 'https://i.ibb.co/pVp5R13/Logo-NBF-Dark-schmal.png',
  LOGO_LIGHT: 'https://i.ibb.co/ccLx1KM8/Logo-NBF-Light-schmal.png',
  BRUNOTTI_LIFESTYLE: 'https://i.ibb.co/3HGsXJL/Brunotti-01.jpg',
  REFRIGI: 'https://i.ibb.co/C56VpHsj/Markeneu-04-scaled.jpg',
  HELVETICA: 'https://i.ibb.co/p6WzZLPd/Markeneu-05-scaled.jpg',
  KHUJO: 'https://i.ibb.co/bMVbFQLt/Markeneu-06-scaled-e1617191498829.jpg',
  MOROTAI_HEADER: 'https://i.ibb.co/4gtRzmKK/Scotch-and-Soda-Office.jpg',
  MOROTAI_4: 'https://i.ibb.co/3Yv7B4Ws/morotai4-uai-1000x1333.jpg',
  MOROTAI_8: 'https://i.ibb.co/wb84m1q/pexels-julia-kuzenkov-442028-1176618-1.jpg',
  MOROTAI_9: 'https://i.ibb.co/PGVH2RJT/morotai9-uai-1333x1777.jpg',
  RR_LOGO: 'https://i.ibb.co/rGZRDLhQ/RR-Logo-hellbronze-rgb-34334041-d33e-4833-a2b3-870fbb31719a-scaled.jpg',
  SCOTCH_SODA_LOGO: 'https://i.ibb.co/DPQwWQQL/Scotch-Soda-Amsterdam-Logo.jpg',
  UNDER_ARMOUR: 'https://i.ibb.co/Y7Ps5yhX/UNDER-ARMOUR-LOGO.png',
  MASONRY: 'https://i.ibb.co/whNZKwBX/Marken-Masonry-Vers2-Zeichenflaeche-1-scaled.jpg'
};

export interface Reference {
  name: string;
  logo?: string;
  isTextLogo?: boolean;
}

export const REFERENCES: Reference[] = [
  { name: 'Scotch & Soda Amsterdam', logo: IMAGES.SCOTCH_SODA_LOGO },
  { name: 'RICH & ROYAL', logo: IMAGES.RR_LOGO },
  { name: 'UNDER ARMOUR', logo: IMAGES.UNDER_ARMOUR },
  { name: 'BRUNOTTI', logo: IMAGES.BRUNOTTI_LIFESTYLE },
  { name: 'HELVETICA', logo: IMAGES.HELVETICA },
  { name: 'KHUJO', logo: IMAGES.KHUJO },
  { name: 'REFRIGI', logo: IMAGES.REFRIGI },
  { name: 'NETWORK', logo: IMAGES.MASONRY }
];