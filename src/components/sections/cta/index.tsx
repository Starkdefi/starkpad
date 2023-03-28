import CtaCard, { CtaCardProps } from "@/components/cta-cards";
import IdoBg from "@/assets/ido-bg.png";
import ItoBg from "@/assets/ito-bg.png";
import { classNames } from "@/utils";

const ctas: CtaCardProps[] = [
  {
    title: "Initial DEX Offering",
    description: "A Comprehensive Guide to a Successful Initial DEX Offering",
    button: {
      text: "Apply for IDO",
      link: "/",
    },
    image: {
      src: IdoBg,
      alt: "Apply for IDO",
    },
  },
  {
    title: "Initial Token Offering",
    description: (
      <span>
        Streamline <br />
        Your Token <br />
        Offering <br className="md:block hidden" />
        Process Today
      </span>
    ),
    button: {
      text: "Launch",
      link: "/",
    },
    image: {
      src: ItoBg,
      alt: "Launch and ITO",
    },
  },
];
export default function CTAs() {
  return (
    <section className="w-full bg-cta-gray xl:py-32 md:py-24 py-16 z-0">
      <div
        className={classNames(
          "apply-spacing flex items-center xl:gap-10 gap-6",
          "flex-wrap justify-center md:flex-nowrap"
        )}
      >
        {ctas.map((cta, i) => (
          <CtaCard key={i} {...cta} />
        ))}
      </div>
    </section>
  );
}
