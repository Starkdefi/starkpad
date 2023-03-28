import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import CTAs from "@/components/sections/cta";
import INO from "@/components/sections/ino";
import Vest from "@/components/sections/vest";

const Footer = dynamic(
  () =>
    import("@starkdefi/starkdefi-components-lib/dist/index").then(
      (mod) => mod.Footer
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <CTAs />
        <INO />
        <Vest />
      </main>
      <Footer backgroundColor="black" />
    </>
  );
}
