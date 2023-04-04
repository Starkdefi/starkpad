import CtaCard, { CtaCardProps } from "@/components/cta-cards";
import IdoBg from "@/assets/ido-bg.webp";
import ItoBg from "@/assets/Ito-bg.webp";
import { classNames } from "@/utils";

const ctas: CtaCardProps[] = [
  {
    title: "Initial DEX Offering",
    description: "A Comprehensive Guide to a Successful Initial DEX Offering",
    button: {
      text: "Apply for IDO",
      link: "https://docs.google.com/forms/d/1F3NxMECv9pjfsytuQ-YVBxRFsVibixrs1T1wMqZY5QY/viewform",
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
      link: "https://testnet.starkdefi.com",
    },
    image: {
      src: ItoBg,
      alt: "Launch and ITO",
    },
  },
];
export default function CTAs() {
  return (
    <section className="bg-cta-gray section-spacing">
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
