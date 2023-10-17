const Title = () => {
  return (
    <section className="flex lg:w-[669px] w-full flex-col lg:items-start items-center lg:gap-12 gap-6 lg:mt-0 mt-[70px]">
      <div className="flex flex-col items-start lg:gap-6 gap-3 lg:self-stretch self-auto relative z-[2]">
        <h1 className="self-stretch text-white lg:text-8xl text-[46px] font-medium lg:leading-[96px] leading-[50px] lg:text-left text-center">
          HOUSE OF <span className="text-[#478BF9]">GAMBLING</span>
        </h1>

        <h2 className="self-stretch text-white/60 lg:text-[32px] text-xl font-medium lg:leading-8 leading-[26px] lg:text-left text-center">
          Raise your ROI with direct advertiser
        </h2>
      </div>

      <button className="flex lg:py-5 py-[15px] lg:px-[72px] px-5 justify-center items-center gap-2 rounded-[48px] bg-[#478BF9] text-white text-center lg:text-2xl text-lg font-semibold lg:leading-8 leading-normal uppercase lg:w-auto w-full relative z-[2]">
        Become a Partner
      </button>
    </section>
  );
};
export default Title;
