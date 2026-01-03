import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const collections = [
  {
    name: 'Summer Essentials',
    description: 'Light layers and breathable fabrics for the warmer months',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800',
    href: '/shop/new-arrivals'
  },
  {
    name: 'The Capsule Collection',
    description: 'A curated selection of foundational pieces',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    href: '/shop/women'
  },
  {
    name: 'Limited Edition',
    description: 'Exclusive pieces in limited quantities',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
    href: '/shop/sale'
  },
];

const Collections = () => {
  return (
    <Layout>
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-padding mx-auto text-center">
          <h1 className="section-title mb-4">Collections</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our carefully curated collections, each designed with a distinct vision and purpose.
          </p>
        </div>
      </section>

      <section className="container-padding mx-auto py-16 lg:py-24">
        <div className="space-y-16 lg:space-y-24">
          {collections.map((collection, index) => (
            <div 
              key={collection.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <Link to={collection.href} className="block aspect-[4/5] overflow-hidden border border-primary/20 group">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-serif text-3xl lg:text-4xl mb-4">{collection.name}</h2>
                <p className="text-muted-foreground mb-6">{collection.description}</p>
                <Link 
                  to={collection.href}
                  className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:gap-3 transition-all"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
