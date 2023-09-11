'use client';

import { ContainerProps } from "@/constants/common.types"

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4 h-full mx-auto ${className}`}>
        {children}
    </div>
  )
}
