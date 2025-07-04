import React from 'react'
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import Twitter from '../icons/twitter';
import Link from 'next/link';
import Button from '../ui/button';
import Phone from '../icons/phone';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="w-full h-screen relative">
        <div className="w-full max-w-[1410px] mx-auto lg:mt-36 md:mt-28">
          <h1 className="text-8xl font-semibold max-w-[950px] font-[space-grotesk] leading-35">
            Trusted{" "}
            <span className="rounded-xl bg-black text-white p-2">Partner</span>{" "}
            for Your Website{" "}
            <span className="rounded-xl bg-black text-white p-2">Develop.</span>
          </h1>
          <div className="grid grid-cols-12 gap-2 mt-14">
            <div className="col-span-3 relative">
              <div className="absolute top-4 -left-12  -rotate-90">
                <h5>@williamrey</h5>
                <ul className="flex items-center space-x-4 mt-4">
                  <li>
                    <span className="w-8 h-[1px] bg-black block" />
                  </li>
                  <li>
                    <Link href="#">
                      <Facebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Instagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Twitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-9">
              <p className="max-w-[600px] text-xl mb-8">
                Building the worlds best marketing websites for over a decade.
                Your trusted partner for strategy, design, and dev.
              </p>
              <Button
                label="Schedule a Call"
                icon={<Phone />}
                variant="split"
                buttonStyle="bg-transparent border-[black] border"
                iconStyle="border-[black] border"
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/home-gradient.png"
        draggable="false"
        width={1920}
        height={670}
        alt="gradient"
        className="w-full absolute top-0 left-0 -z-10 object-fill"
      />
    </>
  );
}
