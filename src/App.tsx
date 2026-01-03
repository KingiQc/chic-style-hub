import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Help from "./pages/Help";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/shop/:category/:subcategory" element={<Shop />} />
            
            {/* Product Detail */}
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Cart & Checkout */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Collections */}
            <Route path="/collections" element={<Collections />} />
            
            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            
            {/* Help */}
            <Route path="/help" element={<Help />} />
            <Route path="/help/:section" element={<Help />} />
            
            {/* Account */}
            <Route path="/account" element={<Account />} />
            <Route path="/account/:section" element={<Account />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
