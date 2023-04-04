import HeroCorner from "@/assets/hero-corner.svg";
import HeroBg from "@/assets/hero.webp";
import HeroBgMobile from "@/assets/hero-mobile.webp";
import StarkPadLogo from "@/assets/starkpad-logo.svg";
import Button from "@/components/wrapped-button";
import Tick from "@/assets/tick.svg";
import { classNames } from "@/utils";
import Image from "next/image";
import Link from "next/link";

function LI({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-2 md:items-center items-start xl:text-sm lg:text-xs text-[11px]">
      <Tick className="md:w-5 md:pt-0 w-4 pt-1" /> {children}
    </p>
  );
}

export default function Hero() {
  return (
    <section className="w-full md:p-4 p-2">
      <div className="flex relative lg:h-[95vh] md:h-[80vh] h-[95vh] rounded-[40px] overflow-hidden z-0 md:p-8 md:py-6 py-6 px-4">
        <Image
          fill={true}
          src={HeroBg}
          alt="Hero Background"
          placeholder="blur"
          className={classNames(
            "border border-white hidden lg:block",
            "object-cover xl:object-[15%_50%] lg:object-[30%_50%]"
          )}
        />
        <Image
          fill={true}
          src={HeroBgMobile}
          alt="Hero Background"
          placeholder="blur"
          className={classNames(
            "border border-white lg:hidden",
            "object-cover object-center"
          )}
        />
        <div className="absolute z-10 px-3">
          <Link href="/" className="h-fit">
            <StarkPadLogo className="md:w-40 w-28" />
          </Link>
        </div>
        <HeroCorner className="absolute top-0 right-0 xl:w-[490px] lg:w-[427px] md:w-[407px] w-[347px]" />
        <div
          className={classNames(
            "flex w-full z-[1] items-center justify-between",
            "xl:pl-40 xl:pr-[15%] lg:pr-[12%] lg:pl-12 lg:pt-0 px-3 pt-10 pb-5"
          )}
        >
          <div className="lg:w-1/2 lg:block hidden"></div>
          <div
            className={classNames(
              "flex flex-col items-start lg:justify-start justify-between",
              "w-full xl:!w-[451px] lg:!w-[375px] gap-5 xl:!gap-8 pt-[2em] lg:h-auto h-full"
            )}
          >
            <h2
              className={classNames(
                "text-white font-CeraPro-Bold xl:text-[32px]",
                "lg:text-[27px] md:text-[28px] text-[22px] leading-[140%]"
              )}
            >
              <span className="text-green_light">
                Launch your next <br className="md:hidden" />
                big idea with <br className="lg:hidden md:block hidden" />
                StarkPad:
                <br className="md:hidden" />
              </span>{" "}
              The Ultimate Launchpad for <br className="lg:hidden" /> Innovators
              and Investors
            </h2>
            <div className="flex flex-col gap-5 xl:!gap-8 lg:w-auto w-full">
              <p className="text-white font-CeraPro-Light xl:text-2xl lg:text-[20px] md:text-xl text-[22px] leading-[140%]">
                Kickstart your web 3 journey with introductions to Tier 1
                exchanges
              </p>
              <div
                className={classNames(
                  "bg-white font-CeraPro-Medium text-black text-sm flex flex-col md:gap-4 gap-3",
                  "md:rounded-[20px] rounded-[10px] xl:py-7 xl:px-6 md:py-5 md:px-4 p-3 lg:!w-fit w-full"
                )}
              >
                <LI> Accelerate your growth with our launch partners</LI>
                <LI>Bootstrap liquidity with our range of launchpad options</LI>
              </div>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "flex flex-col items-center justify-center xl:mr-4 lg:mr-6 md:mr-5 mr-3",
            "xl:gap-5 gap-3 absolute top-0 right-0 xl:p-4 xl:!pt-6 md:pt-5 pt-3 z-20"
          )}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd8kQIDW0a7pUD_aja8N3U1M-UTx044fbrtCwWpBRvpwO-BYw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="rounded !px-6"
              btnType="ringed"
              backgroundColor="black"
            >
              <p className="py-1 xl:w-28 md:w-24 w-20 xl:text-base md:text-sm text-xs text-white">
                Apply for IDO
              </p>
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScR0DXvUiIFRLmtuoj6-vtDlvjat8pf5qJWkHEj8edsR2UvLA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="rounded !px-6"
              btnType="ringed"
              backgroundColor="black"
            >
              <p className="py-1 xl:w-28 md:w-24 w-20 xl:text-base md:text-sm text-xs text-white">
                Apply for INO
              </p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
