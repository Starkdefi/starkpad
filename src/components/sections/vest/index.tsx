import VestingBanner from "@/components/vest-banner";
import { classNames } from "@/utils";

export default function Vest() {
  return (
    <section className="section-spacing">
      <div
        className={classNames(
          "apply-spacing flex items-center xl:gap-10 gap-6",
          "flex-wrap justify-center md:flex-nowrap"
        )}
      >
        <VestingBanner />
      </div>
    </section>
  );
}
