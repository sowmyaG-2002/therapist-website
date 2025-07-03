const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/images/anxiety.jpg",
    description:
      "Learn how to cope with daily stress, panic attacks, and overwhelming thoughts. I help you build tools for resilience and peace through CBT and mindfulness.",
  },
  {
    title: "Relationship Counseling",
    image: "/images/relationship.jpg",
    description:
      "Whether you're facing communication challenges, emotional distance, or recurring conflicts, therapy can help you rebuild connection and trust.",
  },
  {
    title: "Trauma Recovery",
    image: "/images/trauma.jpg",
    description:
      "Recover from painful past experiences in a safe, compassionate space. I offer evidence-based trauma therapies tailored to your healing journey.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">My Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md overflow-hidden text-left"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
