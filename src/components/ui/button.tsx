"use client"
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from "react";

export interface Props {
  label?: string;
  icon?: ReactNode;
  variant?: "split" | "mint" | "icon-btn";
  size?: "sm" | "md" | "lg";
  buttonStyle?: string;
  iconStyle?: string;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { icon, label, variant, buttonStyle = "", iconStyle = "", onClick },
    ref
  ) => {
    // Optional: use useImperativeHandle to only expose specific methods or the native DOM ref
    const innerRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => innerRef.current!);

    const baseBtn = (className: string, content: ReactNode) => (
      <button
        ref={innerRef}
        onClick={onClick}
        className={`${className} ${buttonStyle}`}
      >
        {content}
      </button>
    );

    switch (variant) {
      case "split":
        return baseBtn(
          "flex items-center cursor-pointer rounded-full py-2 pr-3",
          <>
            {icon && (
              <span
                className={`rounded-full mr-2 w-7 h-7 p-1 flex items-center justify-center ${iconStyle}`}
              >
                {icon}
              </span>
            )}
            {label}
          </>
        );

      case "mint":
        return (
          <div className="flex items-center">
            {icon && (
              <span
                className={`rounded-full w-9 h-9 p-1 flex items-center justify-center ${iconStyle}`}
              >
                {icon}
              </span>
            )}
            {baseBtn(
              "flex items-center cursor-pointer rounded-full py-2 px-4",
              label
            )}
          </div>
        );

      case "icon-btn":
        return baseBtn(
          "flex items-center justify-center cursor-pointer rounded-full py-1",
          icon
        );

      default:
        return baseBtn("cursor-pointer rounded-full py-2 pr-3", label);
    }
  }
);

Button.displayName = "Button";
export default Button;
