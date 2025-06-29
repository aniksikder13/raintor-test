'use client'
import Image from 'next/image';
import React from 'react'
import Button from '../ui/button';
import Arrow from '../icons/arrow';
import PrevWorkingFloat from './prevWorkingFloat';

export default function About() {
  return (
    <section className="w-full relative">
      <div className="max-w-[950px] mx-auto px-2 pt-28">
        <div className="flex justify-end w-full mb-8">
          <Button
            label="About"
            icon={<Arrow color="black" />}
            variant="mint"
            buttonStyle={"border-black text-black border"}
            iconStyle="border-black border rotate-90 p-2"
          />
        </div>
        <h1
          className="text-7xl text-center mx-auto space-x-1 font-semibold w-full leading-36"
          style={{ letterSpacing: "9px" }}
        >
          I’ve been{" "}
          <span className="rounded-xl bg-black text-white p-2">Developing</span>{" "}
          Websites since{" "}
          <span className="rounded-xl bg-black text-white p-2">2013</span>
        </h1>
        <p className="max-w-[850px] mx-auto text-center mt-10 text-xl">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
        <div className="grid grid-cols-12 gap-4 mt-20 w-full">
          <div className="col-span-2">
            <h3 className="text-lg font-bold" style={{ letterSpacing: "2px" }}>
              PREVIOUSLY WORKED ON
            </h3>
          </div>
          <div className="col-span-8 w-full">
            <PrevWorkingFloat />
          </div>
        </div>
      </div>
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
