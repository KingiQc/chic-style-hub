import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { getNewArrivals, getBestSellers } from '@/data/products';

const categories = [
  { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600', href: '/shop/women' },
  { name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600', href: '/shop/men' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=600', href: '/shop/accessories' },
];

const values = [
  { icon: Truck, title: 'Free Shipping', description: 'On orders over $150' },
  { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
  { icon: Shield, title: 'Quality Guaranteed', description: 'Premium materials' },
];

const reviews = [
  { author: 'Sarah M.', rating: 5, text: 'The quality is exceptional. These pieces have become staples in my wardrobe.' },
  { author: 'Michael R.', rating: 5, text: 'Finally found a brand that understands timeless style. Highly recommend.' },
  { author: 'Emma L.', rating: 5, text: 'Beautiful craftsmanship and the fit is perfect. Will definitely order again.' },
];

const Index = () => {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80" 
            alt="Fashion editorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative h-full flex items-center container-padding mx-auto">
          <div className="max-w-xl animate-slide-up">
            <p className="text-primary-foreground/80 text-sm tracking-widest mb-4">NEW COLLECTION</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Timeless Elegance
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-md">
              Discover our curated collection of essential pieces designed to transcend seasons and trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/shop/women">Shop Women</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <Link to="/shop/men">Shop Men</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container-padding mx-auto py-16 lg:py-24">
        <h2 className="section-title text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.href}
              className="group relative aspect-[3/4] overflow-hidden border border-primary/20"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-primary-foreground mb-2">{category.name}</h3>
                <span className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-padding mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="section-title">New Arrivals</h2>
            <Link to="/shop/new-arrivals" className="hidden sm:flex items-center gap-2 text-sm hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={newArrivals} columns={4} />
          <Link 
            to="/shop/new-arrivals" 
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-sm"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Sale collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center container-padding mx-auto">
          <div className="animate-fade-in">
            <p className="text-primary-foreground/80 text-sm tracking-widest mb-4">LIMITED TIME</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              End of Season Sale
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Up to 40% off selected styles
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/shop/sale">Shop Sale</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container-padding mx-auto py-16 lg:py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title">Best Sellers</h2>
          <Link to="/shop/best-sellers" className="hidden sm:flex items-center gap-2 text-sm hover:gap-3 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <ProductGrid products={bestSellers} columns={4} />
      </section>

      {/* Brand Values */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <value.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="container-padding mx-auto py-16 lg:py-24">
        <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="text-center p-6 lg:p-8 border border-border">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
              <p className="font-medium">{review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
