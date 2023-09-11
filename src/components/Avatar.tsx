'use client';

import Image from "next/image";
import avatar from '/public/images/placeholder.jpg';

export const Avatar = () => {
  return (
    <Image  src={avatar}
            height={30}
            width={30}
            alt="Avata photo"
            className="rounded-full" 
    />
  )
}