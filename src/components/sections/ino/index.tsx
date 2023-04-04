import Image from "next/image";
import INObg from "@/assets/ino-bg.webp";
import RiveComponent from "@rive-app/react-canvas";
import ShootingStar from "@/assets/shooting-star.svg";
import Button from "@/components/wrapped-button";

export default function INO() {
  return (
    <section className="relative xl:!py-16 !py-8 section-spacing">
      <Image
        fill={true}
        src={INObg}
        alt="INO"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        placeholder="blur"
        className="z-[-1]"
      />
      <div className="apply-spacing flex flex-wrap md:flex-nowrap items-center justify-between gap-5 z-[1]">
        <div className="w-full">
          <RiveComponent
            className="xl:w-[650px] xl:h-[650px] lg:w-[530px] lg:h-[450px] md:w-[350px] md:h-[350px]"
            src="./starkdefi_nft_animation.riv"
          />
        </div>
        <div className="md:w-[45%] w-full flex flex-col xl:gap-5 md:gap-3 gap-3 justify-between md:pb-0 pb-10">
          <p className="font-MBF-Space-regular text-white xl:text-[35px] lg:text-[24px] md:text-[20px] text-[24px] [-webkit-text-stroke:2px]">
            Launch Your <span className="text-green_light">NFT Collection</span>{" "}
            and Finance your Project with StarkPad
          </p>
          <ShootingStar className="self-end xl:w-[304px] md:w-[195px] w-[230px] md:mr-5" />
          <p className="font-CeraPro-Light text-white md:w-[90%] xl:text-[20px] lg:text-lg md:text-base text-lg lg:pt-4">
            How do you like our mascot, Deffy? With our NFT Mint feature you can
            have your own NFT collection up and running with a few simple steps.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScR0DXvUiIFRLmtuoj6-vtDlvjat8pf5qJWkHEj8edsR2UvLA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 xl:mt-10 lg:mt-8 md:mt-2 "
          >
            <Button
              className="md:text-[14px] text-[12px] xl:text-[18px] rounded !px-6"
              btnType="ringed"
              backgroundColor="black"
            >
              <p className="py-1 lg:w-36 w-32 lg:text-lg text-base text-white">
                Apply for INO
              </p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
