import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-10 pt-14 pb-10 mt-20 bg-black rounded-4xl text-white mb-1">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5">
          <h1 className="text-2xl font-bold uppercase text-[#C5FF41]">
            devlop.me
          </h1>
        </div>
        <div className="col-span-7">
          <h1 className="text-4xl space-x-1 font-semibold w-full">
            As You Can
          </h1>
          <nav className="mt-20 grid grid-cols-3 gap-4">
            {/* quick contact */}
            <div className="opacity-80 text-sm space-y-8">
              <div>
                <h5 className="opacity-60 mb-3 font-bold text-sm">Say hello</h5>
                <Link href={"mailto:HELLO@DEVLOP.ME.COM"}>
                  HELLO@DEVLOP.ME.COM
                </Link>
                <br />
                <Link href={"mailto:MAHBUBUL@ME.COM"}>MAHBUBUL@ME.COM</Link>
              </div>
              <div>
                <h5 className="opacity-60 mb-3 font-bold text-sm">Call</h5>
                <Link href={"callto:+784549498100"}>+784549 4981 00</Link>
                <br />
                <Link href={"callto:+88450100211"}>+8845 0100 211</Link>
              </div>
            </div>
            {/* Quick links */}
            <div>
              <h5 className="opacity-60 mb-3 font-bold text-sm">Menu</h5>
              <ul className="opacity-80 text-sm space-y-0.5">
                <li>
                  <Link href={"#"}>HOME</Link>
                </li>
                <li>
                  <Link href={"#"}>ABOUT</Link>
                </li>
                <li>
                  <Link href={"#"}>PORTFOLIO</Link>
                </li>
                <li>
                  <Link href={"#"}>BLOG</Link>
                </li>
              </ul>
            </div>
            {/* social links */}
            <div>
              <h5 className="opacity-60 mb-3 font-bold text-sm">Social</h5>
              <ul className="opacity-80 text-sm space-y-0.5">
                <li>
                  <Link href={"#"}>TWITTER</Link>
                </li>
                <li>
                  <Link href={"#"}>INSTAGRAM</Link>
                </li>
                <li>
                  <Link href={"#"}>FACEBOOK</Link>
                </li>
                <li>
                  <Link href={"#"}>BEHANCE</Link>
                </li>
                <li>
                  <Link href={"#"}>DRIBBBLE</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* copyright */}
      <div className="flex items-center justify-between w-full mt-16">
        <h4 className="text-lg font-bold">BESNIK</h4>
        <p className="opacity-60 text-sm">
          © devlop.me {new Date().getFullYear()}
        </p>
        <p className="opacity-60 text-sm">PRIVACY - TERMS</p>
      </div>
    </footer>
  );
}
