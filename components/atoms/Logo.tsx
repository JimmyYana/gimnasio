import Image from "next/image";

export default function Logo({ size = 38 }: { size?: number }) {
  return <Image className="logo" src="/logo.png" width={size} height={size} alt="Marvel Fitness" />;
}
