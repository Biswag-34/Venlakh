import Image from "next/image";

export default function ImageBlock({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="my-6">
      <Image src={src} alt={alt || ""} width={800} height={500} className="rounded-xl" />
    </div>
  );
}