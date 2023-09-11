'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from '/public/images/logo.png'



export const Logo = () => {

    const router = useRouter();

  return (
    <Image  src={logo} 
            alt="AirBnB Logo"
            height={100}
            width={100}
            className="hidden md:block cursor-pointer"
    />
  )
}
