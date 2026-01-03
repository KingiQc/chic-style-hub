import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer free returns within 30 days of purchase. Items must be unworn, unwashed, and in their original condition with tags attached. Please visit our Returns page to initiate a return.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available at checkout. International orders typically take 7-14 business days.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. You can see the exact shipping cost at checkout.'
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive an email with a tracking number. You can also track your order by logging into your account and viewing your order history.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All transactions are securely processed.'
  },
];

const sizeGuide = {
  women: {
    headers: ['Size', 'US', 'UK', 'EU', 'Bust', 'Waist', 'Hip'],
    rows: [
      ['XS', '0-2', '4-6', '32-34', '31-32"', '23-24"', '33-34"'],
      ['S', '4-6', '8-10', '36-38', '33-34"', '25-26"', '35-36"'],
      ['M', '8-10', '12-14', '40-42', '35-36"', '27-28"', '37-38"'],
      ['L', '12-14', '16-18', '44-46', '37-39"', '29-31"', '39-41"'],
      ['XL', '16-18', '20-22', '48-50', '40-42"', '32-34"', '42-44"'],
    ]
  }
};

const Help = () => {
  const { section } = useParams<{ section?: string }>();

  const renderContent = () => {
    switch (section) {
      case 'faq':
        return (
          <div>
            <h1 className="section-title mb-8">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );

      case 'size-guide':
        return (
          <div>
            <h1 className="section-title mb-8">Size Guide</h1>
            <div className="mb-8">
              <h2 className="font-serif text-2xl mb-4">Women's Sizing</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-border">
                  <thead className="bg-secondary">
                    <tr>
                      {sizeGuide.women.headers.map((header) => (
                        <th key={header} className="px-4 py-3 text-left text-sm font-medium">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuide.women.rows.map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-sm">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-secondary p-6">
              <h3 className="font-medium mb-2">How to Measure</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><strong>Bust:</strong> Measure around the fullest part of your bust.</li>
                <li><strong>Waist:</strong> Measure around your natural waistline.</li>
                <li><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
              </ul>
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div>
            <h1 className="section-title mb-8">Shipping & Returns</h1>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl mb-4">Shipping</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We offer the following shipping options:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• <strong>Free Standard Shipping</strong> on orders over $150 (5-7 business days)</li>
                    <li>• <strong>Standard Shipping:</strong> $15 (5-7 business days)</li>
                    <li>• <strong>Express Shipping:</strong> $25 (2-3 business days)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl mb-4">Returns</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We want you to love your purchase. If you're not completely satisfied, 
                    you can return your items within 30 days of delivery for a full refund.
                  </p>
                  <p>Items must be:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• Unworn and unwashed</li>
                    <li>• In original condition with tags attached</li>
                    <li>• In original packaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h1 className="section-title mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We're here to help. Reach out to us through any of the following channels:
                </p>
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground">support@maison.com</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Fashion Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h1 className="section-title mb-8">Help Center</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'FAQ', description: 'Find answers to common questions', href: '/help/faq' },
                { title: 'Size Guide', description: 'Find your perfect fit', href: '/help/size-guide' },
                { title: 'Shipping & Returns', description: 'Delivery and return information', href: '/help/shipping' },
                { title: 'Contact Us', description: 'Get in touch with our team', href: '/help/contact' },
              ].map((item) => (
                <Link 
                  key={item.title}
                  to={item.href}
                  className="border border-border p-6 hover:border-primary/40 transition-colors"
                >
                  <h2 className="font-serif text-xl mb-2">{item.title}</h2>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="container-padding mx-auto py-12 lg:py-16">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Help;
