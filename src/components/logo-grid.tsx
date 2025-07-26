import Image from "next/image";

const partners  = [
  { name: "YON", src: "/Logo/YON Logo.png" },
  { name: "YON1", src: "/Logo/YON Logo.png" },
  { name: "YON2", src: "/Logo/YON Logo.png" },
  { name: "YON3", src: "/Logo/YON Logo.png" },
  { name: "YON4", src: "/Logo/YON Logo.png" },
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
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
