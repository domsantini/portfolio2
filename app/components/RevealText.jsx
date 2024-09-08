import { animate, motion } from "framer-motion";

export default function RevealText({ id, children }) {
  return (
    <div
      id={id}
      initial="initial"
      className="relative font-chillax font-semibold text-[20vw] overflow-hidden"
    >
      <p>{children}</p>
    </div>
  );
}
