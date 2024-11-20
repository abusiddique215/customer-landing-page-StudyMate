import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Basic study materials",
      "Limited practice problems",
      "Community forum access",
      "Progress tracking"
    ]
  },
  {
    name: "Pro",
    price: "29",
    description: "Best for serious learners",
    popular: true,
    features: [
      "All Free features",
      "Unlimited practice problems",
      "Interactive courses",
      "1-on-1 mentoring sessions",
      "Advanced analytics",
      "Study group creation"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For teams and organizations",
    features: [
      "All Pro features",
      "Custom learning paths",
      "API access",
      "Dedicated support",
      "Team analytics",
      "SSO integration"
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 container-padding bg-gradient-to-br from-[#8B5CF6]/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Choose the perfect plan for your learning journey. All plans include our core features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-2xl relative ${
                    plan.popular ? "border-2 border-[#8B5CF6]" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-neutral-600">/month</span>
                    </div>
                    <p className="text-neutral-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#8B5CF6]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-[#8B5CF6] hover:bg-[#7B4CE6]" 
                        : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
                    onClick={() => navigate("/signup")}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;