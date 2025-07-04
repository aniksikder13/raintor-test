import { prevWork } from "@/utils/data";
import React from "react";

const zigClasses = ["rotate-6", "rotate-12", "rotate-6", "-rotate-12", "rotate-3"];

const PrevWorkingFloat = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full">
          {prevWork.map((logo, index) => {
            const cls = zigClasses[index % zigClasses.length];
            return (
              <li
                key={index}
                className={`text-center rounded-full shadow-lg hover:bg-black border-2 cursor-pointer hover:text-[white] px-6 py-3 ${cls}`}
              >
                {logo.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PrevWorkingFloat;
