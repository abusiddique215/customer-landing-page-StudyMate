const stats = [
  {
    value: "10k+",
    label: "Beta Users",
  },
  {
    value: "98%",
    label: "User Satisfaction",
  },
  {
    value: "2x",
    label: "Learning Speed",
  },
  {
    value: "50+",
    label: "Learning Paths",
  },
];

const Stats = () => {
  return (
    <section className="py-12 container-padding bg-[#8B5CF6]/5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold mb-1 text-[#8B5CF6]">{stat.value}</p>
              <p className="text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;