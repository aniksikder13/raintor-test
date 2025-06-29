import React from 'react'
import Button from '../ui/button';
import Arrow from '../icons/arrow';
import { workingProcess } from '@/utils/data';
import Link from 'next/link';

export default function WorkProcess() {
  return (
    <section className="max-w-[1410px] mx-auto px-10 pt-20 pb-10 mt-1 bg-black rounded-4xl text-white">
      <div className="flex items-center space-x-24">
        <Button
          label="Work Process"
          icon={<Arrow color="white" />}
          variant="mint"
          buttonStyle={"border-white text-white border"}
          iconStyle="border-white border rotate-90 p-2"
        />
        <h1 className="text-6xl">My Extensive List of Skills</h1>
      </div>
      <ul className="grid grid-cols-2 gap-2 mt-14">
        {workingProcess?.map((item, index) => (
          <li
            key={index}
            className="rounded-xl bg-[#FFFFFF14] p-6 w-full
                  transition-transform duration-300 ease-out
                  hover:scale-100 hover:rotate-3 h-full hover:bg-[#C5FF41] hover:text-black group"
          >
            <div className="flex items-center justify-between mb-8">
              <label className="bg-[#C5FFEE] py-2 px-4 rounded-full text-black font-bold text-sm group-hover:text-white group-hover:bg-black">
                {item?.name}
              </label>
              <Link href="#" className="flex items-center space-x-2">
                <span className="inline-block stroke-current text-white group-hover:text-black transition-colors duration-200">
                  <Arrow />
                </span>
                <span className="underline">Read more</span>
              </Link>
            </div>
            <p className="opacity-60">{item?.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
