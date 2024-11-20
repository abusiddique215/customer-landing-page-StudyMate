import { BookOpen, Users, BarChart2, MessageSquare, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and insights.",
    icon: BarChart2,
  },
  {
    title: "AI Chat Assistant",
    description: "Get instant help and explanations from our AI tutor.",
    icon: MessageSquare,
  },
  {
    title: "Study Timer",
    description: "Stay focused with Pomodoro timer and break reminders.",
    icon: Clock,
  },
  {
    title: "Collaboration",
    description: "Connect with other learners and form study groups.",
    icon: Users,
  },
  {
    title: "Resource Library",
    description: "Access a vast collection of study materials and guides.",
    icon: BookOpen,
  },
  {
    title: "Plagiarism Check",
    description: "Ensure originality in your work with our checker.",
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 container-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#1A1A1A]">
          Everything You Need to Excel
        </h2>
        <p className="text-neutral-600 text-center mb-8 max-w-2xl mx-auto">
          Comprehensive tools and features designed to support your self-learning journey.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#8B5CF6]/10 p-3 rounded-xl">
                  <feature.icon className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display font-semibold text-xl text-[#1A1A1A]">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;