import Blog from "@/components/Blog";
import Slider from "@/components/Slider";
import Title from "@/components/Title";

const page = () => {
  return (
    <main className="w-full lg:h-[calc(100vh-265.51px)] lg:px-[140px] px-[10px] flex justify-between items-center lg:flex-row flex-col">
      <Title />

      <Slider />

      <Blog />
    </main>
  );
};
export default page;
