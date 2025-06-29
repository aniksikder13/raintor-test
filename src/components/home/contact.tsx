import Image from 'next/image'
import React from 'react'
import Button from '../ui/button';
import Arrow from '../icons/arrow';
import Phone from '../icons/phone';
import ContactForm from './contactForm';

export default function Contact() {
  return (
    <section className="w-full relative">
      <div className="max-w-[1410] mx-auto px-2 pt-20 grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <Button
            label="Contact"
            icon={<Arrow color="black" />}
            variant="mint"
            buttonStyle={"border-black text-black border"}
            iconStyle="border-black border rotate-90 p-2"
          />
          <h1 className="text-7xl font-[space-grotesk] mt-8 font-semibold max-w-[500px] leading-24">
            Interested in{" "}
            <span className="rounded-xl bg-black text-white p-2">work</span>{" "}
            together?
          </h1>
          <p className="text-xl my-7 max-w-[500px]">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <Button
            label="Schedule a Call"
            icon={<Phone />}
            variant="split"
            buttonStyle="bg-transparent border-[black] border"
            iconStyle="border-[black] border"
          />
        </div>
        <div className="col-span-5">
            <ContactForm />
        </div>
      </div>
      <Image
        src="/home-2-gradient.png"
        draggable="false"
        width={1920}
        height={670}
        alt="gradient"
        className="w-full h-[670px] absolute top-0 left-0 -z-10 rotate-180"
      />
    </section>
  );
}
