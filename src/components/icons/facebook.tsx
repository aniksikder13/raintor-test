import React from 'react'

interface Props{
    color?: string;
}

export default function Facebook({color}:Props) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 13.5815C27 6.08179 20.956 0 13.5 0C6.04395 0 0 6.08179 0 13.5815C0 20.3614 4.93695 25.9814 11.3913 27V17.5065H7.9623V13.5815H11.3913V10.5908C11.3913 7.18597 13.4055 5.30629 16.4902 5.30629C17.9671 5.30629 19.5115 5.57113 19.5115 5.57113V8.91353H17.8105C16.1325 8.91353 15.61 9.96066 15.61 11.035V13.5828H19.3536L18.7555 17.5079H15.61V26.9986C22.063 25.98 27 20.3614 27 13.5828V13.5815Z"
        fill={color ?? "black"}
      />
    </svg>
  );
}
