
import { Product } from './types';

export const CATEGORIES = ['Makeup', 'Skincare', 'Fragrance', 'Tools'];
export const BRANDS = ['Dior', 'Huda Beauty', 'Fenty Beauty', 'Rare Beauty', 'Chanel', 'Glow Recipe', 'Drunk Elephant'];

export const SAMPLE_PRODUCTS: Product[] = [
  // --- DIOR (7 items) ---
  {
    id: 'd1', name: 'Dior Addict Lip Maximizer', price: 6500, category: 'Makeup',
    description: 'The iconic Dior gloss that provides genuine lip care for volume and shine.',
    stock: 50, dimensions: '6ml', colors: ['Pink', 'Coral', 'Berry'], model3D: '',
    images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'd2', name: 'Dior Forever Skin Glow', price: 9800, category: 'Makeup',
    description: '24h wear high-perfection foundation that enhances the skin with a radiant finish.',
    stock: 30, dimensions: '30ml', colors: ['1N', '2N', '3N'], model3D: '',
    images: ['https://images.unsplash.com/photo-1599733589046-10c005739ef0?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'd3', name: 'Dior Backstage Eye Palette', price: 8500, category: 'Makeup',
    description: 'The secret weapon of Dior makeup artists for professional eye looks.',
    stock: 20, dimensions: '10g', colors: ['Rosewood', 'Amber', 'Nude'], model3D: '',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'd4', name: 'Dior Addict Lip Glow Balm', price: 5900, category: 'Makeup',
    description: 'The 1st Dior lip balm formulated with 97% natural-origin ingredients.',
    stock: 40, dimensions: '3.2g', colors: ['Pink', 'Rosewood', 'Mahogany'], model3D: '',
    images: ['https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'd5', name: 'Capture Totale Super Potent Serum', price: 18500, category: 'Skincare',
    description: 'The total anti-aging serum for firmer, younger-looking skin.',
    stock: 15, dimensions: '50ml', colors: ['Natural'], model3D: '',
    images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'd6', name: 'Sauvage Parfum', price: 21000, category: 'Fragrance',
    description: 'A highly concentrated interpretation of Sauvage, with extreme freshness.',
    stock: 25, dimensions: '100ml', colors: ['Midnight Blue'], model3D: '',
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'd7', name: 'Miss Dior Eau de Parfum', price: 19500, category: 'Fragrance',
    description: 'A colorful floral bouquet, like a "millefiori" where notes of Rose and Peony are heightened.',
    stock: 18, dimensions: '100ml', colors: ['Pink'], model3D: '',
    images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- HUDA BEAUTY (7 items) ---
  {
    id: 'h1', name: 'Rose Quartz Eyeshadow Palette', price: 11500, category: 'Makeup',
    description: 'An 18-shade eyeshadow palette inspired by Huda’s favorite crystal.',
    stock: 15, dimensions: 'Full Size', colors: ['Rose Quartz'], model3D: '',
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'h2', name: 'Easy Bake Loose Powder', price: 7200, category: 'Makeup',
    description: 'A finely milled loose powder that ensures long-lasting, airbrushed skin.',
    stock: 45, dimensions: '20g', colors: ['Cupcake', 'Banana Bread', 'Pound Cake'], model3D: '',
    images: ['https://images.unsplash.com/photo-1616683693504-3ee7e1da4922?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'h3', name: 'FauxFilter Luminous Matte', price: 8900, category: 'Makeup',
    description: 'A full-coverage foundation with 24-hour wear and a luminous matte finish.',
    stock: 30, dimensions: '35ml', colors: ['Vanilla', 'Cashew', 'Toasted Coconut'], model3D: '',
    images: ['https://images.unsplash.com/photo-1599733589046-10c005739ef0?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'h4', name: 'Liquid Matte Lipstick', price: 4200, category: 'Makeup',
    description: 'The ultimate liquid lipstick with a transfer-proof, velvet finish.',
    stock: 60, dimensions: '4.2ml', colors: ['Icon', 'Bombshell', 'Trendsetter'], model3D: '',
    images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'h5', name: 'Wishful Yo Glow Scrub', price: 6800, category: 'Skincare',
    description: 'A gentle yet powerful enzyme scrub infused with pineapple and papaya.',
    stock: 25, dimensions: '100ml', colors: ['Yellow'], model3D: '',
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'h6', name: 'Empowered Eyeshadow Palette', price: 12500, category: 'Makeup',
    description: 'Ultimate gold-themed palette featuring luxe metallics and matte shades.',
    stock: 12, dimensions: 'Full Size', colors: ['Gold'], model3D: '',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'h7', name: 'GloWish Skin Tint', price: 7400, category: 'Makeup',
    description: 'A sheer, skin-enhancing tint that provides an instant dewy glow.',
    stock: 22, dimensions: '40ml', colors: ['Fair', 'Medium', 'Deep'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- FENTY BEAUTY (7 items) ---
  {
    id: 'f1', name: 'Gloss Bomb Lip Luminizer', price: 3800, category: 'Makeup',
    description: 'The ultimate gotta-have-it lip gloss with explosive shine.',
    stock: 100, dimensions: '9ml', colors: ['Fenty Glow', 'Fu$$y', 'Glass Slipper'], model3D: '',
    images: ['https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'f2', name: 'Pro Filt\'r Soft Matte', price: 7500, category: 'Makeup',
    description: 'A long-wear foundation with buildable, medium-to-full coverage.',
    stock: 40, dimensions: '32ml', colors: ['150', '280', '420'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'f3', name: 'Killawatt Freestyle Highlighter', price: 6200, category: 'Makeup',
    description: 'Weightless cream-powder hybrid highlighter for face and eyes.',
    stock: 35, dimensions: '8g', colors: ['Trophy Wife', 'Mean Money'], model3D: '',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'f4', name: 'Stunna Lip Paint', price: 4900, category: 'Makeup',
    description: 'A weightless, longwear liquid lipstick with a soft-matte finish.',
    stock: 55, dimensions: '4ml', colors: ['Uncensored', 'Unbutton', 'Unveil'], model3D: '',
    images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'f5', name: 'Hydra Vizor Moisturizer', price: 7800, category: 'Skincare',
    description: '2-in-1 moisturizer and sunscreen that’s lightweight and oil-free.',
    stock: 28, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'f6', name: 'Fat Water Toner Serum', price: 6500, category: 'Skincare',
    description: 'A 2-in-1 toner-serum that tightens pores and brightens skin.',
    stock: 32, dimensions: '150ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'f7', name: 'Match Stix Contour Stick', price: 5400, category: 'Makeup',
    description: 'A contour skin stick in a longwear, light-as-air matte formula.',
    stock: 45, dimensions: '7.1g', colors: ['Amber', 'Mocha', 'Espresso'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- RARE BEAUTY (7 items) ---
  {
    id: 'r1', name: 'Soft Pinch Liquid Blush', price: 4800, category: 'Makeup',
    description: 'A weightless, long-lasting liquid blush that blends and builds.',
    stock: 12, dimensions: '7.5ml', colors: ['Hope', 'Happy', 'Joy', 'Virtue'], model3D: '',
    images: ['https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'r2', name: 'Positive Light Luminizer', price: 5200, category: 'Makeup',
    description: 'A silky, second-skin liquid highlighter that creates a lasting finish.',
    stock: 24, dimensions: '15ml', colors: ['Enlighten', 'Flaunt', 'Mesmerize'], model3D: '',
    images: ['https://images.unsplash.com/photo-1599733589046-10c005739ef0?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'r3', name: 'Stay Vulnerable Melting Blush', price: 4200, category: 'Makeup',
    description: 'A breakthrough cream blush that melts into skin for a natural look.',
    stock: 38, dimensions: '5g', colors: ['Nearly Rose', 'Nearly Mauve'], model3D: '',
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'r4', name: 'Lip Soufflé Matte Lip Cream', price: 3900, category: 'Makeup',
    description: 'A weightless matte lip cream with a rich color and hydrating feel.',
    stock: 50, dimensions: '3.9ml', colors: ['Fearless', 'Courage', 'Inspire'], model3D: '',
    images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'r5', name: 'Always An Optimist Illuminating Primer', price: 5600, category: 'Makeup',
    description: 'A cooling, water-based gel primer that smoothes and illuminates.',
    stock: 30, dimensions: '28ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'r6', name: 'Perfect Strokes Mascara', price: 4500, category: 'Makeup',
    description: 'A universal mascara that hugs every lash to lift, lengthen, and curl.',
    stock: 42, dimensions: '13.5ml', colors: ['Black'], model3D: '',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'r7', name: 'Brow Harmony Shape & Fill', price: 4100, category: 'Makeup',
    description: 'A retractable brow pencil and gel duo for natural-looking definition.',
    stock: 35, dimensions: '0.2g', colors: ['Soft Brown', 'Deep Brown'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- CHANEL (7 items) ---
  {
    id: 'c1', name: 'Chanel No. 5 Parfum', price: 24500, category: 'Fragrance',
    description: 'The world’s most eternal fragrance, a floral aldehyde bouquet.',
    stock: 12, dimensions: '100ml', colors: ['Gold'], model3D: '',
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'c2', name: 'Rouge Allure Velvet', price: 8200, category: 'Makeup',
    description: 'Luminous matte lip color with a velvet-soft texture.',
    stock: 25, dimensions: '3.5g', colors: ['Pirate', 'Libre', 'Rouge Vie'], model3D: '',
    images: ['https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'c3', name: 'Les Beiges Water-Fresh Tint', price: 11500, category: 'Makeup',
    description: 'A first-of-its-kind tint featuring micro-fluidic technology.',
    stock: 18, dimensions: '30ml', colors: ['Light', 'Medium'], model3D: '',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'c4', name: 'Hydra Beauty Camellia Serum', price: 15800, category: 'Skincare',
    description: 'A micro-droplet serum that delivers intense, continuous hydration.',
    stock: 15, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'c5', name: 'Sublimage La Crème', price: 34500, category: 'Skincare',
    description: 'The ultimate restoring cream for absolute skin regeneration.',
    stock: 8, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'c6', name: 'Le Lift Smoothing Serum', price: 19800, category: 'Skincare',
    description: 'A highly concentrated serum that firms and smoothes skin.',
    stock: 10, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'c7', name: 'Chance Eau Tendre Parfum', price: 18500, category: 'Fragrance',
    description: 'A floral-fruity fragrance that intertwines Quince and Hyacinth.',
    stock: 20, dimensions: '100ml', colors: ['Soft Pink'], model3D: '',
    images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- GLOW RECIPE (7 items) ---
  {
    id: 'g1', name: 'Watermelon Glow Dew Drops', price: 8500, category: 'Skincare',
    description: 'Niacinamide-infused highlighting serum for an instant dewy glow.',
    stock: 40, dimensions: '40ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'g2', name: 'Plum Plump Hyaluronic Cream', price: 9200, category: 'Skincare',
    description: 'A whipped gel-cream moisturizer with hyaluronic acid.',
    stock: 35, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'g3', name: 'Avocado Ceramide Cleanser', price: 7400, category: 'Skincare',
    description: 'A gentle, milky cleanser that supports the moisture barrier.',
    stock: 50, dimensions: '150ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'g4', name: 'Strawberry BHA Pore-Smooth Blur Drops', price: 8200, category: 'Skincare',
    description: 'An all-in-one serum and primer to blur pores over time.',
    stock: 20, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'g5', name: 'Guava Vitamin C Dark Circle Eye Gel', price: 7900, category: 'Skincare',
    description: 'Potent 10% Vitamin C and caffeine to brighten dark circles.',
    stock: 25, dimensions: '15ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'g6', name: 'Pomegranate Peptide Firming Serum', price: 9800, category: 'Skincare',
    description: 'A lifting and firming serum with pomegranate and peptides.',
    stock: 15, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'g7', name: 'Papaya Sorbet Cleansing Balm', price: 7100, category: 'Skincare',
    description: 'A PEG-free cleansing balm that melts away stubborn makeup.',
    stock: 30, dimensions: '100ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },

  // --- DRUNK ELEPHANT (7 items) ---
  {
    id: 'de1', name: 'Protini Polypeptide Cream', price: 13500, category: 'Skincare',
    description: 'A protein moisturizer that combines signal peptides and growth factors.',
    stock: 22, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'de2', name: 'C-Firma Fresh Day Serum', price: 14800, category: 'Skincare',
    description: 'A potent Vitamin C day serum packed with antioxidants.',
    stock: 18, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800'],
    featured: true, createdAt: new Date().toISOString()
  },
  {
    id: 'de3', name: 'B-Hydra Intensive Hydration Serum', price: 11200, category: 'Skincare',
    description: 'A cool drink of water for your thirsty skin.',
    stock: 30, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'de4', name: 'Lala Retro Whipped Cream', price: 12500, category: 'Skincare',
    description: 'A multifaceted rescue cream for skin in distress.',
    stock: 25, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'de5', name: 'T.L.C. Sukari Babyfacial', price: 16800, category: 'Skincare',
    description: 'A professional-quality AHA/BHA facial that resurfaces skin.',
    stock: 15, dimensions: '50ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'de6', name: 'Virgin Marula Facial Oil', price: 13200, category: 'Skincare',
    description: 'A pure, antioxidant-rich facial oil that hydrates and glows.',
    stock: 20, dimensions: '30ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  },
  {
    id: 'de7', name: 'Beste No. 9 Jelly Cleanser', price: 7800, category: 'Skincare',
    description: 'An innovative jelly cleanser that removes all traces of makeup.',
    stock: 40, dimensions: '150ml', colors: ['Standard'], model3D: '',
    images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800'],
    featured: false, createdAt: new Date().toISOString()
  }
];
