import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className={cn("group block", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-primary/20 bg-card mb-4 transition-all duration-300 hover:border-primary/40 hover:shadow-medium">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs px-3 py-1 tracking-wider">
              NEW
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-destructive text-destructive-foreground text-xs px-3 py-1 tracking-wider">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button 
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic
          }}
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick shop overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-primary-foreground text-sm tracking-wider">QUICK VIEW</span>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-lg group-hover:underline underline-offset-4 transition-all">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex gap-1.5 pt-1">
          {product.colors.slice(0, 4).map((color) => (
            <span 
              key={color.name}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  );
};
