import Image from "next/image";

const partners  = [
  { name: "Grafika", src: "/Logo/Grafika Logo.png" },
  { name: "SmkBisaHebat", src: "/Logo/SmkBisaHebat Logo.png" },
  { name: "YON", src: "/Logo/YON Logo.png" },
];

export default function LogoGrid() {
  return (
    <div className="mt-12">
      <p className="text-center text-muted-foreground text-lg mb-4 text-muted-foreground">
        Dipercaya oleh pelajar dari
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.src}
            alt={partner.name}
            width={200}
            height={100}
            className="max-h-[100px] w-auto object-contain"
            //className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
