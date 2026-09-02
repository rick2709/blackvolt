import type { CSSProperties } from "react";

export const wordmarkGradient =
  "linear-gradient(0deg, rgba(5,8,13,0) 18.9%, rgba(103,102,102,0.15) 34%, rgba(148,148,148,0.33) 44.9%, rgba(179,179,179,0.49) 56.8%, rgba(202,202,202,0.62) 64.4%, rgb(255,255,255) 78%)";

export const wordmarkClipStyle: CSSProperties = {
  backgroundImage: wordmarkGradient,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
