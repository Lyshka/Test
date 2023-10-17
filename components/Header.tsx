import Link from "next/link";
import Language from "./Language";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="lg:px-[140px] lg:static sticky top-0 lg:pt-4 pt-[10px] px-[10px] z-[999]">
      <div className="flex lg:w-[1640px] w-full lg:px-12 lg:py-6 px-[14px] py-[10px] justify-between items-center rounded-[64px] lg:border-[4px] border-2 border-[#478BF9]">
        <div className="flex-shrink-0 lg:w-[287px] lg:h-8 w-[54px] h-[18px]" />
        <nav className="px-2 lg:block hidden">
          <ul className="flex justify-center items-center gap-8">
            <Link href="#">
              <li className="text-base leading-5 text-white">About us</li>
            </Link>
            <Link href="#">
              <li className="text-base leading-5 text-white">Brands</li>
            </Link>
            <Link href="#">
              <li className="text-base leading-5 text-white">Commissions</li>
            </Link>
            <Link href="#">
              <li className="text-base leading-5 text-white">News</li>
            </Link>
            <Link href="#">
              <li className="text-base leading-5 text-white">Contact us</li>
            </Link>
            <Link href="#">
              <li className="text-base leading-5 text-white">Careers</li>
            </Link>
          </ul>
        </nav>

        <div className="flex justify-end items-center gap-[14px] relative z-10">
          <Language />

          <MobileMenu />

          <button className="uppercase lg:flex p-[14px] justify-center items-center gap-2 rounded-3xl border-2 border-[#9DADF2] text-base leading-5 text-white hidden">
            log in
          </button>

          <button className="uppercase lg:flex p-[14px] justify-center items-center gap-2 rounded-3xl bg-[#478BF9] text-base leading-5 text-white hidden">
            sign up
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
