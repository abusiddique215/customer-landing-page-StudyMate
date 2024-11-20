import { BookOpen, GraduationCap, Brain, Microscope } from "lucide-react";

const resources = [
  {
    title: "Interactive Courses",
    description: "Self-paced learning paths with hands-on exercises and quizzes.",
    icon: BookOpen,
    color: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]"
  },
  {
    title: "Study Materials",
    description: "Comprehensive guides, cheat sheets, and reference materials.",
    icon: GraduationCap,
    color: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]"
  },
  {
    title: "Practice Problems",
    description: "Real-world scenarios and challenges to test your knowledge.",
    icon: Brain,
    color: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]"
  },
  {
    title: "Research Tools",
    description: "Advanced tools for deeper understanding and analysis.",
    icon: Microscope,
    color: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]"
  }
];

const Resources = () => {
  return (
    <section className="py-12 container-padding bg-gradient-to-br from-[#8B5CF6]/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-display">
          Comprehensive Study Resources
        </h2>
        <p className="text-neutral-600 text-center mb-8 max-w-2xl mx-auto">
          Everything you need to succeed in your self-learning journey, all in one place.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`${resource.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <resource.icon className={`w-6 h-6 ${resource.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-xl">{resource.title}</h3>
              </div>
              <p className="text-neutral-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;