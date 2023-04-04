import HeroCorner from "@/assets/hero-corner.svg";
import HeroBg from "@/assets/hero.webp";
import StarkPadLogo from "@/assets/starkpad-logo.svg";
import Button from "@/components/wrapped-button";
import Tick from "@/assets/tick.svg";
import { classNames } from "@/utils";
import Image from "next/image";
import Link from "next/link";

function LI({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-2 items-center xl:text-sm lg:text-xs text-lg">
      <Tick /> {children}
    </p>
  );
}

export default function Hero() {
  return (
    <section className="w-full p-4">
      <div className="flex relative xl:h-[90vh] h-[650px] rounded-[40px] overflow-hidden z-0 p-8">
        <Image
          fill={true}
          src={HeroBg}
          alt="Hero Background"
          className="border border-white lg:brightness-100 brightness-50"
          style={{ objectFit: "cover", objectPosition: "15% 50%" }}
          
        />
        <div className="absolute z-10">
          <Link href="/" className=" top-0 left-0 h-fit">
            <StarkPadLogo className="" />
          </Link>
        </div>
        <HeroCorner className="absolute top-0 right-0 xl:w-[35vw] lg:w-[38vw] md:w-[50vw] w-[90vw]" />
        <div className="flex z-[1] items-center justify-between xl:px-40 lg:px-20 lg:pt-0 px-3 pt-48 ">
          <div className="lg:w-1/2 lg:block hidden"></div>
          <div className="flex flex-col items-start xl:w-[45%] lg:w-[52%] gap-4 xl:!gap-8 ">
            <h2 className="text-white font-CeraPro-Bold xl:text-[32px] lg:text-[27px] text-[32px] leading-[140%]">
              <span className="text-green_light">
                Launch your next big idea with StarkPad:
              </span>{" "}
              The Ultimate Launchpad for Innovators and Investors
            </h2>
            <p className="text-white font-CeraPro-Light xl:text-2xl lg:text-[20px] text-xl leading-[140%]">
              Kickstart your web 3 journey with introductions to Tier 1
              exchanges
            </p>
            <div
              className={classNames(
                "bg-white font-CeraPro-Medium text-black text-sm flex flex-col gap-4",
                "rounded-[20px] xl:py-7 xl:px-6 py-5 px-4"
              )}
            >
              <LI> Accelerate your growth with our launch partners</LI>
              <LI> Bootstrap liquidity with our range of launchpad options</LI>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
