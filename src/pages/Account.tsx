import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Package, Heart, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Account = () => {
  const { section } = useParams<{ section?: string }>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const navItems = [
    { name: 'Profile', icon: User, href: '/account' },
    { name: 'Orders', icon: Package, href: '/account/orders' },
    { name: 'Wishlist', icon: Heart, href: '/account/wishlist' },
    { name: 'Addresses', icon: MapPin, href: '/account/addresses' },
  ];

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container-padding mx-auto py-16 lg:py-24">
          <div className="max-w-md mx-auto">
            <h1 className="section-title text-center mb-8">
              {isRegistering ? 'Create Account' : 'Sign In'}
            </h1>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
              {isRegistering && (
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
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              {isRegistering && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" />
                </div>
              )}
              <Button variant="addToCart" type="submit">
                {isRegistering ? 'Create Account' : 'Sign In'}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button 
                onClick={() => setIsRegistering(!isRegistering)}
                className="underline hover:text-foreground"
              >
                {isRegistering ? 'Sign In' : 'Create one'}
              </button>
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  const renderContent = () => {
    switch (section) {
      case 'orders':
        return (
          <div>
            <h2 className="font-serif text-2xl mb-6">Order History</h2>
            <div className="text-center py-12 border border-border">
              <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No orders yet</p>
              <Button asChild className="mt-4">
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div>
            <h2 className="font-serif text-2xl mb-6">Wishlist</h2>
            <div className="text-center py-12 border border-border">
              <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Your wishlist is empty</p>
              <Button asChild className="mt-4">
                <Link to="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div>
            <h2 className="font-serif text-2xl mb-6">Saved Addresses</h2>
            <div className="text-center py-12 border border-border">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No saved addresses</p>
              <Button className="mt-4">Add Address</Button>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h2 className="font-serif text-2xl mb-6">Profile</h2>
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input defaultValue="Doe" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input defaultValue="john@example.com" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="container-padding mx-auto py-12 lg:py-16">
        <h1 className="section-title mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <nav className="lg:col-span-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  (section === undefined && item.href === '/account') ||
                  item.href === `/account/${section}`
                    ? 'bg-secondary'
                    : 'hover:bg-secondary'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign Out
            </button>
          </nav>

          {/* Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
