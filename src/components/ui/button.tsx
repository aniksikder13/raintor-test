import React, { type ReactNode } from 'react'

export interface Props {
  label: string;
  icon?: ReactNode;
  variant?: "solid" | "split" | "mint";
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
}


export default function Button({ icon, label, borderColor, bgColor, textColor }: Props) {
  const finalBorderColor = borderColor ?? "transparent";
  return (
    <>
      <button
        className={`flex items-center ${bgColor} ${textColor} border cursor-pointer rounded-full py-2 pr-3 border-[${finalBorderColor}]`}
      >
        {icon && (
          <span
            className={`rounded-full mr-2 border w-7 h-7 p-1 flex items-center justify-center border-[${finalBorderColor}]`}
          >
            {icon}
          </span>
        )}
        {label}
      </button>
    </>
  );
}
