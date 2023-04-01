import Image from "next/image";
import styles from "./vest-banner.module.css";
import VestBanner from "@/assets/vest-bg.webp";
import Stark3D from "@/assets/unlock-logo.webp";
import { classNames } from "@/utils";

export default function VestingBanner() {
  return (
    <div className={styles.vestBanner}>
      <Image
        fill={true}
        alt="Vesting Banner"
        placeholder="blur"
        src={VestBanner}
        className="rounded-3xl"
        style={{ zIndex: "-1", objectFit: "cover", objectPosition: "center" }}
      />
      <div className={styles.content}>
        <div className="xl:w-[60%] lg:w-[60%] md:w-[47%] flex flex-col gap-5 z-[1]">
          <p
            className={classNames(
              "font-CeraPro-Bold font-bold text-white",
              "xl:text-[44px] lg:text-[36px] md:text-[24px] text-3xl",
              "xl:leading-[55px] lg:leading-[45px] md:leading-[36px] leading-[45px]"
            )}
          >
            Vest your way to the next generation of StarkNet startups
          </p>
          <p className="text-green_light font-CeraPro-Medium font-medium xl:text-2xl xl:leading-10 lg:text-xl md:text-base text-xl lg:leading-normal leading-9">
            Vesting $SDC grants you access to all <br className="hidden md:block" />
            StarkPad launches
          </p>
        </div>
        <div className={styles.starkLogo}>
          <Image
            alt="Stark3D Logo"
            placeholder="blur"
            src={Stark3D}
            className="md:h-auto h-52 md:z-auto z-[-1] object-contain md:object-center object-right-top"
          />
        </div>
      </div>
    </div>
  );
}
