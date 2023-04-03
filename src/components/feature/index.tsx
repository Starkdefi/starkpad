import { classNames } from "@/utils";

export interface FeatureProps {
  id?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  borderWith?: string;
}

export default function Feature({
  id,
  title,
  description,
  borderWith,
}: FeatureProps) {
  return (
    <div
      className={classNames(
        "flex flex-col xl:gap-5 gap-4 xl:max-w-[330px] lg:max-w-[286px] md:max-w-[210px]"
      )}
    >
      {id && (
        <p className="font-CeraPro-Light xl:text-2xl lg:text-xl md:text-lg leading-[140%]">
          {id}
        </p>
      )}
      <h3
        className={classNames(
          "font-CeraPro-Medium xl:text-[32px] lg:text-[28px] text-[24px] leading-[130%] relative max-w-fit",
          "after:content-[''] md:after:w-[85%] after:w-full after:h-[3px] after:bg-black/70",
          "after:absolute after:-bottom-[14px] after:left-0"
        )}
      >
        {title}
      </h3>
      <p
        className={classNames(
          "pt-3 font-CeraPro-Light xl:text-[24px] lg:text-[20px] text-[18px] leading-[140%]"
        )}
      >
        {description}
      </p>
    </div>
  );
}
