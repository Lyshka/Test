"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const onOpenMenu = () => {
    setOpen((prv) => !prv);
  };

  return (
    <nav className="lg:hidden block w-full">
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          onClick={onOpenMenu}
        >
          <path
            d="M4.66667 21H23.3333C23.975 21 24.5 20.475 24.5 19.8333C24.5 19.1917 23.975 18.6667 23.3333 18.6667H4.66667C4.025 18.6667 3.5 19.1917 3.5 19.8333C3.5 20.475 4.025 21 4.66667 21ZM4.66667 15.1667H23.3333C23.975 15.1667 24.5 14.6417 24.5 14C24.5 13.3583 23.975 12.8333 23.3333 12.8333H4.66667C4.025 12.8333 3.5 13.3583 3.5 14C3.5 14.6417 4.025 15.1667 4.66667 15.1667ZM3.5 8.16667C3.5 8.80833 4.025 9.33333 4.66667 9.33333H23.3333C23.975 9.33333 24.5 8.80833 24.5 8.16667C24.5 7.525 23.975 7 23.3333 7H4.66667C4.025 7 3.5 7.525 3.5 8.16667Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          onClick={onOpenMenu}
        >
          <g clipPath="url(#clip0_8576_13)">
            <path
              d="M22.1666 7.47825L20.5216 5.83325L13.9999 12.3549L7.47825 5.83325L5.83325 7.47825L12.3549 13.9999L5.83325 20.5216L7.47825 22.1666L13.9999 15.6449L20.5216 22.1666L22.1666 20.5216L15.6449 13.9999L22.1666 7.47825Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_8576_13">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}

      {open && (
        <div className="h-screen fixed left-0 bg-[#110A1D] px-[10px] top-[104px] w-full z-50">
          <ul className="flex justify-center items-center flex-col gap-[5px]">
            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                About us
              </li>
            </Link>

            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                Brands
              </li>
            </Link>
            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                Commissions
              </li>
            </Link>
            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                News
              </li>
            </Link>
            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                Contact us
              </li>
            </Link>
            <Link href={"#"} className="w-full">
              <li className="flex w-full py-[13px] px-5 items-center gap-2 rounded-[28px] border-2 border-[#478BF9] text-lg leading-6 text-white">
                Careers
              </li>
            </Link>
          </ul>

          <div className="w-full mt-[30px] flex flex-col gap-[5px]">
            <button className="uppercase flex p-[14px] justify-center items-center gap-2 rounded-3xl border-2 border-[#9DADF2] text-base leading-5 text-white w-full bg-[#1E1231]">
              log in
            </button>

            <button className="uppercase flex p-[14px] justify-center items-center gap-2 rounded-3xl bg-[#478BF9] text-base leading-5 text-white w-full">
              sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default MobileMenu;
