import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

export default function Avatar({ photo }: { photo: string }) {
  const [broken, setBroken] = useState(false);

  if (broken || !/^(https?:\/\/|data:image\/)/i.test(photo)) {
    return <span className="avatar avatar-fallback"><Icon name="members" size={26} /></span>;
  }

  return <Image className="avatar" src={photo} alt="" width={50} height={50} unoptimized onError={() => setBroken(true)} />;
}
