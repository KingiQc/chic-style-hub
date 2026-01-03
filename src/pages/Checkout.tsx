import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-padding mx-auto py-16 text-center">
          <h1 className="font-serif text-2xl mb-4">Your cart is empty</h1>
          <Link to="/shop" className="underline">Continue Shopping</Link>
        </div>
      </Layout>
    );
  }

  const shippingCost = totalPrice >= 150 ? 0 : 15;
  const total = totalPrice + shippingCost;

  return (
    <Layout>
      <div className="container-padding mx-auto py-8 lg:py-12">
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {['Shipping', 'Payment', 'Confirmation'].map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${
                  (i === 0 && step === 'shipping') || 
                  (i === 1 && step === 'payment') || 
                  (i === 2 && step === 'confirmation')
                    ? 'text-foreground' 
                    : 'text-muted-foreground'
                }`}>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    (i === 0 && step === 'shipping') || 
                    (i === 1 && step === 'payment') || 
                    (i === 2 && step === 'confirmation')
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="hidden sm:inline text-sm">{s}</span>
                </div>
                {i < 2 && <div className="w-12 h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" />
                  </div>
                  <div className="space-y-2 col-span-2 lg:col-span-1">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
                <Button variant="addToCart" onClick={() => setStep('payment')}>
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl">Payment Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep('shipping')}>
                    Back
                  </Button>
                  <Button variant="addToCart" className="flex-1" onClick={() => setStep('confirmation')}>
                    Place Order
                  </Button>
                </div>
              </div>
            )}

            {step === 'confirmation' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-3xl mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-8">
                  Your order has been placed successfully. You will receive a confirmation email shortly.
                </p>
                <Button asChild>
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 sticky top-24">
              <h3 className="font-serif text-lg mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-3"
                  >
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-16 h-20 object-cover border border-primary/10"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.selectedColor} / {item.selectedSize} × {item.quantity}
                      </p>
                      <p className="text-sm mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
