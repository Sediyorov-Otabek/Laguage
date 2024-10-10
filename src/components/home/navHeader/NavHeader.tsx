import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

const MobileNav: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`mobileNav ${
        isOpen ? "inset-[0_0_0_auto]" : "inset-[-100%_-100%_0_auto]"
      } fixed  px-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 z-50 text-center flex justify-center items-center flex-col gap-4 duration-200`}
    >
      <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"*"}>404</Link>
      <Link href={"/contact"}>contact</Link>
      <span
        className="absolute inset-[4%_4%_auto_auto]"
        onClick={() => setIsOpen(false)}
      >
        X
      </span>
    </div>
  );
};

export default MobileNav;
