import { Layout } from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80" 
            alt="Our studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center container-padding">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              Our Story
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto">
              Crafting timeless essentials since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-padding mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">The Beginning</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                MAISON was born from a simple belief: that well-made clothing should be accessible, 
                sustainable, and designed to last. What started in a small studio has grown into a 
                global community of individuals who value quality over quantity.
              </p>
              <p>
                We work directly with master artisans and heritage factories across Italy, Portugal, 
                and Japan to create pieces that honor traditional craftsmanship while embracing 
                modern design sensibilities.
              </p>
              <p>
                Every garment we create is designed to become a lasting part of your wardrobe—pieces 
                you'll reach for season after season, year after year.
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] border border-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" 
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-padding mx-auto">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                We source only the finest materials—from Italian cashmere to Japanese denim—because 
                quality you can feel makes all the difference.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Timeless Design</h3>
              <p className="text-muted-foreground">
                We design pieces that transcend seasons and trends, creating a wardrobe that evolves 
                with you rather than against you.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Sustainable Practice</h3>
              <p className="text-muted-foreground">
                From responsible sourcing to ethical manufacturing, we're committed to minimizing 
                our footprint on the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="container-padding mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-[4/5] border border-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800" 
              alt="Materials"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="section-title mb-6">Materials & Craftsmanship</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We partner with the world's finest mills and factories, from Scottish cashmere 
                producers to Portuguese knitwear specialists. Each material is selected for its 
                superior quality, durability, and feel.
              </p>
              <p>
                Our garments are constructed using time-honored techniques passed down through 
                generations of craftspeople. From hand-finished seams to naturally dyed fabrics, 
                every detail matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
