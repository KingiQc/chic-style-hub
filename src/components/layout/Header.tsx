import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navigation = {
  main: [
    { name: 'New Arrivals', href: '/shop/new-arrivals' },
    { name: 'Women', href: '/shop/women' },
    { name: 'Men', href: '/shop/men' },
    { name: 'Accessories', href: '/shop/accessories' },
    { name: 'Sale', href: '/shop/sale' },
  ],
  secondary: [
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Help', href: '/help' },
  ]
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-wider">
        FREE SHIPPING ON ORDERS OVER $150 | EASY RETURNS
      </div>

      <nav className="container-padding mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl lg:text-3xl tracking-tight">MAISON</h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 hover:opacity-70 transition-opacity">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="p-2 hover:opacity-70 transition-opacity">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/account/wishlist" className="hidden sm:block p-2 hover:opacity-70 transition-opacity">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:opacity-70 transition-opacity relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Secondary navigation - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8 py-3 border-t border-border">
          {navigation.secondary.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="fixed inset-0 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />
        <div className={cn(
          "fixed inset-y-0 left-0 w-full max-w-xs bg-background shadow-xl transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-serif text-xl">Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-lg font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-4">
              {navigation.secondary.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
