'use client'
import Image from 'next/image';
import React from 'react'

export default function About() {
  return (
    <section className="w-full relative">
      <Image
        src="/home-2-gradient.png"
        draggable="false"
        width={1920}
        height={670}
        alt="gradient"
        className="w-full absolute -top-20 left-0 -z-10"
      />
    </section>
  );
}
