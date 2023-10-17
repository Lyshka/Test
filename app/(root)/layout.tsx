import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-hidden">
      <div className="lg:w-[574px] lg:h-[574px] w-[240px] h-[240px] flex-shrink-0 rounded-[574px] opacity-70 lg:blur-[325px] blur-[135px] absolute lg:bottom-3 bottom-[-250px] right-0 z-[1] first-gradient overflow-hidden">
        &nbsp;
      </div>

      <div className="lg:w-[226.458px] lg:h-[1080px] w-[81px] h-[466px] flex-shrink-0 rotate-[-54.311deg] opacity-[0.55] blur-[39px] lg:blur-[150px] second-gradient absolute z-[10] lg:top-[56px] top-[0px] lg:left-[306px] left-[69px] overflow-hidden">
        &nbsp;
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default layout;
