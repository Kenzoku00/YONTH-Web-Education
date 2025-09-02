"use client";

export default function HeroSection() {
  const handleScrollToMateri = () => {
    const materiSection = document.getElementById("materi");
    if (materiSection) {
      materiSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-15 pb-15 gap-12">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
          Sinau Bareng Grafika <br />
          <span className="text-primary">Teknologi Informasi dan Komunikasi</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Tingkatkan keterampilan digital & raih impianmu bersama{" "}
          <span className="font-semibold">SinBar-GrafTIK</span>.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleScrollToMateri}
            className="px-6 py-3 rounded-xl bg-primary text-background font-medium shadow hover:shadow-lg transition"
          >
            Mulai Belajar
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        <img
          src="/learn.png"
          alt="Ilustrasi Belajar"
          className="w-[400px] md:w-[500px] rounded-xl object-cover"
        />
        <div className="absolute top-10 right-10 flex flex-col gap-3">
          {["Computational Thinking", "Algorithm", "Data Analytics", "Artificial Intelegence"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full bg-background/80 shadow text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}