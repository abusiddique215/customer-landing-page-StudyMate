import { 
  Timer, 
  BookMarked, 
  PenTool, 
  BookOpen, 
  Calendar, 
  LineChart 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  {
    icon: Timer,
    title: "Pomodoro Timer",
    description: "Stay focused with customizable study sessions and breaks"
  },
  {
    icon: BookMarked,
    title: "Smart Bookmarks",
    description: "Save and organize your study materials efficiently"
  },
  {
    icon: PenTool,
    title: "Note Taking",
    description: "Take rich notes with our markdown editor"
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    description: "Create and study with AI-powered flashcards"
  },
  {
    icon: Calendar,
    title: "Study Planner",
    description: "Plan your study sessions and track progress"
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Track your learning progress with detailed insights"
  }
];

const StudyTools = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Powerful Study Tools
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our comprehensive suite of study tools helps you stay organized, focused, and efficient in your learning journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8B5CF6]/10 p-3 rounded-xl">
                    <tool.icon className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-neutral-600">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyTools;