import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/product/ProductGrid';
import { 
  products, 
  getProductsByCategory, 
  getNewArrivals, 
  getBestSellers, 
  getSaleItems 
} from '@/data/products';

const categoryTitles: Record<string, string> = {
  'new-arrivals': 'New Arrivals',
  'women': 'Women',
  'men': 'Men',
  'accessories': 'Accessories',
  'best-sellers': 'Best Sellers',
  'sale': 'Sale',
};

const categoryDescriptions: Record<string, string> = {
  'new-arrivals': 'Discover our latest additions to the collection',
  'women': 'Timeless essentials and seasonal favorites for women',
  'men': 'Classic pieces and modern styles for men',
  'accessories': 'Complete your look with our curated accessories',
  'best-sellers': 'Our most loved pieces by our customers',
  'sale': 'Shop our selection of specially priced items',
};

const Shop = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  
  const getProducts = () => {
    if (category === 'new-arrivals') return getNewArrivals();
    if (category === 'best-sellers') return getBestSellers();
    if (category === 'sale') return getSaleItems();
    if (category) return getProductsByCategory(category);
    return products;
  };

  const filteredProducts = getProducts();
  const title = category ? categoryTitles[category] || category : 'All Products';
  const description = category ? categoryDescriptions[category] : '';

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-padding mx-auto text-center">
          <h1 className="section-title mb-4">{title}</h1>
          {description && (
            <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
          )}
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className="container-padding mx-auto py-6 border-b border-border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} products
          </p>
          <select className="text-sm bg-transparent border border-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ring">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container-padding mx-auto py-12 lg:py-16">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Shop;
