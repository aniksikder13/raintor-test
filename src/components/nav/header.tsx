import Link from 'next/link';
import React from 'react'
import Button from '../ui/button';
import Arrow from '../icons/arrow';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 px-2 py-4">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h3 className="uppercase font-bold text-xl">Develop.me</h3>
        <ul className="flex items-center space-x-7">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li className="pl-4">
            <Button
              label="Start Project"
              icon={<Arrow />}
              variant="split"
              bgColor="bg-transparent"
              borderColor="border-[black]"
              textColor=""
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
