import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Truck, RotateCcw, Ruler } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <Layout>
        <div className="container-padding mx-auto py-16 text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="underline">Return to Shop</Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    addToCart(product, selectedColor, selectedSize);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container-padding mx-auto py-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/shop/${product.category}`} className="hover:text-foreground capitalize">
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Section */}
      <section className="container-padding mx-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] border border-primary/20 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "w-20 h-24 border overflow-hidden transition-all",
                    selectedImage === index 
                      ? "border-primary" 
                      : "border-primary/20 opacity-70 hover:opacity-100"
                  )}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl mb-3">{product.name}</h1>
              <div className="flex items-center gap-3">
                <span className="text-xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <p className="text-sm mb-3">Color: <span className="font-medium">{selectedColor}</span></p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all",
                      selectedColor === color.name 
                        ? "border-primary ring-2 ring-primary ring-offset-2" 
                        : "border-border hover:border-primary/50"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm">Size: <span className="font-medium">{selectedSize || 'Select a size'}</span></p>
                <Link to="/help/size-guide" className="text-sm underline flex items-center gap-1">
                  <Ruler className="w-4 h-4" /> Size Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[3rem] h-12 px-4 border transition-all text-sm",
                      selectedSize === size 
                        ? "border-primary bg-primary text-primary-foreground" 
                        : "border-border hover:border-primary"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button 
                variant="addToCart" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-14 w-14">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-8 space-y-6">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Fabric</h4>
                  <p className="text-sm text-muted-foreground">{product.fabric}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Fit</h4>
                  <p className="text-sm text-muted-foreground">{product.fit}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Care Instructions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {product.care.map((instruction, i) => (
                    <li key={i}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t border-border pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="container-padding mx-auto">
            <h2 className="section-title mb-12">You May Also Like</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
