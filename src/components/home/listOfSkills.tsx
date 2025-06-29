import React from 'react'
import Button from '../ui/button'
import Arrow from '../icons/arrow'
import Carousel from './carousel';
import { skillsList } from '@/utils/data';

export default function ListOfSkills() {
  return (
    <section className="max-w-[1440px] mx-auto px-10 pt-24 pb-14 -mt-30 bg-black rounded-4xl text-white">
      <Button
        label="Why Choose me"
        icon={<Arrow color="white" />}
        variant="mint"
        buttonStyle={"border-white text-white border"}
        iconStyle="border-white border rotate-90 p-2"
      />
      <div className="grid grid-cols-2 gap-4 mt-10">
        <h1 className="text-7xl max-w-[500px]">My Extensive List of Skills</h1>
        <div>
          <div className="flex justify-end">
            <p className="border-b-[1px] border-b-white text-right max-w-[370px] h-max text-lg pb-5">
              Building the worlds best marketing Your trusted partner for
              strategy, design, and dev.
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-16">
        <Carousel data={skillsList} />
      </div>
    </section>
  );
}
