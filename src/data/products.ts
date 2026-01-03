export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  gender: 'women' | 'men' | 'unisex';
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  fabric: string;
  fit: string;
  care: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cashmere Blend Sweater",
    price: 189,
    category: "women",
    subcategory: "tops",
    gender: "women",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    colors: [
      { name: "Ivory", hex: "#F5F5DC" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Luxuriously soft cashmere blend sweater with a relaxed fit. Perfect for layering or wearing on its own.",
    fabric: "70% Cashmere, 30% Silk",
    fit: "Relaxed fit, true to size",
    care: ["Dry clean only", "Store folded", "Do not hang"],
    isNew: true
  },
  {
    id: "2",
    name: "Tailored Wool Trousers",
    price: 245,
    category: "women",
    subcategory: "bottoms",
    gender: "women",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1B1B3A" }
    ],
    sizes: ["24", "26", "28", "30", "32"],
    description: "Impeccably tailored wool trousers with a high waist and straight leg. A wardrobe essential.",
    fabric: "98% Virgin Wool, 2% Elastane",
    fit: "High waist, straight leg",
    care: ["Dry clean recommended", "Steam to remove wrinkles"],
    isBestSeller: true
  },
  {
    id: "3",
    name: "Silk Midi Dress",
    price: 395,
    originalPrice: 495,
    category: "women",
    subcategory: "dresses",
    gender: "women",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800"
    ],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Midnight", hex: "#191970" }
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant silk midi dress with a flattering wrap silhouette. Features delicate covered buttons and a self-tie belt.",
    fabric: "100% Mulberry Silk",
    fit: "Wrap style, adjustable fit",
    care: ["Dry clean only", "Store on padded hanger"],
    isOnSale: true
  },
  {
    id: "4",
    name: "Merino Wool Coat",
    price: 495,
    category: "women",
    subcategory: "outerwear",
    gender: "women",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800"
    ],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#000000" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Timeless merino wool coat with a minimal design. Double-breasted with horn buttons.",
    fabric: "100% Merino Wool",
    fit: "Regular fit, hits below knee",
    care: ["Professional dry clean", "Brush regularly"],
    isBestSeller: true
  },
  {
    id: "5",
    name: "Cotton Oxford Shirt",
    price: 125,
    category: "men",
    subcategory: "tops",
    gender: "men",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800"
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFB6C1" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic oxford shirt crafted from premium cotton. Perfect for both casual and formal occasions.",
    fabric: "100% Organic Cotton",
    fit: "Regular fit",
    care: ["Machine wash cold", "Iron while damp"],
    isNew: true
  },
  {
    id: "6",
    name: "Slim Chino Trousers",
    price: 145,
    category: "men",
    subcategory: "bottoms",
    gender: "men",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
    ],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#1B1B3A" },
      { name: "Olive", hex: "#556B2F" }
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Versatile slim-fit chinos made from stretch cotton twill. Essential for any wardrobe.",
    fabric: "97% Cotton, 3% Elastane",
    fit: "Slim fit, tapered leg",
    care: ["Machine wash cold", "Tumble dry low"],
    isBestSeller: true
  },
  {
    id: "7",
    name: "Leather Crossbody Bag",
    price: 295,
    category: "accessories",
    subcategory: "bags",
    gender: "unisex",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800"
    ],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#000000" }
    ],
    sizes: ["One Size"],
    description: "Minimalist leather crossbody bag with adjustable strap. Handcrafted from full-grain leather.",
    fabric: "Full-grain Italian Leather",
    fit: "Adjustable strap",
    care: ["Condition regularly", "Store in dust bag"],
    isNew: true
  },
  {
    id: "8",
    name: "Wool Blend Blazer",
    price: 345,
    category: "men",
    subcategory: "outerwear",
    gender: "men",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      "https://images.unsplash.com/photo-1593030103066-0093718e7731?w=800"
    ],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B1B3A" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Sophisticated wool blend blazer with a modern cut. Perfect for elevating any outfit.",
    fabric: "80% Wool, 20% Polyester",
    fit: "Slim fit",
    care: ["Dry clean only", "Steam to refresh"],
    isBestSeller: true
  }
];

export const categories = {
  women: {
    label: "Women",
    subcategories: ["Tops", "Bottoms", "Dresses", "Outerwear"]
  },
  men: {
    label: "Men",
    subcategories: ["Tops", "Bottoms", "Outerwear"]
  },
  accessories: {
    label: "Accessories",
    subcategories: ["Bags", "Jewelry", "Scarves"]
  }
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category.toLowerCase());
};

export const getProductsBySubcategory = (category: string, subcategory: string) => {
  return products.filter(
    p => p.category === category.toLowerCase() && 
    p.subcategory === subcategory.toLowerCase()
  );
};

export const getNewArrivals = () => products.filter(p => p.isNew);
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getSaleItems = () => products.filter(p => p.isOnSale);
export const getProductById = (id: string) => products.find(p => p.id === id);
