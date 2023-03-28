import Button from "@/components/wrapped-button";
import { classNames } from "@/utils";
import Image, { StaticImageData } from "next/image";
import style from "./cta-cards.module.css";

export interface CtaCardProps {
  title: string;
  description: React.ReactNode;
  button?: {
    text: string;
    link: string;
  };

  image?: {
    src: string | StaticImageData;
    alt: string;
  };
}

export default function CtaCard({
  title,
  description,
  button,
  image,
}: CtaCardProps) {
  return (
    <div className={style.ctaCard}>
      <div className={style.ctaCardImage}>
        <Image
          fill={true}
          alt={image?.alt ?? ""}
          placeholder="blur"
          src={image?.src ?? ""}
          className="rounded-2xl"
          style={{ zIndex: "-1", objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={style.ctaCardText}>
        <h3 className="font-CeraPro-Light font-light xl:text-lg md:text-base text-sm">{title}</h3>
        <p
          className={classNames(
            "font-CeraPro-Medium font-medium xl:text-4xl lg:text-3xl md:text-2xl text-3xl",
            "xl:leading-[62px] lg:leading-[45px] md:leading-[36px] leading-[45px]"
          )}
        >
          {description}
        </p>

        {button && (
          <a href={button?.link} className="flex items-center pt-2">
            <Button
              btnType="regular-outline"
              textColor="white"
              accentColor="white"
              className="xl:text-[18px] md:text-[14px] text-[12px] rounded !px-6"
            >
              <p className="py-2 lg:w-32 w-28">{button?.text}</p>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
