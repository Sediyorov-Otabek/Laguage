"use client";

import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "../../home/navHeader/NavHeader";

import { RiMenu5Line } from "react-icons/ri";

import { CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import logo from "@/assets/header/website-logo.svg";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header__container bg-[#F8F8F8] px-4`}>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`header wrapper flex justify-between items-center py-5 h-[4.6rem] duration-200 z-10 inset-[0_0_auto_0]`}
      >
        <div className="header__logo">
          <Link href={"/"}>
            <Image src={logo} alt="website logo" priority={true} />
          </Link>
        </div>
        <nav className="header__nav hidden lg:flex gap-5 font-light">
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Shop</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/blog"}>Blog</Link>
        </nav>
        <div className="header__contact flex items-center justify-center gap-6 text-2xl">
          <CiUser />
          <IoSearchOutline />
          <FaRegHeart />
          <IoCartOutline />
          <RiMenu5Line
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
