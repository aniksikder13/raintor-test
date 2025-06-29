"use client"
import React, { useState } from "react";

interface InputProps {
  name: string;
  placeholder?: string;
  onChange?: (name: string, value: string) => void;
}

export default function Input({
  name,
  placeholder = "",
  onChange,
}: InputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onChange?.(name, v);
  };

  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full py-2 border-b focus:outline-none focus:border-[#C5FF41] border-[#ffffff8e] focus:placeholder-white"
    />
  );
}
