import dynamic from "next/dynamic";
const Button = dynamic(
  () =>
    import("@starkdefi/starkdefi-components-lib/dist/index").then(
      (mod) => mod.Button
    ),
  {
    ssr: false,
  }
);

export default Button;
