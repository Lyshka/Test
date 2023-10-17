"use client";

import { useContext, forwardRef } from "react";

import { ScrollContext } from "@/context/ScrollContext";
import Link from "next/link";

const Scroll = forwardRef(() => {
  const { scrollRef, setScroll } = useContext(ScrollContext);

  const onScrollCustom = () => {
    setScroll(scrollRef.current.scrollTop);
  };

  return (
    <div
      onScroll={onScrollCustom}
      ref={scrollRef}
      className="flex lg:w-[467px] w-full flex-col items-start lg:gap-4 gap-[10px] overflow-y-scroll custom-scroll h-full"
    >
      <Link href={"/payment-methods"}>
        <article className="flex lg:px-16 px-[35px] lg:py-4 py-[15px] flex-col items-start self-stretch lg:rounded-[196px] rounded-[40px] bg-[#1E1231] hover:bg-[#478BF9]">
          <div className="flex flex-col items-start lg:gap-[14px] gap-[6px] self-stretch">
            <h3 className="text-white self-stretch lg:text-2xl text-base lg:leading-7 leading-5">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </h3>

            <span className="text-white/60 text-sm leading-4 futury">
              10.02.2023
            </span>
          </div>
        </article>
      </Link>
      <Link href={"/payment-methods"}>
        <article className="flex lg:px-16 px-[35px] lg:py-4 py-[15px] flex-col items-start self-stretch lg:rounded-[196px] rounded-[40px] bg-[#1E1231] hover:bg-[#478BF9]">
          <div className="flex flex-col items-start lg:gap-[14px] gap-[6px] self-stretch">
            <h3 className="text-white self-stretch lg:text-2xl text-base lg:leading-7 leading-5">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </h3>

            <span className="text-white/60 text-sm leading-4 futury">
              10.02.2023
            </span>
          </div>
        </article>
      </Link>
      <Link href={"/payment-methods"}>
        <article className="flex lg:px-16 px-[35px] lg:py-4 py-[15px] flex-col items-start self-stretch lg:rounded-[196px] rounded-[40px] bg-[#1E1231] hover:bg-[#478BF9]">
          <div className="flex flex-col items-start lg:gap-[14px] gap-[6px] self-stretch">
            <h3 className="text-white self-stretch lg:text-2xl text-base lg:leading-7 leading-5">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </h3>

            <span className="text-white/60 text-sm leading-4 futury">
              10.02.2023
            </span>
          </div>
        </article>
      </Link>
      <Link href={"/payment-methods"}>
        <article className="flex lg:px-16 px-[35px] lg:py-4 py-[15px] flex-col items-start self-stretch lg:rounded-[196px] rounded-[40px] bg-[#1E1231] hover:bg-[#478BF9]">
          <div className="flex flex-col items-start lg:gap-[14px] gap-[6px] self-stretch">
            <h3 className="text-white self-stretch lg:text-2xl text-base lg:leading-7 leading-5">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </h3>

            <span className="text-white/60 text-sm leading-4 futury">
              10.02.2023
            </span>
          </div>
        </article>
      </Link>
      <Link href={"/payment-methods"}>
        <article className="flex lg:px-16 px-[35px] lg:py-4 py-[15px] flex-col items-start self-stretch lg:rounded-[196px] rounded-[40px] bg-[#1E1231] hover:bg-[#478BF9]">
          <div className="flex flex-col items-start lg:gap-[14px] gap-[6px] self-stretch">
            <h3 className="text-white self-stretch lg:text-2xl text-base lg:leading-7 leading-5">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </h3>

            <span className="text-white/60 text-sm leading-4 futury">
              10.02.2023
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
});
export default Scroll;
