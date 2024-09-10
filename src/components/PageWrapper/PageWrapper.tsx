"use client";

import { useAppSelector } from "@/redux/hooks";

function PageWrapper({ children }: { children: React.ReactNode }) {
  const { restaurant } = useAppSelector((state) => state.restaurant);

  const {
    backgroundColour = "#FFFFFF",
    primaryColour = "#0C00B1",
    primaryColourHover = "#0C00B1",
    navBackgroundColour = "#0C00B1",
  } = restaurant?.webSettings || {};

  return (
    <div
      style={
        {
          "--background-color": `${backgroundColour}`,
          "--primary-color": `${primaryColour}`,
          "--primary-color-hover": `${primaryColourHover}`,
          "--nav-background": `${navBackgroundColour}`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export default PageWrapper;
