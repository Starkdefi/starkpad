import Feature, { FeatureProps } from "@/components/feature";
const features: FeatureProps[] = [
  {
    id: "01",
    title: "Early Investment Access",
    description:
      "Thoroughly vetted projects  ensuring only the most promising opportunities are offered to our investors.",
  },
  {
    id: "02",
    title: "Access to our network",
    description:
      "Introductions to Tier 1 exchanges, token management through our partners and network.",
  },
  {
    id: "03",
    title: "Growth & Marketing support",
    description:
      "We offer growth and marketing support to make you stand out from the crowd and reach a wider audience.",
  },
];

export default function Benefits() {
  return (
    <section className="section-spacing xl:!pt-20 lg:!pt-14 md:!pt-10">
      <div className="apply-spacing flex flex-col xl:gap-20 gap-16">
        <p className="xl:w-1/2 md:w-3/5 xl:text-[32px] lg:text-[28px] md:text-[24px] text-[30px]">
          Our platform connects founders with investors. Fund your venture
          through StarkPad and kickstart your Starknet journey.
        </p>
        <div className="w-full flex md:flex-nowrap flex-wrap justify-between gap-8 pb-10">
          {features.map((feature, i) => (
            <Feature key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
