import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-padding mx-auto py-16 lg:py-24 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="font-serif text-3xl mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild size="lg">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-padding mx-auto py-8 lg:py-12">
        <h1 className="section-title mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div 
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex gap-4 lg:gap-6 border border-primary/20 p-4"
              >
                <Link to={`/product/${item.product.id}`} className="w-24 lg:w-32 flex-shrink-0">
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name}
                    className="w-full aspect-[3/4] object-cover border border-primary/10"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/product/${item.product.id}`}>
                          <h3 className="font-serif text-lg hover:underline">{item.product.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.selectedColor} / {item.selectedSize}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                        className="p-1 hover:opacity-70 transition-opacity"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 lg:p-8 sticky top-24">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{totalPrice >= 150 ? 'Free' : '$15.00'}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${(totalPrice + (totalPrice >= 150 ? 0 : 15)).toFixed(2)}</span>
                </div>
              </div>
              <Button asChild variant="addToCart" className="w-full">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Free shipping on orders over $150
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
