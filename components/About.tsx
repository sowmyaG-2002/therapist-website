export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/dr-serena.jpg"
          alt="Dr. Serena Blake"
          className="w-64 h-64 rounded-xl object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Meet Dr. Serena Blake</h2>
          <p className="text-gray-700 mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends
            evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with
            compassionate, personalized care.
          </p>
          <p className="text-gray-700">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake
            is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
