import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '/shop/new-arrivals' },
    { name: 'Women', href: '/shop/women' },
    { name: 'Men', href: '/shop/men' },
    { name: 'Accessories', href: '/shop/accessories' },
    { name: 'Sale', href: '/shop/sale' },
  ],
  help: [
    { name: 'FAQ', href: '/help/faq' },
    { name: 'Size Guide', href: '/help/size-guide' },
    { name: 'Shipping & Returns', href: '/help/shipping' },
    { name: 'Contact Us', href: '/help/contact' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Quality & Materials', href: '/about/quality' },
    { name: 'Sustainability', href: '/about/sustainability' },
    { name: 'Careers', href: '/about/careers' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-padding mx-auto py-16">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl mb-3">Join Our World</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new arrivals, exclusive offers, and style inspiration.
          </p>
          <div className="flex gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">MAISON</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless essentials crafted with care. Quality materials, thoughtful design, lasting style.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MAISON. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
