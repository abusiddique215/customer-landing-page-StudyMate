import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#8B5CF6]/90 backdrop-blur-lg border-b border-white/10">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-2xl">📚</span> StudyMate
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <button className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium">
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
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </a>
            <button className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;