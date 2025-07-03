export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Compassionate Therapy for a Better You
        </h1>
        <h2 className="text-xl mb-6">
          Supporting your mental health with evidence-based, caring therapy
        </h2>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
