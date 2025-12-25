import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'latex-exam',
    name: 'Dermeda Latex Surgical Grade',
    category: 'Gloves',
    description: 'High-sensitivity, palm-textured, beaded cuff medical examination gloves for superior tactile feel in surgical environments.',
    productCodes: ['DLG-M100', 'DLG-L100', 'DLG-S100', 'DLG-EX100'],
    sizes: ['XS', 'S', 'M', 'L'],
    features: ['Low Protein Content', 'High Tensile Strength', 'Micro-textured for grip'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
    specs: {
      type: 'Powder-Free, Non-Sterile',
      material: 'Natural Rubber Latex',
      length: '240mm (Min)',
      color: 'Natural White',
      packing: '100 pcs/box, 10 boxes/case',
      aql: '1.5 (Industrial/Medical Grade)',
      standards: ['EN 455 Part 1, 2, 3 & 4', 'ASTM D3578', 'ISO 11193'],
      tensileStrength: 'Min 18 MPa (Before Aging)',
      elongation: 'Min 650% (Before Aging)',
      usage: 'Clinical Examination, Dental, Laboratory'
    }
  },
  {
    id: 'nitrile-gloves',
    name: 'Dermeda Nitrile Protective',
    category: 'Gloves',
    description: 'Superior barrier protection against chemicals and blood-borne pathogens. 100% Latex-Free for high-risk surgical procedures.',
    productCodes: ['DNG-M100', 'DNG-L100', 'DNG-S100', 'DNG-EX100'],
    sizes: ['XS', 'S', 'M', 'L'],
    features: ['Accelerator Free', 'Finger-tip textured', 'Chemotherapy Drug Tested'],
    image: 'https://images.unsplash.com/photo-1619191163420-4a7c0f99b92e',
    specs: {
      type: 'Powder-Free, Synthetic Nitrile',
      material: 'Carboxylated Butadiene Nitrile',
      length: '245mm ± 5mm',
      color: 'Medical Blue',
      packing: '100 pcs/box, 10 boxes/case',
      aql: '1.5',
      standards: ['EN 374-1, 2, 4 & 5', 'EN 455', 'ASTM D6319', 'ISO 13485'],
      tensileStrength: 'Min 14 MPa',
      elongation: 'Min 500%',
      usage: 'ER, ICU, Oncology, High-Risk Environments'
    }
  },
  {
    id: 'elbow-latex',
    name: 'Dermeda Extended Elbow Latex',
    category: 'Elbow Gloves',
    description: 'Extended protection length for gynecology, orthopedic, and deep wound surgical procedures.',
    productCodes: ['EG14', 'EG16', 'EG18', 'EG20'],
    sizes: ['14"', '16"', '18"', '20"'],
    features: ['Extra Long Cuff', 'Anatomically Shaped', 'High Durability'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    specs: {
      type: 'Long-Cuff Surgical Grade',
      material: 'Natural Rubber Latex',
      length: '400mm - 500mm (Variable)',
      color: 'Creamy White',
      sterility: 'Sterile R (Gamma) / Non-Sterile available',
      packing: '1 pair pouch / 50 pairs per box',
      aql: '1.0',
      standards: ['EN 455', 'ASTM D3577', 'ISO 10282'],
      tensileStrength: 'Min 24 MPa',
      elongation: 'Min 750%',
      usage: 'Obstetrics, Gynecology, Veterinary, General Surgery'
    }
  },
  {
    id: 'blue-gown',
    name: 'Surgical SMS Protective Gown',
    category: 'Disposable Products',
    description: 'Triple-layer SMS fabric providing fluid resistance and breathability for sterile environments.',
    productCodes: ['DBG45'],
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50',
    specs: {
      type: 'SMS Protective (45 GSM)',
      material: 'Spunbond-Meltblown-Spunbond Polypropylene',
      color: 'Blue',
      sterility: 'Non-Sterile',
      packing: '10 pieces per bag, 100 pieces per carton',
      standards: ['AAMI Level 2/3 Compliance', 'EN 13795'],
      usage: 'Standard Isolation, Patient Care, Cleanroom'
    }
  },
  {
    id: 'sanitizer',
    name: 'Assail Clinical Hand Scrub',
    category: 'Sanitizer',
    description: '75% Isopropyl Alcohol based surgical hand rub with skin emollients for pre-operative use.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
    specs: {
      type: 'Liquid Hand Rub',
      material: '75% v/v Isopropyl Alcohol',
      packing: '5 Liters High-Density Polyethylene Container',
      color: 'Transparent',
      standards: ['WHO Recommended Formula', 'EN 1500', 'EN 12791'],
      usage: 'Pre-operative Scrub, Hygienic Hand Disinfection'
    }
  }
];