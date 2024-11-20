import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 container-padding bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
          Your Personal Study Assistant
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
          Track progress, manage tasks, and improve your study habits with AI-powered tools designed for self-taught learners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#8B5CF6] px-8 py-3 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-medium">
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors font-medium">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="/lovable-uploads/04253ca7-b198-4461-92a6-5ee5b5347882.png"
          alt="StudyMate Dashboard"
          className="rounded-xl w-full shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;