import React from 'react'

interface Props {
  color?: string;
}

export default function Send({ color }: Props) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.03786 11.496L5.2439 9.13895C5.02737 8.48823 4.52212 7.96765 3.85808 7.75074L1.50508 6.95541C-0.530334 6.27576 -0.487029 3.41257 1.54839 2.77631L10.1376 0.101104C11.841 -0.419476 13.4289 1.15672 12.8948 2.84861L10.2242 11.4671C9.58902 13.4916 6.71633 13.5205 6.03786 11.496Z"
        fill={color ?? "black"}
      />
    </svg>
  );
}
