import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('your-publishable-key'); // Replace with your actual Stripe publishable key

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleGetStarted = async (priceId?: string) => {
    const stripe = await stripePromise;
    
    if (!stripe) return;

    // Create a checkout session on your backend
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceId || 'price_default', // Replace with your actual price ID
      }),
    });

    const session = await response.json();

    // Redirect to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#8B5CF6]/90 backdrop-blur-lg border-b border-white/10">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-2xl">📚</span> StudyMate
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Reviews
          </button>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <button 
            onClick={() => handleGetStarted()} 
            className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
          >
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#8B5CF6]/90 backdrop-blur-lg border-b border-white/10">
          <div className="container-padding py-4 flex flex-col gap-4">
            <button 
              onClick={() => {
                scrollToSection('features');
                setIsMenuOpen(false);
              }} 
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Features
            </button>
            <button 
              onClick={() => {
                scrollToSection('testimonials');
                setIsMenuOpen(false);
              }} 
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Reviews
            </button>
            <Link 
              to="/pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <button 
              onClick={() => handleGetStarted()}
              className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;