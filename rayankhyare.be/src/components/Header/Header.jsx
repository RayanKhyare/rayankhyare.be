import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import "./header.scss";

import MoonIcon from "../../../public/assets/moon_icon.svg";


export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          RAYAN
        </Link>
      </h1>

      <nav>
        <ul>
        <li>
          <Link href="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/projects">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/contact">
            RESUME
          </Link>
        </li>
        </ul>
      </nav>

      <div>

      <Image
        src="/assets/moon_icon.svg" // Notice the path starts from the public directory
        alt="Moon Icon"
        width={30} // these are values for example
        height={30}
      />
      </div>
    </header>
  );
}
